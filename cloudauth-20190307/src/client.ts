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
  headers: { [key: string]: string };
  body: CompareFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CompareFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  faceContrastFileObject: Readable;
  certName?: string;
  certNo?: string;
  certType?: string;
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
      faceContrastFileObject: 'FaceContrastFileObject',
      certName: 'CertName',
      certNo: 'CertNo',
      certType: 'CertType',
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
      faceContrastFileObject: 'Readable',
      certName: 'string',
      certNo: 'string',
      certType: 'string',
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
  headers: { [key: string]: string };
  body: ContrastFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateAuthKeyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAuthKeyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceConfigRequest extends $tea.Model {
  bizName?: string;
  bizType?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFaceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFaceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFaceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRPSDKRequest extends $tea.Model {
  appUrl?: string;
  lang?: string;
  platform?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      lang: 'Lang',
      platform: 'Platform',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      lang: 'string',
      platform: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRPSDKResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRPSDKResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateRPSDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateRPSDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySDKRequest extends $tea.Model {
  appUrl?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySDKResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySDKResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateVerifySDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVerifySDKResponseBody,
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
  headers: { [key: string]: string };
  body: CreateVerifySettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateVerifySettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  idCardNum?: string;
  lang?: string;
  sourceIp?: string;
  validDay?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      idCardNum: 'IdCardNum',
      lang: 'Lang',
      sourceIp: 'SourceIp',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      idCardNum: 'string',
      lang: 'string',
      sourceIp: 'string',
      validDay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistSettingRequest extends $tea.Model {
  certNo?: string;
  certifyId?: string;
  lang?: string;
  sceneId?: number;
  serviceCode?: string;
  sourceIp?: string;
  validDay?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      lang: 'Lang',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      lang: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      sourceIp: 'string',
      validDay: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistSettingResponseBody extends $tea.Model {
  requestId?: string;
  resultObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWhitelistSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateWhitelistSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateWhitelistSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistRequest extends $tea.Model {
  ids?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistSettingRequest extends $tea.Model {
  ids?: string;
  lang?: string;
  serviceCode?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      lang: 'Lang',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
      lang: 'string',
      serviceCode: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistSettingResponseBody extends $tea.Model {
  requestId?: string;
  resultObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteWhitelistSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteWhitelistSettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoRequest extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBody extends $tea.Model {
  appInfoList?: DescribeAppInfoResponseBodyAppInfoList[];
  currentPage?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      appInfoList: 'AppInfoList',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfoList: { 'type': 'array', 'itemType': DescribeAppInfoResponseBodyAppInfoList },
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAppInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAppInfoResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigResponseBody extends $tea.Model {
  items?: DescribeFaceConfigResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeFaceConfigResponseBodyItems },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageRequest extends $tea.Model {
  endDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageResponseBody extends $tea.Model {
  faceUsageList?: DescribeFaceUsageResponseBodyFaceUsageList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      faceUsageList: 'FaceUsageList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceUsageList: { 'type': 'array', 'itemType': DescribeFaceUsageResponseBodyFaceUsageList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeFaceUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeFaceUsageResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeOssUploadTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeOssUploadTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRPSDKRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRPSDKResponseBody extends $tea.Model {
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

export class DescribeRPSDKResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRPSDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRPSDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlRequest extends $tea.Model {
  debug?: boolean;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlResponseBody extends $tea.Model {
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

export class DescribeSdkUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeSdkUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeSdkUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultRequest extends $tea.Model {
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

export class DescribeUpdatePackageResultResponseBody extends $tea.Model {
  appInfo?: DescribeUpdatePackageResultResponseBodyAppInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: DescribeUpdatePackageResultResponseBodyAppInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUpdatePackageResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUpdatePackageResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoRequest extends $tea.Model {
  biz?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoResponseBody extends $tea.Model {
  accessid?: string;
  expire?: number;
  folder?: string;
  host?: string;
  policy?: string;
  requestId?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessid: 'Accessid',
      expire: 'Expire',
      folder: 'Folder',
      host: 'Host',
      policy: 'Policy',
      requestId: 'RequestId',
      signature: 'Signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessid: 'string',
      expire: 'number',
      folder: 'string',
      host: 'string',
      policy: 'string',
      requestId: 'string',
      signature: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUploadInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUploadInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBody extends $tea.Model {
  enabled?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeUserStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeUserStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  currentPage?: number;
  endDate?: string;
  idCardNum?: string;
  pageSize?: number;
  queryId?: string;
  startDate?: string;
  statusList?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      idCardNum: 'IdCardNum',
      pageSize: 'PageSize',
      queryId: 'QueryId',
      startDate: 'StartDate',
      statusList: 'StatusList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      currentPage: 'number',
      endDate: 'string',
      idCardNum: 'string',
      pageSize: 'number',
      queryId: 'string',
      startDate: 'string',
      statusList: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBody extends $tea.Model {
  currentPage?: number;
  pageSize?: number;
  queryId?: string;
  recordsList?: DescribeVerifyRecordsResponseBodyRecordsList[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      queryId: 'QueryId',
      recordsList: 'RecordsList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      queryId: 'string',
      recordsList: { 'type': 'array', 'itemType': DescribeVerifyRecordsResponseBodyRecordsList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifyRecordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyRecordsResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeVerifyResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeVerifySDKResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifySDKResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponseBody extends $tea.Model {
  requestId?: string;
  verifySettingList?: DescribeVerifySettingResponseBodyVerifySettingList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifySettingList: 'VerifySettingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifySettingList: { 'type': 'array', 'itemType': DescribeVerifySettingResponseBodyVerifySettingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifySettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifySettingResponseBody,
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
  headers: { [key: string]: string };
  body: DescribeVerifyTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageRequest extends $tea.Model {
  bizType?: string;
  endDate?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      endDate: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  verifyUsageList?: DescribeVerifyUsageResponseBodyVerifyUsageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      verifyUsageList: 'VerifyUsageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      verifyUsageList: { 'type': 'array', 'itemType': DescribeVerifyUsageResponseBodyVerifyUsageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeVerifyUsageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeVerifyUsageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  currentPage?: number;
  idCardNum?: string;
  lang?: string;
  pageSize?: number;
  sourceIp?: string;
  valid?: string;
  validEndDate?: string;
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      currentPage: 'CurrentPage',
      idCardNum: 'IdCardNum',
      lang: 'Lang',
      pageSize: 'PageSize',
      sourceIp: 'SourceIp',
      valid: 'Valid',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      currentPage: 'number',
      idCardNum: 'string',
      lang: 'string',
      pageSize: 'number',
      sourceIp: 'string',
      valid: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeWhitelistResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWhitelistResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWhitelistResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingRequest extends $tea.Model {
  certNo?: string;
  certifyId?: string;
  currentPage?: number;
  lang?: string;
  pageSize?: number;
  sceneId?: number;
  serviceCode?: string;
  sourceIp?: string;
  status?: string;
  validEndDate?: number;
  validStartDate?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      sourceIp: 'SourceIp',
      status: 'Status',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      sceneId: 'number',
      serviceCode: 'string',
      sourceIp: 'string',
      status: 'string',
      validEndDate: 'number',
      validStartDate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingResponseBody extends $tea.Model {
  currentPage?: number;
  items?: DescribeWhitelistSettingResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistSettingResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeWhitelistSettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeWhitelistSettingResponseBody,
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
  headers: { [key: string]: string };
  body: DetectFaceAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectFaceAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceRequest extends $tea.Model {
  appVersion?: string;
  bizData?: string;
  certifyId?: string;
  certifyPrincipal?: string;
  channel?: string;
  deviceToken?: string;
  merchant?: string;
  metaInfo?: string;
  outerOrderNo?: string;
  produceNode?: string;
  productName?: string;
  uaToken?: string;
  webUmidToken?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      bizData: 'BizData',
      certifyId: 'CertifyId',
      certifyPrincipal: 'CertifyPrincipal',
      channel: 'Channel',
      deviceToken: 'DeviceToken',
      merchant: 'Merchant',
      metaInfo: 'MetaInfo',
      outerOrderNo: 'OuterOrderNo',
      produceNode: 'ProduceNode',
      productName: 'ProductName',
      uaToken: 'UaToken',
      webUmidToken: 'WebUmidToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      bizData: 'string',
      certifyId: 'string',
      certifyPrincipal: 'string',
      channel: 'string',
      deviceToken: 'string',
      merchant: 'string',
      metaInfo: 'string',
      outerOrderNo: 'string',
      produceNode: 'string',
      productName: 'string',
      uaToken: 'string',
      webUmidToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: InitDeviceResponseBodyResultObject;
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
      resultObject: InitDeviceResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitDeviceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyRequest extends $tea.Model {
  callbackToken?: string;
  callbackUrl?: string;
  certName?: string;
  certNo?: string;
  certType?: string;
  certifyId?: string;
  certifyUrlType?: string;
  crop?: string;
  faceContrastPicture?: string;
  faceContrastPictureUrl?: string;
  ip?: string;
  metaInfo?: string;
  mobile?: string;
  model?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  outerOrderNo?: string;
  productCode?: string;
  returnUrl?: string;
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
      certifyUrlType: 'CertifyUrlType',
      crop: 'Crop',
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ip: 'Ip',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      model: 'Model',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      returnUrl: 'ReturnUrl',
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
      certifyUrlType: 'string',
      crop: 'string',
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ip: 'string',
      metaInfo: 'string',
      mobile: 'string',
      model: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      returnUrl: 'string',
      sceneId: 'number',
      userId: 'string',
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
  headers: { [key: string]: string };
  body: InitFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: LivenessFaceVerifyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: LivenessFaceVerifyResponseBody,
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
  headers: { [key: string]: string };
  body: ModifyDeviceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyDeviceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageRequest extends $tea.Model {
  debug?: boolean;
  id?: number;
  packageUrl?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      debug: 'Debug',
      id: 'Id',
      packageUrl: 'PackageUrl',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debug: 'boolean',
      id: 'number',
      packageUrl: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAppPackageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAppPackageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceConfigRequest extends $tea.Model {
  bizName?: string;
  bizType?: string;
  lang?: string;
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceConfigResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFaceConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFaceConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFaceConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVerifySettingRequest extends $tea.Model {
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

export class UpdateVerifySettingResponseBody extends $tea.Model {
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

export class UpdateVerifySettingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateVerifySettingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateVerifySettingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceRequest extends $tea.Model {
  appVersion?: string;
  certifyData?: string;
  certifyId?: string;
  deviceToken?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      appVersion: 'AppVersion',
      certifyData: 'CertifyData',
      certifyId: 'CertifyId',
      deviceToken: 'DeviceToken',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appVersion: 'string',
      certifyData: 'string',
      certifyId: 'string',
      deviceToken: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponseBody extends $tea.Model {
  code?: string;
  message?: string;
  requestId?: string;
  resultObject?: VerifyDeviceResponseBodyResultObject;
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
      resultObject: VerifyDeviceResponseBodyResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: VerifyDeviceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyDeviceResponseBody,
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
  headers: { [key: string]: string };
  body: VerifyMaterialResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: VerifyMaterialResponseBody,
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

export class DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBodyAppInfoListPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBodyAppInfoList extends $tea.Model {
  debugPackageInfo?: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo;
  endDate?: string;
  icon?: string;
  id?: number;
  name?: string;
  packageInfo?: DescribeAppInfoResponseBodyAppInfoListPackageInfo;
  packageName?: string;
  startDate?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      debugPackageInfo: 'DebugPackageInfo',
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageInfo: 'PackageInfo',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugPackageInfo: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo,
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageInfo: DescribeAppInfoResponseBodyAppInfoListPackageInfo,
      packageName: 'string',
      startDate: 'string',
      type: 'number',
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

export class DescribeFaceConfigResponseBodyItems extends $tea.Model {
  bizName?: string;
  bizType?: string;
  gmtUpdated?: number;
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      gmtUpdated: 'GmtUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      gmtUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageResponseBodyFaceUsageList extends $tea.Model {
  date?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponseBodyResultObject extends $tea.Model {
  deviceToken?: string;
  identityInfo?: string;
  materialInfo?: string;
  passed?: string;
  subCode?: string;
  static names(): { [key: string]: string } {
    return {
      deviceToken: 'DeviceToken',
      identityInfo: 'IdentityInfo',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
      subCode: 'SubCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceToken: 'string',
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

export class DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo extends $tea.Model {
  version?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBodyAppInfo extends $tea.Model {
  debugPackageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo;
  endDate?: string;
  icon?: string;
  id?: number;
  name?: string;
  packageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo;
  packageName?: string;
  startDate?: string;
  type?: number;
  static names(): { [key: string]: string } {
    return {
      debugPackageInfo: 'DebugPackageInfo',
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageInfo: 'PackageInfo',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      debugPackageInfo: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo,
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageInfo: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo,
      packageName: 'string',
      startDate: 'string',
      type: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo extends $tea.Model {
  address?: string;
  authority?: string;
  backImageUrl?: string;
  birth?: string;
  endDate?: string;
  frontImageUrl?: string;
  name?: string;
  nationality?: string;
  number?: string;
  sex?: string;
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
      sex: 'Sex',
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
      sex: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsListMaterial extends $tea.Model {
  faceImageUrl?: string;
  idCardInfo?: DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo;
  idCardName?: string;
  idCardNumber?: string;
  static names(): { [key: string]: string } {
    return {
      faceImageUrl: 'FaceImageUrl',
      idCardInfo: 'IdCardInfo',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageUrl: 'string',
      idCardInfo: DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo,
      idCardName: 'string',
      idCardNumber: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsList extends $tea.Model {
  authorityComparisonScore?: number;
  bizId?: string;
  bizType?: string;
  dataStats?: string;
  finishTime?: number;
  idCardFaceComparisonScore?: number;
  material?: DescribeVerifyRecordsResponseBodyRecordsListMaterial;
  status?: number;
  verifyId?: string;
  static names(): { [key: string]: string } {
    return {
      authorityComparisonScore: 'AuthorityComparisonScore',
      bizId: 'BizId',
      bizType: 'BizType',
      dataStats: 'DataStats',
      finishTime: 'FinishTime',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
      status: 'Status',
      verifyId: 'VerifyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisonScore: 'number',
      bizId: 'string',
      bizType: 'string',
      dataStats: 'string',
      finishTime: 'number',
      idCardFaceComparisonScore: 'number',
      material: DescribeVerifyRecordsResponseBodyRecordsListMaterial,
      status: 'number',
      verifyId: 'string',
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

export class DescribeVerifySettingResponseBodyVerifySettingList extends $tea.Model {
  bizName?: string;
  bizType?: string;
  solution?: string;
  stepList?: string[];
  static names(): { [key: string]: string } {
    return {
      bizName: 'BizName',
      bizType: 'BizType',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizName: 'string',
      bizType: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeVerifyUsageResponseBodyVerifyUsageList extends $tea.Model {
  bizType?: string;
  date?: string;
  failCount?: number;
  passCount?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      date: 'Date',
      failCount: 'FailCount',
      passCount: 'PassCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      date: 'string',
      failCount: 'number',
      passCount: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponseBodyItems extends $tea.Model {
  bizId?: string;
  bizType?: string;
  endDate?: number;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  idCardNum?: string;
  startDate?: number;
  uid?: number;
  valid?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      bizType: 'BizType',
      endDate: 'EndDate',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      idCardNum: 'IdCardNum',
      startDate: 'StartDate',
      uid: 'Uid',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      bizType: 'string',
      endDate: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      idCardNum: 'string',
      startDate: 'number',
      uid: 'number',
      valid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingResponseBodyItems extends $tea.Model {
  certNo?: string;
  certifyId?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  sceneId?: number;
  status?: string;
  validEndDate?: string;
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      sceneId: 'SceneId',
      status: 'Status',
      validEndDate: 'ValidEndDate',
      validStartDate: 'ValidStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      sceneId: 'number',
      status: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
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

export class InitDeviceResponseBodyResultObject extends $tea.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  bucketName?: string;
  certifyId?: string;
  extParams?: string;
  fileName?: string;
  fileNamePrefix?: string;
  message?: string;
  ossEndPoint?: string;
  presignedUrl?: string;
  protocol?: string;
  retCode?: string;
  retCodeSub?: string;
  retMessageSub?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      bucketName: 'BucketName',
      certifyId: 'CertifyId',
      extParams: 'ExtParams',
      fileName: 'FileName',
      fileNamePrefix: 'FileNamePrefix',
      message: 'Message',
      ossEndPoint: 'OssEndPoint',
      presignedUrl: 'PresignedUrl',
      protocol: 'Protocol',
      retCode: 'RetCode',
      retCodeSub: 'RetCodeSub',
      retMessageSub: 'RetMessageSub',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      bucketName: 'string',
      certifyId: 'string',
      extParams: 'string',
      fileName: 'string',
      fileNamePrefix: 'string',
      message: 'string',
      ossEndPoint: 'string',
      presignedUrl: 'string',
      protocol: 'string',
      retCode: 'string',
      retCodeSub: 'string',
      retMessageSub: 'string',
      securityToken: 'string',
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

export class VerifyDeviceResponseBodyResultObject extends $tea.Model {
  extParams?: string;
  hasNext?: string;
  productRetCode?: string;
  retCodeSub?: string;
  retMessageSub?: string;
  validationRetCode?: string;
  static names(): { [key: string]: string } {
    return {
      extParams: 'ExtParams',
      hasNext: 'HasNext',
      productRetCode: 'ProductRetCode',
      retCodeSub: 'RetCodeSub',
      retMessageSub: 'RetMessageSub',
      validationRetCode: 'ValidationRetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extParams: 'string',
      hasNext: 'string',
      productRetCode: 'string',
      retCodeSub: 'string',
      retMessageSub: 'string',
      validationRetCode: 'string',
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

  async compareFaceVerifyWithOptions(request: CompareFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompareFaceVerifyResponse>(await this.doRPCRequest("CompareFaceVerify", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CompareFaceVerifyResponse({}));
  }

  async compareFaceVerify(request: CompareFaceVerifyRequest): Promise<CompareFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceVerifyWithOptions(request, runtime);
  }

  async compareFacesWithOptions(request: CompareFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareFacesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CompareFacesResponse>(await this.doRPCRequest("CompareFaces", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CompareFacesResponse({}));
  }

  async compareFaces(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  async contrastFaceVerifyWithOptions(request: ContrastFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ContrastFaceVerifyResponse>(await this.doRPCRequest("ContrastFaceVerify", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new ContrastFaceVerifyResponse({}));
  }

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
    OpenApiUtil.convert(runtime, ossRuntime);
    let contrastFaceVerifyReq = new ContrastFaceVerifyRequest({ });
    OpenApiUtil.convert(request, contrastFaceVerifyReq);
    if (!Util.isUnset(request.faceContrastFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = OpenApiUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
      ossClient = new OSS(ossConfig);
      fileObj = new $FileForm.FileField({
        filename: authResponse.objectKey,
        content: request.faceContrastFileObject,
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
      contrastFaceVerifyReq.faceContrastFile = `http://${authResponse.bucket}.${authResponse.endpoint}/${authResponse.objectKey}`;
    }

    let contrastFaceVerifyResp = await this.contrastFaceVerifyWithOptions(contrastFaceVerifyReq, runtime);
    return contrastFaceVerifyResp;
  }

  async createAuthKeyWithOptions(request: CreateAuthKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthKeyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateAuthKeyResponse>(await this.doRPCRequest("CreateAuthKey", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateAuthKeyResponse({}));
  }

  async createAuthKey(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  async createFaceConfigWithOptions(request: CreateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateFaceConfigResponse>(await this.doRPCRequest("CreateFaceConfig", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateFaceConfigResponse({}));
  }

  async createFaceConfig(request: CreateFaceConfigRequest): Promise<CreateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceConfigWithOptions(request, runtime);
  }

  async createRPSDKWithOptions(request: CreateRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateRPSDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateRPSDKResponse>(await this.doRPCRequest("CreateRPSDK", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateRPSDKResponse({}));
  }

  async createRPSDK(request: CreateRPSDKRequest): Promise<CreateRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRPSDKWithOptions(request, runtime);
  }

  async createVerifySDKWithOptions(request: CreateVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVerifySDKResponse>(await this.doRPCRequest("CreateVerifySDK", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVerifySDKResponse({}));
  }

  async createVerifySDK(request: CreateVerifySDKRequest): Promise<CreateVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySDKWithOptions(request, runtime);
  }

  async createVerifySettingWithOptions(request: CreateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateVerifySettingResponse>(await this.doRPCRequest("CreateVerifySetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateVerifySettingResponse({}));
  }

  async createVerifySetting(request: CreateVerifySettingRequest): Promise<CreateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
  }

  async createWhitelistWithOptions(request: CreateWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWhitelistResponse>(await this.doRPCRequest("CreateWhitelist", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWhitelistResponse({}));
  }

  async createWhitelist(request: CreateWhitelistRequest): Promise<CreateWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelistWithOptions(request, runtime);
  }

  async createWhitelistSettingWithOptions(request: CreateWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateWhitelistSettingResponse>(await this.doRPCRequest("CreateWhitelistSetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new CreateWhitelistSettingResponse({}));
  }

  async createWhitelistSetting(request: CreateWhitelistSettingRequest): Promise<CreateWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelistSettingWithOptions(request, runtime);
  }

  async deleteWhitelistWithOptions(request: DeleteWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWhitelistResponse>(await this.doRPCRequest("DeleteWhitelist", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWhitelistResponse({}));
  }

  async deleteWhitelist(request: DeleteWhitelistRequest): Promise<DeleteWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelistWithOptions(request, runtime);
  }

  async deleteWhitelistSettingWithOptions(request: DeleteWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteWhitelistSettingResponse>(await this.doRPCRequest("DeleteWhitelistSetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteWhitelistSettingResponse({}));
  }

  async deleteWhitelistSetting(request: DeleteWhitelistSettingRequest): Promise<DeleteWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelistSettingWithOptions(request, runtime);
  }

  async describeAppInfoWithOptions(request: DescribeAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeAppInfoResponse>(await this.doRPCRequest("DescribeAppInfo", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeAppInfoResponse({}));
  }

  async describeAppInfo(request: DescribeAppInfoRequest): Promise<DescribeAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppInfoWithOptions(request, runtime);
  }

  async describeDeviceInfoWithOptions(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeDeviceInfoResponse>(await this.doRPCRequest("DescribeDeviceInfo", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeDeviceInfoResponse({}));
  }

  async describeDeviceInfo(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  async describeFaceConfigWithOptions(request: DescribeFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFaceConfigResponse>(await this.doRPCRequest("DescribeFaceConfig", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFaceConfigResponse({}));
  }

  async describeFaceConfig(request: DescribeFaceConfigRequest): Promise<DescribeFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceConfigWithOptions(request, runtime);
  }

  async describeFaceUsageWithOptions(request: DescribeFaceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFaceUsageResponse>(await this.doRPCRequest("DescribeFaceUsage", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFaceUsageResponse({}));
  }

  async describeFaceUsage(request: DescribeFaceUsageRequest): Promise<DescribeFaceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceUsageWithOptions(request, runtime);
  }

  async describeFaceVerifyWithOptions(request: DescribeFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeFaceVerifyResponse>(await this.doRPCRequest("DescribeFaceVerify", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeFaceVerifyResponse({}));
  }

  async describeFaceVerify(request: DescribeFaceVerifyRequest): Promise<DescribeFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  async describeOssUploadTokenWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeOssUploadTokenResponse>(await this.doRPCRequest("DescribeOssUploadToken", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssUploadTokenResponse({}));
  }

  async describeOssUploadToken(): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  async describeRPSDKWithOptions(request: DescribeRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRPSDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeRPSDKResponse>(await this.doRPCRequest("DescribeRPSDK", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeRPSDKResponse({}));
  }

  async describeRPSDK(request: DescribeRPSDKRequest): Promise<DescribeRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRPSDKWithOptions(request, runtime);
  }

  async describeSdkUrlWithOptions(request: DescribeSdkUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSdkUrlResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeSdkUrlResponse>(await this.doRPCRequest("DescribeSdkUrl", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeSdkUrlResponse({}));
  }

  async describeSdkUrl(request: DescribeSdkUrlRequest): Promise<DescribeSdkUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSdkUrlWithOptions(request, runtime);
  }

  async describeUpdatePackageResultWithOptions(request: DescribeUpdatePackageResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdatePackageResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUpdatePackageResultResponse>(await this.doRPCRequest("DescribeUpdatePackageResult", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUpdatePackageResultResponse({}));
  }

  async describeUpdatePackageResult(request: DescribeUpdatePackageResultRequest): Promise<DescribeUpdatePackageResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdatePackageResultWithOptions(request, runtime);
  }

  async describeUploadInfoWithOptions(request: DescribeUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUploadInfoResponse>(await this.doRPCRequest("DescribeUploadInfo", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUploadInfoResponse({}));
  }

  async describeUploadInfo(request: DescribeUploadInfoRequest): Promise<DescribeUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadInfoWithOptions(request, runtime);
  }

  async describeUserStatusWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeUserStatusResponse>(await this.doRPCRequest("DescribeUserStatus", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatus(): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(runtime);
  }

  async describeVerifyRecordsWithOptions(request: DescribeVerifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyRecordsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyRecordsResponse>(await this.doRPCRequest("DescribeVerifyRecords", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyRecordsResponse({}));
  }

  async describeVerifyRecords(request: DescribeVerifyRecordsRequest): Promise<DescribeVerifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyRecordsWithOptions(request, runtime);
  }

  async describeVerifyResultWithOptions(request: DescribeVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyResultResponse>(await this.doRPCRequest("DescribeVerifyResult", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyResultResponse({}));
  }

  async describeVerifyResult(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  async describeVerifySDKWithOptions(request: DescribeVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySDKResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifySDKResponse>(await this.doRPCRequest("DescribeVerifySDK", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifySDKResponse({}));
  }

  async describeVerifySDK(request: DescribeVerifySDKRequest): Promise<DescribeVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  async describeVerifySettingWithOptions(runtime: $Util.RuntimeOptions): Promise<DescribeVerifySettingResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    return $tea.cast<DescribeVerifySettingResponse>(await this.doRPCRequest("DescribeVerifySetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifySettingResponse({}));
  }

  async describeVerifySetting(): Promise<DescribeVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySettingWithOptions(runtime);
  }

  async describeVerifyTokenWithOptions(request: DescribeVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyTokenResponse>(await this.doRPCRequest("DescribeVerifyToken", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyTokenResponse({}));
  }

  async describeVerifyToken(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  async describeVerifyUsageWithOptions(request: DescribeVerifyUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyUsageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifyUsageResponse>(await this.doRPCRequest("DescribeVerifyUsage", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifyUsageResponse({}));
  }

  async describeVerifyUsage(request: DescribeVerifyUsageRequest): Promise<DescribeVerifyUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyUsageWithOptions(request, runtime);
  }

  async describeWhitelistWithOptions(request: DescribeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWhitelistResponse>(await this.doRPCRequest("DescribeWhitelist", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWhitelistResponse({}));
  }

  async describeWhitelist(request: DescribeWhitelistRequest): Promise<DescribeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelistWithOptions(request, runtime);
  }

  async describeWhitelistSettingWithOptions(request: DescribeWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistSettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeWhitelistSettingResponse>(await this.doRPCRequest("DescribeWhitelistSetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeWhitelistSettingResponse({}));
  }

  async describeWhitelistSetting(request: DescribeWhitelistSettingRequest): Promise<DescribeWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelistSettingWithOptions(request, runtime);
  }

  async detectFaceAttributesWithOptions(request: DetectFaceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DetectFaceAttributesResponse>(await this.doRPCRequest("DetectFaceAttributes", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DetectFaceAttributesResponse({}));
  }

  async detectFaceAttributes(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  async initDeviceWithOptions(request: InitDeviceRequest, runtime: $Util.RuntimeOptions): Promise<InitDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitDeviceResponse>(await this.doRPCRequest("InitDevice", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new InitDeviceResponse({}));
  }

  async initDevice(request: InitDeviceRequest): Promise<InitDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initDeviceWithOptions(request, runtime);
  }

  async initFaceVerifyWithOptions(request: InitFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<InitFaceVerifyResponse>(await this.doRPCRequest("InitFaceVerify", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new InitFaceVerifyResponse({}));
  }

  async initFaceVerify(request: InitFaceVerifyRequest): Promise<InitFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  async livenessFaceVerifyWithOptions(request: LivenessFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<LivenessFaceVerifyResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<LivenessFaceVerifyResponse>(await this.doRPCRequest("LivenessFaceVerify", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new LivenessFaceVerifyResponse({}));
  }

  async livenessFaceVerify(request: LivenessFaceVerifyRequest): Promise<LivenessFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessFaceVerifyWithOptions(request, runtime);
  }

  async modifyDeviceInfoWithOptions(request: ModifyDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceInfoResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ModifyDeviceInfoResponse>(await this.doRPCRequest("ModifyDeviceInfo", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new ModifyDeviceInfoResponse({}));
  }

  async modifyDeviceInfo(request: ModifyDeviceInfoRequest): Promise<ModifyDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceInfoWithOptions(request, runtime);
  }

  async updateAppPackageWithOptions(request: UpdateAppPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppPackageResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateAppPackageResponse>(await this.doRPCRequest("UpdateAppPackage", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateAppPackageResponse({}));
  }

  async updateAppPackage(request: UpdateAppPackageRequest): Promise<UpdateAppPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppPackageWithOptions(request, runtime);
  }

  async updateFaceConfigWithOptions(request: UpdateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFaceConfigResponse>(await this.doRPCRequest("UpdateFaceConfig", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFaceConfigResponse({}));
  }

  async updateFaceConfig(request: UpdateFaceConfigRequest): Promise<UpdateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceConfigWithOptions(request, runtime);
  }

  async updateVerifySettingWithOptions(request: UpdateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVerifySettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateVerifySettingResponse>(await this.doRPCRequest("UpdateVerifySetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateVerifySettingResponse({}));
  }

  async updateVerifySetting(request: UpdateVerifySettingRequest): Promise<UpdateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVerifySettingWithOptions(request, runtime);
  }

  async verifyDeviceWithOptions(request: VerifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDeviceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyDeviceResponse>(await this.doRPCRequest("VerifyDevice", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyDeviceResponse({}));
  }

  async verifyDevice(request: VerifyDeviceRequest): Promise<VerifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDeviceWithOptions(request, runtime);
  }

  async verifyMaterialWithOptions(request: VerifyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMaterialResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<VerifyMaterialResponse>(await this.doRPCRequest("VerifyMaterial", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new VerifyMaterialResponse({}));
  }

  async verifyMaterial(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}

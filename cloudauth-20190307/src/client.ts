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

export class CompareFacesRequest extends $tea.Model {
  targetImageType?: string;
  sourceImageType?: string;
  sourceImageValue?: string;
  targetImageValue?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      targetImageType: 'TargetImageType',
      sourceImageType: 'SourceImageType',
      sourceImageValue: 'SourceImageValue',
      targetImageValue: 'TargetImageValue',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetImageType: 'string',
      sourceImageType: 'string',
      sourceImageValue: 'string',
      targetImageValue: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: CompareFacesResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: CompareFacesResponseBodyData,
      code: 'string',
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

export class CompareFaceVerifyRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  productCode?: string;
  sourceFaceContrastPicture?: string;
  sourceFaceContrastPictureUrl?: string;
  sourceCertifyId?: string;
  sourceOssBucketName?: string;
  sourceOssObjectName?: string;
  targetFaceContrastPicture?: string;
  targetFaceContrastPictureUrl?: string;
  targetCertifyId?: string;
  targetOssBucketName?: string;
  targetOssObjectName?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sourceFaceContrastPicture: 'SourceFaceContrastPicture',
      sourceFaceContrastPictureUrl: 'SourceFaceContrastPictureUrl',
      sourceCertifyId: 'SourceCertifyId',
      sourceOssBucketName: 'SourceOssBucketName',
      sourceOssObjectName: 'SourceOssObjectName',
      targetFaceContrastPicture: 'TargetFaceContrastPicture',
      targetFaceContrastPictureUrl: 'TargetFaceContrastPictureUrl',
      targetCertifyId: 'TargetCertifyId',
      targetOssBucketName: 'TargetOssBucketName',
      targetOssObjectName: 'TargetOssObjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      productCode: 'string',
      sourceFaceContrastPicture: 'string',
      sourceFaceContrastPictureUrl: 'string',
      sourceCertifyId: 'string',
      sourceOssBucketName: 'string',
      sourceOssObjectName: 'string',
      targetFaceContrastPicture: 'string',
      targetFaceContrastPictureUrl: 'string',
      targetCertifyId: 'string',
      targetOssBucketName: 'string',
      targetOssObjectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBody extends $tea.Model {
  resultObject?: CompareFaceVerifyResponseBodyResultObject;
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
      resultObject: CompareFaceVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class ContrastFaceVerifyRequest extends $tea.Model {
  sceneId?: number;
  outerOrderNo?: string;
  productCode?: string;
  certType?: string;
  certName?: string;
  certNo?: string;
  faceContrastPicture?: string;
  deviceToken?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  faceContrastPictureUrl?: string;
  certifyId?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  model?: string;
  faceContrastFile?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      certType: 'CertType',
      certName: 'CertName',
      certNo: 'CertNo',
      faceContrastPicture: 'FaceContrastPicture',
      deviceToken: 'DeviceToken',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      certifyId: 'CertifyId',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      model: 'Model',
      faceContrastFile: 'FaceContrastFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      productCode: 'string',
      certType: 'string',
      certName: 'string',
      certNo: 'string',
      faceContrastPicture: 'string',
      deviceToken: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      faceContrastPictureUrl: 'string',
      certifyId: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      model: 'string',
      faceContrastFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyAdvanceRequest extends $tea.Model {
  faceContrastFileObject: Readable;
  sceneId?: number;
  outerOrderNo?: string;
  productCode?: string;
  certType?: string;
  certName?: string;
  certNo?: string;
  faceContrastPicture?: string;
  deviceToken?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  faceContrastPictureUrl?: string;
  certifyId?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      faceContrastFileObject: 'FaceContrastFileObject',
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      certType: 'CertType',
      certName: 'CertName',
      certNo: 'CertNo',
      faceContrastPicture: 'FaceContrastPicture',
      deviceToken: 'DeviceToken',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      certifyId: 'CertifyId',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceContrastFileObject: 'Readable',
      sceneId: 'number',
      outerOrderNo: 'string',
      productCode: 'string',
      certType: 'string',
      certName: 'string',
      certNo: 'string',
      faceContrastPicture: 'string',
      deviceToken: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      faceContrastPictureUrl: 'string',
      certifyId: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBody extends $tea.Model {
  resultObject?: ContrastFaceVerifyResponseBodyResultObject;
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
      resultObject: ContrastFaceVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  userDeviceId?: string;
  test?: boolean;
  authYears?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizType: 'BizType',
      userDeviceId: 'UserDeviceId',
      test: 'Test',
      authYears: 'AuthYears',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizType: 'string',
      userDeviceId: 'string',
      test: 'boolean',
      authYears: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyResponseBody extends $tea.Model {
  requestId?: string;
  authKey?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      authKey: 'AuthKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      authKey: 'string',
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
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizType: 'BizType',
      bizName: 'BizName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizType: 'string',
      bizName: 'string',
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
  sourceIp?: string;
  lang?: string;
  appUrl?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appUrl: 'AppUrl',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appUrl: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRPSDKResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  appUrl?: string;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      appUrl: 'AppUrl',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      appUrl: 'string',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySDKResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  bizType?: string;
  bizName?: string;
  solution?: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizType: 'BizType',
      bizName: 'BizName',
      solution: 'Solution',
      guideStep: 'GuideStep',
      privacyStep: 'PrivacyStep',
      resultStep: 'ResultStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizType: 'string',
      bizName: 'string',
      solution: 'string',
      guideStep: 'boolean',
      privacyStep: 'boolean',
      resultStep: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingResponseBody extends $tea.Model {
  requestId?: string;
  stepList?: string[];
  bizName?: string;
  bizType?: string;
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stepList: 'StepList',
      bizName: 'BizName',
      bizType: 'BizType',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
      bizName: 'string',
      bizType: 'string',
      solution: 'string',
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
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizId?: string;
  idCardNum?: string;
  validDay?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizType: 'BizType',
      bizId: 'BizId',
      idCardNum: 'IdCardNum',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizType: 'string',
      bizId: 'string',
      idCardNum: 'string',
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

export class DeleteWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      ids: 'string',
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

export class DescribeAppInfoRequest extends $tea.Model {
  sourceIp?: string;
  pageSize?: number;
  currentPage?: number;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      pageSize: 'number',
      currentPage: 'number',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponseBody extends $tea.Model {
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  appInfoList?: DescribeAppInfoResponseBodyAppInfoList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      appInfoList: 'AppInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      appInfoList: { 'type': 'array', 'itemType': DescribeAppInfoResponseBodyAppInfoList },
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
  sourceIp?: string;
  lang?: string;
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  deviceId?: string;
  bizType?: string;
  userDeviceId?: string;
  expiredStartDay?: string;
  expiredEndDay?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      deviceId: 'DeviceId',
      bizType: 'BizType',
      userDeviceId: 'UserDeviceId',
      expiredStartDay: 'ExpiredStartDay',
      expiredEndDay: 'ExpiredEndDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      totalCount: 'number',
      pageSize: 'number',
      currentPage: 'number',
      deviceId: 'string',
      bizType: 'string',
      userDeviceId: 'string',
      expiredStartDay: 'string',
      expiredEndDay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $tea.Model {
  deviceInfoList?: DescribeDeviceInfoResponseBodyDeviceInfoList;
  totalCount?: number;
  requestId?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      deviceInfoList: 'DeviceInfoList',
      totalCount: 'TotalCount',
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfoList: DescribeDeviceInfoResponseBodyDeviceInfoList,
      totalCount: 'number',
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
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
  sourceIp?: string;
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigResponseBody extends $tea.Model {
  requestId?: string;
  items?: DescribeFaceConfigResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeFaceConfigResponseBodyItems },
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
  sourceIp?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageResponseBody extends $tea.Model {
  totalCount?: number;
  faceUsageList?: DescribeFaceUsageResponseBodyFaceUsageList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      faceUsageList: 'FaceUsageList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      faceUsageList: { 'type': 'array', 'itemType': DescribeFaceUsageResponseBodyFaceUsageList },
      requestId: 'string',
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

export class DescribeFaceVerifyResponseBody extends $tea.Model {
  resultObject?: DescribeFaceVerifyResponseBodyResultObject;
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
      resultObject: DescribeFaceVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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

export class DescribeOssUploadTokenRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBody extends $tea.Model {
  requestId?: string;
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadToken: 'OssUploadToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadToken: DescribeOssUploadTokenResponseBodyOssUploadToken,
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
  sourceIp?: string;
  lang?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRPSDKResponseBody extends $tea.Model {
  sdkUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sdkUrl: 'SdkUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkUrl: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  id?: number;
  debug?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      id: 'Id',
      debug: 'Debug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      id: 'number',
      debug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdkUrlResponseBody extends $tea.Model {
  sdkUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sdkUrl: 'SdkUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkUrl: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdatePackageResultResponseBody extends $tea.Model {
  requestId?: string;
  appInfo?: DescribeUpdatePackageResultResponseBodyAppInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appInfo: DescribeUpdatePackageResultResponseBodyAppInfo,
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
  sourceIp?: string;
  biz?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      biz: 'Biz',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      biz: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUploadInfoResponseBody extends $tea.Model {
  policy?: string;
  expire?: number;
  requestId?: string;
  accessid?: string;
  signature?: string;
  host?: string;
  folder?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      expire: 'Expire',
      requestId: 'RequestId',
      accessid: 'Accessid',
      signature: 'Signature',
      host: 'Host',
      folder: 'Folder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      expire: 'number',
      requestId: 'string',
      accessid: 'string',
      signature: 'string',
      host: 'string',
      folder: 'string',
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

export class DescribeUserStatusRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponseBody extends $tea.Model {
  requestId?: string;
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      enabled: 'boolean',
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
  sourceIp?: string;
  totalCount?: number;
  pageSize?: number;
  currentPage?: number;
  bizType?: string;
  startDate?: string;
  endDate?: string;
  bizId?: string;
  idCardNum?: string;
  statusList?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      bizType: 'BizType',
      startDate: 'StartDate',
      endDate: 'EndDate',
      bizId: 'BizId',
      idCardNum: 'IdCardNum',
      statusList: 'StatusList',
      queryId: 'QueryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      totalCount: 'number',
      pageSize: 'number',
      currentPage: 'number',
      bizType: 'string',
      startDate: 'string',
      endDate: 'string',
      bizId: 'string',
      idCardNum: 'string',
      statusList: 'string',
      queryId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  queryId?: string;
  recordsList?: DescribeVerifyRecordsResponseBodyRecordsList[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      queryId: 'QueryId',
      recordsList: 'RecordsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      queryId: 'string',
      recordsList: { 'type': 'array', 'itemType': DescribeVerifyRecordsResponseBodyRecordsList },
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
  verifyStatus?: number;
  requestId?: string;
  material?: DescribeVerifyResultResponseBodyMaterial;
  authorityComparisionScore?: number;
  faceComparisonScore?: number;
  idCardFaceComparisonScore?: number;
  static names(): { [key: string]: string } {
    return {
      verifyStatus: 'VerifyStatus',
      requestId: 'RequestId',
      material: 'Material',
      authorityComparisionScore: 'AuthorityComparisionScore',
      faceComparisonScore: 'FaceComparisonScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyStatus: 'number',
      requestId: 'string',
      material: DescribeVerifyResultResponseBodyMaterial,
      authorityComparisionScore: 'number',
      faceComparisonScore: 'number',
      idCardFaceComparisonScore: 'number',
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
  sourceIp?: string;
  lang?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKResponseBody extends $tea.Model {
  sdkUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      sdkUrl: 'SdkUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sdkUrl: 'string',
      requestId: 'string',
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

export class DescribeVerifySettingRequest extends $tea.Model {
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
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
  idCardBackImageUrl?: string;
  bizType?: string;
  failedRedirectUrl?: string;
  faceRetainedImageUrl?: string;
  callbackSeed?: string;
  idCardFrontImageUrl?: string;
  userId?: string;
  bizId?: string;
  name?: string;
  idCardNumber?: string;
  passedRedirectUrl?: string;
  callbackUrl?: string;
  userIp?: string;
  userPhoneNumber?: string;
  userRegistTime?: number;
  static names(): { [key: string]: string } {
    return {
      idCardBackImageUrl: 'IdCardBackImageUrl',
      bizType: 'BizType',
      failedRedirectUrl: 'FailedRedirectUrl',
      faceRetainedImageUrl: 'FaceRetainedImageUrl',
      callbackSeed: 'CallbackSeed',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      userId: 'UserId',
      bizId: 'BizId',
      name: 'Name',
      idCardNumber: 'IdCardNumber',
      passedRedirectUrl: 'PassedRedirectUrl',
      callbackUrl: 'CallbackUrl',
      userIp: 'UserIp',
      userPhoneNumber: 'UserPhoneNumber',
      userRegistTime: 'UserRegistTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardBackImageUrl: 'string',
      bizType: 'string',
      failedRedirectUrl: 'string',
      faceRetainedImageUrl: 'string',
      callbackSeed: 'string',
      idCardFrontImageUrl: 'string',
      userId: 'string',
      bizId: 'string',
      name: 'string',
      idCardNumber: 'string',
      passedRedirectUrl: 'string',
      callbackUrl: 'string',
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
  verifyPageUrl?: string;
  requestId?: string;
  ossUploadToken?: DescribeVerifyTokenResponseBodyOssUploadToken;
  verifyToken?: string;
  static names(): { [key: string]: string } {
    return {
      verifyPageUrl: 'VerifyPageUrl',
      requestId: 'RequestId',
      ossUploadToken: 'OssUploadToken',
      verifyToken: 'VerifyToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyPageUrl: 'string',
      requestId: 'string',
      ossUploadToken: DescribeVerifyTokenResponseBodyOssUploadToken,
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
  sourceIp?: string;
  bizType?: string;
  startDate?: string;
  endDate?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizType: 'BizType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizType: 'string',
      startDate: 'string',
      endDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageResponseBody extends $tea.Model {
  totalCount?: number;
  verifyUsageList?: DescribeVerifyUsageResponseBodyVerifyUsageList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      verifyUsageList: 'VerifyUsageList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      verifyUsageList: { 'type': 'array', 'itemType': DescribeVerifyUsageResponseBodyVerifyUsageList },
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizId?: string;
  idCardNum?: string;
  validStartDate?: string;
  validEndDate?: string;
  valid?: string;
  pageSize?: number;
  currentPage?: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizType: 'BizType',
      bizId: 'BizId',
      idCardNum: 'IdCardNum',
      validStartDate: 'ValidStartDate',
      validEndDate: 'ValidEndDate',
      valid: 'Valid',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizType: 'string',
      bizId: 'string',
      idCardNum: 'string',
      validStartDate: 'string',
      validEndDate: 'string',
      valid: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponseBody extends $tea.Model {
  totalCount?: number;
  pageSize?: number;
  requestId?: string;
  currentPage?: number;
  items?: DescribeWhitelistResponseBodyItems[];
  static names(): { [key: string]: string } {
    return {
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      currentPage: 'CurrentPage',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      totalCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistResponseBodyItems },
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

export class DetectFaceAttributesRequest extends $tea.Model {
  materialValue?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      materialValue: 'MaterialValue',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialValue: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  data?: DetectFaceAttributesResponseBodyData;
  code?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      data: 'Data',
      code: 'Code',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      data: DetectFaceAttributesResponseBodyData,
      code: 'string',
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
  certifyId?: string;
  outerOrderNo?: string;
  channel?: string;
  merchant?: string;
  productName?: string;
  produceNode?: string;
  bizData?: string;
  metaInfo?: string;
  certifyPrincipal?: string;
  appVersion?: string;
  deviceToken?: string;
  uaToken?: string;
  webUmidToken?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      outerOrderNo: 'OuterOrderNo',
      channel: 'Channel',
      merchant: 'Merchant',
      productName: 'ProductName',
      produceNode: 'ProduceNode',
      bizData: 'BizData',
      metaInfo: 'MetaInfo',
      certifyPrincipal: 'CertifyPrincipal',
      appVersion: 'AppVersion',
      deviceToken: 'DeviceToken',
      uaToken: 'UaToken',
      webUmidToken: 'WebUmidToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      outerOrderNo: 'string',
      channel: 'string',
      merchant: 'string',
      productName: 'string',
      produceNode: 'string',
      bizData: 'string',
      metaInfo: 'string',
      certifyPrincipal: 'string',
      appVersion: 'string',
      deviceToken: 'string',
      uaToken: 'string',
      webUmidToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponseBody extends $tea.Model {
  resultObject?: InitDeviceResponseBodyResultObject;
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
      resultObject: InitDeviceResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  sceneId?: number;
  outerOrderNo?: string;
  productCode?: string;
  certType?: string;
  certName?: string;
  certNo?: string;
  returnUrl?: string;
  faceContrastPicture?: string;
  metaInfo?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  faceContrastPictureUrl?: string;
  certifyId?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  model?: string;
  callbackUrl?: string;
  callbackToken?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      certType: 'CertType',
      certName: 'CertName',
      certNo: 'CertNo',
      returnUrl: 'ReturnUrl',
      faceContrastPicture: 'FaceContrastPicture',
      metaInfo: 'MetaInfo',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      certifyId: 'CertifyId',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      model: 'Model',
      callbackUrl: 'CallbackUrl',
      callbackToken: 'CallbackToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      productCode: 'string',
      certType: 'string',
      certName: 'string',
      certNo: 'string',
      returnUrl: 'string',
      faceContrastPicture: 'string',
      metaInfo: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      faceContrastPictureUrl: 'string',
      certifyId: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      model: 'string',
      callbackUrl: 'string',
      callbackToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBody extends $tea.Model {
  resultObject?: InitFaceVerifyResponseBodyResultObject;
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
      resultObject: InitFaceVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  sceneId?: number;
  outerOrderNo?: string;
  productCode?: string;
  faceContrastPicture?: string;
  deviceToken?: string;
  mobile?: string;
  ip?: string;
  userId?: string;
  faceContrastPictureUrl?: string;
  certifyId?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  model?: string;
  static names(): { [key: string]: string } {
    return {
      sceneId: 'SceneId',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      faceContrastPicture: 'FaceContrastPicture',
      deviceToken: 'DeviceToken',
      mobile: 'Mobile',
      ip: 'Ip',
      userId: 'UserId',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      certifyId: 'CertifyId',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      model: 'Model',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sceneId: 'number',
      outerOrderNo: 'string',
      productCode: 'string',
      faceContrastPicture: 'string',
      deviceToken: 'string',
      mobile: 'string',
      ip: 'string',
      userId: 'string',
      faceContrastPictureUrl: 'string',
      certifyId: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      model: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseBody extends $tea.Model {
  resultObject?: LivenessFaceVerifyResponseBodyResultObject;
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
      resultObject: LivenessFaceVerifyResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  sourceIp?: string;
  lang?: string;
  deviceId?: string;
  userDeviceId?: string;
  bizType?: string;
  duration?: string;
  expiredDay?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      deviceId: 'DeviceId',
      userDeviceId: 'UserDeviceId',
      bizType: 'BizType',
      duration: 'Duration',
      expiredDay: 'ExpiredDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      deviceId: 'string',
      userDeviceId: 'string',
      bizType: 'string',
      duration: 'string',
      expiredDay: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoResponseBody extends $tea.Model {
  expiredDay?: string;
  beginDay?: string;
  requestId?: string;
  deviceId?: string;
  bizType?: string;
  userDeviceId?: string;
  static names(): { [key: string]: string } {
    return {
      expiredDay: 'ExpiredDay',
      beginDay: 'BeginDay',
      requestId: 'RequestId',
      deviceId: 'DeviceId',
      bizType: 'BizType',
      userDeviceId: 'UserDeviceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredDay: 'string',
      beginDay: 'string',
      requestId: 'string',
      deviceId: 'string',
      bizType: 'string',
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
  sourceIp?: string;
  id?: number;
  packageUrl?: string;
  platform?: string;
  debug?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      id: 'Id',
      packageUrl: 'PackageUrl',
      platform: 'Platform',
      debug: 'Debug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      id: 'number',
      packageUrl: 'string',
      platform: 'string',
      debug: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppPackageResponseBody extends $tea.Model {
  taskId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
      requestId: 'string',
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
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizName?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      bizType: 'BizType',
      bizName: 'BizName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      bizType: 'string',
      bizName: 'string',
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
  sourceIp?: string;
  bizType?: string;
  bizName?: string;
  solution?: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      bizType: 'BizType',
      bizName: 'BizName',
      solution: 'Solution',
      guideStep: 'GuideStep',
      privacyStep: 'PrivacyStep',
      resultStep: 'ResultStep',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      bizType: 'string',
      bizName: 'string',
      solution: 'string',
      guideStep: 'boolean',
      privacyStep: 'boolean',
      resultStep: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVerifySettingResponseBody extends $tea.Model {
  requestId?: string;
  stepList?: string[];
  bizName?: string;
  bizType?: string;
  solution?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      stepList: 'StepList',
      bizName: 'BizName',
      bizType: 'BizType',
      solution: 'Solution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
      bizName: 'string',
      bizType: 'string',
      solution: 'string',
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
  certifyId?: string;
  certifyData?: string;
  appVersion?: string;
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      certifyData: 'CertifyData',
      appVersion: 'AppVersion',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      certifyData: 'string',
      appVersion: 'string',
      extInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponseBody extends $tea.Model {
  resultObject?: VerifyDeviceResponseBodyResultObject;
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
      resultObject: VerifyDeviceResponseBodyResultObject,
      message: 'string',
      requestId: 'string',
      code: 'string',
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
  idCardBackImageUrl?: string;
  faceImageUrl?: string;
  bizType?: string;
  bizId?: string;
  name?: string;
  idCardNumber?: string;
  idCardFrontImageUrl?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      idCardBackImageUrl: 'IdCardBackImageUrl',
      faceImageUrl: 'FaceImageUrl',
      bizType: 'BizType',
      bizId: 'BizId',
      name: 'Name',
      idCardNumber: 'IdCardNumber',
      idCardFrontImageUrl: 'IdCardFrontImageUrl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardBackImageUrl: 'string',
      faceImageUrl: 'string',
      bizType: 'string',
      bizId: 'string',
      name: 'string',
      idCardNumber: 'string',
      idCardFrontImageUrl: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBody extends $tea.Model {
  verifyStatus?: number;
  requestId?: string;
  material?: VerifyMaterialResponseBodyMaterial;
  authorityComparisionScore?: number;
  verifyToken?: string;
  idCardFaceComparisonScore?: number;
  static names(): { [key: string]: string } {
    return {
      verifyStatus: 'VerifyStatus',
      requestId: 'RequestId',
      material: 'Material',
      authorityComparisionScore: 'AuthorityComparisionScore',
      verifyToken: 'VerifyToken',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyStatus: 'number',
      requestId: 'string',
      material: VerifyMaterialResponseBodyMaterial,
      authorityComparisionScore: 'number',
      verifyToken: 'string',
      idCardFaceComparisonScore: 'number',
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

export class CompareFacesResponseBodyData extends $tea.Model {
  similarityScore?: number;
  confidenceThresholds?: string;
  static names(): { [key: string]: string } {
    return {
      similarityScore: 'SimilarityScore',
      confidenceThresholds: 'ConfidenceThresholds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      similarityScore: 'number',
      confidenceThresholds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBodyResultObject extends $tea.Model {
  verifyScore?: number;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      verifyScore: 'VerifyScore',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      verifyScore: 'number',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBodyResultObject extends $tea.Model {
  materialInfo?: string;
  subCode?: string;
  identityInfo?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      subCode: 'SubCode',
      identityInfo: 'IdentityInfo',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      subCode: 'string',
      identityInfo: 'string',
      passed: 'string',
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
  type?: number;
  endDate?: string;
  packageName?: string;
  debugPackageInfo?: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo;
  icon?: string;
  startDate?: string;
  packageInfo?: DescribeAppInfoResponseBodyAppInfoListPackageInfo;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endDate: 'EndDate',
      packageName: 'PackageName',
      debugPackageInfo: 'DebugPackageInfo',
      icon: 'Icon',
      startDate: 'StartDate',
      packageInfo: 'PackageInfo',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endDate: 'string',
      packageName: 'string',
      debugPackageInfo: DescribeAppInfoResponseBodyAppInfoListDebugPackageInfo,
      icon: 'string',
      startDate: 'string',
      packageInfo: DescribeAppInfoResponseBodyAppInfoListPackageInfo,
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo extends $tea.Model {
  userDeviceId?: string;
  deviceId?: string;
  expiredDay?: string;
  beginDay?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      userDeviceId: 'UserDeviceId',
      deviceId: 'DeviceId',
      expiredDay: 'ExpiredDay',
      beginDay: 'BeginDay',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userDeviceId: 'string',
      deviceId: 'string',
      expiredDay: 'string',
      beginDay: 'string',
      bizType: 'string',
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
  gmtUpdated?: number;
  bizName?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      gmtUpdated: 'GmtUpdated',
      bizName: 'BizName',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtUpdated: 'number',
      bizName: 'string',
      bizType: 'string',
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
  materialInfo?: string;
  subCode?: string;
  identityInfo?: string;
  deviceToken?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      subCode: 'SubCode',
      identityInfo: 'IdentityInfo',
      deviceToken: 'DeviceToken',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      subCode: 'string',
      identityInfo: 'string',
      deviceToken: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBodyOssUploadToken extends $tea.Model {
  key?: string;
  token?: string;
  secret?: string;
  expired?: number;
  path?: string;
  endPoint?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      token: 'Token',
      secret: 'Secret',
      expired: 'Expired',
      path: 'Path',
      endPoint: 'EndPoint',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      token: 'string',
      secret: 'string',
      expired: 'number',
      path: 'string',
      endPoint: 'string',
      bucket: 'string',
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
  type?: number;
  endDate?: string;
  packageName?: string;
  debugPackageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo;
  icon?: string;
  startDate?: string;
  packageInfo?: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo;
  name?: string;
  id?: number;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      endDate: 'EndDate',
      packageName: 'PackageName',
      debugPackageInfo: 'DebugPackageInfo',
      icon: 'Icon',
      startDate: 'StartDate',
      packageInfo: 'PackageInfo',
      name: 'Name',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      endDate: 'string',
      packageName: 'string',
      debugPackageInfo: DescribeUpdatePackageResultResponseBodyAppInfoDebugPackageInfo,
      icon: 'string',
      startDate: 'string',
      packageInfo: DescribeUpdatePackageResultResponseBodyAppInfoPackageInfo,
      name: 'string',
      id: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo extends $tea.Model {
  endDate?: string;
  sex?: string;
  authority?: string;
  address?: string;
  number?: string;
  startDate?: string;
  nationality?: string;
  backImageUrl?: string;
  birth?: string;
  name?: string;
  frontImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      sex: 'Sex',
      authority: 'Authority',
      address: 'Address',
      number: 'Number',
      startDate: 'StartDate',
      nationality: 'Nationality',
      backImageUrl: 'BackImageUrl',
      birth: 'Birth',
      name: 'Name',
      frontImageUrl: 'FrontImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      sex: 'string',
      authority: 'string',
      address: 'string',
      number: 'string',
      startDate: 'string',
      nationality: 'string',
      backImageUrl: 'string',
      birth: 'string',
      name: 'string',
      frontImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsListMaterial extends $tea.Model {
  idCardNumber?: string;
  faceImageUrl?: string;
  idCardName?: string;
  idCardInfo?: DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      idCardNumber: 'IdCardNumber',
      faceImageUrl: 'FaceImageUrl',
      idCardName: 'IdCardName',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardNumber: 'string',
      faceImageUrl: 'string',
      idCardName: 'string',
      idCardInfo: DescribeVerifyRecordsResponseBodyRecordsListMaterialIdCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseBodyRecordsList extends $tea.Model {
  status?: number;
  finishTime?: number;
  material?: DescribeVerifyRecordsResponseBodyRecordsListMaterial;
  idCardFaceComparisonScore?: number;
  bizId?: string;
  verifyId?: string;
  authorityComparisonScore?: number;
  dataStats?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      finishTime: 'FinishTime',
      material: 'Material',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      bizId: 'BizId',
      verifyId: 'VerifyId',
      authorityComparisonScore: 'AuthorityComparisonScore',
      dataStats: 'DataStats',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'number',
      finishTime: 'number',
      material: DescribeVerifyRecordsResponseBodyRecordsListMaterial,
      idCardFaceComparisonScore: 'number',
      bizId: 'string',
      verifyId: 'string',
      authorityComparisonScore: 'number',
      dataStats: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterialIdCardInfo extends $tea.Model {
  endDate?: string;
  authority?: string;
  address?: string;
  number?: string;
  startDate?: string;
  backImageUrl?: string;
  nationality?: string;
  birth?: string;
  name?: string;
  frontImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      authority: 'Authority',
      address: 'Address',
      number: 'Number',
      startDate: 'StartDate',
      backImageUrl: 'BackImageUrl',
      nationality: 'Nationality',
      birth: 'Birth',
      name: 'Name',
      frontImageUrl: 'FrontImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      authority: 'string',
      address: 'string',
      number: 'string',
      startDate: 'string',
      backImageUrl: 'string',
      nationality: 'string',
      birth: 'string',
      name: 'string',
      frontImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterial extends $tea.Model {
  idCardNumber?: string;
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: boolean;
  idCardName?: string;
  videoUrls?: string[];
  idCardInfo?: DescribeVerifyResultResponseBodyMaterialIdCardInfo;
  faceQuality?: string;
  static names(): { [key: string]: string } {
    return {
      idCardNumber: 'IdCardNumber',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      idCardName: 'IdCardName',
      videoUrls: 'VideoUrls',
      idCardInfo: 'IdCardInfo',
      faceQuality: 'FaceQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardNumber: 'string',
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'boolean',
      idCardName: 'string',
      videoUrls: { 'type': 'array', 'itemType': 'string' },
      idCardInfo: DescribeVerifyResultResponseBodyMaterialIdCardInfo,
      faceQuality: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponseBodyVerifySettingList extends $tea.Model {
  stepList?: string[];
  bizName?: string;
  solution?: string;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      stepList: 'StepList',
      bizName: 'BizName',
      solution: 'Solution',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepList: { 'type': 'array', 'itemType': 'string' },
      bizName: 'string',
      solution: 'string',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBodyOssUploadToken extends $tea.Model {
  key?: string;
  token?: string;
  secret?: string;
  expired?: number;
  path?: string;
  endPoint?: string;
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      token: 'Token',
      secret: 'Secret',
      expired: 'Expired',
      path: 'Path',
      endPoint: 'EndPoint',
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      token: 'string',
      secret: 'string',
      expired: 'number',
      path: 'string',
      endPoint: 'string',
      bucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageResponseBodyVerifyUsageList extends $tea.Model {
  passCount?: number;
  failCount?: number;
  date?: string;
  totalCount?: number;
  bizType?: string;
  static names(): { [key: string]: string } {
    return {
      passCount: 'PassCount',
      failCount: 'FailCount',
      date: 'Date',
      totalCount: 'TotalCount',
      bizType: 'BizType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passCount: 'number',
      failCount: 'number',
      date: 'string',
      totalCount: 'number',
      bizType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponseBodyItems extends $tea.Model {
  endDate?: number;
  gmtCreate?: number;
  bizId?: string;
  startDate?: number;
  idCardNum?: string;
  gmtModified?: number;
  valid?: number;
  id?: number;
  bizType?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      gmtCreate: 'GmtCreate',
      bizId: 'BizId',
      startDate: 'StartDate',
      idCardNum: 'IdCardNum',
      gmtModified: 'GmtModified',
      valid: 'Valid',
      id: 'Id',
      bizType: 'BizType',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      gmtCreate: 'number',
      bizId: 'string',
      startDate: 'number',
      idCardNum: 'string',
      gmtModified: 'number',
      valid: 'number',
      id: 'number',
      bizType: 'string',
      uid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $tea.Model {
  value?: number;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'number',
      threshold: 'number',
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

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $tea.Model {
  glasses?: string;
  facequal?: number;
  integrity?: number;
  smiling?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  facetype?: string;
  respirator?: string;
  headpose?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  blur?: number;
  static names(): { [key: string]: string } {
    return {
      glasses: 'Glasses',
      facequal: 'Facequal',
      integrity: 'Integrity',
      smiling: 'Smiling',
      facetype: 'Facetype',
      respirator: 'Respirator',
      headpose: 'Headpose',
      blur: 'Blur',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glasses: 'string',
      facequal: 'number',
      integrity: 'number',
      smiling: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
      facetype: 'string',
      respirator: 'string',
      headpose: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
      blur: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect extends $tea.Model {
  top?: number;
  width?: number;
  height?: number;
  left?: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      width: 'Width',
      height: 'Height',
      left: 'Left',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      width: 'number',
      height: 'number',
      left: 'number',
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
  imgHeight?: number;
  imgWidth?: number;
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  static names(): { [key: string]: string } {
    return {
      imgHeight: 'ImgHeight',
      imgWidth: 'ImgWidth',
      faceInfos: 'FaceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgHeight: 'number',
      imgWidth: 'number',
      faceInfos: DetectFaceAttributesResponseBodyDataFaceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponseBodyResultObject extends $tea.Model {
  ossEndPoint?: string;
  retCodeSub?: string;
  protocol?: string;
  message?: string;
  extParams?: string;
  certifyId?: string;
  fileName?: string;
  accessKeyId?: string;
  presignedUrl?: string;
  securityToken?: string;
  bucketName?: string;
  fileNamePrefix?: string;
  accessKeySecret?: string;
  retMessageSub?: string;
  retCode?: string;
  static names(): { [key: string]: string } {
    return {
      ossEndPoint: 'OssEndPoint',
      retCodeSub: 'RetCodeSub',
      protocol: 'Protocol',
      message: 'Message',
      extParams: 'ExtParams',
      certifyId: 'CertifyId',
      fileName: 'FileName',
      accessKeyId: 'AccessKeyId',
      presignedUrl: 'PresignedUrl',
      securityToken: 'SecurityToken',
      bucketName: 'BucketName',
      fileNamePrefix: 'FileNamePrefix',
      accessKeySecret: 'AccessKeySecret',
      retMessageSub: 'RetMessageSub',
      retCode: 'RetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossEndPoint: 'string',
      retCodeSub: 'string',
      protocol: 'string',
      message: 'string',
      extParams: 'string',
      certifyId: 'string',
      fileName: 'string',
      accessKeyId: 'string',
      presignedUrl: 'string',
      securityToken: 'string',
      bucketName: 'string',
      fileNamePrefix: 'string',
      accessKeySecret: 'string',
      retMessageSub: 'string',
      retCode: 'string',
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
  materialInfo?: string;
  subCode?: string;
  passed?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      subCode: 'SubCode',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      subCode: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponseBodyResultObject extends $tea.Model {
  retCodeSub?: string;
  productRetCode?: string;
  hasNext?: string;
  retMessageSub?: string;
  extParams?: string;
  validationRetCode?: string;
  static names(): { [key: string]: string } {
    return {
      retCodeSub: 'RetCodeSub',
      productRetCode: 'ProductRetCode',
      hasNext: 'HasNext',
      retMessageSub: 'RetMessageSub',
      extParams: 'ExtParams',
      validationRetCode: 'ValidationRetCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      retCodeSub: 'string',
      productRetCode: 'string',
      hasNext: 'string',
      retMessageSub: 'string',
      extParams: 'string',
      validationRetCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $tea.Model {
  endDate?: string;
  authority?: string;
  address?: string;
  number?: string;
  startDate?: string;
  backImageUrl?: string;
  nationality?: string;
  birth?: string;
  name?: string;
  frontImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      authority: 'Authority',
      address: 'Address',
      number: 'Number',
      startDate: 'StartDate',
      backImageUrl: 'BackImageUrl',
      nationality: 'Nationality',
      birth: 'Birth',
      name: 'Name',
      frontImageUrl: 'FrontImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      authority: 'string',
      address: 'string',
      number: 'string',
      startDate: 'string',
      backImageUrl: 'string',
      nationality: 'string',
      birth: 'string',
      name: 'string',
      frontImageUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterial extends $tea.Model {
  idCardNumber?: string;
  faceGlobalUrl?: string;
  faceImageUrl?: string;
  faceMask?: string;
  idCardName?: string;
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  faceQuality?: string;
  static names(): { [key: string]: string } {
    return {
      idCardNumber: 'IdCardNumber',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      idCardName: 'IdCardName',
      idCardInfo: 'IdCardInfo',
      faceQuality: 'FaceQuality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idCardNumber: 'string',
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'string',
      idCardName: 'string',
      idCardInfo: VerifyMaterialResponseBodyMaterialIdCardInfo,
      faceQuality: 'string',
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
    let contrastFaceVerifyReq = new ContrastFaceVerifyRequest({ });
    OpenApiUtil.convert(request, contrastFaceVerifyReq);
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

  async describeOssUploadTokenWithOptions(request: DescribeOssUploadTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeOssUploadTokenResponse>(await this.doRPCRequest("DescribeOssUploadToken", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeOssUploadTokenResponse({}));
  }

  async describeOssUploadToken(request: DescribeOssUploadTokenRequest): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(request, runtime);
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

  async describeUserStatusWithOptions(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeUserStatusResponse>(await this.doRPCRequest("DescribeUserStatus", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatus(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatusWithOptions(request, runtime);
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

  async describeVerifySettingWithOptions(request: DescribeVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySettingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DescribeVerifySettingResponse>(await this.doRPCRequest("DescribeVerifySetting", "2019-03-07", "HTTPS", "POST", "AK", "json", req, runtime), new DescribeVerifySettingResponse({}));
  }

  async describeVerifySetting(request: DescribeVerifySettingRequest): Promise<DescribeVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySettingWithOptions(request, runtime);
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

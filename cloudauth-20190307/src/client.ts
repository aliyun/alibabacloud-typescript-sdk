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

export class CompareFaceVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: CompareFaceVerifyResponseResultObject;
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
      resultObject: CompareFaceVerifyResponseResultObject,
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

export class CompareFacesResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  data: CompareFacesResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: CompareFacesResponseData,
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

export class ContrastFaceVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: ContrastFaceVerifyResponseResultObject;
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
      resultObject: ContrastFaceVerifyResponseResultObject,
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

export class CreateAuthKeyResponse extends $tea.Model {
  authKey: string;
  requestId: string;
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

export class CreateFaceConfigRequest extends $tea.Model {
  bizName: string;
  bizType: string;
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

export class CreateFaceConfigResponse extends $tea.Model {
  requestId: string;
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

export class CreateRPSDKRequest extends $tea.Model {
  appUrl: string;
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

export class CreateRPSDKResponse extends $tea.Model {
  requestId: string;
  taskId: string;
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

export class CreateVerifySDKRequest extends $tea.Model {
  appUrl: string;
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

export class CreateVerifySDKResponse extends $tea.Model {
  requestId: string;
  taskId: string;
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

export class CreateVerifySettingRequest extends $tea.Model {
  bizName: string;
  bizType: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  solution: string;
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

export class CreateVerifySettingResponse extends $tea.Model {
  bizName: string;
  bizType: string;
  requestId: string;
  solution: string;
  stepList: string[];
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

export class CreateWhitelistRequest extends $tea.Model {
  bizId: string;
  bizType?: string;
  idCardNum: string;
  lang?: string;
  sourceIp?: string;
  validDay: string;
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

export class CreateWhitelistResponse extends $tea.Model {
  requestId: string;
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

export class CreateWhitelistSettingRequest extends $tea.Model {
  certNo?: string;
  certifyId?: string;
  lang?: string;
  sceneId?: number;
  serviceCode: string;
  sourceIp?: string;
  validDay: number;
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

export class CreateWhitelistSettingResponse extends $tea.Model {
  requestId: string;
  resultObject: boolean;
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

export class DeleteWhitelistRequest extends $tea.Model {
  ids: string;
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

export class DeleteWhitelistResponse extends $tea.Model {
  requestId: string;
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

export class DeleteWhitelistSettingRequest extends $tea.Model {
  ids: string;
  lang?: string;
  serviceCode: string;
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

export class DeleteWhitelistSettingResponse extends $tea.Model {
  requestId: string;
  resultObject: boolean;
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

export class DescribeAppInfoResponse extends $tea.Model {
  currentPage: number;
  pageSize: number;
  requestId: string;
  totalCount: number;
  appInfoList: DescribeAppInfoResponseAppInfoList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      appInfoList: 'AppInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      appInfoList: { 'type': 'array', 'itemType': DescribeAppInfoResponseAppInfoList },
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

export class DescribeDeviceInfoResponse extends $tea.Model {
  currentPage: number;
  pageSize: number;
  requestId: string;
  totalCount: number;
  deviceInfoList: DescribeDeviceInfoResponseDeviceInfoList;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      deviceInfoList: 'DeviceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      deviceInfoList: DescribeDeviceInfoResponseDeviceInfoList,
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

export class DescribeFaceConfigResponse extends $tea.Model {
  requestId: string;
  items: DescribeFaceConfigResponseItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      items: { 'type': 'array', 'itemType': DescribeFaceConfigResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageRequest extends $tea.Model {
  endDate: string;
  startDate: string;
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

export class DescribeFaceUsageResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  faceUsageList: DescribeFaceUsageResponseFaceUsageList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      faceUsageList: 'FaceUsageList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      faceUsageList: { 'type': 'array', 'itemType': DescribeFaceUsageResponseFaceUsageList },
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

export class DescribeFaceVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: DescribeFaceVerifyResponseResultObject;
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
      resultObject: DescribeFaceVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponse extends $tea.Model {
  requestId: string;
  ossUploadToken: DescribeOssUploadTokenResponseOssUploadToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ossUploadToken: 'OssUploadToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ossUploadToken: DescribeOssUploadTokenResponseOssUploadToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRPSDKRequest extends $tea.Model {
  lang?: string;
  sourceIp?: string;
  taskId: string;
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

export class DescribeRPSDKResponse extends $tea.Model {
  requestId: string;
  sdkUrl: string;
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

export class DescribeSdkUrlRequest extends $tea.Model {
  debug?: boolean;
  id: number;
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

export class DescribeSdkUrlResponse extends $tea.Model {
  requestId: string;
  sdkUrl: string;
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

export class DescribeUpdatePackageResultRequest extends $tea.Model {
  taskId: string;
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

export class DescribeUpdatePackageResultResponse extends $tea.Model {
  requestId: string;
  appInfo: DescribeUpdatePackageResultResponseAppInfo;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      appInfo: DescribeUpdatePackageResultResponseAppInfo,
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

export class DescribeUploadInfoResponse extends $tea.Model {
  accessid: string;
  expire: number;
  folder: string;
  host: string;
  policy: string;
  requestId: string;
  signature: string;
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

export class DescribeUserStatusRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserStatusResponse extends $tea.Model {
  enabled: boolean;
  requestId: string;
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

export class DescribeVerifyRecordsRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  currentPage: number;
  endDate?: string;
  idCardNum?: string;
  pageSize: number;
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

export class DescribeVerifyRecordsResponse extends $tea.Model {
  currentPage: number;
  pageSize: number;
  queryId: string;
  requestId: string;
  totalCount: number;
  recordsList: DescribeVerifyRecordsResponseRecordsList[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      queryId: 'QueryId',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      recordsList: 'RecordsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      queryId: 'string',
      requestId: 'string',
      totalCount: 'number',
      recordsList: { 'type': 'array', 'itemType': DescribeVerifyRecordsResponseRecordsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultRequest extends $tea.Model {
  bizId: string;
  bizType: string;
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

export class DescribeVerifyResultResponse extends $tea.Model {
  authorityComparisionScore: number;
  faceComparisonScore: number;
  idCardFaceComparisonScore: number;
  requestId: string;
  verifyStatus: number;
  material: DescribeVerifyResultResponseMaterial;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      faceComparisonScore: 'FaceComparisonScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      requestId: 'RequestId',
      verifyStatus: 'VerifyStatus',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      faceComparisonScore: 'number',
      idCardFaceComparisonScore: 'number',
      requestId: 'string',
      verifyStatus: 'number',
      material: DescribeVerifyResultResponseMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKRequest extends $tea.Model {
  taskId: string;
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

export class DescribeVerifySDKResponse extends $tea.Model {
  requestId: string;
  sdkUrl: string;
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

export class DescribeVerifySettingRequest extends $tea.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponse extends $tea.Model {
  requestId: string;
  verifySettingList: DescribeVerifySettingResponseVerifySettingList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifySettingList: 'VerifySettingList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifySettingList: { 'type': 'array', 'itemType': DescribeVerifySettingResponseVerifySettingList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenRequest extends $tea.Model {
  bizId: string;
  bizType: string;
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

export class DescribeVerifyTokenResponse extends $tea.Model {
  requestId: string;
  verifyPageUrl: string;
  verifyToken: string;
  ossUploadToken: DescribeVerifyTokenResponseOssUploadToken;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifyPageUrl: 'VerifyPageUrl',
      verifyToken: 'VerifyToken',
      ossUploadToken: 'OssUploadToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifyPageUrl: 'string',
      verifyToken: 'string',
      ossUploadToken: DescribeVerifyTokenResponseOssUploadToken,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageRequest extends $tea.Model {
  bizType?: string;
  endDate: string;
  startDate: string;
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

export class DescribeVerifyUsageResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  verifyUsageList: DescribeVerifyUsageResponseVerifyUsageList[];
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
      verifyUsageList: { 'type': 'array', 'itemType': DescribeVerifyUsageResponseVerifyUsageList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistRequest extends $tea.Model {
  bizId?: string;
  bizType?: string;
  currentPage: number;
  idCardNum?: string;
  lang?: string;
  pageSize: number;
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

export class DescribeWhitelistResponse extends $tea.Model {
  currentPage: number;
  pageSize: number;
  requestId: string;
  totalCount: number;
  items: DescribeWhitelistResponseItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingRequest extends $tea.Model {
  certNo?: string;
  certifyId?: string;
  currentPage: number;
  lang?: string;
  pageSize: number;
  sceneId?: number;
  serviceCode: string;
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

export class DescribeWhitelistSettingResponse extends $tea.Model {
  currentPage: number;
  pageSize: number;
  requestId: string;
  totalCount: number;
  items: DescribeWhitelistSettingResponseItems[];
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistSettingResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesRequest extends $tea.Model {
  bizType?: string;
  materialValue: string;
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

export class DetectFaceAttributesResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  success: boolean;
  data: DetectFaceAttributesResponseData;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      data: DetectFaceAttributesResponseData,
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

export class InitDeviceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: InitDeviceResponseResultObject;
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
      resultObject: InitDeviceResponseResultObject,
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

export class InitFaceVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: InitFaceVerifyResponseResultObject;
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
      resultObject: InitFaceVerifyResponseResultObject,
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

export class LivenessFaceVerifyResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: LivenessFaceVerifyResponseResultObject;
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
      resultObject: LivenessFaceVerifyResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoRequest extends $tea.Model {
  bizType?: string;
  deviceId: string;
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

export class ModifyDeviceInfoResponse extends $tea.Model {
  beginDay: string;
  bizType: string;
  deviceId: string;
  expiredDay: string;
  requestId: string;
  userDeviceId: string;
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

export class UpdateAppPackageRequest extends $tea.Model {
  debug?: boolean;
  id?: number;
  packageUrl: string;
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

export class UpdateAppPackageResponse extends $tea.Model {
  requestId: string;
  taskId: string;
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

export class UpdateFaceConfigRequest extends $tea.Model {
  bizName: string;
  bizType: string;
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

export class UpdateFaceConfigResponse extends $tea.Model {
  requestId: string;
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

export class UpdateVerifySettingRequest extends $tea.Model {
  bizName?: string;
  bizType: string;
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

export class UpdateVerifySettingResponse extends $tea.Model {
  bizName: string;
  bizType: string;
  requestId: string;
  solution: string;
  stepList: string[];
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

export class VerifyDeviceResponse extends $tea.Model {
  code: string;
  message: string;
  requestId: string;
  resultObject: VerifyDeviceResponseResultObject;
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
      resultObject: VerifyDeviceResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialRequest extends $tea.Model {
  bizId: string;
  bizType: string;
  faceImageUrl: string;
  idCardBackImageUrl?: string;
  idCardFrontImageUrl?: string;
  idCardNumber: string;
  name: string;
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

export class VerifyMaterialResponse extends $tea.Model {
  authorityComparisionScore: number;
  idCardFaceComparisonScore: number;
  requestId: string;
  verifyStatus: number;
  verifyToken: string;
  material: VerifyMaterialResponseMaterial;
  static names(): { [key: string]: string } {
    return {
      authorityComparisionScore: 'AuthorityComparisionScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      requestId: 'RequestId',
      verifyStatus: 'VerifyStatus',
      verifyToken: 'VerifyToken',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorityComparisionScore: 'number',
      idCardFaceComparisonScore: 'number',
      requestId: 'string',
      verifyStatus: 'number',
      verifyToken: 'string',
      material: VerifyMaterialResponseMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  passed: string;
  verifyScore: number;
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

export class CompareFacesResponseData extends $tea.Model {
  confidenceThresholds: string;
  similarityScore: number;
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

export class ContrastFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  identityInfo: string;
  materialInfo: string;
  passed: string;
  subCode: string;
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

export class DescribeAppInfoResponseAppInfoListDebugPackageInfo extends $tea.Model {
  version: string;
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

export class DescribeAppInfoResponseAppInfoListPackageInfo extends $tea.Model {
  version: string;
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

export class DescribeAppInfoResponseAppInfoList extends $tea.Model {
  endDate: string;
  icon: string;
  id: number;
  name: string;
  packageName: string;
  startDate: string;
  type: number;
  debugPackageInfo: DescribeAppInfoResponseAppInfoListDebugPackageInfo;
  packageInfo: DescribeAppInfoResponseAppInfoListPackageInfo;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
      debugPackageInfo: 'DebugPackageInfo',
      packageInfo: 'PackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageName: 'string',
      startDate: 'string',
      type: 'number',
      debugPackageInfo: DescribeAppInfoResponseAppInfoListDebugPackageInfo,
      packageInfo: DescribeAppInfoResponseAppInfoListPackageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseDeviceInfoListDeviceInfo extends $tea.Model {
  beginDay: string;
  bizType: string;
  deviceId: string;
  expiredDay: string;
  userDeviceId: string;
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

export class DescribeDeviceInfoResponseDeviceInfoList extends $tea.Model {
  deviceInfo: DescribeDeviceInfoResponseDeviceInfoListDeviceInfo[];
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: { 'type': 'array', 'itemType': DescribeDeviceInfoResponseDeviceInfoListDeviceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigResponseItems extends $tea.Model {
  bizName: string;
  bizType: string;
  gmtUpdated: number;
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

export class DescribeFaceUsageResponseFaceUsageList extends $tea.Model {
  date: string;
  totalCount: number;
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

export class DescribeFaceVerifyResponseResultObject extends $tea.Model {
  deviceToken: string;
  identityInfo: string;
  materialInfo: string;
  passed: string;
  subCode: string;
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

export class DescribeOssUploadTokenResponseOssUploadToken extends $tea.Model {
  bucket: string;
  endPoint: string;
  expired: number;
  key: string;
  path: string;
  secret: string;
  token: string;
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

export class DescribeUpdatePackageResultResponseAppInfoDebugPackageInfo extends $tea.Model {
  version: string;
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

export class DescribeUpdatePackageResultResponseAppInfoPackageInfo extends $tea.Model {
  version: string;
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

export class DescribeUpdatePackageResultResponseAppInfo extends $tea.Model {
  endDate: string;
  icon: string;
  id: number;
  name: string;
  packageName: string;
  startDate: string;
  type: number;
  debugPackageInfo: DescribeUpdatePackageResultResponseAppInfoDebugPackageInfo;
  packageInfo: DescribeUpdatePackageResultResponseAppInfoPackageInfo;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      icon: 'Icon',
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
      startDate: 'StartDate',
      type: 'Type',
      debugPackageInfo: 'DebugPackageInfo',
      packageInfo: 'PackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      icon: 'string',
      id: 'number',
      name: 'string',
      packageName: 'string',
      startDate: 'string',
      type: 'number',
      debugPackageInfo: DescribeUpdatePackageResultResponseAppInfoDebugPackageInfo,
      packageInfo: DescribeUpdatePackageResultResponseAppInfoPackageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseRecordsListMaterialIdCardInfo extends $tea.Model {
  address: string;
  authority: string;
  backImageUrl: string;
  birth: string;
  endDate: string;
  frontImageUrl: string;
  name: string;
  nationality: string;
  number: string;
  sex: string;
  startDate: string;
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

export class DescribeVerifyRecordsResponseRecordsListMaterial extends $tea.Model {
  faceImageUrl: string;
  idCardName: string;
  idCardNumber: string;
  idCardInfo: DescribeVerifyRecordsResponseRecordsListMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      faceImageUrl: 'FaceImageUrl',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageUrl: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardInfo: DescribeVerifyRecordsResponseRecordsListMaterialIdCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyRecordsResponseRecordsList extends $tea.Model {
  authorityComparisonScore: number;
  bizId: string;
  bizType: string;
  dataStats: string;
  finishTime: number;
  idCardFaceComparisonScore: number;
  status: number;
  verifyId: string;
  material: DescribeVerifyRecordsResponseRecordsListMaterial;
  static names(): { [key: string]: string } {
    return {
      authorityComparisonScore: 'AuthorityComparisonScore',
      bizId: 'BizId',
      bizType: 'BizType',
      dataStats: 'DataStats',
      finishTime: 'FinishTime',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      status: 'Status',
      verifyId: 'VerifyId',
      material: 'Material',
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
      status: 'number',
      verifyId: 'string',
      material: DescribeVerifyRecordsResponseRecordsListMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseMaterialIdCardInfo extends $tea.Model {
  address: string;
  authority: string;
  backImageUrl: string;
  birth: string;
  endDate: string;
  frontImageUrl: string;
  name: string;
  nationality: string;
  number: string;
  startDate: string;
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

export class DescribeVerifyResultResponseMaterial extends $tea.Model {
  faceGlobalUrl: string;
  faceImageUrl: string;
  faceMask: boolean;
  faceQuality: string;
  idCardName: string;
  idCardNumber: string;
  idCardInfo: DescribeVerifyResultResponseMaterialIdCardInfo;
  videoUrls: string[];
  static names(): { [key: string]: string } {
    return {
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      faceQuality: 'FaceQuality',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardInfo: 'IdCardInfo',
      videoUrls: 'VideoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'boolean',
      faceQuality: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardInfo: DescribeVerifyResultResponseMaterialIdCardInfo,
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponseVerifySettingList extends $tea.Model {
  bizName: string;
  bizType: string;
  solution: string;
  stepList: string[];
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

export class DescribeVerifyTokenResponseOssUploadToken extends $tea.Model {
  bucket: string;
  endPoint: string;
  expired: number;
  key: string;
  path: string;
  secret: string;
  token: string;
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

export class DescribeVerifyUsageResponseVerifyUsageList extends $tea.Model {
  bizType: string;
  date: string;
  failCount: number;
  passCount: number;
  totalCount: number;
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

export class DescribeWhitelistResponseItems extends $tea.Model {
  bizId: string;
  bizType: string;
  endDate: number;
  gmtCreate: number;
  gmtModified: number;
  id: number;
  idCardNum: string;
  startDate: number;
  uid: number;
  valid: number;
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

export class DescribeWhitelistSettingResponseItems extends $tea.Model {
  certNo: string;
  certifyId: string;
  gmtCreate: string;
  gmtModified: string;
  id: number;
  sceneId: number;
  status: string;
  validEndDate: string;
  validStartDate: string;
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $tea.Model {
  pitchAngle: number;
  rollAngle: number;
  yawAngle: number;
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $tea.Model {
  threshold: number;
  value: number;
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $tea.Model {
  blur: number;
  facequal: number;
  facetype: string;
  glasses: string;
  integrity: number;
  respirator: string;
  headpose: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  smiling: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      facequal: 'Facequal',
      facetype: 'Facetype',
      glasses: 'Glasses',
      integrity: 'Integrity',
      respirator: 'Respirator',
      headpose: 'Headpose',
      smiling: 'Smiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      facequal: 'number',
      facetype: 'string',
      glasses: 'string',
      integrity: 'number',
      respirator: 'string',
      headpose: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
      smiling: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect extends $tea.Model {
  height: number;
  left: number;
  top: number;
  width: number;
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfo extends $tea.Model {
  faceAttributes: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  faceRect: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect;
  static names(): { [key: string]: string } {
    return {
      faceAttributes: 'FaceAttributes',
      faceRect: 'FaceRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributes: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes,
      faceRect: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseDataFaceInfos extends $tea.Model {
  faceAttributesDetectInfo: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfo[];
  static names(): { [key: string]: string } {
    return {
      faceAttributesDetectInfo: 'FaceAttributesDetectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributesDetectInfo: { 'type': 'array', 'itemType': DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseData extends $tea.Model {
  imgHeight: number;
  imgWidth: number;
  faceInfos: DetectFaceAttributesResponseDataFaceInfos;
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
      faceInfos: DetectFaceAttributesResponseDataFaceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponseResultObject extends $tea.Model {
  accessKeyId: string;
  accessKeySecret: string;
  bucketName: string;
  certifyId: string;
  extParams: string;
  fileName: string;
  fileNamePrefix: string;
  message: string;
  ossEndPoint: string;
  presignedUrl: string;
  protocol: string;
  retCode: string;
  retCodeSub: string;
  retMessageSub: string;
  securityToken: string;
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

export class InitFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  certifyUrl: string;
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

export class LivenessFaceVerifyResponseResultObject extends $tea.Model {
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

export class VerifyDeviceResponseResultObject extends $tea.Model {
  extParams: string;
  hasNext: string;
  productRetCode: string;
  retCodeSub: string;
  retMessageSub: string;
  validationRetCode: string;
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

export class VerifyMaterialResponseMaterialIdCardInfo extends $tea.Model {
  address: string;
  authority: string;
  backImageUrl: string;
  birth: string;
  endDate: string;
  frontImageUrl: string;
  name: string;
  nationality: string;
  number: string;
  startDate: string;
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

export class VerifyMaterialResponseMaterial extends $tea.Model {
  faceGlobalUrl: string;
  faceImageUrl: string;
  faceMask: string;
  faceQuality: string;
  idCardName: string;
  idCardNumber: string;
  idCardInfo: VerifyMaterialResponseMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      faceGlobalUrl: 'FaceGlobalUrl',
      faceImageUrl: 'FaceImageUrl',
      faceMask: 'FaceMask',
      faceQuality: 'FaceQuality',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceGlobalUrl: 'string',
      faceImageUrl: 'string',
      faceMask: 'string',
      faceQuality: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      idCardInfo: VerifyMaterialResponseMaterialIdCardInfo,
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


  async compareFaceVerify(request: CompareFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<CompareFaceVerifyResponse>(await this.doRequest("CompareFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CompareFaceVerifyResponse({}));
  }

  async compareFaceVerifySimply(request: CompareFaceVerifyRequest): Promise<CompareFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceVerify(request, runtime);
  }

  async compareFaces(request: CompareFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareFacesResponse> {
    Util.validateModel(request);
    return $tea.cast<CompareFacesResponse>(await this.doRequest("CompareFaces", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CompareFacesResponse({}));
  }

  async compareFacesSimply(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaces(request, runtime);
  }

  async contrastFaceVerify(request: ContrastFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<ContrastFaceVerifyResponse>(await this.doRequest("ContrastFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new ContrastFaceVerifyResponse({}));
  }

  async contrastFaceVerifySimply(request: ContrastFaceVerifyRequest): Promise<ContrastFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.contrastFaceVerify(request, runtime);
  }

  async contrastFaceVerifyAdvance(request: ContrastFaceVerifyAdvanceRequest, runtime: $Util.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
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
    let contrastFaceVerifyReq = new ContrastFaceVerifyRequest({ });
    RPCUtil.convert(request, contrastFaceVerifyReq);
    if (!Util.isUnset(request.faceContrastFileObject)) {
      authResponse = await authClient.authorizeFileUploadWithOptions(authRequest, runtime);
      ossConfig.accessKeyId = authResponse.accessKeyId;
      ossConfig.endpoint = RPCUtil.getEndpoint(authResponse.endpoint, authResponse.useAccelerate, this._endpointType);
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

    let contrastFaceVerifyResp = await this.contrastFaceVerify(contrastFaceVerifyReq, runtime);
    return contrastFaceVerifyResp;
  }

  async createAuthKey(request: CreateAuthKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAuthKeyResponse>(await this.doRequest("CreateAuthKey", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateAuthKeyResponse({}));
  }

  async createAuthKeySimply(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthKey(request, runtime);
  }

  async createFaceConfig(request: CreateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateFaceConfigResponse>(await this.doRequest("CreateFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateFaceConfigResponse({}));
  }

  async createFaceConfigSimply(request: CreateFaceConfigRequest): Promise<CreateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceConfig(request, runtime);
  }

  async createRPSDK(request: CreateRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateRPSDKResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRPSDKResponse>(await this.doRequest("CreateRPSDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateRPSDKResponse({}));
  }

  async createRPSDKSimply(request: CreateRPSDKRequest): Promise<CreateRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRPSDK(request, runtime);
  }

  async createVerifySDK(request: CreateVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySDKResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVerifySDKResponse>(await this.doRequest("CreateVerifySDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateVerifySDKResponse({}));
  }

  async createVerifySDKSimply(request: CreateVerifySDKRequest): Promise<CreateVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySDK(request, runtime);
  }

  async createVerifySetting(request: CreateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVerifySettingResponse>(await this.doRequest("CreateVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateVerifySettingResponse({}));
  }

  async createVerifySettingSimply(request: CreateVerifySettingRequest): Promise<CreateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySetting(request, runtime);
  }

  async createWhitelist(request: CreateWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWhitelistResponse>(await this.doRequest("CreateWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateWhitelistResponse({}));
  }

  async createWhitelistSimply(request: CreateWhitelistRequest): Promise<CreateWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelist(request, runtime);
  }

  async createWhitelistSetting(request: CreateWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWhitelistSettingResponse>(await this.doRequest("CreateWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateWhitelistSettingResponse({}));
  }

  async createWhitelistSettingSimply(request: CreateWhitelistSettingRequest): Promise<CreateWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelistSetting(request, runtime);
  }

  async deleteWhitelist(request: DeleteWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteWhitelistResponse>(await this.doRequest("DeleteWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DeleteWhitelistResponse({}));
  }

  async deleteWhitelistSimply(request: DeleteWhitelistRequest): Promise<DeleteWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelist(request, runtime);
  }

  async deleteWhitelistSetting(request: DeleteWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteWhitelistSettingResponse>(await this.doRequest("DeleteWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DeleteWhitelistSettingResponse({}));
  }

  async deleteWhitelistSettingSimply(request: DeleteWhitelistSettingRequest): Promise<DeleteWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelistSetting(request, runtime);
  }

  async describeAppInfo(request: DescribeAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAppInfoResponse>(await this.doRequest("DescribeAppInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeAppInfoResponse({}));
  }

  async describeAppInfoSimply(request: DescribeAppInfoRequest): Promise<DescribeAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppInfo(request, runtime);
  }

  async describeDeviceInfo(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDeviceInfoResponse>(await this.doRequest("DescribeDeviceInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeDeviceInfoResponse({}));
  }

  async describeDeviceInfoSimply(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfo(request, runtime);
  }

  async describeFaceConfig(request: DescribeFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceConfigResponse>(await this.doRequest("DescribeFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceConfigResponse({}));
  }

  async describeFaceConfigSimply(request: DescribeFaceConfigRequest): Promise<DescribeFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceConfig(request, runtime);
  }

  async describeFaceUsage(request: DescribeFaceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceUsageResponse>(await this.doRequest("DescribeFaceUsage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceUsageResponse({}));
  }

  async describeFaceUsageSimply(request: DescribeFaceUsageRequest): Promise<DescribeFaceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceUsage(request, runtime);
  }

  async describeFaceVerify(request: DescribeFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceVerifyResponse>(await this.doRequest("DescribeFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceVerifyResponse({}));
  }

  async describeFaceVerifySimply(request: DescribeFaceVerifyRequest): Promise<DescribeFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceVerify(request, runtime);
  }

  async describeOssUploadToken(request: DescribeOssUploadTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOssUploadTokenResponse>(await this.doRequest("DescribeOssUploadToken", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeOssUploadTokenResponse({}));
  }

  async describeOssUploadTokenSimply(request: DescribeOssUploadTokenRequest): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssUploadToken(request, runtime);
  }

  async describeRPSDK(request: DescribeRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRPSDKResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRPSDKResponse>(await this.doRequest("DescribeRPSDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeRPSDKResponse({}));
  }

  async describeRPSDKSimply(request: DescribeRPSDKRequest): Promise<DescribeRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRPSDK(request, runtime);
  }

  async describeSdkUrl(request: DescribeSdkUrlRequest, runtime: $Util.RuntimeOptions): Promise<DescribeSdkUrlResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeSdkUrlResponse>(await this.doRequest("DescribeSdkUrl", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeSdkUrlResponse({}));
  }

  async describeSdkUrlSimply(request: DescribeSdkUrlRequest): Promise<DescribeSdkUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeSdkUrl(request, runtime);
  }

  async describeUpdatePackageResult(request: DescribeUpdatePackageResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUpdatePackageResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUpdatePackageResultResponse>(await this.doRequest("DescribeUpdatePackageResult", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeUpdatePackageResultResponse({}));
  }

  async describeUpdatePackageResultSimply(request: DescribeUpdatePackageResultRequest): Promise<DescribeUpdatePackageResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUpdatePackageResult(request, runtime);
  }

  async describeUploadInfo(request: DescribeUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUploadInfoResponse>(await this.doRequest("DescribeUploadInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeUploadInfoResponse({}));
  }

  async describeUploadInfoSimply(request: DescribeUploadInfoRequest): Promise<DescribeUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadInfo(request, runtime);
  }

  async describeUserStatus(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserStatusResponse>(await this.doRequest("DescribeUserStatus", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatusSimply(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatus(request, runtime);
  }

  async describeVerifyRecords(request: DescribeVerifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyRecordsResponse>(await this.doRequest("DescribeVerifyRecords", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyRecordsResponse({}));
  }

  async describeVerifyRecordsSimply(request: DescribeVerifyRecordsRequest): Promise<DescribeVerifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyRecords(request, runtime);
  }

  async describeVerifyResult(request: DescribeVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyResultResponse>(await this.doRequest("DescribeVerifyResult", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyResultResponse({}));
  }

  async describeVerifyResultSimply(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyResult(request, runtime);
  }

  async describeVerifySDK(request: DescribeVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySDKResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifySDKResponse>(await this.doRequest("DescribeVerifySDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifySDKResponse({}));
  }

  async describeVerifySDKSimply(request: DescribeVerifySDKRequest): Promise<DescribeVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySDK(request, runtime);
  }

  async describeVerifySetting(request: DescribeVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifySettingResponse>(await this.doRequest("DescribeVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifySettingResponse({}));
  }

  async describeVerifySettingSimply(request: DescribeVerifySettingRequest): Promise<DescribeVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySetting(request, runtime);
  }

  async describeVerifyToken(request: DescribeVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyTokenResponse>(await this.doRequest("DescribeVerifyToken", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyTokenResponse({}));
  }

  async describeVerifyTokenSimply(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyToken(request, runtime);
  }

  async describeVerifyUsage(request: DescribeVerifyUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyUsageResponse>(await this.doRequest("DescribeVerifyUsage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyUsageResponse({}));
  }

  async describeVerifyUsageSimply(request: DescribeVerifyUsageRequest): Promise<DescribeVerifyUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyUsage(request, runtime);
  }

  async describeWhitelist(request: DescribeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeWhitelistResponse>(await this.doRequest("DescribeWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeWhitelistResponse({}));
  }

  async describeWhitelistSimply(request: DescribeWhitelistRequest): Promise<DescribeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelist(request, runtime);
  }

  async describeWhitelistSetting(request: DescribeWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeWhitelistSettingResponse>(await this.doRequest("DescribeWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeWhitelistSettingResponse({}));
  }

  async describeWhitelistSettingSimply(request: DescribeWhitelistSettingRequest): Promise<DescribeWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelistSetting(request, runtime);
  }

  async detectFaceAttributes(request: DetectFaceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DetectFaceAttributesResponse>(await this.doRequest("DetectFaceAttributes", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DetectFaceAttributesResponse({}));
  }

  async detectFaceAttributesSimply(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceAttributes(request, runtime);
  }

  async initDevice(request: InitDeviceRequest, runtime: $Util.RuntimeOptions): Promise<InitDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<InitDeviceResponse>(await this.doRequest("InitDevice", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new InitDeviceResponse({}));
  }

  async initDeviceSimply(request: InitDeviceRequest): Promise<InitDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initDevice(request, runtime);
  }

  async initFaceVerify(request: InitFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<InitFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<InitFaceVerifyResponse>(await this.doRequest("InitFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new InitFaceVerifyResponse({}));
  }

  async initFaceVerifySimply(request: InitFaceVerifyRequest): Promise<InitFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initFaceVerify(request, runtime);
  }

  async livenessFaceVerify(request: LivenessFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<LivenessFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<LivenessFaceVerifyResponse>(await this.doRequest("LivenessFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new LivenessFaceVerifyResponse({}));
  }

  async livenessFaceVerifySimply(request: LivenessFaceVerifyRequest): Promise<LivenessFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessFaceVerify(request, runtime);
  }

  async modifyDeviceInfo(request: ModifyDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDeviceInfoResponse>(await this.doRequest("ModifyDeviceInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new ModifyDeviceInfoResponse({}));
  }

  async modifyDeviceInfoSimply(request: ModifyDeviceInfoRequest): Promise<ModifyDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceInfo(request, runtime);
  }

  async updateAppPackage(request: UpdateAppPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAppPackageResponse>(await this.doRequest("UpdateAppPackage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateAppPackageResponse({}));
  }

  async updateAppPackageSimply(request: UpdateAppPackageRequest): Promise<UpdateAppPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppPackage(request, runtime);
  }

  async updateFaceConfig(request: UpdateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateFaceConfigResponse>(await this.doRequest("UpdateFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateFaceConfigResponse({}));
  }

  async updateFaceConfigSimply(request: UpdateFaceConfigRequest): Promise<UpdateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceConfig(request, runtime);
  }

  async updateVerifySetting(request: UpdateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateVerifySettingResponse>(await this.doRequest("UpdateVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateVerifySettingResponse({}));
  }

  async updateVerifySettingSimply(request: UpdateVerifySettingRequest): Promise<UpdateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVerifySetting(request, runtime);
  }

  async verifyDevice(request: VerifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyDeviceResponse>(await this.doRequest("VerifyDevice", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new VerifyDeviceResponse({}));
  }

  async verifyDeviceSimply(request: VerifyDeviceRequest): Promise<VerifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDevice(request, runtime);
  }

  async verifyMaterial(request: VerifyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMaterialResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyMaterialResponse>(await this.doRequest("VerifyMaterial", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new VerifyMaterialResponse({}));
  }

  async verifyMaterialSimply(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMaterial(request, runtime);
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

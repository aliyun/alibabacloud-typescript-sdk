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

export class DescribeWhitelistSettingRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  serviceCode: string;
  sceneId?: number;
  certifyId?: string;
  certNo?: string;
  validStartDate?: number;
  validEndDate?: number;
  status?: string;
  pageSize: number;
  currentPage: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      serviceCode: 'ServiceCode',
      sceneId: 'SceneId',
      certifyId: 'CertifyId',
      certNo: 'CertNo',
      validStartDate: 'ValidStartDate',
      validEndDate: 'ValidEndDate',
      status: 'Status',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      serviceCode: 'string',
      sceneId: 'number',
      certifyId: 'string',
      certNo: 'string',
      validStartDate: 'number',
      validEndDate: 'number',
      status: 'string',
      pageSize: 'number',
      currentPage: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistSettingResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  items: DescribeWhitelistSettingResponseItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistSettingResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistSettingRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  serviceCode: string;
  ids: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      serviceCode: 'ServiceCode',
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      serviceCode: 'string',
      ids: 'string',
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

export class CreateWhitelistSettingRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  serviceCode: string;
  sceneId?: number;
  certifyId?: string;
  certNo?: string;
  validDay: number;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      lang: 'Lang',
      serviceCode: 'ServiceCode',
      sceneId: 'SceneId',
      certifyId: 'CertifyId',
      certNo: 'CertNo',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      lang: 'string',
      serviceCode: 'string',
      sceneId: 'number',
      certifyId: 'string',
      certNo: 'string',
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

export class DescribeWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizId?: string;
  idCardNum?: string;
  validStartDate?: string;
  validEndDate?: string;
  valid?: string;
  pageSize: number;
  currentPage: number;
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

export class DescribeWhitelistResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  currentPage: number;
  pageSize: number;
  items: DescribeWhitelistResponseItems[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      currentPage: 'number',
      pageSize: 'number',
      items: { 'type': 'array', 'itemType': DescribeWhitelistResponseItems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  ids: string;
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

export class CreateWhitelistRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizType?: string;
  bizId: string;
  idCardNum: string;
  validDay: string;
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

export class UpdateFaceConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizType: string;
  bizName: string;
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

export class CreateFaceConfigRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  bizType: string;
  bizName: string;
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
  crop?: string;
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
      crop: 'Crop',
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
      crop: 'string',
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
  crop?: string;
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
      crop: 'Crop',
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
      crop: 'string',
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

export class DescribeSdkUrlRequest extends $tea.Model {
  id: number;
  debug?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      debug: 'Debug',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      debug: 'boolean',
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

export class UpdateAppPackageRequest extends $tea.Model {
  id?: number;
  packageUrl: string;
  platform?: string;
  debug?: boolean;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      packageUrl: 'PackageUrl',
      platform: 'Platform',
      debug: 'Debug',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeAppInfoRequest extends $tea.Model {
  pageSize?: number;
  currentPage?: number;
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      platform: 'Platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageSize: 'number',
      currentPage: 'number',
      platform: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppInfoResponse extends $tea.Model {
  requestId: string;
  pageSize: number;
  currentPage: number;
  totalCount: number;
  appInfoList: DescribeAppInfoResponseAppInfoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      totalCount: 'TotalCount',
      appInfoList: 'AppInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      totalCount: 'number',
      appInfoList: { 'type': 'array', 'itemType': DescribeAppInfoResponseAppInfoList },
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
  crop?: string;
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
      crop: 'Crop',
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
      crop: 'string',
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
  crop?: string;
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
      crop: 'Crop',
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
      crop: 'string',
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

export class InitDeviceResponse extends $tea.Model {
  requestId: string;
  message: string;
  code: string;
  resultObject: InitDeviceResponseResultObject;
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
      resultObject: InitDeviceResponseResultObject,
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
  crop?: string;
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
      crop: 'Crop',
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
      crop: 'string',
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

export class DescribeFaceVerifyRequest extends $tea.Model {
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

export class VerifyDeviceRequest extends $tea.Model {
  certifyId?: string;
  certifyData?: string;
  appVersion?: string;
  extInfo?: string;
  deviceToken?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      certifyData: 'CertifyData',
      appVersion: 'AppVersion',
      extInfo: 'ExtInfo',
      deviceToken: 'DeviceToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      certifyData: 'string',
      appVersion: 'string',
      extInfo: 'string',
      deviceToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponse extends $tea.Model {
  requestId: string;
  code: string;
  message: string;
  resultObject: VerifyDeviceResponseResultObject;
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
      resultObject: VerifyDeviceResponseResultObject,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoRequest extends $tea.Model {
  deviceId: string;
  userDeviceId?: string;
  bizType?: string;
  duration?: string;
  expiredDay?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      userDeviceId: 'UserDeviceId',
      bizType: 'BizType',
      duration: 'Duration',
      expiredDay: 'ExpiredDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyDeviceInfoResponse extends $tea.Model {
  requestId: string;
  deviceId: string;
  userDeviceId: string;
  bizType: string;
  beginDay: string;
  expiredDay: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      deviceId: 'DeviceId',
      userDeviceId: 'UserDeviceId',
      bizType: 'BizType',
      beginDay: 'BeginDay',
      expiredDay: 'ExpiredDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      deviceId: 'string',
      userDeviceId: 'string',
      bizType: 'string',
      beginDay: 'string',
      expiredDay: 'string',
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

export class DescribeDeviceInfoRequest extends $tea.Model {
  pageSize?: number;
  currentPage?: number;
  deviceId?: string;
  bizType?: string;
  userDeviceId?: string;
  expiredStartDay?: string;
  expiredEndDay?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeDeviceInfoResponse extends $tea.Model {
  requestId: string;
  pageSize: number;
  currentPage: number;
  totalCount: number;
  deviceInfoList: DescribeDeviceInfoResponseDeviceInfoList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      totalCount: 'TotalCount',
      deviceInfoList: 'DeviceInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      pageSize: 'number',
      currentPage: 'number',
      totalCount: 'number',
      deviceInfoList: DescribeDeviceInfoResponseDeviceInfoList,
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

export class CreateAuthKeyRequest extends $tea.Model {
  bizType?: string;
  userDeviceId?: string;
  test?: boolean;
  authYears?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      userDeviceId: 'UserDeviceId',
      test: 'Test',
      authYears: 'AuthYears',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class CreateAuthKeyResponse extends $tea.Model {
  requestId: string;
  authKey: string;
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

export class DetectFaceAttributesRequest extends $tea.Model {
  materialValue: string;
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

export class DetectFaceAttributesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  message: string;
  data: DetectFaceAttributesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: DetectFaceAttributesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesRequest extends $tea.Model {
  targetImageType?: string;
  sourceImageType?: string;
  sourceImageValue?: string;
  targetImageValue?: string;
  static names(): { [key: string]: string } {
    return {
      targetImageType: 'TargetImageType',
      sourceImageType: 'SourceImageType',
      sourceImageValue: 'SourceImageValue',
      targetImageValue: 'TargetImageValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetImageType: 'string',
      sourceImageType: 'string',
      sourceImageValue: 'string',
      targetImageValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponse extends $tea.Model {
  requestId: string;
  success: boolean;
  code: string;
  message: string;
  data: CompareFacesResponseData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      code: 'Code',
      message: 'Message',
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      code: 'string',
      message: 'string',
      data: CompareFacesResponseData,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceUsageRequest extends $tea.Model {
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startDate: 'string',
      endDate: 'string',
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

export class DescribeVerifyRecordsRequest extends $tea.Model {
  totalCount?: number;
  pageSize: number;
  currentPage: number;
  bizType?: string;
  startDate?: string;
  endDate?: string;
  bizId?: string;
  idCardNum?: string;
  statusList?: string;
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
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

export class DescribeVerifyRecordsResponse extends $tea.Model {
  requestId: string;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  queryId: string;
  recordsList: DescribeVerifyRecordsResponseRecordsList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      pageSize: 'PageSize',
      currentPage: 'CurrentPage',
      queryId: 'QueryId',
      recordsList: 'RecordsList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      pageSize: 'number',
      currentPage: 'number',
      queryId: 'string',
      recordsList: { 'type': 'array', 'itemType': DescribeVerifyRecordsResponseRecordsList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateVerifySettingRequest extends $tea.Model {
  bizType: string;
  bizName?: string;
  solution?: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  static names(): { [key: string]: string } {
    return {
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

export class UpdateVerifySettingResponse extends $tea.Model {
  requestId: string;
  bizType: string;
  bizName: string;
  solution: string;
  stepList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizType: 'BizType',
      bizName: 'BizName',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizType: 'string',
      bizName: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingRequest extends $tea.Model {
  bizType: string;
  bizName: string;
  solution: string;
  guideStep?: boolean;
  privacyStep?: boolean;
  resultStep?: boolean;
  static names(): { [key: string]: string } {
    return {
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

export class CreateVerifySettingResponse extends $tea.Model {
  requestId: string;
  bizType: string;
  bizName: string;
  solution: string;
  stepList: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      bizType: 'BizType',
      bizName: 'BizName',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      bizType: 'string',
      bizName: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
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

export class DescribeVerifyUsageRequest extends $tea.Model {
  bizType?: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      startDate: 'string',
      endDate: 'string',
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
  requestId: string;
  enabled: boolean;
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
  requestId: string;
  accessid: string;
  policy: string;
  signature: string;
  folder: string;
  host: string;
  expire: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      accessid: 'Accessid',
      policy: 'Policy',
      signature: 'Signature',
      folder: 'Folder',
      host: 'Host',
      expire: 'Expire',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      accessid: 'string',
      policy: 'string',
      signature: 'string',
      folder: 'string',
      host: 'string',
      expire: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRPSDKRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  taskId: string;
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

export class CreateRPSDKRequest extends $tea.Model {
  sourceIp?: string;
  lang?: string;
  appUrl: string;
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

export class VerifyMaterialRequest extends $tea.Model {
  idCardBackImageUrl?: string;
  faceImageUrl: string;
  bizType: string;
  bizId: string;
  name: string;
  idCardNumber: string;
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

export class VerifyMaterialResponse extends $tea.Model {
  requestId: string;
  verifyToken: string;
  verifyStatus: number;
  authorityComparisionScore: number;
  idCardFaceComparisonScore: number;
  material: VerifyMaterialResponseMaterial;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifyToken: 'VerifyToken',
      verifyStatus: 'VerifyStatus',
      authorityComparisionScore: 'AuthorityComparisionScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifyToken: 'string',
      verifyStatus: 'number',
      authorityComparisionScore: 'number',
      idCardFaceComparisonScore: 'number',
      material: VerifyMaterialResponseMaterial,
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
  requestId: string;
  verifyStatus: number;
  authorityComparisionScore: number;
  faceComparisonScore: number;
  idCardFaceComparisonScore: number;
  material: DescribeVerifyResultResponseMaterial;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      verifyStatus: 'VerifyStatus',
      authorityComparisionScore: 'AuthorityComparisionScore',
      faceComparisonScore: 'FaceComparisonScore',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      verifyStatus: 'number',
      authorityComparisionScore: 'number',
      faceComparisonScore: 'number',
      idCardFaceComparisonScore: 'number',
      material: DescribeVerifyResultResponseMaterial,
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

export class DescribeVerifyTokenRequest extends $tea.Model {
  idCardBackImageUrl?: string;
  bizType: string;
  failedRedirectUrl?: string;
  faceRetainedImageUrl?: string;
  callbackSeed?: string;
  idCardFrontImageUrl?: string;
  userId?: string;
  bizId: string;
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

export class DescribeWhitelistSettingResponseItems extends $tea.Model {
  id: number;
  sceneId: number;
  validStartDate: string;
  validEndDate: string;
  certNo: string;
  certifyId: string;
  status: string;
  gmtCreate: string;
  gmtModified: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      sceneId: 'SceneId',
      validStartDate: 'ValidStartDate',
      validEndDate: 'ValidEndDate',
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      status: 'Status',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      sceneId: 'number',
      validStartDate: 'string',
      validEndDate: 'string',
      certNo: 'string',
      certifyId: 'string',
      status: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWhitelistResponseItems extends $tea.Model {
  id: number;
  uid: number;
  bizType: string;
  startDate: number;
  endDate: number;
  idCardNum: string;
  bizId: string;
  valid: number;
  gmtCreate: number;
  gmtModified: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      uid: 'Uid',
      bizType: 'BizType',
      startDate: 'StartDate',
      endDate: 'EndDate',
      idCardNum: 'IdCardNum',
      bizId: 'BizId',
      valid: 'Valid',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      uid: 'number',
      bizType: 'string',
      startDate: 'number',
      endDate: 'number',
      idCardNum: 'string',
      bizId: 'string',
      valid: 'number',
      gmtCreate: 'number',
      gmtModified: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceConfigResponseItems extends $tea.Model {
  bizType: string;
  bizName: string;
  gmtUpdated: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizName: 'BizName',
      gmtUpdated: 'GmtUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizName: 'string',
      gmtUpdated: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  subCode: string;
  materialInfo: string;
  passed: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      subCode: 'SubCode',
      materialInfo: 'MaterialInfo',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      subCode: 'string',
      materialInfo: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  verifyScore: number;
  passed: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      verifyScore: 'VerifyScore',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      verifyScore: 'number',
      passed: 'string',
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

export class DescribeUpdatePackageResultResponseAppInfo extends $tea.Model {
  id: number;
  name: string;
  packageName: string;
  icon: string;
  startDate: string;
  endDate: string;
  type: number;
  packageInfo: DescribeUpdatePackageResultResponseAppInfoPackageInfo;
  debugPackageInfo: DescribeUpdatePackageResultResponseAppInfoDebugPackageInfo;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
      icon: 'Icon',
      startDate: 'StartDate',
      endDate: 'EndDate',
      type: 'Type',
      packageInfo: 'PackageInfo',
      debugPackageInfo: 'DebugPackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      packageName: 'string',
      icon: 'string',
      startDate: 'string',
      endDate: 'string',
      type: 'number',
      packageInfo: DescribeUpdatePackageResultResponseAppInfoPackageInfo,
      debugPackageInfo: DescribeUpdatePackageResultResponseAppInfoDebugPackageInfo,
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

export class DescribeAppInfoResponseAppInfoList extends $tea.Model {
  id: number;
  name: string;
  packageName: string;
  icon: string;
  startDate: string;
  endDate: string;
  type: number;
  packageInfo: DescribeAppInfoResponseAppInfoListPackageInfo;
  debugPackageInfo: DescribeAppInfoResponseAppInfoListDebugPackageInfo;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      packageName: 'PackageName',
      icon: 'Icon',
      startDate: 'StartDate',
      endDate: 'EndDate',
      type: 'Type',
      packageInfo: 'PackageInfo',
      debugPackageInfo: 'DebugPackageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      packageName: 'string',
      icon: 'string',
      startDate: 'string',
      endDate: 'string',
      type: 'number',
      packageInfo: DescribeAppInfoResponseAppInfoListPackageInfo,
      debugPackageInfo: DescribeAppInfoResponseAppInfoListDebugPackageInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseResultObject extends $tea.Model {
  certifyId: string;
  subCode: string;
  materialInfo: string;
  identityInfo: string;
  passed: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      subCode: 'SubCode',
      materialInfo: 'MaterialInfo',
      identityInfo: 'IdentityInfo',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      subCode: 'string',
      materialInfo: 'string',
      identityInfo: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitDeviceResponseResultObject extends $tea.Model {
  certifyId: string;
  protocol: string;
  extParams: string;
  retCode: string;
  retCodeSub: string;
  retMessageSub: string;
  message: string;
  ossEndPoint: string;
  accessKeyId: string;
  accessKeySecret: string;
  securityToken: string;
  bucketName: string;
  fileNamePrefix: string;
  fileName: string;
  presignedUrl: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      protocol: 'Protocol',
      extParams: 'ExtParams',
      retCode: 'RetCode',
      retCodeSub: 'RetCodeSub',
      retMessageSub: 'RetMessageSub',
      message: 'Message',
      ossEndPoint: 'OssEndPoint',
      accessKeyId: 'AccessKeyId',
      accessKeySecret: 'AccessKeySecret',
      securityToken: 'SecurityToken',
      bucketName: 'BucketName',
      fileNamePrefix: 'FileNamePrefix',
      fileName: 'FileName',
      presignedUrl: 'PresignedUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      protocol: 'string',
      extParams: 'string',
      retCode: 'string',
      retCodeSub: 'string',
      retMessageSub: 'string',
      message: 'string',
      ossEndPoint: 'string',
      accessKeyId: 'string',
      accessKeySecret: 'string',
      securityToken: 'string',
      bucketName: 'string',
      fileNamePrefix: 'string',
      fileName: 'string',
      presignedUrl: 'string',
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

export class DescribeFaceVerifyResponseResultObject extends $tea.Model {
  subCode: string;
  materialInfo: string;
  identityInfo: string;
  deviceToken: string;
  passed: string;
  static names(): { [key: string]: string } {
    return {
      subCode: 'SubCode',
      materialInfo: 'MaterialInfo',
      identityInfo: 'IdentityInfo',
      deviceToken: 'DeviceToken',
      passed: 'Passed',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subCode: 'string',
      materialInfo: 'string',
      identityInfo: 'string',
      deviceToken: 'string',
      passed: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyDeviceResponseResultObject extends $tea.Model {
  validationRetCode: string;
  productRetCode: string;
  retCodeSub: string;
  retMessageSub: string;
  hasNext: string;
  extParams: string;
  static names(): { [key: string]: string } {
    return {
      validationRetCode: 'ValidationRetCode',
      productRetCode: 'ProductRetCode',
      retCodeSub: 'RetCodeSub',
      retMessageSub: 'RetMessageSub',
      hasNext: 'HasNext',
      extParams: 'ExtParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      validationRetCode: 'string',
      productRetCode: 'string',
      retCodeSub: 'string',
      retMessageSub: 'string',
      hasNext: 'string',
      extParams: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseDeviceInfoListDeviceInfo extends $tea.Model {
  deviceId: string;
  userDeviceId: string;
  bizType: string;
  beginDay: string;
  expiredDay: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      userDeviceId: 'UserDeviceId',
      bizType: 'BizType',
      beginDay: 'BeginDay',
      expiredDay: 'ExpiredDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      userDeviceId: 'string',
      bizType: 'string',
      beginDay: 'string',
      expiredDay: 'string',
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect extends $tea.Model {
  top: number;
  left: number;
  width: number;
  height: number;
  static names(): { [key: string]: string } {
    return {
      top: 'Top',
      left: 'Left',
      width: 'Width',
      height: 'Height',
    };
  }

  static types(): { [key: string]: any } {
    return {
      top: 'number',
      left: 'number',
      width: 'number',
      height: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $tea.Model {
  value: number;
  threshold: number;
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

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $tea.Model {
  glasses: string;
  facetype: string;
  blur: number;
  facequal: number;
  integrity: number;
  respirator: string;
  smiling: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  headpose: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  static names(): { [key: string]: string } {
    return {
      glasses: 'Glasses',
      facetype: 'Facetype',
      blur: 'Blur',
      facequal: 'Facequal',
      integrity: 'Integrity',
      respirator: 'Respirator',
      smiling: 'Smiling',
      headpose: 'Headpose',
    };
  }

  static types(): { [key: string]: any } {
    return {
      glasses: 'string',
      facetype: 'string',
      blur: 'number',
      facequal: 'number',
      integrity: 'number',
      respirator: 'string',
      smiling: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
      headpose: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfo extends $tea.Model {
  faceRect: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect;
  faceAttributes: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  static names(): { [key: string]: string } {
    return {
      faceRect: 'FaceRect',
      faceAttributes: 'FaceAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceRect: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceRect,
      faceAttributes: DetectFaceAttributesResponseDataFaceInfosFaceAttributesDetectInfoFaceAttributes,
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
  imgWidth: number;
  imgHeight: number;
  faceInfos: DetectFaceAttributesResponseDataFaceInfos;
  static names(): { [key: string]: string } {
    return {
      imgWidth: 'ImgWidth',
      imgHeight: 'ImgHeight',
      faceInfos: 'FaceInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imgWidth: 'number',
      imgHeight: 'number',
      faceInfos: DetectFaceAttributesResponseDataFaceInfos,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseData extends $tea.Model {
  similarityScore: number;
  confidenceThresholds: string;
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

export class DescribeVerifyRecordsResponseRecordsListMaterialIdCardInfo extends $tea.Model {
  frontImageUrl: string;
  backImageUrl: string;
  name: string;
  number: string;
  address: string;
  birth: string;
  sex: string;
  nationality: string;
  authority: string;
  startDate: string;
  endDate: string;
  static names(): { [key: string]: string } {
    return {
      frontImageUrl: 'FrontImageUrl',
      backImageUrl: 'BackImageUrl',
      name: 'Name',
      number: 'Number',
      address: 'Address',
      birth: 'Birth',
      sex: 'Sex',
      nationality: 'Nationality',
      authority: 'Authority',
      startDate: 'StartDate',
      endDate: 'EndDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frontImageUrl: 'string',
      backImageUrl: 'string',
      name: 'string',
      number: 'string',
      address: 'string',
      birth: 'string',
      sex: 'string',
      nationality: 'string',
      authority: 'string',
      startDate: 'string',
      endDate: 'string',
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
  bizType: string;
  bizId: string;
  dataStats: string;
  verifyId: string;
  finishTime: number;
  status: number;
  idCardFaceComparisonScore: number;
  authorityComparisonScore: number;
  material: DescribeVerifyRecordsResponseRecordsListMaterial;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizId: 'BizId',
      dataStats: 'DataStats',
      verifyId: 'VerifyId',
      finishTime: 'FinishTime',
      status: 'Status',
      idCardFaceComparisonScore: 'IdCardFaceComparisonScore',
      authorityComparisonScore: 'AuthorityComparisonScore',
      material: 'Material',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizId: 'string',
      dataStats: 'string',
      verifyId: 'string',
      finishTime: 'number',
      status: 'number',
      idCardFaceComparisonScore: 'number',
      authorityComparisonScore: 'number',
      material: DescribeVerifyRecordsResponseRecordsListMaterial,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySettingResponseVerifySettingList extends $tea.Model {
  bizType: string;
  bizName: string;
  solution: string;
  stepList: string[];
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      bizName: 'BizName',
      solution: 'Solution',
      stepList: 'StepList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      bizName: 'string',
      solution: 'string',
      stepList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyUsageResponseVerifyUsageList extends $tea.Model {
  bizType: string;
  date: string;
  totalCount: number;
  passCount: number;
  failCount: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      date: 'Date',
      totalCount: 'TotalCount',
      passCount: 'PassCount',
      failCount: 'FailCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      date: 'string',
      totalCount: 'number',
      passCount: 'number',
      failCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseMaterialIdCardInfo extends $tea.Model {
  number: string;
  address: string;
  nationality: string;
  endDate: string;
  frontImageUrl: string;
  authority: string;
  name: string;
  birth: string;
  backImageUrl: string;
  startDate: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      address: 'Address',
      nationality: 'Nationality',
      endDate: 'EndDate',
      frontImageUrl: 'FrontImageUrl',
      authority: 'Authority',
      name: 'Name',
      birth: 'Birth',
      backImageUrl: 'BackImageUrl',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      address: 'string',
      nationality: 'string',
      endDate: 'string',
      frontImageUrl: 'string',
      authority: 'string',
      name: 'string',
      birth: 'string',
      backImageUrl: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseMaterial extends $tea.Model {
  faceImageUrl: string;
  idCardName: string;
  idCardNumber: string;
  faceQuality: string;
  faceGlobalUrl: string;
  faceMask: string;
  idCardInfo: VerifyMaterialResponseMaterialIdCardInfo;
  static names(): { [key: string]: string } {
    return {
      faceImageUrl: 'FaceImageUrl',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      faceQuality: 'FaceQuality',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceMask: 'FaceMask',
      idCardInfo: 'IdCardInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageUrl: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      faceQuality: 'string',
      faceGlobalUrl: 'string',
      faceMask: 'string',
      idCardInfo: VerifyMaterialResponseMaterialIdCardInfo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseMaterialIdCardInfo extends $tea.Model {
  number: string;
  address: string;
  nationality: string;
  endDate: string;
  frontImageUrl: string;
  authority: string;
  name: string;
  birth: string;
  backImageUrl: string;
  startDate: string;
  static names(): { [key: string]: string } {
    return {
      number: 'Number',
      address: 'Address',
      nationality: 'Nationality',
      endDate: 'EndDate',
      frontImageUrl: 'FrontImageUrl',
      authority: 'Authority',
      name: 'Name',
      birth: 'Birth',
      backImageUrl: 'BackImageUrl',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      number: 'string',
      address: 'string',
      nationality: 'string',
      endDate: 'string',
      frontImageUrl: 'string',
      authority: 'string',
      name: 'string',
      birth: 'string',
      backImageUrl: 'string',
      startDate: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseMaterial extends $tea.Model {
  faceImageUrl: string;
  idCardName: string;
  idCardNumber: string;
  faceQuality: string;
  faceGlobalUrl: string;
  faceMask: boolean;
  idCardInfo: DescribeVerifyResultResponseMaterialIdCardInfo;
  videoUrls: string[];
  static names(): { [key: string]: string } {
    return {
      faceImageUrl: 'FaceImageUrl',
      idCardName: 'IdCardName',
      idCardNumber: 'IdCardNumber',
      faceQuality: 'FaceQuality',
      faceGlobalUrl: 'FaceGlobalUrl',
      faceMask: 'FaceMask',
      idCardInfo: 'IdCardInfo',
      videoUrls: 'VideoUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceImageUrl: 'string',
      idCardName: 'string',
      idCardNumber: 'string',
      faceQuality: 'string',
      faceGlobalUrl: 'string',
      faceMask: 'boolean',
      idCardInfo: DescribeVerifyResultResponseMaterialIdCardInfo,
      videoUrls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseOssUploadToken extends $tea.Model {
  bucket: string;
  endPoint: string;
  path: string;
  expired: number;
  secret: string;
  key: string;
  token: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      path: 'Path',
      expired: 'Expired',
      secret: 'Secret',
      key: 'Key',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endPoint: 'string',
      path: 'string',
      expired: 'number',
      secret: 'string',
      key: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseOssUploadToken extends $tea.Model {
  bucket: string;
  endPoint: string;
  path: string;
  expired: number;
  secret: string;
  key: string;
  token: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      endPoint: 'EndPoint',
      path: 'Path',
      expired: 'Expired',
      secret: 'Secret',
      key: 'Key',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      endPoint: 'string',
      path: 'string',
      expired: 'number',
      secret: 'string',
      key: 'string',
      token: 'string',
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


  async describeWhitelistSetting(request: DescribeWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeWhitelistSettingResponse>(await this.doRequest("DescribeWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeWhitelistSettingResponse({}));
  }

  async describeWhitelistSettingSimply(request: DescribeWhitelistSettingRequest): Promise<DescribeWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelistSetting(request, runtime);
  }

  async deleteWhitelistSetting(request: DeleteWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteWhitelistSettingResponse>(await this.doRequest("DeleteWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DeleteWhitelistSettingResponse({}));
  }

  async deleteWhitelistSettingSimply(request: DeleteWhitelistSettingRequest): Promise<DeleteWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelistSetting(request, runtime);
  }

  async createWhitelistSetting(request: CreateWhitelistSettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistSettingResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWhitelistSettingResponse>(await this.doRequest("CreateWhitelistSetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateWhitelistSettingResponse({}));
  }

  async createWhitelistSettingSimply(request: CreateWhitelistSettingRequest): Promise<CreateWhitelistSettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelistSetting(request, runtime);
  }

  async describeWhitelist(request: DescribeWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DescribeWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeWhitelistResponse>(await this.doRequest("DescribeWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeWhitelistResponse({}));
  }

  async describeWhitelistSimply(request: DescribeWhitelistRequest): Promise<DescribeWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeWhitelist(request, runtime);
  }

  async deleteWhitelist(request: DeleteWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<DeleteWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<DeleteWhitelistResponse>(await this.doRequest("DeleteWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DeleteWhitelistResponse({}));
  }

  async deleteWhitelistSimply(request: DeleteWhitelistRequest): Promise<DeleteWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteWhitelist(request, runtime);
  }

  async createWhitelist(request: CreateWhitelistRequest, runtime: $Util.RuntimeOptions): Promise<CreateWhitelistResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateWhitelistResponse>(await this.doRequest("CreateWhitelist", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateWhitelistResponse({}));
  }

  async createWhitelistSimply(request: CreateWhitelistRequest): Promise<CreateWhitelistResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createWhitelist(request, runtime);
  }

  async describeFaceConfig(request: DescribeFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceConfigResponse>(await this.doRequest("DescribeFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceConfigResponse({}));
  }

  async describeFaceConfigSimply(request: DescribeFaceConfigRequest): Promise<DescribeFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceConfig(request, runtime);
  }

  async updateFaceConfig(request: UpdateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateFaceConfigResponse>(await this.doRequest("UpdateFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateFaceConfigResponse({}));
  }

  async updateFaceConfigSimply(request: UpdateFaceConfigRequest): Promise<UpdateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFaceConfig(request, runtime);
  }

  async createFaceConfig(request: CreateFaceConfigRequest, runtime: $Util.RuntimeOptions): Promise<CreateFaceConfigResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateFaceConfigResponse>(await this.doRequest("CreateFaceConfig", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateFaceConfigResponse({}));
  }

  async createFaceConfigSimply(request: CreateFaceConfigRequest): Promise<CreateFaceConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFaceConfig(request, runtime);
  }

  async livenessFaceVerify(request: LivenessFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<LivenessFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<LivenessFaceVerifyResponse>(await this.doRequest("LivenessFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new LivenessFaceVerifyResponse({}));
  }

  async livenessFaceVerifySimply(request: LivenessFaceVerifyRequest): Promise<LivenessFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.livenessFaceVerify(request, runtime);
  }

  async compareFaceVerify(request: CompareFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<CompareFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<CompareFaceVerifyResponse>(await this.doRequest("CompareFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CompareFaceVerifyResponse({}));
  }

  async compareFaceVerifySimply(request: CompareFaceVerifyRequest): Promise<CompareFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaceVerify(request, runtime);
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

  async updateAppPackage(request: UpdateAppPackageRequest, runtime: $Util.RuntimeOptions): Promise<UpdateAppPackageResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateAppPackageResponse>(await this.doRequest("UpdateAppPackage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateAppPackageResponse({}));
  }

  async updateAppPackageSimply(request: UpdateAppPackageRequest): Promise<UpdateAppPackageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateAppPackage(request, runtime);
  }

  async describeAppInfo(request: DescribeAppInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAppInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeAppInfoResponse>(await this.doRequest("DescribeAppInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeAppInfoResponse({}));
  }

  async describeAppInfoSimply(request: DescribeAppInfoRequest): Promise<DescribeAppInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAppInfo(request, runtime);
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

  async describeFaceVerify(request: DescribeFaceVerifyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceVerifyResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceVerifyResponse>(await this.doRequest("DescribeFaceVerify", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceVerifyResponse({}));
  }

  async describeFaceVerifySimply(request: DescribeFaceVerifyRequest): Promise<DescribeFaceVerifyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceVerify(request, runtime);
  }

  async verifyDevice(request: VerifyDeviceRequest, runtime: $Util.RuntimeOptions): Promise<VerifyDeviceResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyDeviceResponse>(await this.doRequest("VerifyDevice", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new VerifyDeviceResponse({}));
  }

  async verifyDeviceSimply(request: VerifyDeviceRequest): Promise<VerifyDeviceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyDevice(request, runtime);
  }

  async modifyDeviceInfo(request: ModifyDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<ModifyDeviceInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<ModifyDeviceInfoResponse>(await this.doRequest("ModifyDeviceInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new ModifyDeviceInfoResponse({}));
  }

  async modifyDeviceInfoSimply(request: ModifyDeviceInfoRequest): Promise<ModifyDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyDeviceInfo(request, runtime);
  }

  async describeVerifySDK(request: DescribeVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySDKResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifySDKResponse>(await this.doRequest("DescribeVerifySDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifySDKResponse({}));
  }

  async describeVerifySDKSimply(request: DescribeVerifySDKRequest): Promise<DescribeVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySDK(request, runtime);
  }

  async describeDeviceInfo(request: DescribeDeviceInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeDeviceInfoResponse>(await this.doRequest("DescribeDeviceInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeDeviceInfoResponse({}));
  }

  async describeDeviceInfoSimply(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeviceInfo(request, runtime);
  }

  async createVerifySDK(request: CreateVerifySDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySDKResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVerifySDKResponse>(await this.doRequest("CreateVerifySDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateVerifySDKResponse({}));
  }

  async createVerifySDKSimply(request: CreateVerifySDKRequest): Promise<CreateVerifySDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySDK(request, runtime);
  }

  async createAuthKey(request: CreateAuthKeyRequest, runtime: $Util.RuntimeOptions): Promise<CreateAuthKeyResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateAuthKeyResponse>(await this.doRequest("CreateAuthKey", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateAuthKeyResponse({}));
  }

  async createAuthKeySimply(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createAuthKey(request, runtime);
  }

  async detectFaceAttributes(request: DetectFaceAttributesRequest, runtime: $Util.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    Util.validateModel(request);
    return $tea.cast<DetectFaceAttributesResponse>(await this.doRequest("DetectFaceAttributes", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DetectFaceAttributesResponse({}));
  }

  async detectFaceAttributesSimply(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectFaceAttributes(request, runtime);
  }

  async compareFaces(request: CompareFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareFacesResponse> {
    Util.validateModel(request);
    return $tea.cast<CompareFacesResponse>(await this.doRequest("CompareFaces", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CompareFacesResponse({}));
  }

  async compareFacesSimply(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareFaces(request, runtime);
  }

  async describeFaceUsage(request: DescribeFaceUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeFaceUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeFaceUsageResponse>(await this.doRequest("DescribeFaceUsage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeFaceUsageResponse({}));
  }

  async describeFaceUsageSimply(request: DescribeFaceUsageRequest): Promise<DescribeFaceUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeFaceUsage(request, runtime);
  }

  async describeVerifyRecords(request: DescribeVerifyRecordsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyRecordsResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyRecordsResponse>(await this.doRequest("DescribeVerifyRecords", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyRecordsResponse({}));
  }

  async describeVerifyRecordsSimply(request: DescribeVerifyRecordsRequest): Promise<DescribeVerifyRecordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyRecords(request, runtime);
  }

  async updateVerifySetting(request: UpdateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<UpdateVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<UpdateVerifySettingResponse>(await this.doRequest("UpdateVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new UpdateVerifySettingResponse({}));
  }

  async updateVerifySettingSimply(request: UpdateVerifySettingRequest): Promise<UpdateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateVerifySetting(request, runtime);
  }

  async createVerifySetting(request: CreateVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<CreateVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateVerifySettingResponse>(await this.doRequest("CreateVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateVerifySettingResponse({}));
  }

  async createVerifySettingSimply(request: CreateVerifySettingRequest): Promise<CreateVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVerifySetting(request, runtime);
  }

  async describeVerifySetting(request: DescribeVerifySettingRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifySettingResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifySettingResponse>(await this.doRequest("DescribeVerifySetting", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifySettingResponse({}));
  }

  async describeVerifySettingSimply(request: DescribeVerifySettingRequest): Promise<DescribeVerifySettingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifySetting(request, runtime);
  }

  async describeVerifyUsage(request: DescribeVerifyUsageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyUsageResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyUsageResponse>(await this.doRequest("DescribeVerifyUsage", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyUsageResponse({}));
  }

  async describeVerifyUsageSimply(request: DescribeVerifyUsageRequest): Promise<DescribeVerifyUsageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyUsage(request, runtime);
  }

  async describeUserStatus(request: DescribeUserStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUserStatusResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUserStatusResponse>(await this.doRequest("DescribeUserStatus", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeUserStatusResponse({}));
  }

  async describeUserStatusSimply(request: DescribeUserStatusRequest): Promise<DescribeUserStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUserStatus(request, runtime);
  }

  async describeUploadInfo(request: DescribeUploadInfoRequest, runtime: $Util.RuntimeOptions): Promise<DescribeUploadInfoResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeUploadInfoResponse>(await this.doRequest("DescribeUploadInfo", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeUploadInfoResponse({}));
  }

  async describeUploadInfoSimply(request: DescribeUploadInfoRequest): Promise<DescribeUploadInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeUploadInfo(request, runtime);
  }

  async describeRPSDK(request: DescribeRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRPSDKResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeRPSDKResponse>(await this.doRequest("DescribeRPSDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeRPSDKResponse({}));
  }

  async describeRPSDKSimply(request: DescribeRPSDKRequest): Promise<DescribeRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRPSDK(request, runtime);
  }

  async createRPSDK(request: CreateRPSDKRequest, runtime: $Util.RuntimeOptions): Promise<CreateRPSDKResponse> {
    Util.validateModel(request);
    return $tea.cast<CreateRPSDKResponse>(await this.doRequest("CreateRPSDK", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new CreateRPSDKResponse({}));
  }

  async createRPSDKSimply(request: CreateRPSDKRequest): Promise<CreateRPSDKResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createRPSDK(request, runtime);
  }

  async verifyMaterial(request: VerifyMaterialRequest, runtime: $Util.RuntimeOptions): Promise<VerifyMaterialResponse> {
    Util.validateModel(request);
    return $tea.cast<VerifyMaterialResponse>(await this.doRequest("VerifyMaterial", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new VerifyMaterialResponse({}));
  }

  async verifyMaterialSimply(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.verifyMaterial(request, runtime);
  }

  async describeVerifyResult(request: DescribeVerifyResultRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyResultResponse>(await this.doRequest("DescribeVerifyResult", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyResultResponse({}));
  }

  async describeVerifyResultSimply(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyResult(request, runtime);
  }

  async describeOssUploadToken(request: DescribeOssUploadTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeOssUploadTokenResponse>(await this.doRequest("DescribeOssUploadToken", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeOssUploadTokenResponse({}));
  }

  async describeOssUploadTokenSimply(request: DescribeOssUploadTokenRequest): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeOssUploadToken(request, runtime);
  }

  async describeVerifyToken(request: DescribeVerifyTokenRequest, runtime: $Util.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    Util.validateModel(request);
    return $tea.cast<DescribeVerifyTokenResponse>(await this.doRequest("DescribeVerifyToken", "HTTPS", "POST", "2019-03-07", "AK", null, $tea.toMap(request), runtime), new DescribeVerifyTokenResponse({}));
  }

  async describeVerifyTokenSimply(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeVerifyToken(request, runtime);
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

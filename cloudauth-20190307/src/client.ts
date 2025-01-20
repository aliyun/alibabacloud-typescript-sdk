// This file is auto-generated, don't edit it
/**
 */
import OSS, * as $OSS from '@alicloud/oss-client';
import OpenPlatform, * as $OpenPlatform from '@alicloud/openplatform20191219';
import OSSUtil, * as $OSSUtil from '@alicloud/oss-util';
import FileForm, * as $FileForm from '@alicloud/tea-fileform';
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class AIGCFaceVerifyResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * Y
   */
  result?: string;
  /**
   * @example
   * 1.0000
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * 101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * T
   */
  passed?: string;
  /**
   * @example
   * 99.60875
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBodyData extends $dara.Model {
  /**
   * @example
   * {"0.0001":"90.07","0.001":"80.01","0.01":"70.02"}
   */
  confidenceThresholds?: string;
  /**
   * @example
   * 98.7913
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * null
   */
  identityInfo?: string;
  /**
   * @example
   * {"faceAttack": "F","facialPictureFront": {"qualityScore": 88.3615493774414,"verifyScore": 50.28594166529785}}
   */
  materialInfo?: string;
  /**
   * @example
   * T
   */
  passed?: string;
  /**
   * @example
   * 200
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyRequestMerchantDetail extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBodyResultObjectVlResult extends $dara.Model {
  success?: boolean;
  vlContent?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      vlContent: 'VlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      vlContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBodyResultObject extends $dara.Model {
  materialInfo?: string;
  ocrInfo?: string;
  /**
   * @example
   * 1
   */
  result?: string;
  riskScore?: { [key: string]: string };
  /**
   * @example
   * PS,SCREEN_PHOTO
   */
  riskTag?: string;
  /**
   * @example
   * **
   */
  verifyDetail?: string;
  /**
   * @example
   * *
   */
  verifyResult?: string;
  vlResult?: CredentialVerifyResponseBodyResultObjectVlResult;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      ocrInfo: 'OcrInfo',
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
      verifyDetail: 'VerifyDetail',
      verifyResult: 'VerifyResult',
      vlResult: 'VlResult',
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
      vlResult: CredentialVerifyResponseBodyResultObjectVlResult,
    };
  }

  validate() {
    if(this.riskScore) {
      $dara.Model.validateMap(this.riskScore);
    }
    if(this.vlResult && typeof (this.vlResult as any).validate === 'function') {
      (this.vlResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  result?: string;
  riskScore?: { [key: string]: string };
  /**
   * @example
   * SuspectDeepForgery,SuspectWarterMark
   */
  riskTag?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
    };
  }

  validate() {
    if(this.riskScore) {
      $dara.Model.validateMap(this.riskScore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVerifyResultResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * sha58aeae7ea2f5ed069530f58df4e6d
   */
  certifyId?: string;
  /**
   * @example
   * N
   */
  deleteResult?: string;
  /**
   * @example
   * NOT_DELETE_REPEATEDLY
   */
  failReason?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      deleteResult: 'DeleteResult',
      failReason: 'FailReason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      deleteResult: 'string',
      failReason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoListDeviceInfo extends $dara.Model {
  /**
   * @example
   * 20180101
   */
  beginDay?: string;
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @example
   * 20180101
   */
  expiredDay?: string;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBodyDeviceInfoList extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.deviceInfo)) {
      $dara.Model.validateArray(this.deviceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGuardRiskResponseBodyResultObject extends $dara.Model {
  certifyId?: string;
  /**
   * @example
   * {
   *   "code": 200
   *   "badNet":false,
   *   "umid":"74e37355171ab62230063569350d368e",
   *   "fileTags":"basic_root,basic_hook",
   *   "queryCount":1,
   *   "querySessionCount":1,
   *   "queryUmidCount":1
   *   "platform":"Android"
   * }
   */
  riskExtends?: string;
  riskTags?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      riskExtends: 'string',
      riskTags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponseBodyResultObject extends $dara.Model {
  deviceRisk?: string;
  /**
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @example
   * null
   */
  identityInfo?: string;
  /**
   * @example
   * {"faceAttack": "F","facialPictureFront": {"qualityScore": 88.3615493774414,"pictureUrl": "https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg","ossBucketName": "cn-shanghai-aliyun-cloudauth-1260051251634779","ossObjectName": "verify/1260051251634779/6ba7bcfccf33f56cdb44ed086f36ce3e0.jpeg"}}
   */
  materialInfo?: string;
  /**
   * @example
   * T
   */
  passed?: string;
  /**
   * @example
   * 200
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBodyOssUploadToken extends $dara.Model {
  /**
   * @example
   * cloudauth-zhangjiakou-external
   */
  bucket?: string;
  /**
   * @example
   * https://oss-cn-zhangjiakou.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @example
   * 1582636610000
   */
  expired?: number;
  /**
   * @example
   * STS.NU8rUBj****
   */
  key?: string;
  /**
   * @example
   * prod/RdNLC@Ox2n-1s7NMt
   */
  path?: string;
  /**
   * @example
   * FwmnyoqT8dHj7nJLuM67T****
   */
  secret?: string;
  /**
   * @example
   * uWia500nTS5knZaDzq4/KqpvhcLnO****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 2024-03-24T00:00:00.000Z
   */
  date?: string;
  /**
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @example
   * 20**40
   */
  sceneId?: string;
  sceneName?: string;
  /**
   * @example
   * 1
   */
  successCount?: string;
  /**
   * @example
   * 19
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 11/8
   */
  date?: string;
  /**
   * @example
   * 25
   */
  passRate?: string;
  /**
   * @example
   * SMART_VERIFY
   */
  productCode?: string;
  /**
   * @example
   * 20**40
   */
  sceneId?: number;
  sceneName?: string;
  /**
   * @example
   * 1
   */
  successCount?: number;
  /**
   * @example
   * 4
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterialIdCardInfo extends $dara.Model {
  address?: string;
  authority?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  backImageUrl?: string;
  /**
   * @example
   * 19900101
   */
  birth?: string;
  /**
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  frontImageUrl?: string;
  name?: string;
  nationality?: string;
  /**
   * @example
   * 02343218901123****
   */
  number?: string;
  /**
   * @example
   * 20201101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBodyMaterial extends $dara.Model {
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-image-example.jpg
   */
  faceImageUrl?: string;
  /**
   * @example
   * false
   */
  faceMask?: boolean;
  /**
   * @example
   * NORMAL
   */
  faceQuality?: string;
  idCardInfo?: DescribeVerifyResultResponseBodyMaterialIdCardInfo;
  idCardName?: string;
  /**
   * @example
   * 02343218901123****
   */
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

  validate() {
    if(this.idCardInfo && typeof (this.idCardInfo as any).validate === 'function') {
      (this.idCardInfo as any).validate();
    }
    if(Array.isArray(this.videoUrls)) {
      $dara.Model.validateArray(this.videoUrls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBodyOssUploadToken extends $dara.Model {
  /**
   * @example
   * cloudauth-zhangjiakou-external
   */
  bucket?: string;
  /**
   * @example
   * https://oss-cn-zhangjiakou.aliyuncs.com
   */
  endPoint?: string;
  /**
   * @example
   * 1582636610000
   */
  expired?: number;
  /**
   * @example
   * STS.NU8rUBj****
   */
  key?: string;
  /**
   * @example
   * prod/RdNLC@Ox2n-1s7NMt
   */
  path?: string;
  /**
   * @example
   * FwmnyoqT8dHj7nJLuM67T****
   */
  secret?: string;
  /**
   * @example
   * uWia500nTS5knZaDzq4/KqpvhcLnO****
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $dara.Model {
  /**
   * @example
   * -1.5683923959732056
   */
  pitchAngle?: number;
  /**
   * @example
   * 7.163370132446289
   */
  rollAngle?: number;
  /**
   * @example
   * -6.925303936004639
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $dara.Model {
  /**
   * @example
   * 95
   */
  threshold?: number;
  /**
   * @example
   * 97
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $dara.Model {
  /**
   * @example
   * 0.1419367790222168
   */
  blur?: number;
  /**
   * @example
   * 60
   */
  facequal?: number;
  /**
   * @example
   * Face
   */
  facetype?: string;
  /**
   * @example
   * None
   */
  glasses?: string;
  headpose?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  /**
   * @example
   * 70
   */
  integrity?: number;
  /**
   * @example
   * Wear
   */
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

  validate() {
    if(this.headpose && typeof (this.headpose as any).validate === 'function') {
      (this.headpose as any).validate();
    }
    if(this.smiling && typeof (this.smiling as any).validate === 'function') {
      (this.smiling as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect extends $dara.Model {
  /**
   * @example
   * 473
   */
  height?: number;
  /**
   * @example
   * 354
   */
  left?: number;
  /**
   * @example
   * 453
   */
  top?: number;
  /**
   * @example
   * 473
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo extends $dara.Model {
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

  validate() {
    if(this.faceAttributes && typeof (this.faceAttributes as any).validate === 'function') {
      (this.faceAttributes as any).validate();
    }
    if(this.faceRect && typeof (this.faceRect as any).validate === 'function') {
      (this.faceRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfos extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.faceAttributesDetectInfo)) {
      $dara.Model.validateArray(this.faceAttributesDetectInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyData extends $dara.Model {
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  /**
   * @example
   * 1920
   */
  imgHeight?: number;
  /**
   * @example
   * 1080
   */
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

  validate() {
    if(this.faceInfos && typeof (this.faceInfos as any).validate === 'function') {
      (this.faceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseBodyResultObject extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleStandardVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBodyResultObjectItems extends $dara.Model {
  area?: string;
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 131********
   */
  mobile?: string;
  /**
   * @example
   * 101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 2
   */
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

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * CMCC
   */
  ispName?: string;
  /**
   * @example
   * 5
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryWhiteListSettingResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * sha43d9cabd52d370d9f4cca9468f71e
   */
  certifyId?: string;
  /**
   * @example
   * 2024-08-30 14:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-08-30 14:00:00
   */
  gmtModified?: string;
  /**
   * @example
   * 234822
   */
  id?: number;
  /**
   * @example
   * test
   */
  remark?: string;
  /**
   * @example
   * 1000000332
   */
  sceneId?: number;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @example
   * VALID
   */
  status?: string;
  /**
   * @example
   * 2024-09-02 13:57:51
   */
  validEndDate?: string;
  /**
   * @example
   * 2024-08-30 13:57:51
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      remark: 'Remark',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
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
      remark: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      status: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vehicle5ItemQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  vehicleInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      vehicleInfo: 'VehicleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      vehicleInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleInsureQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  /**
   * @example
   * {
   *     "firstInsuranceDate": "****-**-**",
   *     "lastInsuranceDate": "****-**",
   *     "latestInsuranceDate": "****-**",
   *     "latestInsuranceDateStart": "****-**"
   *   }
   */
  vehicleInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      vehicleInfo: 'VehicleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      vehicleInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyV2ResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  vehicleInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      vehicleInfo: 'VehicleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      vehicleInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleQueryResponseBodyResultObject extends $dara.Model {
  /**
   * @example
   * 1
   */
  bizCode?: string;
  vehicleInfo?: string;
  static names(): { [key: string]: string } {
    return {
      bizCode: 'BizCode',
      vehicleInfo: 'VehicleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizCode: 'string',
      vehicleInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $dara.Model {
  address?: string;
  authority?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  backImageUrl?: string;
  /**
   * @example
   * 19900101
   */
  birth?: string;
  /**
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  frontImageUrl?: string;
  name?: string;
  nationality?: string;
  /**
   * @example
   * 02343218901123****
   */
  number?: string;
  /**
   * @example
   * 20201101
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBodyMaterial extends $dara.Model {
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  faceImageUrl?: string;
  /**
   * @example
   * false
   */
  faceMask?: string;
  /**
   * @example
   * NORMAL
   */
  faceQuality?: string;
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  idCardName?: string;
  /**
   * @example
   * 02343218901123****
   */
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

  validate() {
    if(this.idCardInfo && typeof (this.idCardInfo as any).validate === 'function') {
      (this.idCardInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyRequest extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @example
   * LR_FR_AIGC
   */
  productCode?: string;
  /**
   * @example
   * 100000xxxx
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AIGCFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyRequest extends $dara.Model {
  /**
   * @example
   * 610*************1181
   */
  bankCard?: string;
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  identityType?: string;
  /**
   * @example
   * 138******11
   */
  mobile?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @example
   * BANK_CARD_2_META
   */
  productType?: string;
  userName?: string;
  /**
   * @example
   * VERIFY_BANK_CARD
   */
  verifyMode?: string;
  static names(): { [key: string]: string } {
    return {
      bankCard: 'BankCard',
      identifyNum: 'IdentifyNum',
      identityType: 'IdentityType',
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
      identityType: 'string',
      mobile: 'string',
      paramType: 'string',
      productType: 'string',
      userName: 'string',
      verifyMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BankMetaVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyRequest extends $dara.Model {
  crop?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @example
   * PV_FC
   */
  productCode?: string;
  /**
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  sourceCertifyId?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  sourceFaceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  sourceFaceContrastPictureUrl?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  sourceOssBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  sourceOssObjectName?: string;
  /**
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  targetCertifyId?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  targetFaceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  targetFaceContrastPictureUrl?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  targetOssBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesRequest extends $dara.Model {
  /**
   * @example
   * FacePic
   */
  sourceImageType?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  sourceImageValue?: string;
  /**
   * @example
   * FacePic
   */
  targetImageType?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: CompareFacesResponseBodyData;
  /**
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareFacesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyRequest extends $dara.Model {
  certName?: string;
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  crop?: string;
  /**
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  encryptType?: string;
  faceContrastFile?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  model?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @example
   * ID_MIN
   */
  productCode?: string;
  /**
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @example
   * 123456789
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyAdvanceRequest extends $dara.Model {
  certName?: string;
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  crop?: string;
  /**
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  encryptType?: string;
  faceContrastFileObject?: Readable;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  model?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @example
   * ID_MIN
   */
  productCode?: string;
  /**
   * @example
   * 1000000006
   */
  sceneId?: number;
  /**
   * @example
   * 123456789
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContrastFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  authYears?: number;
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * false
   */
  test?: boolean;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyResponseBody extends $dara.Model {
  /**
   * @example
   * auth.1KQMcnLd4m37LN2D0F0WCD-1qtQI$
   */
  authKey?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAuthKeyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  bizName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @example
   * false
   */
  guideStep?: boolean;
  /**
   * @example
   * true
   */
  privacyStep?: boolean;
  /**
   * @example
   * false
   */
  resultStep?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RPBasic
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingResponseBody extends $dara.Model {
  bizName?: string;
  /**
   * @example
   * UserRegister
   */
  bizType?: string;
  /**
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  /**
   * @example
   * RPBasic
   */
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

  validate() {
    if(Array.isArray(this.stepList)) {
      $dara.Model.validateArray(this.stepList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVerifySettingResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyRequest extends $dara.Model {
  /**
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @example
   * 01
   */
  credType?: string;
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * base64
   */
  imageContext?: string;
  /**
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @example
   * 1
   */
  isOCR?: string;
  merchantDetail?: CredentialVerifyRequestMerchantDetail[];
  merchantId?: string;
  productCode?: string;
  prompt?: string;
  promptModel?: string;
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
      merchantDetail: 'MerchantDetail',
      merchantId: 'MerchantId',
      productCode: 'ProductCode',
      prompt: 'Prompt',
      promptModel: 'PromptModel',
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
      merchantDetail: { 'type': 'array', 'itemType': CredentialVerifyRequestMerchantDetail },
      merchantId: 'string',
      productCode: 'string',
      prompt: 'string',
      promptModel: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.merchantDetail)) {
      $dara.Model.validateArray(this.merchantDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyShrinkRequest extends $dara.Model {
  /**
   * @example
   * 4601*****
   */
  certNum?: string;
  /**
   * @example
   * 0104
   */
  credName?: string;
  /**
   * @example
   * 01
   */
  credType?: string;
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * base64
   */
  imageContext?: string;
  /**
   * @example
   * http://marry.momocdn.com/avatar/3B/B6/3BB6527E-7467-926E-1048-B43614F20CC420230803_L.jpg
   */
  imageUrl?: string;
  /**
   * @example
   * 0
   */
  isCheck?: string;
  /**
   * @example
   * 1
   */
  isOCR?: string;
  merchantDetailShrink?: string;
  merchantId?: string;
  productCode?: string;
  prompt?: string;
  promptModel?: string;
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
      merchantDetailShrink: 'MerchantDetail',
      merchantId: 'MerchantId',
      productCode: 'ProductCode',
      prompt: 'Prompt',
      promptModel: 'PromptModel',
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
      merchantDetailShrink: 'string',
      merchantId: 'string',
      productCode: 'string',
      prompt: 'string',
      promptModel: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectRequest extends $dara.Model {
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      faceBase64: 'FaceBase64',
      faceInputType: 'FaceInputType',
      faceUrl: 'FaceUrl',
      outerOrderNo: 'OuterOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBase64: 'string',
      faceInputType: 'string',
      faceUrl: 'string',
      outerOrderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  resultObject?: DeepfakeDetectResponseBodyResultObject;
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
      resultObject: DeepfakeDetectResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeepfakeDetectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeepfakeDetectResponseBody;
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
      body: DeepfakeDetectResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVerifyResultRequest extends $dara.Model {
  /**
   * @example
   * shae18209d29ce4e8ba252caae98ab15
   */
  certifyId?: string;
  /**
   * @example
   * Y
   */
  deleteAfterQuery?: string;
  static names(): { [key: string]: string } {
    return {
      certifyId: 'CertifyId',
      deleteAfterQuery: 'DeleteAfterQuery',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certifyId: 'string',
      deleteAfterQuery: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVerifyResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  resultObject?: DeleteFaceVerifyResultResponseBodyResultObject;
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
      resultObject: DeleteFaceVerifyResultResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFaceVerifyResultResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteFaceVerifyResultResponseBody;
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
      body: DeleteFaceVerifyResultResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoRequest extends $dara.Model {
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @example
   * 20200330
   */
  expiredEndDay?: string;
  /**
   * @example
   * 20190401
   */
  expiredStartDay?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  deviceInfoList?: DescribeDeviceInfoResponseBodyDeviceInfoList;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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

  validate() {
    if(this.deviceInfoList && typeof (this.deviceInfoList as any).validate === 'function') {
      (this.deviceInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeviceInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGuardRiskRequest extends $dara.Model {
  /**
   * @example
   * aba9830f471a4335af4612c8adaa91b0
   */
  bizId?: string;
  /**
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35xxxx
   */
  outerOrderNo?: string;
  /**
   * @example
   * FACE_GUARD
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deviceToken: 'DeviceToken',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deviceToken: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGuardRiskResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  resultObject?: DescribeFaceGuardRiskResponseBodyResultObject;
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
      resultObject: DescribeFaceGuardRiskResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceGuardRiskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeFaceGuardRiskResponseBody;
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
      body: DescribeFaceGuardRiskResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyRequest extends $dara.Model {
  /**
   * @example
   * 91707dc296d469ad38e4c5efa6a0f24b
   */
  certifyId?: string;
  /**
   * @example
   * JPG
   */
  pictureReturnType?: string;
  /**
   * @example
   * 1000000006
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponseBody extends $dara.Model {
  ossUploadToken?: DescribeOssUploadTokenResponseBodyOssUploadToken;
  /**
   * @example
   * 2FA2C773-47DB-4156-B1EE-5B047321A939
   */
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

  validate() {
    if(this.ossUploadToken && typeof (this.ossUploadToken as any).validate === 'function') {
      (this.ossUploadToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOssUploadTokenResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2023-04-30
   */
  endDate?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ID_PLUS
   */
  productCode?: string;
  /**
   * @example
   * 36**01
   */
  sceneId?: number;
  /**
   * @example
   * 2023-04-10
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: string;
  items?: DescribePageFaceVerifyDataResponseBodyItems[];
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 473469C7-A***B-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  /**
   * @example
   * 100
   */
  totalCount?: string;
  /**
   * @example
   * 5
   */
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

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePageFaceVerifyDataResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2022-11-16 23:59:59 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 36**01
   */
  sceneId?: string;
  /**
   * @example
   * cloudauthst
   */
  serviceCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2023-11-01 00:00:00 +0800
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  items?: DescribeSmartStatisticsPageListResponseBodyItems[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 96943***4E39F805
   */
  requestId?: string;
  /**
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @example
   * 3
   */
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

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartStatisticsPageListResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125b****
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FVBioOnlyTest
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponseBody extends $dara.Model {
  /**
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @example
   * 97
   */
  faceComparisonScore?: number;
  /**
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  material?: DescribeVerifyResultResponseBodyMaterial;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
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

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyResultResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1KQMcnLd4m37LN2D0F0WCD
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKResponseBody extends $dara.Model {
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * https://www.xxx.com
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySDKResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125be683
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @example
   * -
   */
  callbackSeed?: string;
  /**
   * @example
   * -
   */
  callbackUrl?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  faceRetainedImageUrl?: string;
  /**
   * @example
   * -
   */
  failedRedirectUrl?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardBackImageUrl?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  idCardFrontImageUrl?: string;
  /**
   * @example
   * 330100xxxxxxxxxxxx
   */
  idCardNumber?: string;
  name?: string;
  /**
   * @example
   * -
   */
  passedRedirectUrl?: string;
  /**
   * @example
   * user111
   */
  userId?: string;
  /**
   * @example
   * 192.168.***.***
   */
  userIp?: string;
  /**
   * @example
   * 187********
   */
  userPhoneNumber?: string;
  /**
   * @example
   * 1577808000000
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponseBody extends $dara.Model {
  ossUploadToken?: DescribeVerifyTokenResponseBodyOssUploadToken;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * http%3A%2F%2Fjiangsu.china.com.cn%2Fuploadfile%2F2015%2F0114%2F1421221304095989.jpg
   */
  verifyPageUrl?: string;
  /**
   * @example
   * c302c0797679457685410ee51a5ba375
   */
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

  validate() {
    if(this.ossUploadToken && typeof (this.ossUploadToken as any).validate === 'function') {
      (this.ossUploadToken as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifyTokenResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesRequest extends $dara.Model {
  /**
   * @example
   * RPBasicTest
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DetectFaceAttributesResponseBodyData;
  /**
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
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

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyRequest extends $dara.Model {
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  userName?: string;
  /**
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @example
   * 20201001
   */
  validityStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
      validityEndDate: 'ValidityEndDate',
      validityStartDate: 'ValidityStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
      validityEndDate: 'string',
      validityStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  resultObject?: Id2MetaPeriodVerifyResponseBodyResultObject;
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
      resultObject: Id2MetaPeriodVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaPeriodVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Id2MetaPeriodVerifyResponseBody;
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
      body: Id2MetaPeriodVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaStandardVerifyRequest extends $dara.Model {
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaStandardVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  resultObject?: Id2MetaStandardVerifyResponseBodyResultObject;
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
      resultObject: Id2MetaStandardVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaStandardVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Id2MetaStandardVerifyResponseBody;
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
      body: Id2MetaStandardVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Id2MetaVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyRequest extends $dara.Model {
  appQualityCheck?: string;
  authId?: string;
  birthday?: string;
  callbackToken?: string;
  callbackUrl?: string;
  cameraSelection?: string;
  certName?: string;
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * IDENTITY_CARD
   */
  certType?: string;
  /**
   * @example
   * 0bfa7c493f850e5178b9f8613634c9xx
   */
  certifyId?: string;
  certifyUrlStyle?: string;
  certifyUrlType?: string;
  crop?: string;
  encryptType?: string;
  /**
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  faceGuardOutput?: string;
  /**
   * @example
   * 114.xxx.xxx.xxx
   */
  ip?: string;
  /**
   * @example
   * {"zimVer":"3.0.0","appVersion": "1","bioMetaInfo": "4.1.0:11501568,0","appName": "com.aliyun.antcloudauth","deviceType": "ios","osVersion": "iOS 10.3.2","apdidToken": "","deviceModel": "iPhone9,1"}
   */
  metaInfo?: string;
  /**
   * @example
   * 130xxxxxxxx
   */
  mobile?: string;
  mode?: string;
  model?: string;
  /**
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  procedurePriority?: string;
  /**
   * @example
   * ID_PRO
   */
  productCode?: string;
  rarelyCharacters?: string;
  readImg?: string;
  /**
   * @example
   * www.aliyun.com
   */
  returnUrl?: string;
  /**
   * @example
   * 1000000006
   */
  sceneId?: number;
  suitableType?: string;
  uiCustomUrl?: string;
  /**
   * @example
   * 123456789
   */
  userId?: string;
  validityDate?: string;
  videoEvidence?: string;
  voluntaryCustomizedContent?: string;
  static names(): { [key: string]: string } {
    return {
      appQualityCheck: 'AppQualityCheck',
      authId: 'AuthId',
      birthday: 'Birthday',
      callbackToken: 'CallbackToken',
      callbackUrl: 'CallbackUrl',
      cameraSelection: 'CameraSelection',
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
      videoEvidence: 'VideoEvidence',
      voluntaryCustomizedContent: 'VoluntaryCustomizedContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appQualityCheck: 'string',
      authId: 'string',
      birthday: 'string',
      callbackToken: 'string',
      callbackUrl: 'string',
      cameraSelection: 'string',
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
      videoEvidence: 'string',
      voluntaryCustomizedContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertWhiteListSettingRequest extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * shsf57a4e0d9981c3bd66dc754f3d3cd
   */
  certifyId?: string;
  /**
   * @example
   * xxxxxx
   */
  remark?: string;
  /**
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @example
   * 30
   */
  validDay?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      remark: 'Remark',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
      validDay: 'ValidDay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      remark: 'string',
      sceneId: 'number',
      serviceCode: 'string',
      validDay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertWhiteListSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  resultObject?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InsertWhiteListSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InsertWhiteListSettingResponseBody;
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
      body: InsertWhiteListSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponseBody extends $dara.Model {
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LivenessFaceVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailStandardVerifyRequest extends $dara.Model {
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * 138********
   */
  mobile?: string;
  /**
   * @example
   * normal
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailStandardVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  resultObject?: Mobile3MetaDetailStandardVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaDetailStandardVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailStandardVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Mobile3MetaDetailStandardVerifyResponseBody;
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
      body: Mobile3MetaDetailStandardVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaDetailVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleStandardVerifyRequest extends $dara.Model {
  /**
   * @example
   * 429001********8211
   */
  identifyNum?: string;
  /**
   * @example
   * 130********
   */
  mobile?: string;
  /**
   * @example
   * normal
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleStandardVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  resultObject?: Mobile3MetaSimpleStandardVerifyResponseBodyResultObject;
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
      resultObject: Mobile3MetaSimpleStandardVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleStandardVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Mobile3MetaSimpleStandardVerifyResponseBody;
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
      body: Mobile3MetaSimpleStandardVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Mobile3MetaSimpleVerifyResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 969434DF-926B-4997-9881-4DE94E39F805
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileDetectResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineStatusResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * B506328A-D84B-4750-82C7-6A207C585CF1
   */
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

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileOnlineTimeResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoRequest extends $dara.Model {
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @example
   * 1
   */
  duration?: string;
  /**
   * @example
   * 20190401
   */
  expiredDay?: string;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 20190401
   */
  beginDay?: string;
  /**
   * @example
   * FACE_TEST
   */
  bizType?: string;
  /**
   * @example
   * wd.6ziUffspAeW5FVYbaqmexR-1qwNjM
   */
  deviceId?: string;
  /**
   * @example
   * 20200330
   */
  expiredDay?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * 3iJ1AY$oHcu7mC69
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyDeviceInfoResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryWhiteListSettingRequest extends $dara.Model {
  /**
   * @example
   * 330103xxxxxxxxxxxx
   */
  certNo?: string;
  /**
   * @example
   * sha75b4e19a1ddda059b920757b0e12b
   */
  certifyId?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1000000xxx
   */
  sceneId?: number;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  /**
   * @example
   * VALID
   */
  status?: string;
  /**
   * @example
   * 1725379200000
   */
  validEndDate?: string;
  /**
   * @example
   * 1725120000000
   */
  validStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      sceneId: 'SceneId',
      serviceCode: 'ServiceCode',
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
      pageSize: 'number',
      sceneId: 'number',
      serviceCode: 'string',
      status: 'string',
      validEndDate: 'string',
      validStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryWhiteListSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528BDF60D2
   */
  requestId?: string;
  resultObject?: PageQueryWhiteListSettingResponseBodyResultObject[];
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 28
   */
  totalItem?: number;
  /**
   * @example
   * 3
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
      totalItem: 'TotalItem',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      resultObject: { 'type': 'array', 'itemType': PageQueryWhiteListSettingResponseBodyResultObject },
      success: 'boolean',
      totalItem: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resultObject)) {
      $dara.Model.validateArray(this.resultObject);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageQueryWhiteListSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: PageQueryWhiteListSettingResponseBody;
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
      body: PageQueryWhiteListSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWhiteListSettingRequest extends $dara.Model {
  ids?: number[];
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      serviceCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWhiteListSettingShrinkRequest extends $dara.Model {
  idsShrink?: string;
  /**
   * @example
   * antcloudauth
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      serviceCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWhiteListSettingResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  resultObject?: boolean;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: 'boolean',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveWhiteListSettingResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveWhiteListSettingResponseBody;
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
      body: RemoveWhiteListSettingResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vehicle5ItemQueryRequest extends $dara.Model {
  /**
   * @example
   * normal
   */
  paramType?: string;
  vehicleNum?: string;
  /**
   * @example
   * 02
   */
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vehicle5ItemQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0D******
   */
  requestId?: string;
  resultObject?: Vehicle5ItemQueryResponseBodyResultObject;
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
      resultObject: Vehicle5ItemQueryResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vehicle5ItemQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Vehicle5ItemQueryResponseBody;
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
      body: Vehicle5ItemQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleInsureQueryRequest extends $dara.Model {
  /**
   * @example
   * normal
   */
  paramType?: string;
  vehicleNum?: string;
  /**
   * @example
   * 02
   */
  vehicleType?: string;
  /**
   * @example
   * LB**************
   */
  vin?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      vin: 'Vin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
      vin: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleInsureQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F52********
   */
  requestId?: string;
  resultObject?: VehicleInsureQueryResponseBodyResultObject;
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
      resultObject: VehicleInsureQueryResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleInsureQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VehicleInsureQueryResponseBody;
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
      body: VehicleInsureQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyRequest extends $dara.Model {
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  userName?: string;
  vehicleNum?: string;
  /**
   * @example
   * 02
   */
  vehicleType?: string;
  /**
   * @example
   * VEHICLE_2_META
   */
  verifyMetaType?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      verifyMetaType: 'VerifyMetaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
      verifyMetaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8FC3D6AC-9FED-4311-8DA7-C4BF4*****
   */
  requestId?: string;
  resultObject?: VehicleMetaVerifyResponseBodyResultObject;
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
      resultObject: VehicleMetaVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VehicleMetaVerifyResponseBody;
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
      body: VehicleMetaVerifyResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyV2Request extends $dara.Model {
  /**
   * @example
   * 4****************1
   */
  identifyNum?: string;
  /**
   * @example
   * normal
   */
  paramType?: string;
  userName?: string;
  vehicleNum?: string;
  /**
   * @example
   * 02
   */
  vehicleType?: string;
  /**
   * @example
   * VEHICLE_3_META
   */
  verifyMetaType?: string;
  static names(): { [key: string]: string } {
    return {
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
      verifyMetaType: 'VerifyMetaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
      verifyMetaType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyV2ResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 5A6229C0-E156-48E4-B6EC-0F528B******
   */
  requestId?: string;
  resultObject?: VehicleMetaVerifyV2ResponseBodyResultObject;
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
      resultObject: VehicleMetaVerifyV2ResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleMetaVerifyV2Response extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VehicleMetaVerifyV2ResponseBody;
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
      body: VehicleMetaVerifyV2ResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleQueryRequest extends $dara.Model {
  /**
   * @example
   * normal
   */
  paramType?: string;
  vehicleNum?: string;
  /**
   * @example
   * 02
   */
  vehicleType?: string;
  static names(): { [key: string]: string } {
    return {
      paramType: 'ParamType',
      vehicleNum: 'VehicleNum',
      vehicleType: 'VehicleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramType: 'string',
      vehicleNum: 'string',
      vehicleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D6163397-15C5-419C-9ACC-B7C83*******
   */
  requestId?: string;
  resultObject?: VehicleQueryResponseBodyResultObject;
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
      resultObject: VehicleQueryResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VehicleQueryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: VehicleQueryResponseBody;
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
      body: VehicleQueryResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 39ecf51e-2f81-4dc5-90ee-ff86125b****
   */
  bizId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * RPMinTest
   */
  bizType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  faceImageUrl?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  idCardBackImageUrl?: string;
  /**
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  idCardFrontImageUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 02343218901123****
   */
  idCardNumber?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @example
   * 54sdj
   */
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponseBody extends $dara.Model {
  /**
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  material?: VerifyMaterialResponseBodyMaterial;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  verifyStatus?: number;
  /**
   * @example
   * c302c0797679457685410ee51a5ba375
   */
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

  validate() {
    if(this.material && typeof (this.material as any).validate === 'function') {
      (this.material as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyMaterialResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "central";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("cloudauth", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 新增AIGC人脸检测能力
   * 
   * @param request - AIGCFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AIGCFaceVerifyResponse
   */
  async aIGCFaceVerifyWithOptions(request: AIGCFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<AIGCFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<AIGCFaceVerifyResponse>(await this.callApi(params, req, runtime), new AIGCFaceVerifyResponse({}));
  }

  /**
   * 新增AIGC人脸检测能力
   * 
   * @param request - AIGCFaceVerifyRequest
   * @returns AIGCFaceVerifyResponse
   */
  async aIGCFaceVerify(request: AIGCFaceVerifyRequest): Promise<AIGCFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.aIGCFaceVerifyWithOptions(request, runtime);
  }

  /**
   * 银行卡要素核验接口
   * 
   * @param request - BankMetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns BankMetaVerifyResponse
   */
  async bankMetaVerifyWithOptions(request: BankMetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<BankMetaVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bankCard)) {
      query["BankCard"] = request.bankCard;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.identityType)) {
      query["IdentityType"] = request.identityType;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.productType)) {
      query["ProductType"] = request.productType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.verifyMode)) {
      query["VerifyMode"] = request.verifyMode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<BankMetaVerifyResponse>(await this.callApi(params, req, runtime), new BankMetaVerifyResponse({}));
  }

  /**
   * 银行卡要素核验接口
   * 
   * @param request - BankMetaVerifyRequest
   * @returns BankMetaVerifyResponse
   */
  async bankMetaVerify(request: BankMetaVerifyRequest): Promise<BankMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.bankMetaVerifyWithOptions(request, runtime);
  }

  /**
   * @param request - CompareFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFaceVerifyResponse
   */
  async compareFaceVerifyWithOptions(request: CompareFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<CompareFaceVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.sourceCertifyId)) {
      body["SourceCertifyId"] = request.sourceCertifyId;
    }

    if (!$dara.isNull(request.sourceFaceContrastPicture)) {
      body["SourceFaceContrastPicture"] = request.sourceFaceContrastPicture;
    }

    if (!$dara.isNull(request.sourceFaceContrastPictureUrl)) {
      body["SourceFaceContrastPictureUrl"] = request.sourceFaceContrastPictureUrl;
    }

    if (!$dara.isNull(request.sourceOssBucketName)) {
      body["SourceOssBucketName"] = request.sourceOssBucketName;
    }

    if (!$dara.isNull(request.sourceOssObjectName)) {
      body["SourceOssObjectName"] = request.sourceOssObjectName;
    }

    if (!$dara.isNull(request.targetCertifyId)) {
      body["TargetCertifyId"] = request.targetCertifyId;
    }

    if (!$dara.isNull(request.targetFaceContrastPicture)) {
      body["TargetFaceContrastPicture"] = request.targetFaceContrastPicture;
    }

    if (!$dara.isNull(request.targetFaceContrastPictureUrl)) {
      body["TargetFaceContrastPictureUrl"] = request.targetFaceContrastPictureUrl;
    }

    if (!$dara.isNull(request.targetOssBucketName)) {
      body["TargetOssBucketName"] = request.targetOssBucketName;
    }

    if (!$dara.isNull(request.targetOssObjectName)) {
      body["TargetOssObjectName"] = request.targetOssObjectName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CompareFaceVerifyResponse>(await this.callApi(params, req, runtime), new CompareFaceVerifyResponse({}));
  }

  /**
   * @param request - CompareFaceVerifyRequest
   * @returns CompareFaceVerifyResponse
   */
  async compareFaceVerify(request: CompareFaceVerifyRequest): Promise<CompareFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @param request - CompareFacesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CompareFacesResponse
   */
  async compareFacesWithOptions(request: CompareFacesRequest, runtime: $dara.RuntimeOptions): Promise<CompareFacesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.sourceImageType)) {
      body["SourceImageType"] = request.sourceImageType;
    }

    if (!$dara.isNull(request.sourceImageValue)) {
      body["SourceImageValue"] = request.sourceImageValue;
    }

    if (!$dara.isNull(request.targetImageType)) {
      body["TargetImageType"] = request.targetImageType;
    }

    if (!$dara.isNull(request.targetImageValue)) {
      body["TargetImageValue"] = request.targetImageValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CompareFacesResponse>(await this.callApi(params, req, runtime), new CompareFacesResponse({}));
  }

  /**
   * @param request - CompareFacesRequest
   * @returns CompareFacesResponse
   */
  async compareFaces(request: CompareFacesRequest): Promise<CompareFacesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.compareFacesWithOptions(request, runtime);
  }

  /**
   * @param request - ContrastFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ContrastFaceVerifyResponse
   */
  async contrastFaceVerifyWithOptions(request: ContrastFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certName)) {
      body["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      body["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.encryptType)) {
      body["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.faceContrastFile)) {
      body["FaceContrastFile"] = request.faceContrastFile;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ContrastFaceVerifyResponse>(await this.callApi(params, req, runtime), new ContrastFaceVerifyResponse({}));
  }

  /**
   * @param request - ContrastFaceVerifyRequest
   * @returns ContrastFaceVerifyResponse
   */
  async contrastFaceVerify(request: ContrastFaceVerifyRequest): Promise<ContrastFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.contrastFaceVerifyWithOptions(request, runtime);
  }

  async contrastFaceVerifyAdvance(request: ContrastFaceVerifyAdvanceRequest, runtime: $dara.RuntimeOptions): Promise<ContrastFaceVerifyResponse> {
    // Step 0: init client
    let accessKeyId = await this._credential.getAccessKeyId();
    let accessKeySecret = await this._credential.getAccessKeySecret();
    let securityToken = await this._credential.getSecurityToken();
    let credentialType = this._credential.getType();
    let openPlatformEndpoint = this._openPlatformEndpoint;
    if ($dara.isNull(openPlatformEndpoint)) {
      openPlatformEndpoint = "openplatform.aliyuncs.com";
    }

    if ($dara.isNull(credentialType)) {
      credentialType = "access_key";
    }

    let authConfig = new $OpenApiUtil.Config({
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
    if (!$dara.isNull(request.faceContrastFileObject)) {
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
   * @param request - CreateAuthKeyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAuthKeyResponse
   */
  async createAuthKeyWithOptions(request: CreateAuthKeyRequest, runtime: $dara.RuntimeOptions): Promise<CreateAuthKeyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.authYears)) {
      query["AuthYears"] = request.authYears;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.test)) {
      query["Test"] = request.test;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CreateAuthKeyResponse>(await this.callApi(params, req, runtime), new CreateAuthKeyResponse({}));
  }

  /**
   * @param request - CreateAuthKeyRequest
   * @returns CreateAuthKeyResponse
   */
  async createAuthKey(request: CreateAuthKeyRequest): Promise<CreateAuthKeyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createAuthKeyWithOptions(request, runtime);
  }

  /**
   * @param request - CreateVerifySettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVerifySettingResponse
   */
  async createVerifySettingWithOptions(request: CreateVerifySettingRequest, runtime: $dara.RuntimeOptions): Promise<CreateVerifySettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizName)) {
      query["BizName"] = request.bizName;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.guideStep)) {
      query["GuideStep"] = request.guideStep;
    }

    if (!$dara.isNull(request.privacyStep)) {
      query["PrivacyStep"] = request.privacyStep;
    }

    if (!$dara.isNull(request.resultStep)) {
      query["ResultStep"] = request.resultStep;
    }

    if (!$dara.isNull(request.solution)) {
      query["Solution"] = request.solution;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CreateVerifySettingResponse>(await this.callApi(params, req, runtime), new CreateVerifySettingResponse({}));
  }

  /**
   * @param request - CreateVerifySettingRequest
   * @returns CreateVerifySettingResponse
   */
  async createVerifySetting(request: CreateVerifySettingRequest): Promise<CreateVerifySettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.createVerifySettingWithOptions(request, runtime);
  }

  /**
   * 凭证核验
   * 
   * @param tmpReq - CredentialVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CredentialVerifyResponse
   */
  async credentialVerifyWithOptions(tmpReq: CredentialVerifyRequest, runtime: $dara.RuntimeOptions): Promise<CredentialVerifyResponse> {
    tmpReq.validate();
    let request = new CredentialVerifyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.merchantDetail)) {
      request.merchantDetailShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.merchantDetail, "MerchantDetail", "json");
    }

    let query = { };
    if (!$dara.isNull(request.certNum)) {
      query["CertNum"] = request.certNum;
    }

    if (!$dara.isNull(request.credName)) {
      query["CredName"] = request.credName;
    }

    if (!$dara.isNull(request.credType)) {
      query["CredType"] = request.credType;
    }

    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.imageUrl)) {
      query["ImageUrl"] = request.imageUrl;
    }

    if (!$dara.isNull(request.isCheck)) {
      query["IsCheck"] = request.isCheck;
    }

    if (!$dara.isNull(request.isOCR)) {
      query["IsOCR"] = request.isOCR;
    }

    if (!$dara.isNull(request.merchantDetailShrink)) {
      query["MerchantDetail"] = request.merchantDetailShrink;
    }

    if (!$dara.isNull(request.merchantId)) {
      query["MerchantId"] = request.merchantId;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.prompt)) {
      query["Prompt"] = request.prompt;
    }

    if (!$dara.isNull(request.promptModel)) {
      query["PromptModel"] = request.promptModel;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.imageContext)) {
      body["ImageContext"] = request.imageContext;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<CredentialVerifyResponse>(await this.callApi(params, req, runtime), new CredentialVerifyResponse({}));
  }

  /**
   * 凭证核验
   * 
   * @param request - CredentialVerifyRequest
   * @returns CredentialVerifyResponse
   */
  async credentialVerify(request: CredentialVerifyRequest): Promise<CredentialVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.credentialVerifyWithOptions(request, runtime);
  }

  /**
   * 人脸凭证核验服务
   * 
   * @param request - DeepfakeDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeepfakeDetectResponse
   */
  async deepfakeDetectWithOptions(request: DeepfakeDetectRequest, runtime: $dara.RuntimeOptions): Promise<DeepfakeDetectResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.faceInputType)) {
      query["FaceInputType"] = request.faceInputType;
    }

    if (!$dara.isNull(request.faceUrl)) {
      query["FaceUrl"] = request.faceUrl;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.faceBase64)) {
      body["FaceBase64"] = request.faceBase64;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeepfakeDetect",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeepfakeDetectResponse>(await this.callApi(params, req, runtime), new DeepfakeDetectResponse({}));
  }

  /**
   * 人脸凭证核验服务
   * 
   * @param request - DeepfakeDetectRequest
   * @returns DeepfakeDetectResponse
   */
  async deepfakeDetect(request: DeepfakeDetectRequest): Promise<DeepfakeDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deepfakeDetectWithOptions(request, runtime);
  }

  /**
   * 金融级服务敏感数据删除接口
   * 
   * @param request - DeleteFaceVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFaceVerifyResultResponse
   */
  async deleteFaceVerifyResultWithOptions(request: DeleteFaceVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<DeleteFaceVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.deleteAfterQuery)) {
      query["DeleteAfterQuery"] = request.deleteAfterQuery;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFaceVerifyResult",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DeleteFaceVerifyResultResponse>(await this.callApi(params, req, runtime), new DeleteFaceVerifyResultResponse({}));
  }

  /**
   * 金融级服务敏感数据删除接口
   * 
   * @param request - DeleteFaceVerifyResultRequest
   * @returns DeleteFaceVerifyResultResponse
   */
  async deleteFaceVerifyResult(request: DeleteFaceVerifyResultRequest): Promise<DeleteFaceVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.deleteFaceVerifyResultWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfoWithOptions(request: DescribeDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<DescribeDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.expiredEndDay)) {
      query["ExpiredEndDay"] = request.expiredEndDay;
    }

    if (!$dara.isNull(request.expiredStartDay)) {
      query["ExpiredStartDay"] = request.expiredStartDay;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeDeviceInfoResponse>(await this.callApi(params, req, runtime), new DescribeDeviceInfoResponse({}));
  }

  /**
   * @param request - DescribeDeviceInfoRequest
   * @returns DescribeDeviceInfoResponse
   */
  async describeDeviceInfo(request: DescribeDeviceInfoRequest): Promise<DescribeDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 金融级人脸保镖服务
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRiskWithOptions(request: DescribeFaceGuardRiskRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaceGuardRiskResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.deviceToken)) {
      query["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DescribeFaceGuardRisk",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<DescribeFaceGuardRiskResponse>(await this.callApi(params, req, runtime), new DescribeFaceGuardRiskResponse({}));
  }

  /**
   * 金融级人脸保镖服务
   * 
   * @param request - DescribeFaceGuardRiskRequest
   * @returns DescribeFaceGuardRiskResponse
   */
  async describeFaceGuardRisk(request: DescribeFaceGuardRiskRequest): Promise<DescribeFaceGuardRiskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceGuardRiskWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerifyWithOptions(request: DescribeFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<DescribeFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.pictureReturnType)) {
      query["PictureReturnType"] = request.pictureReturnType;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeFaceVerifyResponse>(await this.callApi(params, req, runtime), new DescribeFaceVerifyResponse({}));
  }

  /**
   * @param request - DescribeFaceVerifyRequest
   * @returns DescribeFaceVerifyResponse
   */
  async describeFaceVerify(request: DescribeFaceVerifyRequest): Promise<DescribeFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeFaceVerifyWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeOssUploadTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadTokenWithOptions(runtime: $dara.RuntimeOptions): Promise<DescribeOssUploadTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({ });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeOssUploadTokenResponse>(await this.callApi(params, req, runtime), new DescribeOssUploadTokenResponse({}));
  }

  /**
   * @returns DescribeOssUploadTokenResponse
   */
  async describeOssUploadToken(): Promise<DescribeOssUploadTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeOssUploadTokenWithOptions(runtime);
  }

  /**
   * Open API新增金融级数据统计API
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyDataWithOptions(request: DescribePageFaceVerifyDataRequest, runtime: $dara.RuntimeOptions): Promise<DescribePageFaceVerifyDataResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribePageFaceVerifyDataResponse>(await this.callApi(params, req, runtime), new DescribePageFaceVerifyDataResponse({}));
  }

  /**
   * Open API新增金融级数据统计API
   * 
   * @param request - DescribePageFaceVerifyDataRequest
   * @returns DescribePageFaceVerifyDataResponse
   */
  async describePageFaceVerifyData(request: DescribePageFaceVerifyDataRequest): Promise<DescribePageFaceVerifyDataResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describePageFaceVerifyDataWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeSmartStatisticsPageListRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageListWithOptions(request: DescribeSmartStatisticsPageListRequest, runtime: $dara.RuntimeOptions): Promise<DescribeSmartStatisticsPageListResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.endDate)) {
      query["EndDate"] = request.endDate;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.startDate)) {
      query["StartDate"] = request.startDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeSmartStatisticsPageListResponse>(await this.callApi(params, req, runtime), new DescribeSmartStatisticsPageListResponse({}));
  }

  /**
   * @param request - DescribeSmartStatisticsPageListRequest
   * @returns DescribeSmartStatisticsPageListResponse
   */
  async describeSmartStatisticsPageList(request: DescribeSmartStatisticsPageListRequest): Promise<DescribeSmartStatisticsPageListResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeSmartStatisticsPageListWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVerifyResultRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResultWithOptions(request: DescribeVerifyResultRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVerifyResultResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeVerifyResultResponse>(await this.callApi(params, req, runtime), new DescribeVerifyResultResponse({}));
  }

  /**
   * @param request - DescribeVerifyResultRequest
   * @returns DescribeVerifyResultResponse
   */
  async describeVerifyResult(request: DescribeVerifyResultRequest): Promise<DescribeVerifyResultResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyResultWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVerifySDKRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDKWithOptions(request: DescribeVerifySDKRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVerifySDKResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeVerifySDKResponse>(await this.callApi(params, req, runtime), new DescribeVerifySDKResponse({}));
  }

  /**
   * @param request - DescribeVerifySDKRequest
   * @returns DescribeVerifySDKResponse
   */
  async describeVerifySDK(request: DescribeVerifySDKRequest): Promise<DescribeVerifySDKResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifySDKWithOptions(request, runtime);
  }

  /**
   * @param request - DescribeVerifyTokenRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyTokenWithOptions(request: DescribeVerifyTokenRequest, runtime: $dara.RuntimeOptions): Promise<DescribeVerifyTokenResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.callbackSeed)) {
      query["CallbackSeed"] = request.callbackSeed;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.faceRetainedImageUrl)) {
      query["FaceRetainedImageUrl"] = request.faceRetainedImageUrl;
    }

    if (!$dara.isNull(request.failedRedirectUrl)) {
      query["FailedRedirectUrl"] = request.failedRedirectUrl;
    }

    if (!$dara.isNull(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!$dara.isNull(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!$dara.isNull(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.passedRedirectUrl)) {
      query["PassedRedirectUrl"] = request.passedRedirectUrl;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.userIp)) {
      query["UserIp"] = request.userIp;
    }

    if (!$dara.isNull(request.userPhoneNumber)) {
      query["UserPhoneNumber"] = request.userPhoneNumber;
    }

    if (!$dara.isNull(request.userRegistTime)) {
      query["UserRegistTime"] = request.userRegistTime;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DescribeVerifyTokenResponse>(await this.callApi(params, req, runtime), new DescribeVerifyTokenResponse({}));
  }

  /**
   * @param request - DescribeVerifyTokenRequest
   * @returns DescribeVerifyTokenResponse
   */
  async describeVerifyToken(request: DescribeVerifyTokenRequest): Promise<DescribeVerifyTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.describeVerifyTokenWithOptions(request, runtime);
  }

  /**
   * @param request - DetectFaceAttributesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributesWithOptions(request: DetectFaceAttributesRequest, runtime: $dara.RuntimeOptions): Promise<DetectFaceAttributesResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.bizType)) {
      body["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.materialValue)) {
      body["MaterialValue"] = request.materialValue;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<DetectFaceAttributesResponse>(await this.callApi(params, req, runtime), new DetectFaceAttributesResponse({}));
  }

  /**
   * @param request - DetectFaceAttributesRequest
   * @returns DetectFaceAttributesResponse
   */
  async detectFaceAttributes(request: DetectFaceAttributesRequest): Promise<DetectFaceAttributesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.detectFaceAttributesWithOptions(request, runtime);
  }

  /**
   * 二要素有效期核验接口
   * 
   * @param request - Id2MetaPeriodVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaPeriodVerifyResponse
   */
  async id2MetaPeriodVerifyWithOptions(request: Id2MetaPeriodVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Id2MetaPeriodVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.validityEndDate)) {
      body["ValidityEndDate"] = request.validityEndDate;
    }

    if (!$dara.isNull(request.validityStartDate)) {
      body["ValidityStartDate"] = request.validityStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaPeriodVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Id2MetaPeriodVerifyResponse>(await this.callApi(params, req, runtime), new Id2MetaPeriodVerifyResponse({}));
  }

  /**
   * 二要素有效期核验接口
   * 
   * @param request - Id2MetaPeriodVerifyRequest
   * @returns Id2MetaPeriodVerifyResponse
   */
  async id2MetaPeriodVerify(request: Id2MetaPeriodVerifyRequest): Promise<Id2MetaPeriodVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaPeriodVerifyWithOptions(request, runtime);
  }

  /**
   * 身份二要素标准版
   * 
   * @param request - Id2MetaStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaStandardVerifyResponse
   */
  async id2MetaStandardVerifyWithOptions(request: Id2MetaStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Id2MetaStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Id2MetaStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Id2MetaStandardVerifyResponse>(await this.callApi(params, req, runtime), new Id2MetaStandardVerifyResponse({}));
  }

  /**
   * 身份二要素标准版
   * 
   * @param request - Id2MetaStandardVerifyRequest
   * @returns Id2MetaStandardVerifyResponse
   */
  async id2MetaStandardVerify(request: Id2MetaStandardVerifyRequest): Promise<Id2MetaStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaStandardVerifyWithOptions(request, runtime);
  }

  /**
   * 身份二要素接口
   * 
   * @param request - Id2MetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Id2MetaVerifyResponse
   */
  async id2MetaVerifyWithOptions(request: Id2MetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Id2MetaVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<Id2MetaVerifyResponse>(await this.callApi(params, req, runtime), new Id2MetaVerifyResponse({}));
  }

  /**
   * 身份二要素接口
   * 
   * @param request - Id2MetaVerifyRequest
   * @returns Id2MetaVerifyResponse
   */
  async id2MetaVerify(request: Id2MetaVerifyRequest): Promise<Id2MetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.id2MetaVerifyWithOptions(request, runtime);
  }

  /**
   * @param request - InitFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InitFaceVerifyResponse
   */
  async initFaceVerifyWithOptions(request: InitFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<InitFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.appQualityCheck)) {
      query["AppQualityCheck"] = request.appQualityCheck;
    }

    if (!$dara.isNull(request.birthday)) {
      query["Birthday"] = request.birthday;
    }

    if (!$dara.isNull(request.callbackToken)) {
      query["CallbackToken"] = request.callbackToken;
    }

    if (!$dara.isNull(request.callbackUrl)) {
      query["CallbackUrl"] = request.callbackUrl;
    }

    if (!$dara.isNull(request.cameraSelection)) {
      query["CameraSelection"] = request.cameraSelection;
    }

    if (!$dara.isNull(request.certName)) {
      query["CertName"] = request.certName;
    }

    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certType)) {
      query["CertType"] = request.certType;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.certifyUrlStyle)) {
      query["CertifyUrlStyle"] = request.certifyUrlStyle;
    }

    if (!$dara.isNull(request.certifyUrlType)) {
      query["CertifyUrlType"] = request.certifyUrlType;
    }

    if (!$dara.isNull(request.encryptType)) {
      query["EncryptType"] = request.encryptType;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      query["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.faceGuardOutput)) {
      query["FaceGuardOutput"] = request.faceGuardOutput;
    }

    if (!$dara.isNull(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.metaInfo)) {
      query["MetaInfo"] = request.metaInfo;
    }

    if (!$dara.isNull(request.mobile)) {
      query["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.mode)) {
      query["Mode"] = request.mode;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      query["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      query["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      query["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.procedurePriority)) {
      query["ProcedurePriority"] = request.procedurePriority;
    }

    if (!$dara.isNull(request.productCode)) {
      query["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.rarelyCharacters)) {
      query["RarelyCharacters"] = request.rarelyCharacters;
    }

    if (!$dara.isNull(request.readImg)) {
      query["ReadImg"] = request.readImg;
    }

    if (!$dara.isNull(request.returnUrl)) {
      query["ReturnUrl"] = request.returnUrl;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.suitableType)) {
      query["SuitableType"] = request.suitableType;
    }

    if (!$dara.isNull(request.uiCustomUrl)) {
      query["UiCustomUrl"] = request.uiCustomUrl;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!$dara.isNull(request.validityDate)) {
      query["ValidityDate"] = request.validityDate;
    }

    if (!$dara.isNull(request.videoEvidence)) {
      query["VideoEvidence"] = request.videoEvidence;
    }

    if (!$dara.isNull(request.voluntaryCustomizedContent)) {
      query["VoluntaryCustomizedContent"] = request.voluntaryCustomizedContent;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.authId)) {
      body["AuthId"] = request.authId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.model)) {
      body["Model"] = request.model;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<InitFaceVerifyResponse>(await this.callApi(params, req, runtime), new InitFaceVerifyResponse({}));
  }

  /**
   * @param request - InitFaceVerifyRequest
   * @returns InitFaceVerifyResponse
   */
  async initFaceVerify(request: InitFaceVerifyRequest): Promise<InitFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.initFaceVerifyWithOptions(request, runtime);
  }

  /**
   * 新增实人白名单
   * 
   * @param request - InsertWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InsertWhiteListSettingResponse
   */
  async insertWhiteListSettingWithOptions(request: InsertWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<InsertWhiteListSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.remark)) {
      query["Remark"] = request.remark;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.validDay)) {
      query["ValidDay"] = request.validDay;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "InsertWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<InsertWhiteListSettingResponse>(await this.callApi(params, req, runtime), new InsertWhiteListSettingResponse({}));
  }

  /**
   * 新增实人白名单
   * 
   * @param request - InsertWhiteListSettingRequest
   * @returns InsertWhiteListSettingResponse
   */
  async insertWhiteListSetting(request: InsertWhiteListSettingRequest): Promise<InsertWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.insertWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * @param request - LivenessFaceVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LivenessFaceVerifyResponse
   */
  async livenessFaceVerifyWithOptions(request: LivenessFaceVerifyRequest, runtime: $dara.RuntimeOptions): Promise<LivenessFaceVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.model)) {
      query["Model"] = request.model;
    }

    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.certifyId)) {
      body["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.crop)) {
      body["Crop"] = request.crop;
    }

    if (!$dara.isNull(request.deviceToken)) {
      body["DeviceToken"] = request.deviceToken;
    }

    if (!$dara.isNull(request.faceContrastPicture)) {
      body["FaceContrastPicture"] = request.faceContrastPicture;
    }

    if (!$dara.isNull(request.faceContrastPictureUrl)) {
      body["FaceContrastPictureUrl"] = request.faceContrastPictureUrl;
    }

    if (!$dara.isNull(request.ip)) {
      body["Ip"] = request.ip;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.ossBucketName)) {
      body["OssBucketName"] = request.ossBucketName;
    }

    if (!$dara.isNull(request.ossObjectName)) {
      body["OssObjectName"] = request.ossObjectName;
    }

    if (!$dara.isNull(request.outerOrderNo)) {
      body["OuterOrderNo"] = request.outerOrderNo;
    }

    if (!$dara.isNull(request.productCode)) {
      body["ProductCode"] = request.productCode;
    }

    if (!$dara.isNull(request.sceneId)) {
      body["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.userId)) {
      body["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<LivenessFaceVerifyResponse>(await this.callApi(params, req, runtime), new LivenessFaceVerifyResponse({}));
  }

  /**
   * @param request - LivenessFaceVerifyRequest
   * @returns LivenessFaceVerifyResponse
   */
  async livenessFaceVerify(request: LivenessFaceVerifyRequest): Promise<LivenessFaceVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.livenessFaceVerifyWithOptions(request, runtime);
  }

  /**
   * 手机号三要素详版_标准版
   * 
   * @param request - Mobile3MetaDetailStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaDetailStandardVerifyResponse
   */
  async mobile3MetaDetailStandardVerifyWithOptions(request: Mobile3MetaDetailStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Mobile3MetaDetailStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaDetailStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Mobile3MetaDetailStandardVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaDetailStandardVerifyResponse({}));
  }

  /**
   * 手机号三要素详版_标准版
   * 
   * @param request - Mobile3MetaDetailStandardVerifyRequest
   * @returns Mobile3MetaDetailStandardVerifyResponse
   */
  async mobile3MetaDetailStandardVerify(request: Mobile3MetaDetailStandardVerifyRequest): Promise<Mobile3MetaDetailStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaDetailStandardVerifyWithOptions(request, runtime);
  }

  /**
   * 手机三要素详版接口
   * 
   * @param request - Mobile3MetaDetailVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerifyWithOptions(request: Mobile3MetaDetailVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Mobile3MetaDetailVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<Mobile3MetaDetailVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaDetailVerifyResponse({}));
  }

  /**
   * 手机三要素详版接口
   * 
   * @param request - Mobile3MetaDetailVerifyRequest
   * @returns Mobile3MetaDetailVerifyResponse
   */
  async mobile3MetaDetailVerify(request: Mobile3MetaDetailVerifyRequest): Promise<Mobile3MetaDetailVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaDetailVerifyWithOptions(request, runtime);
  }

  /**
   * 手机号三要素简版_标准版
   * 
   * @param request - Mobile3MetaSimpleStandardVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaSimpleStandardVerifyResponse
   */
  async mobile3MetaSimpleStandardVerifyWithOptions(request: Mobile3MetaSimpleStandardVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Mobile3MetaSimpleStandardVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "Mobile3MetaSimpleStandardVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Mobile3MetaSimpleStandardVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaSimpleStandardVerifyResponse({}));
  }

  /**
   * 手机号三要素简版_标准版
   * 
   * @param request - Mobile3MetaSimpleStandardVerifyRequest
   * @returns Mobile3MetaSimpleStandardVerifyResponse
   */
  async mobile3MetaSimpleStandardVerify(request: Mobile3MetaSimpleStandardVerifyRequest): Promise<Mobile3MetaSimpleStandardVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaSimpleStandardVerifyWithOptions(request, runtime);
  }

  /**
   * 手机号三要素简版接口
   * 
   * @param request - Mobile3MetaSimpleVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerifyWithOptions(request: Mobile3MetaSimpleVerifyRequest, runtime: $dara.RuntimeOptions): Promise<Mobile3MetaSimpleVerifyResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.identifyNum)) {
      body["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      body["UserName"] = request.userName;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<Mobile3MetaSimpleVerifyResponse>(await this.callApi(params, req, runtime), new Mobile3MetaSimpleVerifyResponse({}));
  }

  /**
   * 手机号三要素简版接口
   * 
   * @param request - Mobile3MetaSimpleVerifyRequest
   * @returns Mobile3MetaSimpleVerifyResponse
   */
  async mobile3MetaSimpleVerify(request: Mobile3MetaSimpleVerifyRequest): Promise<Mobile3MetaSimpleVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobile3MetaSimpleVerifyWithOptions(request, runtime);
  }

  /**
   * 号码检测
   * 
   * @param request - MobileDetectRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileDetectResponse
   */
  async mobileDetectWithOptions(request: MobileDetectRequest, runtime: $dara.RuntimeOptions): Promise<MobileDetectResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobiles)) {
      body["Mobiles"] = request.mobiles;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<MobileDetectResponse>(await this.callApi(params, req, runtime), new MobileDetectResponse({}));
  }

  /**
   * 号码检测
   * 
   * @param request - MobileDetectRequest
   * @returns MobileDetectResponse
   */
  async mobileDetect(request: MobileDetectRequest): Promise<MobileDetectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileDetectWithOptions(request, runtime);
  }

  /**
   * 查询手机号在网状态
   * 
   * @param request - MobileOnlineStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileOnlineStatusResponse
   */
  async mobileOnlineStatusWithOptions(request: MobileOnlineStatusRequest, runtime: $dara.RuntimeOptions): Promise<MobileOnlineStatusResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<MobileOnlineStatusResponse>(await this.callApi(params, req, runtime), new MobileOnlineStatusResponse({}));
  }

  /**
   * 查询手机号在网状态
   * 
   * @param request - MobileOnlineStatusRequest
   * @returns MobileOnlineStatusResponse
   */
  async mobileOnlineStatus(request: MobileOnlineStatusRequest): Promise<MobileOnlineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineStatusWithOptions(request, runtime);
  }

  /**
   * 查询手机号在网时长
   * 
   * @param request - MobileOnlineTimeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MobileOnlineTimeResponse
   */
  async mobileOnlineTimeWithOptions(request: MobileOnlineTimeRequest, runtime: $dara.RuntimeOptions): Promise<MobileOnlineTimeResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.mobile)) {
      body["Mobile"] = request.mobile;
    }

    if (!$dara.isNull(request.paramType)) {
      body["ParamType"] = request.paramType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<MobileOnlineTimeResponse>(await this.callApi(params, req, runtime), new MobileOnlineTimeResponse({}));
  }

  /**
   * 查询手机号在网时长
   * 
   * @param request - MobileOnlineTimeRequest
   * @returns MobileOnlineTimeResponse
   */
  async mobileOnlineTime(request: MobileOnlineTimeRequest): Promise<MobileOnlineTimeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.mobileOnlineTimeWithOptions(request, runtime);
  }

  /**
   * @param request - ModifyDeviceInfoRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ModifyDeviceInfoResponse
   */
  async modifyDeviceInfoWithOptions(request: ModifyDeviceInfoRequest, runtime: $dara.RuntimeOptions): Promise<ModifyDeviceInfoResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.deviceId)) {
      query["DeviceId"] = request.deviceId;
    }

    if (!$dara.isNull(request.duration)) {
      query["Duration"] = request.duration;
    }

    if (!$dara.isNull(request.expiredDay)) {
      query["ExpiredDay"] = request.expiredDay;
    }

    if (!$dara.isNull(request.userDeviceId)) {
      query["UserDeviceId"] = request.userDeviceId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<ModifyDeviceInfoResponse>(await this.callApi(params, req, runtime), new ModifyDeviceInfoResponse({}));
  }

  /**
   * @param request - ModifyDeviceInfoRequest
   * @returns ModifyDeviceInfoResponse
   */
  async modifyDeviceInfo(request: ModifyDeviceInfoRequest): Promise<ModifyDeviceInfoResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.modifyDeviceInfoWithOptions(request, runtime);
  }

  /**
   * 分页查询实人白名单配置
   * 
   * @param request - PageQueryWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PageQueryWhiteListSettingResponse
   */
  async pageQueryWhiteListSettingWithOptions(request: PageQueryWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<PageQueryWhiteListSettingResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.certNo)) {
      query["CertNo"] = request.certNo;
    }

    if (!$dara.isNull(request.certifyId)) {
      query["CertifyId"] = request.certifyId;
    }

    if (!$dara.isNull(request.currentPage)) {
      query["CurrentPage"] = request.currentPage;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!$dara.isNull(request.sceneId)) {
      query["SceneId"] = request.sceneId;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    if (!$dara.isNull(request.status)) {
      query["Status"] = request.status;
    }

    if (!$dara.isNull(request.validEndDate)) {
      query["ValidEndDate"] = request.validEndDate;
    }

    if (!$dara.isNull(request.validStartDate)) {
      query["ValidStartDate"] = request.validStartDate;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PageQueryWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<PageQueryWhiteListSettingResponse>(await this.callApi(params, req, runtime), new PageQueryWhiteListSettingResponse({}));
  }

  /**
   * 分页查询实人白名单配置
   * 
   * @param request - PageQueryWhiteListSettingRequest
   * @returns PageQueryWhiteListSettingResponse
   */
  async pageQueryWhiteListSetting(request: PageQueryWhiteListSettingRequest): Promise<PageQueryWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.pageQueryWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * 删除实人白名单
   * 
   * @param tmpReq - RemoveWhiteListSettingRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveWhiteListSettingResponse
   */
  async removeWhiteListSettingWithOptions(tmpReq: RemoveWhiteListSettingRequest, runtime: $dara.RuntimeOptions): Promise<RemoveWhiteListSettingResponse> {
    tmpReq.validate();
    let request = new RemoveWhiteListSettingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.ids)) {
      request.idsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.ids, "Ids", "json");
    }

    let query = { };
    if (!$dara.isNull(request.idsShrink)) {
      query["Ids"] = request.idsShrink;
    }

    if (!$dara.isNull(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "RemoveWhiteListSetting",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<RemoveWhiteListSettingResponse>(await this.callApi(params, req, runtime), new RemoveWhiteListSettingResponse({}));
  }

  /**
   * 删除实人白名单
   * 
   * @param request - RemoveWhiteListSettingRequest
   * @returns RemoveWhiteListSettingResponse
   */
  async removeWhiteListSetting(request: RemoveWhiteListSettingRequest): Promise<RemoveWhiteListSettingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.removeWhiteListSettingWithOptions(request, runtime);
  }

  /**
   * 车五项信息识别
   * 
   * @param request - Vehicle5ItemQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns Vehicle5ItemQueryResponse
   */
  async vehicle5ItemQueryWithOptions(request: Vehicle5ItemQueryRequest, runtime: $dara.RuntimeOptions): Promise<Vehicle5ItemQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "Vehicle5ItemQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<Vehicle5ItemQueryResponse>(await this.callApi(params, req, runtime), new Vehicle5ItemQueryResponse({}));
  }

  /**
   * 车五项信息识别
   * 
   * @param request - Vehicle5ItemQueryRequest
   * @returns Vehicle5ItemQueryResponse
   */
  async vehicle5ItemQuery(request: Vehicle5ItemQueryRequest): Promise<Vehicle5ItemQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicle5ItemQueryWithOptions(request, runtime);
  }

  /**
   * 车辆投保日期查询
   * 
   * @param request - VehicleInsureQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleInsureQueryResponse
   */
  async vehicleInsureQueryWithOptions(request: VehicleInsureQueryRequest, runtime: $dara.RuntimeOptions): Promise<VehicleInsureQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.vin)) {
      query["Vin"] = request.vin;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleInsureQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VehicleInsureQueryResponse>(await this.callApi(params, req, runtime), new VehicleInsureQueryResponse({}));
  }

  /**
   * 车辆投保日期查询
   * 
   * @param request - VehicleInsureQueryRequest
   * @returns VehicleInsureQueryResponse
   */
  async vehicleInsureQuery(request: VehicleInsureQueryRequest): Promise<VehicleInsureQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleInsureQueryWithOptions(request, runtime);
  }

  /**
   * 车辆要素核验
   * 
   * @param request - VehicleMetaVerifyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleMetaVerifyResponse
   */
  async vehicleMetaVerifyWithOptions(request: VehicleMetaVerifyRequest, runtime: $dara.RuntimeOptions): Promise<VehicleMetaVerifyResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.verifyMetaType)) {
      query["VerifyMetaType"] = request.verifyMetaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleMetaVerify",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VehicleMetaVerifyResponse>(await this.callApi(params, req, runtime), new VehicleMetaVerifyResponse({}));
  }

  /**
   * 车辆要素核验
   * 
   * @param request - VehicleMetaVerifyRequest
   * @returns VehicleMetaVerifyResponse
   */
  async vehicleMetaVerify(request: VehicleMetaVerifyRequest): Promise<VehicleMetaVerifyResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyWithOptions(request, runtime);
  }

  /**
   * 车辆要素核验增强版
   * 
   * @param request - VehicleMetaVerifyV2Request
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleMetaVerifyV2Response
   */
  async vehicleMetaVerifyV2WithOptions(request: VehicleMetaVerifyV2Request, runtime: $dara.RuntimeOptions): Promise<VehicleMetaVerifyV2Response> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.identifyNum)) {
      query["IdentifyNum"] = request.identifyNum;
    }

    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.userName)) {
      query["UserName"] = request.userName;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    if (!$dara.isNull(request.verifyMetaType)) {
      query["VerifyMetaType"] = request.verifyMetaType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleMetaVerifyV2",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VehicleMetaVerifyV2Response>(await this.callApi(params, req, runtime), new VehicleMetaVerifyV2Response({}));
  }

  /**
   * 车辆要素核验增强版
   * 
   * @param request - VehicleMetaVerifyV2Request
   * @returns VehicleMetaVerifyV2Response
   */
  async vehicleMetaVerifyV2(request: VehicleMetaVerifyV2Request): Promise<VehicleMetaVerifyV2Response> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleMetaVerifyV2WithOptions(request, runtime);
  }

  /**
   * 车辆信息识别
   * 
   * @param request - VehicleQueryRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VehicleQueryResponse
   */
  async vehicleQueryWithOptions(request: VehicleQueryRequest, runtime: $dara.RuntimeOptions): Promise<VehicleQueryResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.paramType)) {
      query["ParamType"] = request.paramType;
    }

    if (!$dara.isNull(request.vehicleNum)) {
      query["VehicleNum"] = request.vehicleNum;
    }

    if (!$dara.isNull(request.vehicleType)) {
      query["VehicleType"] = request.vehicleType;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "VehicleQuery",
      version: "2019-03-07",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $dara.cast<VehicleQueryResponse>(await this.callApi(params, req, runtime), new VehicleQueryResponse({}));
  }

  /**
   * 车辆信息识别
   * 
   * @param request - VehicleQueryRequest
   * @returns VehicleQueryResponse
   */
  async vehicleQuery(request: VehicleQueryRequest): Promise<VehicleQueryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.vehicleQueryWithOptions(request, runtime);
  }

  /**
   * @param request - VerifyMaterialRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns VerifyMaterialResponse
   */
  async verifyMaterialWithOptions(request: VerifyMaterialRequest, runtime: $dara.RuntimeOptions): Promise<VerifyMaterialResponse> {
    request.validate();
    let query = { };
    if (!$dara.isNull(request.bizId)) {
      query["BizId"] = request.bizId;
    }

    if (!$dara.isNull(request.bizType)) {
      query["BizType"] = request.bizType;
    }

    if (!$dara.isNull(request.faceImageUrl)) {
      query["FaceImageUrl"] = request.faceImageUrl;
    }

    if (!$dara.isNull(request.idCardBackImageUrl)) {
      query["IdCardBackImageUrl"] = request.idCardBackImageUrl;
    }

    if (!$dara.isNull(request.idCardFrontImageUrl)) {
      query["IdCardFrontImageUrl"] = request.idCardFrontImageUrl;
    }

    if (!$dara.isNull(request.idCardNumber)) {
      query["IdCardNumber"] = request.idCardNumber;
    }

    if (!$dara.isNull(request.name)) {
      query["Name"] = request.name;
    }

    if (!$dara.isNull(request.userId)) {
      query["UserId"] = request.userId;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    return $dara.cast<VerifyMaterialResponse>(await this.callApi(params, req, runtime), new VerifyMaterialResponse({}));
  }

  /**
   * @param request - VerifyMaterialRequest
   * @returns VerifyMaterialResponse
   */
  async verifyMaterial(request: VerifyMaterialRequest): Promise<VerifyMaterialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    return await this.verifyMaterialWithOptions(request, runtime);
  }

}

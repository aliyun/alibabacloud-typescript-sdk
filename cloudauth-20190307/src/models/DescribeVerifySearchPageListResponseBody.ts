// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifySearchPageListResponseBodyItemsExtInfo extends $dara.Model {
  /**
   * @remarks
   * The masked name.
   * 
   * @example
   * 何*
   */
  certName?: string;
  /**
   * @remarks
   * The face guard label.
   * 
   * @example
   * HOOK,ROOT
   */
  deviceRisk?: string;
  /**
   * @remarks
   * Indicates whether a face attack is detected. Valid values:
   * - **T**: Yes.
   * - **F**: No.
   * 
   * @example
   * T
   */
  faceAttack?: string;
  /**
   * @remarks
   * The face attack score. Valid values: 0 to 1. A value closer to 1 indicates a higher likelihood of an attack.
   * 
   * @example
   * 0.0000445161
   */
  faceAttackScore?: number;
  /**
   * @remarks
   * Indicates whether the face is occluded. T indicates occluded. F indicates not occluded.
   * 
   * @example
   * T
   */
  faceOcclusion?: string;
  /**
   * @remarks
   * The face-to-ID-card comparison score.
   * 
   * @example
   * 0.9
   */
  idCardVerifyScore?: number;
  /**
   * @remarks
   * The OSS bucket for photos.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-XXX
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The OSS file name of the OCR ID card face image.
   * 
   * @example
   * -
   */
  ossIdFaceObjectName?: string;
  /**
   * @remarks
   * The OSS file name of the OCR ID card national emblem image.
   * 
   * @example
   * -
   */
  ossIdNationalEmblemObjectName?: string;
  /**
   * @remarks
   * The storage object name.
   * 
   * @example
   * verify/XXXXX1251634779/sha6a0a0cab01288c7aa8ac3f45220eb_0_normal.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The face quality score from liveness detection.
   * 
   * @example
   * 1.0
   */
  qualityScore?: number;
  /**
   * @remarks
   * The face comparison score.
   * 
   * @example
   * 0.0
   */
  verifyScore?: number;
  /**
   * @remarks
   * The list of ASR texts.
   */
  asrTexts?: string[];
  /**
   * @remarks
   * The list of screen recording file OSS object names.
   * 
   * @example
   * -
   */
  screenVideoObjectNames?: string[];
  /**
   * @remarks
   * The list of audio file OSS object names.
   * 
   * @example
   * -
   */
  voiceObjectNames?: string[];
  static names(): { [key: string]: string } {
    return {
      certName: 'CertName',
      deviceRisk: 'DeviceRisk',
      faceAttack: 'FaceAttack',
      faceAttackScore: 'FaceAttackScore',
      faceOcclusion: 'FaceOcclusion',
      idCardVerifyScore: 'IdCardVerifyScore',
      ossBucketName: 'OssBucketName',
      ossIdFaceObjectName: 'OssIdFaceObjectName',
      ossIdNationalEmblemObjectName: 'OssIdNationalEmblemObjectName',
      ossObjectName: 'OssObjectName',
      qualityScore: 'QualityScore',
      verifyScore: 'VerifyScore',
      asrTexts: 'asrTexts',
      screenVideoObjectNames: 'screenVideoObjectNames',
      voiceObjectNames: 'voiceObjectNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      deviceRisk: 'string',
      faceAttack: 'string',
      faceAttackScore: 'number',
      faceOcclusion: 'string',
      idCardVerifyScore: 'number',
      ossBucketName: 'string',
      ossIdFaceObjectName: 'string',
      ossIdNationalEmblemObjectName: 'string',
      ossObjectName: 'string',
      qualityScore: 'number',
      verifyScore: 'number',
      asrTexts: { 'type': 'array', 'itemType': 'string' },
      screenVideoObjectNames: { 'type': 'array', 'itemType': 'string' },
      voiceObjectNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.asrTexts)) {
      $dara.Model.validateArray(this.asrTexts);
    }
    if(Array.isArray(this.screenVideoObjectNames)) {
      $dara.Model.validateArray(this.screenVideoObjectNames);
    }
    if(Array.isArray(this.voiceObjectNames)) {
      $dara.Model.validateArray(this.voiceObjectNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySearchPageListResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The masked ID card number.
   * 
   * @example
   * 3****************2
   */
  certNo?: string;
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * shad861465f2aaeeb805b519e1a93ab2
   */
  certifyId?: string;
  /**
   * @remarks
   * The extended information.
   */
  extInfo?: DescribeVerifySearchPageListResponseBodyItemsExtInfo;
  /**
   * @remarks
   * The verification time of the authentication record.
   * 
   * @example
   * 2025-10-14 15:40:13
   */
  gmtVerify?: string;
  /**
   * @remarks
   * The liveness detection scheme.
   * 
   * @example
   * MULTI_ACTION
   */
  model?: string;
  /**
   * @remarks
   * The unique identifier of the customer request.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * - **T**: Passed.
   * - **F**: Not passed.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * The business scenario risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskBizScenario?: number;
  /**
   * @remarks
   * The device risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskDevice?: number;
  /**
   * @remarks
   * The DeviceToken risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 0
   */
  riskDeviceToken?: number;
  /**
   * @remarks
   * The generic risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskGeneric?: number;
  /**
   * @remarks
   * The large model mining risk. Valid values:
   * - **0**: No risk.
   * - **1**: Risk exists.
   * 
   * @example
   * 1
   */
  riskModelMining?: number;
  /**
   * @remarks
   * Specifies whether the device is rooted. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the identity tag risk type.
   * 
   * @example
   * 1
   */
  root?: number;
  /**
   * @remarks
   * The scene ID.
   * 
   * @example
   * 1000015352
   */
  sceneId?: number;
  /**
   * @remarks
   * Specifies whether the device is a simulator. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the device tag risk type.
   * 
   * @example
   * 1
   */
  simulator?: number;
  /**
   * @remarks
   * The error code returned by the system.
   * 
   * @example
   * 207
   */
  subCode?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 198123xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Specifies whether virtual video adaptation is used. Set this parameter to 1 if selected. Otherwise, do not pass this parameter. This corresponds to the behavior tag risk type.
   * 
   * @example
   * 1
   */
  virtualVideo?: number;
  static names(): { [key: string]: string } {
    return {
      certNo: 'CertNo',
      certifyId: 'CertifyId',
      extInfo: 'ExtInfo',
      gmtVerify: 'GmtVerify',
      model: 'Model',
      outerOrderNo: 'OuterOrderNo',
      passed: 'Passed',
      productCode: 'ProductCode',
      riskBizScenario: 'RiskBizScenario',
      riskDevice: 'RiskDevice',
      riskDeviceToken: 'RiskDeviceToken',
      riskGeneric: 'RiskGeneric',
      riskModelMining: 'RiskModelMining',
      root: 'Root',
      sceneId: 'SceneId',
      simulator: 'Simulator',
      subCode: 'SubCode',
      userId: 'UserId',
      virtualVideo: 'VirtualVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certNo: 'string',
      certifyId: 'string',
      extInfo: DescribeVerifySearchPageListResponseBodyItemsExtInfo,
      gmtVerify: 'string',
      model: 'string',
      outerOrderNo: 'string',
      passed: 'string',
      productCode: 'string',
      riskBizScenario: 'number',
      riskDevice: 'number',
      riskDeviceToken: 'number',
      riskGeneric: 'number',
      riskModelMining: 'number',
      root: 'number',
      sceneId: 'number',
      simulator: 'number',
      subCode: 'string',
      userId: 'string',
      virtualVideo: 'number',
    };
  }

  validate() {
    if(this.extInfo && typeof (this.extInfo as any).validate === 'function') {
      (this.extInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVerifySearchPageListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The paginated list data.
   */
  items?: DescribeVerifySearchPageListResponseBodyItems[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 47D87BC1-D956-573A-8A15-A9007A76F56C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 53
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 4
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
      items: { 'type': 'array', 'itemType': DescribeVerifySearchPageListResponseBodyItems },
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


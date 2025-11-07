// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifySearchPageListResponseBodyItemsExtInfo extends $dara.Model {
  /**
   * @remarks
   * Desensitized name.
   * 
   * @example
   * 何*
   */
  certName?: string;
  /**
   * @remarks
   * Face guard label.
   * 
   * @example
   * -
   */
  deviceRisk?: string;
  /**
   * @remarks
   * Whether it is a face attack:
   * - **T**: Yes
   * - **F**: No
   * 
   * @example
   * T
   */
  faceAttack?: string;
  /**
   * @remarks
   * Face attack score, with a range of 0~1. A value closer to 1 indicates a higher likelihood of an attack.
   * 
   * @example
   * 0.0000445161
   */
  faceAttackScore?: number;
  /**
   * @remarks
   * Whether the face is occluded, T if yes, F otherwise.
   * 
   * @example
   * T
   */
  faceOcclusion?: string;
  /**
   * @remarks
   * Face-to-ID card comparison score.
   * 
   * @example
   * 0.9
   */
  idCardVerifyScore?: number;
  /**
   * @remarks
   * The OSS bucket for the photo.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-XXX
   */
  ossBucketName?: string;
  /**
   * @remarks
   * OCR ID card face file name.
   * 
   * @example
   * -
   */
  ossIdFaceObjectName?: string;
  /**
   * @remarks
   * OCR ID card national emblem file name.
   * 
   * @example
   * -
   */
  ossIdNationalEmblemObjectName?: string;
  /**
   * @remarks
   * The name of the stored object.
   * 
   * @example
   * verify/XXXXX1251634779/sha6a0a0cab01288c7aa8ac3f45220eb_0_normal.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * Liveness face quality score.
   * 
   * @example
   * 1.0
   */
  qualityScore?: number;
  /**
   * @remarks
   * Face comparison score.
   * 
   * @example
   * 0.0
   */
  verifyScore?: number;
  /**
   * @remarks
   * List of ASR texts.
   */
  asrTexts?: string[];
  /**
   * @remarks
   * List of OSS file names for screen recording files.
   * 
   * @example
   * -
   */
  screenVideoObjectNames?: string[];
  /**
   * @remarks
   * List of OSS file names for audio files.
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
   * Desensitized ID number.
   * 
   * @example
   * 3****************2
   */
  certNo?: string;
  /**
   * @remarks
   * Certification ID.
   * 
   * @example
   * shad861465f2aaeeb805b519e1a93ab2
   */
  certifyId?: string;
  /**
   * @remarks
   * Extended information.
   */
  extInfo?: DescribeVerifySearchPageListResponseBodyItemsExtInfo;
  /**
   * @remarks
   * Verification time of this authentication.
   * 
   * @example
   * 2025-10-14 15:40:13
   */
  gmtVerify?: string;
  /**
   * @remarks
   * Liveness detection scheme.
   * 
   * @example
   * MULTI_ACTION
   */
  model?: string;
  /**
   * @remarks
   * Unique identifier for the customer request.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Whether the certification passed. Values:
   * - **T**: Passed.
   * - **F**: Not passed.
   * 
   * @example
   * T
   */
  passed?: string;
  /**
   * @remarks
   * Product code.
   * 
   * @example
   * ID_PRO
   */
  productCode?: string;
  /**
   * @remarks
   * Whether it is root (pass 1 if selected, otherwise do not pass; corresponds to identity label risk type).
   * 
   * @example
   * 1
   */
  root?: number;
  /**
   * @remarks
   * Scene ID.
   * 
   * @example
   * 1000015352
   */
  sceneId?: number;
  /**
   * @remarks
   * Whether it is a simulator (pass 1 if selected, otherwise do not pass; corresponds to device label risk type).
   * 
   * @example
   * 1
   */
  simulator?: number;
  /**
   * @remarks
   * System returned error code.
   * 
   * @example
   * 207
   */
  subCode?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 198123xxxxxx
   */
  userId?: string;
  /**
   * @remarks
   * Whether it is a virtual adaptation (pass 1 if selected, otherwise do not pass; corresponds to behavior label risk type).
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
   * Current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Paged list data.
   */
  items?: DescribeVerifySearchPageListResponseBodyItems[];
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 47D87BC1-D956-573A-8A15-A9007A76F56C
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 53
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
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


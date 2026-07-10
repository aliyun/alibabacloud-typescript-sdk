// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyResultResponseBodyMaterialIdCardInfo extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * 浙江省杭州市余杭区文一西路969号
   */
  address?: string;
  /**
   * @remarks
   * The issuing authority.
   * 
   * @example
   * 杭州市公安局
   */
  authority?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the national emblem side of the ID card. The URL is valid for 5 minutes. Save the image to avoid access issues.
   * > If the HTTP or HTTPS URL has expired, call DescribeVerifyResult again to obtain a new URL.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  backImageUrl?: string;
  /**
   * @remarks
   * The date of birth.
   * 
   * @example
   * 19900101
   */
  birth?: string;
  /**
   * @remarks
   * The expiration date of the ID card. Format: yyyymmdd.
   * 
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the portrait side of the ID card. The URL is valid for 5 minutes. Save the image to avoid access issues.
   * > If the HTTP or HTTPS URL has expired, call DescribeVerifyResult again to obtain a new URL.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  frontImageUrl?: string;
  /**
   * @remarks
   * The name on the ID card.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * The ethnicity.
   * 
   * @example
   * 汉
   */
  nationality?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 02343218901123****
   */
  number?: string;
  /**
   * @remarks
   * The start date of the ID card validity period. Format: yyyymmdd.
   * 
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
   * @remarks
   * The global camera image captured by the ID Verification SDK.
   * 
   * > This parameter takes effect only after configuration. If you need to use this parameter, [submit a ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the face photo. The URL is valid for 5 minutes. Save the image to avoid access issues.
   * > If the HTTP or HTTPS URL of the face photo has expired, call [DescribeVerifyResult](https://help.aliyun.com/document_detail/154606.html) again to obtain a new URL.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-image-example.jpg
   */
  faceImageUrl?: string;
  /**
   * @remarks
   * Indicates whether the face is wearing a mask. Valid values:
   * - **true**: A mask is detected.
   * - **false**: No mask is detected.
   * 
   * @example
   * false
   */
  faceMask?: boolean;
  /**
   * @remarks
   * The quality of the face photo. Valid values:
   * - **UNQUALIFIED**: poor quality.
   * - **LOW**: low quality.
   * - **NORMAL**: moderate quality.
   * - **HIGH**: high quality.
   * 
   * @example
   * NORMAL
   */
  faceQuality?: string;
  /**
   * @remarks
   * The OCR result of the ID card information.
   * > If no front or back image of the ID card is provided during verification, the ID Verification service does not return the OCR result. Even if front and back images are provided, the service does not guarantee that all information on the ID card will be returned. OCR information may be incomplete when the ID card photo is blurry or has lighting issues that prevent character recognition. Do not create a strong dependency on the ID card OCR information in your business logic.
   */
  idCardInfo?: DescribeVerifyResultResponseBodyMaterialIdCardInfo;
  /**
   * @remarks
   * The name on the ID card.
   * 
   * @example
   * 张三
   */
  idCardName?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * @example
   * 02343218901123****
   */
  idCardNumber?: string;
  /**
   * @remarks
   * The URL of the recorded video returned by the legacy RPH5BioOnly solution.
   */
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

export class DescribeVerifyResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The comparison score between the face photo submitted during verification and the authoritative data. Value range: **0** to **100**.
   * 
   * Confidence threshold reference:
   * 
   * - When the false acceptance rate is 0.001%, the corresponding threshold is 95.
   * - When the false acceptance rate is 0.01%, the corresponding threshold is 90.
   * - When the false acceptance rate is 0.1%, the corresponding threshold is 80.
   * - When the false acceptance rate is 1%, the corresponding threshold is 60.
   * 
   * > This field only indicates the comparison result between the face and the authoritative data and is for reference only. Do not use this value alone as the criterion for determining whether the verification is passed. For the comprehensive verification result, refer to the **VerifyStatus** field. The **VerifyStatus** result combines the face-to-authoritative-data comparison with multiple other strategies to improve security.
   * 
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @remarks
   * The comparison score between the face photo submitted during verification and the face in the retained face image. Value range: **0** to **100**.
   * 
   * 
   * Confidence threshold reference:
   * 
   * - When the false acceptance rate is 0.001%, the corresponding threshold is 95.
   * - When the false acceptance rate is 0.01%, the corresponding threshold is 90.
   * - When the false acceptance rate is 0.1%, the corresponding threshold is 80.
   * - When the false acceptance rate is 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * The comparison score between the face photo submitted during verification and the face on the ID card photo. Value range: **0** to **100**.
   * 
   * 
   * Confidence threshold reference:
   * 
   * - When the false acceptance rate is 0.001%, the corresponding threshold is 95.
   * - When the false acceptance rate is 0.01%, the corresponding threshold is 90.
   * - When the false acceptance rate is 0.1%, the corresponding threshold is 80.
   * - When the false acceptance rate is 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  /**
   * @remarks
   * The verification materials.
   */
  material?: DescribeVerifyResultResponseBodyMaterial;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The verification status. Valid values:
   * 
   * - **-1**: not verified.
   * - **1**: verification passed.
   * - **2** to **n**: verification failed due to various reasons. For more information, see the verification status description.
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $dara.Model {
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
   * The HTTP or HTTPS URL of the national emblem side of the ID card. The URL is valid for 5 minutes. Save the image to your own storage to avoid access issues.
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
   * The HTTP or HTTPS URL of the portrait side of the ID card. The URL is valid for 5 minutes. Save the image to your own storage to avoid access issues.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  frontImageUrl?: string;
  /**
   * @remarks
   * The name.
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

export class VerifyMaterialResponseBodyMaterial extends $dara.Model {
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
   * The HTTP or HTTPS URL of the front-facing facial photo, corresponding to the request parameter **FaceImageUrl**. The URL is valid for 5 minutes. Save the image to your own storage to avoid access issues.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
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
  faceMask?: string;
  /**
   * @remarks
   * The quality of the front-facing facial photo. Valid values:
   * - **UNQUALIFIED**: poor quality
   * - **LOW**: low quality
   * - **NORMAL**: moderate quality
   * - **HIGH**: high quality.
   * 
   * @example
   * NORMAL
   */
  faceQuality?: string;
  /**
   * @remarks
   * The OCR result of the ID card information.
   * 
   * > If the front and back photos of the ID card are not provided during verification, the OCR result of the ID card information is not returned. Even if both photos are provided, not all information on the ID card is guaranteed to be returned. OCR may fail to recognize certain information due to issues such as poor photo quality. We recommend that your business logic does not strictly depend on the ID card OCR information.
   */
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  /**
   * @remarks
   * The name, corresponding to the request parameter **Name**.
   * 
   * @example
   * 张三
   */
  idCardName?: string;
  /**
   * @remarks
   * The ID card number, corresponding to the request parameter **IdCardNumber**.
   * 
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

export class VerifyMaterialResponseBody extends $dara.Model {
  /**
   * @remarks
   * The comparison score between the facial photo submitted during verification and the authoritative data. Value range: **0** to **100**.
   * 
   * Confidence thresholds for reference:
   * - At a false acceptance rate of 0.001%, the corresponding threshold is 95.
   * - At a false acceptance rate of 0.01%, the corresponding threshold is 90.
   * - At a false acceptance rate of 0.1%, the corresponding threshold is 80.
   * - At a false acceptance rate of 1%, the corresponding threshold is 60.
   * 
   * > This field only represents the comparison result between the face and the authoritative data and serves as a reference score. We do not recommend using this score alone as the pass/fail criterion. For the comprehensive verification result, refer to the **VerifyStatus** field. The **VerifyStatus** result combines the face-to-authoritative-data comparison with multiple other strategies to improve the security level.
   * 
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @remarks
   * The comparison score between the facial photo submitted during verification and the face on the portrait side of the ID card. Value range: **0** to **100**.
   * 
   * Confidence thresholds for reference:
   * - At a false acceptance rate of 0.001%, the corresponding threshold is 95.
   * - At a false acceptance rate of 0.01%, the corresponding threshold is 90.
   * - At a false acceptance rate of 0.1%, the corresponding threshold is 80.
   * - At a false acceptance rate of 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  /**
   * @remarks
   * The verification materials.
   */
  material?: VerifyMaterialResponseBodyMaterial;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The verification status. Valid values:
   * 
   * - **1**: Verification passed.
   * - **2** to **n**: Verification failed due to various reasons. For detailed descriptions, see **Verification status description** below.
   * 
   * @example
   * 1
   */
  verifyStatus?: number;
  /**
   * @remarks
   * The token for this verification, used to correlate the various operations within a verification request. The token is valid for 30 minutes.
   * 
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


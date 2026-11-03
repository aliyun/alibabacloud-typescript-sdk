// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $dara.Model {
  /**
   * @remarks
   * The address.
   * 
   * @example
   * No. 969 Wenyi West Road, Yuhang District, Hangzhou City, Zhejiang Province
   */
  address?: string;
  /**
   * @remarks
   * The issuing authority.
   * 
   * @example
   * Hangzhou Municipal Public Security Bureau
   */
  authority?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image for the back side of the ID card. The URL is valid for 5 minutes. Store the image in your own storage to prevent usage issues.
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
   * The end date of the ID card validity period. Format: yyyymmdd.
   * 
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the image for the front side of the ID card. The URL is valid for 5 minutes. Store the image in your own storage to prevent usage issues.
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
   * Zhang San
   */
  name?: string;
  /**
   * @remarks
   * The ethnicity.
   * 
   * @example
   * Han
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
   * The global image captured by the camera and collected by the ID Verification SDK.
   * 
   * > This parameter takes effect only after it is configured. If you need to use this parameter, submit a [ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS URL of the front-facing portrait photo, which corresponds to the **FaceImageUrl** request parameter. The URL is valid for 5 minutes. Store the image in your own storage to prevent usage issues.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  faceImageUrl?: string;
  /**
   * @remarks
   * Specifies whether the face is wearing a mask. Valid values:
   * - **true**: A mask is worn.
   * - **false**: No mask is worn.
   * 
   * @example
   * false
   */
  faceMask?: string;
  /**
   * @remarks
   * The quality of the front-facing portrait photo. Valid values:
   * - **UNQUALIFIED**: Poor photo quality.
   * - **LOW**: Low.
   * - **NORMAL**: Normal.
   * - **HIGH**: High.
   * 
   * @example
   * NORMAL
   */
  faceQuality?: string;
  /**
   * @remarks
   * The OCR result of the ID card information.
   * 
   * > If the front and back sides of the ID card are not provided during the authentication process, the OCR result of the ID card information is not returned. Even if the front and back sides of the ID card are provided, the system does not guarantee that all information on the ID card is returned. If OCR fails to recognize certain information due to photo quality issues, the OCR information may be incomplete. Do not strongly rely on the ID card OCR information in your business.
   */
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  /**
   * @remarks
   * The name, which corresponds to the **Name** request parameter.
   * 
   * @example
   * Zhang San
   */
  idCardName?: string;
  /**
   * @remarks
   * The ID card number, which corresponds to the **IdCardNumber** request parameter.
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
   * The comparison score between the submitted face photo and the authoritative data during the authentication process. Valid values: **0** to **100**.
   * 
   * Refer to the following confidence thresholds:
   * - When the false acceptance rate (FAR) is 0.001%, the corresponding threshold is 95.
   * - When the FAR is 0.01%, the corresponding threshold is 90.
   * - When the FAR is 0.1%, the corresponding threshold is 80.
   * - When the FAR is 1%, the corresponding threshold is 60.
   * 
   * > This field only indicates the comparison result between the face and the authoritative data and serves as a reference score. Do not use this score alone as the pass or fail criterion. For the comprehensive authentication result, refer to the **VerifyStatus** field. The **VerifyStatus** result combines the face and authoritative data comparison with various other strategies to improve the security level.
   * 
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @remarks
   * The comparison score between the submitted face photo and the face on the front side of the ID card during the authentication process. Valid values: **0** to **100**.
   * 
   * Refer to the following confidence thresholds:
   * - When the false acceptance rate (FAR) is 0.001%, the corresponding threshold is 95.
   * - When the FAR is 0.01%, the corresponding threshold is 90.
   * - When the FAR is 0.1%, the corresponding threshold is 80.
   * - When the FAR is 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  /**
   * @remarks
   * The authentication materials.
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
   * The authentication status. Valid values:
   * 
   * - **1**: The authentication is passed.
   * - **2** to **n**: The authentication fails due to various reasons. For detailed descriptions, see **Authentication status description** below.
   * 
   * @example
   * 1
   */
  verifyStatus?: number;
  /**
   * @remarks
   * The token for this authentication. It is used to link various APIs in the authentication request and is valid for 30 minutes.
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


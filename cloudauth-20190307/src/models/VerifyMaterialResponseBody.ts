// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyMaterialResponseBodyMaterialIdCardInfo extends $dara.Model {
  /**
   * @remarks
   * Address.
   * 
   * @example
   * 浙江省杭州市余杭区文一西路969号
   */
  address?: string;
  /**
   * @remarks
   * Issuing authority.
   * 
   * @example
   * 杭州市公安局
   */
  authority?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the national emblem side of the ID card. The link is valid for 5 minutes. It is recommended to store it in your business system to avoid any impact on usage.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example3.jpg
   */
  backImageUrl?: string;
  /**
   * @remarks
   * Date of birth.
   * 
   * @example
   * 19900101
   */
  birth?: string;
  /**
   * @remarks
   * End date of the document\\"s validity period. Format: yyyymmdd.
   * 
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the portrait side of the ID card. The link is valid for 5 minutes. It is recommended to store it in your business system to avoid any impact on usage.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example2.jpg
   */
  frontImageUrl?: string;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * Nationality.
   * 
   * @example
   * 汉
   */
  nationality?: string;
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 02343218901123****
   */
  number?: string;
  /**
   * @remarks
   * Start date of the document\\"s validity period. Format: yyyymmdd.
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
   * Global camera image captured by the real-person authentication SDK.
   * 
   * > This parameter will take effect after configuration. If you need to use this parameter, please submit a [ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @remarks
   * HTTP or HTTPS link to the frontal face image, corresponding to the request parameter **FaceImageUrl**. The link is valid for 5 minutes, and it is recommended to store it in your business to avoid affecting usage.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/example.jpg
   */
  faceImageUrl?: string;
  /**
   * @remarks
   * Whether the face is wearing a mask. Values:
   * - **true**: Wearing a mask
   * - **false**: Not wearing a mask
   * 
   * @example
   * false
   */
  faceMask?: string;
  /**
   * @remarks
   * The quality of the frontal face image. Possible values:
   * - **UNQUALIFIED**: Poor quality
   * - **LOW**: Low
   * - **NORMAL**: Average
   * - **HIGH**: High
   * 
   * @example
   * NORMAL
   */
  faceQuality?: string;
  /**
   * @remarks
   * OCR result of the ID card information.
   * 
   * > If there is no front or back of the ID card during the verification process, the OCR result of the ID card information will not be returned. Even if the front and back of the ID card are present during the verification process, it does not guarantee that all the information on the ID card will be returned. Due to issues such as poor ID card photography, the OCR may fail to recognize some information, leading to incomplete OCR results. It is recommended that the business side does not heavily rely on the ID card OCR information.
   */
  idCardInfo?: VerifyMaterialResponseBodyMaterialIdCardInfo;
  /**
   * @remarks
   * Name, corresponding to the request parameter **Name**.
   * 
   * @example
   * 张三
   */
  idCardName?: string;
  /**
   * @remarks
   * ID number, corresponding to the request parameter **IdCardNumber**.
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
   * Comparison score between the facial photo submitted during the authentication process and authoritative data, with a range of **0**~**100**.
   * 
   * Confidence threshold references:
   * - False recognition rate 0.001% corresponds to a threshold of 95.
   * - False recognition rate 0.01% corresponds to a threshold of 90.
   * - False recognition rate 0.1% corresponds to a threshold of 80.
   * - False recognition rate 1% corresponds to a threshold of 60.
   * 
   * > This field only indicates the comparison result between the face and authoritative data, serving as a reference score. It is generally not recommended to use this score alone as the pass/fail criterion. For the comprehensive authentication result, please refer to the **VerifyStatus** field. The **VerifyStatus** result integrates the face-to-authoritative data comparison and other various strategies, enhancing security levels.
   * 
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @remarks
   * Comparison score between the facial photo submitted during the authentication process and the face on the portrait side of the ID card image, with a range of **0**~**100**.
   * 
   * Confidence threshold references:
   * - False recognition rate 0.001% corresponds to a threshold of 95.
   * - False recognition rate 0.01% corresponds to a threshold of 90.
   * - False recognition rate 0.1% corresponds to a threshold of 80.
   * - False recognition rate 1% corresponds to a threshold of 60.
   * 
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  /**
   * @remarks
   * Authentication materials.
   */
  material?: VerifyMaterialResponseBodyMaterial;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Authentication status. Values:
   * 
   * - **1**: Authentication passed.
   * - **2**~**n**: Authentication failed due to various reasons. For detailed descriptions, see the **Authentication Status Explanation** below.
   * 
   * @example
   * 1
   */
  verifyStatus?: number;
  /**
   * @remarks
   * Token for this authentication, used to link various interfaces in the authentication request, valid for 30 minutes.
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


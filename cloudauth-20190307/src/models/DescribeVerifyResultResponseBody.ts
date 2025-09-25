// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVerifyResultResponseBodyMaterialIdCardInfo extends $dara.Model {
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
   * HTTP/HTTPS link to the image of the back side (national emblem side) of the ID card. The link is valid for 5 minutes, and it is recommended to store it for business use to avoid any impact.
   * > If the HTTP/HTTPS link to the front-facing portrait image expires, you can call DescribeVerifyResult again to get the link.
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
   * The end date of the document\\"s validity period. Format: yyyymmdd.
   * 
   * @example
   * 20201101
   */
  endDate?: string;
  /**
   * @remarks
   * HTTP/HTTPS link to the image of the front side (portrait side) of the ID card. The link is valid for 5 minutes, and it is recommended to store it for business use to avoid any impact.
   * > If the HTTP/HTTPS link to the front-facing portrait image expires, you can call DescribeVerifyResult again to get the link.
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
   * ID card number.
   * 
   * @example
   * 02343218901123****
   */
  number?: string;
  /**
   * @remarks
   * Start date of the document\\"s validity. Format: yyyymmdd.
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
   * The global camera image captured by the real-person authentication SDK.
   * 
   * > This parameter will only take effect after configuration. If you need to use this parameter, please submit a [ticket](https://selfservice.console.aliyun.com/ticket/category/cloudauth/today) to contact us.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-global-example.jpg
   */
  faceGlobalUrl?: string;
  /**
   * @remarks
   * The HTTP or HTTPS link to the frontal face image. The link is valid for 5 minutes, and it is recommended to store it elsewhere to avoid any impact on usage.
   * > If the HTTP or HTTPS link to the frontal face image expires, you can call [DescribeVerifyResult](https://help.aliyun.com/document_detail/154606.html) again to get the link.
   * 
   * @example
   * http://image-demo.img-cn-hangzhou.aliyuncs.com/face-image-example.jpg
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
  faceMask?: boolean;
  /**
   * @remarks
   * The quality of the frontal face image. Values:
   * - **UNQUALIFIED**: Poor quality
   * - **LOW**: Low
   * - **NORMAL**: Normal
   * - **HIGH**: High
   * 
   * @example
   * NORMAL
   */
  faceQuality?: string;
  /**
   * @remarks
   * OCR results of the ID card information.
   * > If there is no front and back information of the ID card during the authentication process, the real-person authentication service will not return the OCR results of the ID card. Even if there is front and back information of the ID card during the authentication process, the real-person authentication service does not guarantee to return all the information on the ID card. Due to issues with ID card photography, the OCR may fail to recognize some information, resulting in incomplete OCR information. It is recommended that your business does not strongly rely on the ID card OCR information.
   */
  idCardInfo?: DescribeVerifyResultResponseBodyMaterialIdCardInfo;
  /**
   * @remarks
   * Name.
   * 
   * @example
   * 张三
   */
  idCardName?: string;
  /**
   * @remarks
   * ID number.
   * 
   * @example
   * 02343218901123****
   */
  idCardNumber?: string;
  /**
   * @remarks
   * The URL addresses of the recorded videos returned by the historical RPH5BioOnly solution.
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
   * The comparison score between the face photo submitted during the authentication process and the authoritative data, with a value range of **0** to **100**.
   * Confidence threshold references:
   * - When the false acceptance rate is 0.001%, the corresponding threshold is 95. - When the false acceptance rate is 0.01%, the corresponding threshold is 90. - When the false acceptance rate is 0.1%, the corresponding threshold is 80. - When the false acceptance rate is 1%, the corresponding threshold is 60.
   * > This field only indicates the comparison result between the face and the authoritative data, for your reference only. It is generally not recommended to use this value alone as the standard for whether the authentication passes. For a comprehensive authentication result, please refer to the **VerifyStatus** field. The **VerifyStatus** result integrates the comparison of the face with the authoritative data and various other strategies, which can enhance security levels.
   * 
   * @example
   * 97
   */
  authorityComparisionScore?: number;
  /**
   * @remarks
   * The comparison score between the face photo submitted during the authentication process and the face in the retained face image. The value range is **0**~**100**.
   * 
   * Confidence threshold reference:
   * 
   * - When the false recognition rate is 0.001%, the corresponding threshold is 95.
   * - When the false recognition rate is 0.01%, the corresponding threshold is 90.
   * - When the false recognition rate is 0.1%, the corresponding threshold is 80.
   * - When the false recognition rate is 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  faceComparisonScore?: number;
  /**
   * @remarks
   * The comparison score between the face photo submitted during the authentication process and the face on the ID card\\"s face side. The value range is **0**~**100**.
   * 
   * Confidence threshold reference:
   * 
   * - When the false recognition rate is 0.001%, the corresponding threshold is 95.
   * - When the false recognition rate is 0.01%, the corresponding threshold is 90.
   * - When the false recognition rate is 0.1%, the corresponding threshold is 80.
   * - When the false recognition rate is 1%, the corresponding threshold is 60.
   * 
   * @example
   * 97
   */
  idCardFaceComparisonScore?: number;
  /**
   * @remarks
   * Authentication materials.
   */
  material?: DescribeVerifyResultResponseBodyMaterial;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Authentication status, values:
   * - **-1**: Not authenticated - **1**: Authentication passed - **2** to **n**: Authentication failed for various reasons. For detailed descriptions, see the authentication status explanation.
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


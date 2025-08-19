// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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


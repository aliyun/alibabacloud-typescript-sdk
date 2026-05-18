// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceLivenessV2AdvanceRequest extends $dara.Model {
  /**
   * @example
   * Base64
   */
  facePictureBase64?: string;
  /**
   * @example
   * InputStream
   */
  facePictureFileObject?: Readable;
  /**
   * @example
   * https://***
   */
  facePictureUrl?: string;
  /**
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @example
   * e0c34a***353888
   */
  merchantBizId?: string;
  /**
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FACE_LIVENESS_MIN_PRO
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      facePictureBase64: 'FacePictureBase64',
      facePictureFileObject: 'FacePictureFile',
      facePictureUrl: 'FacePictureUrl',
      faceQualityCheck: 'FaceQualityCheck',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureBase64: 'string',
      facePictureFileObject: 'Readable',
      facePictureUrl: 'string',
      faceQualityCheck: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
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


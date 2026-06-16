// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceCompareV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable quality check for the input face images.
   * >Danger: Deprecated.
   * 
   * @example
   * N
   */
  facePictureQualityCheck?: string;
  /**
   * @remarks
   * Specifies whether to enable face quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The merchant-defined unique business ID used for subsequent troubleshooting. The value can be a combination of letters and numbers with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The Base64-encoded source face image.
   * 
   * > **Note**
   * 
   * - If you use this method to pass in the image, check the image size and do not pass in an excessively large image.
   * - Specify one of the following parameters: SourceFacePicture, SourceFacePictureUrl, or SourceFacePictureFile.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The file stream of the source face image.
   * 
   * @example
   * InputStream
   */
  sourceFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The HTTPS or HTTP URL of the source face image.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded reference face image.
   * 
   * > **Note**
   * 
   * - If you use this method to pass in the image, check the image size and do not pass in an excessively large image.
   * - Specify one of the following parameters: TargetFacePicture, TargetFacePictureUrl, or TargetFacePictureFile.
   * 
   * @example
   * base64
   */
  targetFacePicture?: string;
  /**
   * @remarks
   * The file stream of the reference face image.
   * 
   * @example
   * InputStream
   */
  targetFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The HTTPS or HTTP URL of the reference face image.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  static names(): { [key: string]: string } {
    return {
      facePictureQualityCheck: 'FacePictureQualityCheck',
      faceQualityCheck: 'FaceQualityCheck',
      merchantBizId: 'MerchantBizId',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureFileObject: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureFileObject: 'TargetFacePictureFile',
      targetFacePictureUrl: 'TargetFacePictureUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      facePictureQualityCheck: 'string',
      faceQualityCheck: 'string',
      merchantBizId: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureFileObject: 'Readable',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureFileObject: 'Readable',
      targetFacePictureUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


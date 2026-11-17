// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceCompareV2AdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable quality check for the input face image.
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * N
   */
  facePictureQualityCheck?: string;
  /**
   * @remarks
   * The face quality check.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * The custom unique business identifier on the merchant side, which is used for subsequent troubleshooting. It supports a combination of letters and digits, with a maximum length of 32 characters. Ensure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The Base64-encoded portrait photo.
   * 
   * Note
   * 
   * - If you use this method to pass the face image, check the image size and do not pass oversized images.
   * - Specify only one of the following parameters: SourceFacePicture, SourceFacePictureUrl, and SourceFacePictureFile.
   * 
   * @example
   * base64
   */
  sourceFacePicture?: string;
  /**
   * @remarks
   * The file stream of the face image.
   * 
   * @example
   * InputStream
   */
  sourceFacePictureFileObject?: Readable;
  /**
   * @remarks
   * The HTTPS or HTTP URL of the face image.
   * 
   * @example
   * https://***face1.jpeg
   */
  sourceFacePictureUrl?: string;
  /**
   * @remarks
   * The Base64-encoded reference photo.
   * 
   * Note
   * 
   * - If you use this method to pass the reference photo, check the photo size and do not pass oversized photos.
   * - Specify only one of the following parameters: TargetFacePicture, TargetFacePictureUrl, and TargetFacePictureFile.
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


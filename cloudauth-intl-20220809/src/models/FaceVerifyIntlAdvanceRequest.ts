// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class FaceVerifyIntlAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * Specifies whether to automatically register the face to the specified face library when no duplicate face is found during retrieval. Valid values:
   * - 0: Automatic registration.
   * - 1: No registration. This is the default value.
   * 
   * @example
   * 1
   */
  autoRegistration?: string;
  faceAttributeCheck?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * The face library codes created by the customer through the console. A maximum of 10 face libraries can be queried at the same time. Separate multiple face library codes with commas (,).
   * 
   * @example
   * 1232344，23444
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * Specifies whether to check the quality of the face image. Valid values:
   * - Y: Enabled.
   * - N: Disabled. This is the default value.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * The code of the face library for registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * A custom unique business identifier used for subsequent troubleshooting. The value supports a combination of letters and digits up to 32 characters in length. Make sure the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID or other identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, such as by hashing the value.
   * 
   * @example
   * 123456789
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product code. Valid values: FACE_VERIFY_MIN and FACE_IDU_MIN.
   * 
   * This parameter is required.
   * 
   * @example
   * FACE_VERIFY_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * Specifies the number of faces to return when multiple faces exist above the matching threshold. Default value: 1. Maximum value: 5.
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * The Base64-encoded portrait image.
   * 
   * > **Note**
   * >
   * > - If you use this method to pass in the image, check the image size and do not pass in an excessively large image.
   * > - Specify one of the following parameters: SourceFacePicture, SourceFacePictureUrl, or SourceFacePictureFile.
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
   * The publicly accessible HTTPS URL of the portrait image.
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
   * >
   * > - If you use this method to pass in the image, check the image size and do not pass in an excessively large image.
   * > - Specify one of the following parameters: TargetFacePicture, TargetFacePictureUrl, or TargetFacePictureFile.
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
   * The HTTPS URL of the reference face image.
   * 
   * @example
   * https://***face2.jpeg
   */
  targetFacePictureUrl?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN. The verification type. Valid values:
   * 
   * - 0: retrieve pattern
   * > - Feature: Pass in a face library and a user face image (sourceFacePicture). The system automatically retrieves the face library to check whether the specified face image (sourceFacePicture) already exists. Passive liveness detection can be enabled for the face image (sourceFacePicture).
   * > - Recommended scenario: Real-person create an account where duplicate registration is not allowed.
   * 
   * - 1 (default): authenticate pattern
   * > - Feature: Pass in a specified face image (sourceFacePicture) and a reference face image (TargetFacePicture). The system automatically authenticates whether the faces match. Passive liveness detection can be enabled for the specified face image (sourceFacePicture).
   * > - Recommended scenario: Authenticating the identity of the user when modifying logon credentials or account information.
   * 
   * - 2: comprehensive pattern
   * > - Feature: Pass in a face library, a specified face image (sourceFacePicture), and a reference face image (TargetFacePicture). The system automatically retrieves the face library to check whether the specified face image (sourceFacePicture) exists, authenticates whether it matches the reference face, and supports enabling passive liveness detection for the specified face image (sourceFacePicture).
   * > - Recommended scenario: Authenticating that the user is a new user and the operation is performed by the user in person.
   * 
   * @example
   * 0
   */
  verifyModel?: string;
  static names(): { [key: string]: string } {
    return {
      autoRegistration: 'AutoRegistration',
      faceAttributeCheck: 'FaceAttributeCheck',
      faceGroupCodes: 'FaceGroupCodes',
      faceQualityCheck: 'FaceQualityCheck',
      faceRegisterGroupCode: 'FaceRegisterGroupCode',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
      returnFaces: 'ReturnFaces',
      sourceFacePicture: 'SourceFacePicture',
      sourceFacePictureFileObject: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureFileObject: 'TargetFacePictureFile',
      targetFacePictureUrl: 'TargetFacePictureUrl',
      verifyModel: 'VerifyModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRegistration: 'string',
      faceAttributeCheck: 'string',
      faceGroupCodes: 'string',
      faceQualityCheck: 'string',
      faceRegisterGroupCode: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
      returnFaces: 'string',
      sourceFacePicture: 'string',
      sourceFacePictureFileObject: 'Readable',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureFileObject: 'Readable',
      targetFacePictureUrl: 'string',
      verifyModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


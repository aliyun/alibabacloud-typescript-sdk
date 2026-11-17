// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * Specifies whether to automatically register the face to the specified face library when no duplicate face is retrieved. Valid values:
   * - 0: automatically register.
   * - 1: do not register. This is the default value.
   * 
   * @example
   * 1
   */
  autoRegistration?: string;
  /**
   * @remarks
   * Specifies whether to return additional face attribute information. Valid values:
   * - N: do not return. This is the default value.
   * - Y: return. The result is included in Result.ExtFaceInfo.FaceAttributeInfo.
   * 
   * @example
   * N
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * The codes of the face libraries created by the customer in the console. You can query up to 10 face libraries at the same time. Separate multiple face library codes with commas.
   * 
   * @example
   * 1232344，23444
   */
  faceGroupCodes?: string;
  /**
   * @remarks
   * Specifies whether to check the quality of the face image. Valid values:
   * - Y: enabled.
   * - N: disabled. This is the default value.
   * 
   * @example
   * Y
   */
  faceQualityCheck?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * The code of the face library for face registration.
   * 
   * @example
   * 0e0c34a77f
   */
  faceRegisterGroupCode?: string;
  /**
   * @remarks
   * The custom unique business identifier used for subsequent troubleshooting. The value must be a unique combination of up to 32 letters and digits.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a mobile phone number or email address. Desensitize the value of this field in advance, such as by hashing the value.
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
   * The custom number of faces to return when multiple faces exceed the matching threshold. Default value: 1. Maximum value: 5.
   * 
   * @example
   * 1
   */
  returnFaces?: string;
  /**
   * @remarks
   * The Base64-encoded portrait photo.
   * 
   * Note
   * 
   * - If you use this method to pass the portrait photo, check the photo size and do not pass oversized photos.
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
  sourceFacePictureFile?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be a publicly accessible HTTPS link.
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
  targetFacePictureFile?: string;
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
   * Specifies whether to overwrite the existing face with the current face when the MerchantUserId already exists during automatic registration. Valid values:
   * - Y: overwrite.
   * - N: do not overwrite and return that the UserId already exists.
   * 
   * @example
   * N
   */
  updateFaceIfUserExists?: string;
  /**
   * @remarks
   * Required when ProductCode is set to FACE_IDU_MIN.
   * 
   * The verification type. Valid values:
   * - 0: retrieval mode.
   * > - Feature: Passes the face library and the user face image (SourceFacePicture). The system automatically retrieves whether the specified face image (SourceFacePicture) already exists in the face library. Passive liveness detection can be enabled for the face image (SourceFacePicture).
   * > - Recommended scenario: Scenarios where real persons create an account and duplicate registrations are not allowed.
   * 
   * - 1: verification mode. This is the default value.
   * > - Feature: Passes the specified face image (SourceFacePicture) and the reference face image (TargetFacePicture). The system automatically verifies whether the faces match. Passive liveness detection can be enabled for the specified face image (SourceFacePicture).
   * > - Recommended scenario: Scenarios where you need to verify whether the operation is performed by the user in person when modifying logon or account information.
   * 
   * - 2: comprehensive mode.
   * > - Feature: Passes the face library, the specified face image (SourceFacePicture), and the reference face image (TargetFacePicture) at the same time. The system automatically retrieves whether the specified face image (SourceFacePicture) exists in the face library and whether it matches the reference face. Passive liveness detection can be enabled for the specified face image (SourceFacePicture).
   * > - Recommended scenario: Scenarios where you need to verify that the user is a new user and the operation is performed in person.
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
      sourceFacePictureFile: 'SourceFacePictureFile',
      sourceFacePictureUrl: 'SourceFacePictureUrl',
      targetFacePicture: 'TargetFacePicture',
      targetFacePictureFile: 'TargetFacePictureFile',
      targetFacePictureUrl: 'TargetFacePictureUrl',
      updateFaceIfUserExists: 'UpdateFaceIfUserExists',
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
      sourceFacePictureFile: 'string',
      sourceFacePictureUrl: 'string',
      targetFacePicture: 'string',
      targetFacePictureFile: 'string',
      targetFacePictureUrl: 'string',
      updateFaceIfUserExists: 'string',
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


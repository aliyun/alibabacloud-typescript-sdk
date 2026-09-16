// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cropping of the facial photo. By default, cropping is not allowed. Valid values:
   * - T: allows cropping.
   * - F: does not allow cropping.
   * 
   * **Note**
   * 
   * If the requested image is not captured by a standard liveness detection SDK, allow cropping of the facial photo. After this feature is enabled, the requested image is first cropped and corrected for face alignment before the service request is initiated.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * The input stream of the ID card portrait photo. Specify either CertUrl or CertFile.
   * 
   * @example
   * None
   */
  faceFile?: string;
  /**
   * @remarks
   * The Base64-encoded facial photo.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  facePicture?: string;
  /**
   * @remarks
   * The URL of the ID card portrait photo. The URL must be a publicly accessible HTTP or HTTPS link. Specify either CertUrl or CertFile.
   * 
   * @example
   * https://www.aliyun.com/cert.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The ID card number:
   * - If paramType is set to normal: enter the ID card number in plaintext.
   * - If paramType is set to md5: first 6 digits of the ID card number (plaintext) + date of birth (ciphertext) + last 4 digits of the ID card number (plaintext).
   * 
   * @example
   * ● Plaintext: 429001********8211
   * ● Ciphertext:
   * 42900132fa7bcd874161bea8ec8fd98f39****8211
   */
  identifyNum?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * - normal: plaintext without encryption.
   * - md5: MD5 encryption.
   * 
   * **Important**
   * 
   * - All encrypted parameter values use 32-character lowercase MD5 strings.
   * - Different MD5 tools may produce different ciphertext. If the API call succeeds with plaintext but fails after encryption, try a different MD5 tool.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name:
   * - If paramType is set to normal: enter the name in plaintext.
   * - If paramType is set to md5: ciphertext of the first character of the name + plaintext of the remaining characters.
   * 
   * @example
   * ● Plaintext: Zhang San
   * ● Ciphertext:
   * 6499fc7409049355527ef6a2ba5706b8San​
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      faceFile: 'FaceFile',
      facePicture: 'FacePicture',
      faceUrl: 'FaceUrl',
      identifyNum: 'IdentifyNum',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      faceFile: 'string',
      facePicture: 'string',
      faceUrl: 'string',
      identifyNum: 'string',
      paramType: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


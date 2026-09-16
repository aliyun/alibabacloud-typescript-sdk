// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id3MetaVerifyPRORequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow cropping of the facial photo. By default, cropping is not allowed. Valid values:
   * - **T**: Cropping is allowed.
   * - **F**: Cropping is not allowed.
   * > If the requested image is not captured by a standard liveness detection SDK, allow cropping of the facial photo.
   * After this feature is enabled, the requested image is first cropped and corrected for the face, and then the request is sent to the service.
   * 
   * @example
   * T
   */
  crop?: string;
  /**
   * @remarks
   * Specifies whether to allow fallback to a non-public security source. Valid values:
   * 
   * - **N** (default): Disabled.
   * - **Y**: Enabled.
   * 
   * @example
   * Y
   */
  enableFallback?: string;
  /**
   * @remarks
   * The input stream of the facial photo.
   * 
   * @example
   * For the specific integration method, refer to the file upload Advance API configuration
   */
  faceFile?: string;
  /**
   * @remarks
   * The Base64-encoded photo. If you use this method to submit the facial photo, check the photo size and do not submit an excessively large photo.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  facePicture?: string;
  /**
   * @remarks
   * The URL of the facial photo. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The ID card number.
   * 
   * - If **paramType** is set to normal: Enter the ID card number in plaintext.
   * 
   * - If **paramType** is set to sm2: Enter the encrypted ID card number.
   * 
   * 
   * > Due to authoritative source limitations, only second-generation resident ID card numbers are supported.
   * 
   * @example
   * Plaintext: 429001********8211
   * 
   * Ciphertext: MHsCIEPDt1ycBNSVgA2yKsMnvWGheiI+STWqJLmYWlZnklhnAiEAwq1bk5YVepHwqfMsd9ErlK71OrdXx8E+wfqbzyFCwoMEIM1QdrFeekvQh6fwK7sVXAsNePiNm7Eulqm/zahRosbKBBKgtyhm3SopJ3tO/wALKXQQW+g=
   */
  identifyNum?: string;
  /**
   * @remarks
   * Specifies whether to enable liveness detection. Valid values:
   * 
   * - **N** (default): Liveness detection is disabled.
   * - **Y**: Liveness detection is enabled.
   * 
   * @example
   * Y
   */
  livenessCheck?: string;
  /**
   * @remarks
   * The encryption method. Valid values:
   * 
   * - **normal**: Plaintext without encryption.
   * 
   * - **sm2**: SM2 encryption.
   * 
   * @example
   * normal
   */
  paramType?: string;
  /**
   * @remarks
   * The name.
   * 
   * - If **paramType** is set to normal: Enter the name in plaintext.
   * 
   * - If **paramType** is set to sm2: Enter the encrypted name.
   * 
   * @example
   * Plaintext: Zhang San
   * 
   * Ciphertext: MG8CIQCxI0wNYbc0c2BRL+7+tSethTXfQC391ZFnszRRcvRZ9AIgekQYhgDtxaDuoRD4bde/5fnFdlUp4YoxlEnIFLLm2mQEILkctuy6Rw6lfAUxBtkpPoPVCJAeD5al/RX8JFUvTACEBAYAgLJjBe0=
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      enableFallback: 'EnableFallback',
      faceFile: 'FaceFile',
      facePicture: 'FacePicture',
      faceUrl: 'FaceUrl',
      identifyNum: 'IdentifyNum',
      livenessCheck: 'LivenessCheck',
      paramType: 'ParamType',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: 'string',
      enableFallback: 'string',
      faceFile: 'string',
      facePicture: 'string',
      faceUrl: 'string',
      identifyNum: 'string',
      livenessCheck: 'string',
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


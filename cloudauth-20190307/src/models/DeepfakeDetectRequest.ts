// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded face image.
   * > Specify either FaceUrl or FaceBase64.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * The input type of the face material. Valid values:
   * 
   * - IMAGE (default): face image
   * - VIDEO: face video
   * 
   * > Video processing takes longer. Set the timeout to more than 3 seconds.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * The URL of the face image.
   * > Specify either FaceUrl or FaceBase64.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters consist of a custom merchant abbreviation, the middle part can contain a time segment, and the last part can use a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      faceBase64: 'FaceBase64',
      faceInputType: 'FaceInputType',
      faceUrl: 'FaceUrl',
      outerOrderNo: 'OuterOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceBase64: 'string',
      faceInputType: 'string',
      faceUrl: 'string',
      outerOrderNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


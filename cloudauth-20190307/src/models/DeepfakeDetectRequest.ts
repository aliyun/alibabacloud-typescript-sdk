// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable facial attribute detection.
   * 
   * @example
   * Y
   */
  faceAttributeCheck?: string;
  /**
   * @remarks
   * The Base64-encoded string of the facial image.
   * > You must specify either FaceUrl or FaceBase64.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * The input type of the facial material. Valid values:
   * 
   * - IMAGE (default): facial image.
   * - VIDEO: facial video.
   * 
   * > Video processing takes a long time. Set the timeout period to greater than 3 seconds.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * The URL of the facial image.
   * > You must specify either FaceUrl or FaceBase64.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * The unique identifier of the merchant request. The value is a 32-character alphanumeric string. The first few characters consist of a custom abbreviation defined by the merchant, the middle part can contain a time period, and the latter part can be a random or incremental sequence.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c******
   */
  outerOrderNo?: string;
  static names(): { [key: string]: string } {
    return {
      faceAttributeCheck: 'FaceAttributeCheck',
      faceBase64: 'FaceBase64',
      faceInputType: 'FaceInputType',
      faceUrl: 'FaceUrl',
      outerOrderNo: 'OuterOrderNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributeCheck: 'string',
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


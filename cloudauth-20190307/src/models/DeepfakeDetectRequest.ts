// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectRequest extends $dara.Model {
  /**
   * @remarks
   * Enter the Base64 encoded string of the face image.
   * > Either FaceUrl or FaceBase64 must be provided.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceBase64?: string;
  /**
   * @remarks
   * Input **IMAGE** to indicate an image type.
   * 
   * @example
   * IMAGE
   */
  faceInputType?: string;
  /**
   * @remarks
   * Enter the URL of the face image.
   * > Either FaceUrl or FaceBase64 must be provided.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceUrl?: string;
  /**
   * @remarks
   * A unique identifier for the merchant\\"s request, consisting of a 32-character alphanumeric combination. The first few characters can be a custom abbreviation defined by the merchant, the middle part may include a timestamp, and the latter part can use a random or incrementing sequence.
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


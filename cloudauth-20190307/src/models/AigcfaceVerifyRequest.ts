// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIGCFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded photo.
   * > You can use one of the following methods to pass in the image: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the face image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * > You can use one of the following methods to pass in the image: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * The name of the authorized OSS bucket.
   * > You can use one of the following methods to pass in the image: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The file name in the authorized OSS bucket.
   * > You can use one of the following methods to pass in the image: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The custom business unique identifier on the client side, used for subsequent troubleshooting. The value can contain up to 32 characters, including letters and digits. Make sure the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product plan.
   * 
   * @example
   * LR_FR_AIGC
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the verification scenario. This ID is automatically generated after you create a verification scenario in the console. For more information about how to create a verification scenario, refer to Add a verification scenario.
   * 
   * @example
   * 100000xxxx
   */
  sceneId?: number;
  static names(): { [key: string]: string } {
    return {
      faceContrastPicture: 'FaceContrastPicture',
      faceContrastPictureUrl: 'FaceContrastPictureUrl',
      ossBucketName: 'OssBucketName',
      ossObjectName: 'OssObjectName',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
      sceneId: 'SceneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceContrastPicture: 'string',
      faceContrastPictureUrl: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
      sceneId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


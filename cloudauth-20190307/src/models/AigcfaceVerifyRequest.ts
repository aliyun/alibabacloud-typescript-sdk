// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIGCFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * The Base64-encoded photo.
   * > You can pass the image by using one of the following methods: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * The URL of the portrait image. The URL must be a publicly accessible HTTP or HTTPS link.
   * 
   * > You can pass the image by using one of the following methods: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * The name of the authorized Object Storage Service (OSS) bucket.
   * > You can pass the image by using one of the following methods: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * The name of the object in the authorized OSS bucket.
   * > You can pass the image by using one of the following methods: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * The custom unique business identifier on the customer\\"s server, which is used for subsequent troubleshooting. The value can be up to 32 characters in length and can contain letters and digits. Make sure that the value is unique.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product solution.
   * 
   * @example
   * LR_FR_AIGC
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the authentication scenario. This ID is automatically generated after you create an authentication scenario in the console. For more information about how to create an authentication scenario, see Add an authentication scenario.
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


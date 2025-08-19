// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AIGCFaceVerifyRequest extends $dara.Model {
  /**
   * @remarks
   * Base64 encoded photo.
   * > Choose one of the three ways to input images: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * /9j/4AAQSkZJRgABAQAASxxxxxxx
   */
  faceContrastPicture?: string;
  /**
   * @remarks
   * Portrait address, accessible via public HTTP or HTTPS link.
   * 
   * > Choose one of the three ways to input images: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * https://cn-shanghai-aliyun-cloudauth-xxxxxx.oss-cn-shanghai.aliyuncs.com/verify/xxxxx/xxxxx.jpeg
   */
  faceContrastPictureUrl?: string;
  /**
   * @remarks
   * Authorized OSS bucket name.
   * > Choose one of the three ways to input images: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * cn-shanghai-aliyun-cloudauth-xxxxx
   */
  ossBucketName?: string;
  /**
   * @remarks
   * Authorized OSS file name.
   * > Choose one of the three ways to input images: FaceContrastPicture, FaceContrastPictureUrl, or OSS.
   * 
   * @example
   * verify/xxxxx/xxxxxx.jpeg
   */
  ossObjectName?: string;
  /**
   * @remarks
   * A unique business identifier defined by the client side, used for subsequent troubleshooting. The value should be a combination of letters and numbers with a maximum length of 32 characters, please ensure its uniqueness.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c353888
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Product solution
   * 
   * @example
   * LR_FR_AIGC
   */
  productCode?: string;
  /**
   * @remarks
   * Authentication scene ID. This ID is automatically generated after creating an authentication scene in the console. For how to create an authentication scene, see Adding an Authentication Scene.
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


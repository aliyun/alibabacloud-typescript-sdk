// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EncodeBlindWatermarkRequest extends $dara.Model {
  /**
   * @remarks
   * The text content of watermarks. It can be up to 256 characters in length.
   */
  content?: string;
  /**
   * @remarks
   * This parameter takes effect only if the input image format is JPG.
   * 
   * The storage quality of the output image that carries the watermarks. Default value: 90. Valid values: 70 to 100. The higher the quality, the larger the image size and the higher the watermark resolution quality.
   * 
   * @example
   * 90
   */
  imageQuality?: number;
  /**
   * @remarks
   * The name of the project. For more information, see [CreateProject](https://help.aliyun.com/document_detail/478153.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URI of the image.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region with the current project. `${Object}` specifies the path of the object with the extension included.
   * 
   * Supported image formats: JPG, PNG, BMP, TIFF, and WebP.
   * 
   * Image size limit: 10,000 px maximum and 80 px x 80 px minimum.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
   */
  sourceURI?: string;
  /**
   * @remarks
   * The watermark strength level. The higher the strength, the more resistant the watermarked image is to attacks, but the more the image is distorted. Default value: low. Valid values: [low, medium, high].
   * 
   * @example
   * low
   */
  strengthLevel?: string;
  /**
   * @remarks
   * The URI of the output image in OSS.
   * 
   * Specify the URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * > 
   * 
   * *   The format of the output image is the same as that of the input image.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://test-bucket/target-object.jpg
   */
  targetURI?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      imageQuality: 'ImageQuality',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      strengthLevel: 'StrengthLevel',
      targetURI: 'TargetURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      imageQuality: 'number',
      projectName: 'string',
      sourceURI: 'string',
      strengthLevel: 'string',
      targetURI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


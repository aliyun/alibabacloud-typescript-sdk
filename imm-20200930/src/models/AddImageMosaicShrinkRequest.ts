// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddImageMosaicShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfigShrink?: string;
  /**
   * @remarks
   * The encoding of the output image. By default, the output image uses the same encoding as the input image. Valid values: jpg, png, and webp.
   * 
   * @example
   * jpg
   */
  imageFormat?: string;
  /**
   * @remarks
   * The name of the project.[](~~478153~~)
   * 
   * This parameter is required.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The quality of the output image. This parameter applies only to JPG and WebP images. Valid values: 0 to 100. Default value: 80.
   * 
   * @example
   * 80
   */
  quality?: number;
  /**
   * @remarks
   * The OSS URI of the input image.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * Supported formats of input images include JPG, PNG, TIFF, JP2, and BMP.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  sourceURI?: string;
  /**
   * @remarks
   * The OSS URI of the output image.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/outputImage.jpg
   */
  targetURI?: string;
  /**
   * @remarks
   * The bounding boxes and processing parameters.
   * 
   * This parameter is required.
   */
  targetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      imageFormat: 'ImageFormat',
      projectName: 'ProjectName',
      quality: 'Quality',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      targetsShrink: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      imageFormat: 'string',
      projectName: 'string',
      quality: 'number',
      sourceURI: 'string',
      targetURI: 'string',
      targetsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


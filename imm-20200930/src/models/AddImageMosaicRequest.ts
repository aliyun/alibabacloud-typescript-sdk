// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialConfig } from "./CredentialConfig";


export class AddImageMosaicRequestTargetsBoundary extends $dara.Model {
  /**
   * @remarks
   * The height of the bounding box. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the height of the bounding box in pixels.
   * *   A decimal value within the range of [0,1) indicates the height of the bounding box as a ratio of its height to the image height.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  height?: number;
  /**
   * @remarks
   * The reference position of the bounding box on the image. Valid values:
   * 
   * *   topright: the upper-right corner.
   * *   topleft: the upper-left corner. This is the default value.
   * *   bottomright: the lower-right corner.
   * *   bottomleft: the lower-left corner.
   * 
   * @example
   * topleft
   */
  referPos?: string;
  /**
   * @remarks
   * The width of the bounding box. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the width of the bounding box in pixels.
   * *   A decimal value within the range of [0,1) indicates the width of the bounding box as a ratio of its width to the image width.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  width?: number;
  /**
   * @remarks
   * The horizontal offset relative to the reference position. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the horizontal offset in pixels.
   * *   A decimal value within the range of [0,1) indicates the horizontal offset as a ratio of the offset to the image width.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  x?: number;
  /**
   * @remarks
   * The vertical offset relative to the reference position. The value can be an integer greater than or equal to 0 or a decimal within the range of [0,1):
   * 
   * *   An integer value greater than or equal to 0 indicates the vertical offset in pixels.
   * *   A decimal value within the range of [0,1) indicates the vertical offset as a ratio of the offset to the image height.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      referPos: 'ReferPos',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      referPos: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicRequestTargets extends $dara.Model {
  /**
   * @remarks
   * The radius of the Gaussian blur. Valid values: 1 to 50. Default value: 3. Unit: pixels.
   * 
   * >  This parameter takes effect only for a Gaussian blur.
   * 
   * @example
   * 3
   */
  blurRadius?: number;
  /**
   * @remarks
   * The position of the bounding box.
   * 
   * This parameter is required.
   */
  boundary?: AddImageMosaicRequestTargetsBoundary;
  /**
   * @remarks
   * The color of the color shape. You can specify a color by using a color code such as`#RRGGBB` or preset color names such as `red` and `white`. The default value is #FFFFFF, which is white.
   * 
   * >  This parameter takes effect only for solid color shapes.
   * 
   * @example
   * #FFFFFF
   */
  color?: string;
  /**
   * @remarks
   * The radius of the mosaic. Default value: 5. Unit: pixels.
   * 
   * >  This parameter does not take effect for Gaussian blurs and solid color shapes.
   * 
   * @example
   * 5
   */
  mosaicRadius?: number;
  /**
   * @remarks
   * The standard deviation of the Gaussian blur. The value must be greater than 0. Default value: 5.
   * 
   * >  This parameter takes effect only for a Gaussian blur.
   * 
   * @example
   * 5
   */
  sigma?: number;
  /**
   * @remarks
   * The type of the mosaic effect. Valid values:
   * 
   * *   square: squares.
   * *   diamond: diamonds.
   * *   hexagon: hexagons.
   * *   blur: Gaussian blurs.
   * *   pure: solid color shapes.
   * 
   * This parameter is required.
   * 
   * @example
   * square
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      blurRadius: 'BlurRadius',
      boundary: 'Boundary',
      color: 'Color',
      mosaicRadius: 'MosaicRadius',
      sigma: 'Sigma',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurRadius: 'number',
      boundary: AddImageMosaicRequestTargetsBoundary,
      color: 'string',
      mosaicRadius: 'number',
      sigma: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.boundary && typeof (this.boundary as any).validate === 'function') {
      (this.boundary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicRequest extends $dara.Model {
  /**
   * @remarks
   * **If you do not have special requirements, leave this parameter empty.**
   * 
   * The authorization chain settings. For more information, see [Use authorization chains to access resources of other entities](https://help.aliyun.com/document_detail/465340.html).
   */
  credentialConfig?: CredentialConfig;
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
  targets?: AddImageMosaicRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      imageFormat: 'ImageFormat',
      projectName: 'ProjectName',
      quality: 'Quality',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      imageFormat: 'string',
      projectName: 'string',
      quality: 'number',
      sourceURI: 'string',
      targetURI: 'string',
      targets: { 'type': 'array', 'itemType': AddImageMosaicRequestTargets },
    };
  }

  validate() {
    if(this.credentialConfig && typeof (this.credentialConfig as any).validate === 'function') {
      (this.credentialConfig as any).validate();
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


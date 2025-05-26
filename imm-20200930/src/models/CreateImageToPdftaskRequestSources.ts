// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageToPDFTaskRequestSources extends $dara.Model {
  /**
   * @remarks
   * The rotation angle. Valid values:
   * 
   * *   0 (default)
   * *   90
   * *   180
   * *   270
   * 
   * @example
   * 90
   */
  rotate?: number;
  /**
   * @remarks
   * The OSS URI of the input image.
   * 
   * Specify the OSS URI in the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * The operation supports the following image formats: JPG, JP2, PNG, TIFF, WebP, BMP, and SVG.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      rotate: 'Rotate',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotate: 'number',
      URI: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


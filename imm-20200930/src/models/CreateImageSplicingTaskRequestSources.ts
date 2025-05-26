// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateImageSplicingTaskRequestSources extends $dara.Model {
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
   * The Object Storage Service (OSS) bucket in which you store the input images.
   * 
   * Specify the value in the oss://${Bucket}/${Object} format. `${Bucket}` specifies the name of the OSS bucket that resides in the same region as the current project. `${Object}` specifies the complete path to the input images that have an extension.
   * 
   * The following image formats are supported: jpg and png.
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


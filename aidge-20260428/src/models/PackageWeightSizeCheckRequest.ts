// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PackageWeightSizeCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the annotated image, i.e., the image with blue/red rectangular bounding box lines overlaid on the original image by an operator. The URL must be publicly accessible. The image dimensions must not exceed 4000×4000 pixels, the file size must not exceed 10 MB, and the supported formats are PNG, JPEG, and JPG.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/annotated_image.png
   */
  annotatedImageUrl?: string;
  /**
   * @remarks
   * The URL of the raw image, i.e., the unannotated photo of the parcel on the scanning platform. The URL must be publicly accessible. The image dimensions must not exceed 4000×4000 pixels, the file size must not exceed 10 MB, and the supported formats are PNG, JPEG, and JPG.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/raw_image.png
   */
  rawImageUrl?: string;
  static names(): { [key: string]: string } {
    return {
      annotatedImageUrl: 'AnnotatedImageUrl',
      rawImageUrl: 'RawImageUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotatedImageUrl: 'string',
      rawImageUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


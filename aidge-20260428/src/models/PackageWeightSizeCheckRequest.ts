// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PackageWeightSizeCheckRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the annotated image, which is the original image overlaid with blue or red rectangular bounding box lines drawn manually. The URL must be publicly accessible. The image size cannot exceed 4000 × 4000 pixels or 10 MB. Supported formats include PNG, JPEG, and JPG.
   * 
   * This parameter is required.
   * 
   * @example
   * https://example.com/annotated_image.png
   */
  annotatedImageUrl?: string;
  /**
   * @remarks
   * The URL of the raw image, which is the unannotated photo of the parcel on the scanning platform. The URL must be publicly accessible. The image size cannot exceed 4000 × 4000 pixels or 10 MB. Supported formats include PNG, JPEG, and JPG.
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


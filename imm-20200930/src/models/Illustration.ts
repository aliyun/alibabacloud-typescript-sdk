// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Illustration extends $dara.Model {
  /**
   * @remarks
   * The zero-based image index in a file that contains multiple images, such as a multi-page TIFF file.
   */
  imageIndex?: number;
  /**
   * @remarks
   * The path to the image file containing the illustration.
   */
  imagePath?: string;
  /**
   * @remarks
   * An array of four floating-point numbers that defines the normalized box for the illustration in [x_min, y_min, x_max, y_max] format. The coordinates are normalized to a range of [0, 1] relative to the page dimensions.
   */
  normalizedBox?: number[];
  /**
   * @remarks
   * The one-based page number where the illustration is located.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The text associated with the illustration.
   */
  text?: string;
  /**
   * @remarks
   * The type of the illustration, such as `figure` or `chart`.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      imageIndex: 'ImageIndex',
      imagePath: 'ImagePath',
      normalizedBox: 'NormalizedBox',
      pageNumber: 'PageNumber',
      text: 'Text',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageIndex: 'number',
      imagePath: 'string',
      normalizedBox: { 'type': 'array', 'itemType': 'number' },
      pageNumber: 'number',
      text: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.normalizedBox)) {
      $dara.Model.validateArray(this.normalizedBox);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


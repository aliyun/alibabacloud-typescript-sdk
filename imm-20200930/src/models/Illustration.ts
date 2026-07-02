// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Illustration extends $dara.Model {
  /**
   * @remarks
   * The index of the image.
   * 
   * @example
   * 0
   */
  imageIndex?: number;
  /**
   * @remarks
   * The relative path of the image.
   * 
   * @example
   * "imgs/page_0_img_image_box_770_540_1367_860.png"
   */
  imagePath?: string;
  /**
   * @remarks
   * The normalized coordinate of the image on the page.
   */
  normalizedBox?: number[];
  /**
   * @remarks
   * The page number on which the image is located.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The text result recognized by optical character recognition (OCR) from the image.
   * 
   * @example
   * "图片"
   */
  text?: string;
  /**
   * @remarks
   * The type of the image.
   * 
   * @example
   * image、table、code
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


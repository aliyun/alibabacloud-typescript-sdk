// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to recognize.
   * 
   * This parameter is required.
   * 
   * @example
   * https://fb-es.mrvcdn.com/kf/E6332bde0101849968532c4f08dac757cZ.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The list of non-subject element types to detect. Valid values: 1 (background), 2 (border), 3 (watermark), and 4 (collage).
   * 
   * @example
   * [1,2,3,4]
   */
  nonObjectDetectElementsShrink?: string;
  /**
   * @remarks
   * The list of subject element types to detect. Valid values: 1 (product subject), 2 (model), 3 (text), and 4 (logo).
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * Specifies whether to return border pixel information. Valid values: 1 (return) and 0 (do not return).
   * 
   * @example
   * 1
   */
  returnBorderPixel?: number;
  /**
   * @remarks
   * Specifies whether to return text information. Valid values: 1 (return) and 0 (do not return).
   * 
   * @example
   * 1
   */
  returnCharacter?: number;
  /**
   * @remarks
   * Specifies whether to return text property information. Valid values: 1 (return) and 0 (do not return).
   * 
   * @example
   * 1
   */
  returnCharacterProp?: number;
  /**
   * @remarks
   * Specifies whether to return the product count. Valid values: 1 (return) and 0 (do not return).
   * 
   * @example
   * 1
   */
  returnProductNum?: number;
  /**
   * @remarks
   * Specifies whether to return product property information. Valid values: 1 (return) and 0 (do not return).
   * 
   * @example
   * 1
   */
  returnProductProp?: number;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      nonObjectDetectElementsShrink: 'NonObjectDetectElements',
      objectDetectElementsShrink: 'ObjectDetectElements',
      returnBorderPixel: 'ReturnBorderPixel',
      returnCharacter: 'ReturnCharacter',
      returnCharacterProp: 'ReturnCharacterProp',
      returnProductNum: 'ReturnProductNum',
      returnProductProp: 'ReturnProductProp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      nonObjectDetectElementsShrink: 'string',
      objectDetectElementsShrink: 'string',
      returnBorderPixel: 'number',
      returnCharacter: 'number',
      returnCharacterProp: 'number',
      returnProductNum: 'number',
      returnProductProp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


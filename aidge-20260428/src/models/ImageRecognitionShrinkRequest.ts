// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to be recognized.
   * 
   * This parameter is required.
   * 
   * @example
   * https://fb-es.mrvcdn.com/kf/E6332bde0101849968532c4f08dac757cZ.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies the elements to detect on the non-subject area of the image. Valid values: 1 for watermark, 2 for logo, 3 for text, and 4 for text-containing color block. You can specify multiple element types. This parameter and ObjectDetectElements cannot be empty at the same time.
   * 
   * @example
   * [1,2,3,4]
   */
  nonObjectDetectElementsShrink?: string;
  /**
   * @remarks
   * Specifies the elements to detect on the image subject. Valid values: 1 for watermark, 2 for logo, 3 for text, and 4 for text-containing color block. You can specify multiple element types.
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * Specifies whether to return border pixel information. Valid values:
   * - 1: Return border pixel information.
   * - 0: Do not return border pixel information.
   * 
   * @example
   * 1
   */
  returnBorderPixel?: number;
  /**
   * @remarks
   * Specifies whether to return text information. Valid values:
   * - 1: Return text information.
   * - 0: Do not return text information.
   * 
   * @example
   * 1
   */
  returnCharacter?: number;
  /**
   * @remarks
   * Specifies whether to return text property information. Valid values:
   * - 1: Return text property information.
   * - 0: Do not return text property information.
   * 
   * @example
   * 1
   */
  returnCharacterProp?: number;
  /**
   * @remarks
   * Specifies whether to return the product quantity. Valid values:
   * - 1: Return the product quantity.
   * - 0: Do not return the product quantity.
   * 
   * @example
   * 1
   */
  returnProductNum?: number;
  /**
   * @remarks
   * Specifies whether to return product property information. Valid values:
   * - 1: Return product property information.
   * - 0: Do not return product property information.
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


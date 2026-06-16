// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionRequest extends $dara.Model {
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
  nonObjectDetectElements?: number[];
  /**
   * @remarks
   * The list of subject element types to detect. Valid values: 1 (product subject), 2 (model), 3 (text), and 4 (logo).
   * 
   * @example
   * [1,2,3,4]
   */
  objectDetectElements?: number[];
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
      nonObjectDetectElements: 'NonObjectDetectElements',
      objectDetectElements: 'ObjectDetectElements',
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
      nonObjectDetectElements: { 'type': 'array', 'itemType': 'number' },
      objectDetectElements: { 'type': 'array', 'itemType': 'number' },
      returnBorderPixel: 'number',
      returnCharacter: 'number',
      returnCharacterProp: 'number',
      returnProductNum: 'number',
      returnProductProp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.nonObjectDetectElements)) {
      $dara.Model.validateArray(this.nonObjectDetectElements);
    }
    if(Array.isArray(this.objectDetectElements)) {
      $dara.Model.validateArray(this.objectDetectElements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


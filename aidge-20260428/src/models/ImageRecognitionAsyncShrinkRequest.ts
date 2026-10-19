// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionAsyncShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256 × 256 and 3000 × 3000 pixels, and the file size cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specifies the types of elements to be detected outside the image subject. Valid values:
   * - 1: Watermark.
   * - 2: Logo.
   * - 3: Text.
   * - 4: Text-containing color block.
   * You can specify multiple element types. This parameter and ObjectDetectElements cannot be empty at the same time.
   */
  nonObjectDetectElementsShrink?: string;
  /**
   * @remarks
   * Specifies the types of elements to be detected on the image subject. Valid values:
   * - 1: Watermark.
   * - 2: Logo.
   * - 3: Text.
   * - 4: Text-containing color block.
   * You can specify multiple element types.
   */
  objectDetectElementsShrink?: string;
  /**
   * @remarks
   * Specifies whether to return the marginalization distance of the subject. Valid values:
   * - 1: Yes.
   * - 0: No.
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnBorderPixel?: number;
  /**
   * @remarks
   * Specifies whether to return the OCR results of the text in the recognized area. Valid values:
   * - 1: Yes.
   * - 0: No.
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnCharacter?: number;
  /**
   * @remarks
   * Specifies whether to return the text proportion. Valid values:
   * - 1: Yes.
   * - 0: No.
   * Default value: 0.
   * This parameter takes effect only when the following two conditions are met:
   * 1. ReturnCharacter is set to 1.
   * 2. ObjectDetectElements or NonObjectDetectElements is set to 3, which means text recognition is required.
   * 
   * @example
   * 1
   */
  returnCharacterProp?: number;
  /**
   * @remarks
   * Specifies whether to return the number of subjects. Valid values:
   * - 1: Yes.
   * - 0: No.
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnProductNum?: number;
  /**
   * @remarks
   * Specifies whether to return the area proportion of the subject. Valid values:
   * - 1: Yes.
   * - 0: No.
   * Default value: 0.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRecognitionAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID of the caller. It is recorded upon acceptance and returned as is when you query the result of the asynchronous task.
   * 
   * @example
   * order-20260928-001
   */
  bizId?: string;
  /**
   * @remarks
   * The image URL. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256 × 256 and 3000 × 3000 pixels, and the file size cannot exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The types of elements to detect outside the image subject. Valid values:
   * - 1: watermark
   * - 2: logo
   * - 3: text
   * - 4: text-containing color block
   * You can specify multiple values. This parameter and ObjectDetectElements cannot be empty at the same time.
   */
  nonObjectDetectElements?: number[];
  /**
   * @remarks
   * The types of elements to detect on the image subject. Valid values:
   * - 1: watermark
   * - 2: logo
   * - 3: text
   * - 4: text-containing color block
   * You can specify multiple values.
   */
  objectDetectElements?: number[];
  /**
   * @remarks
   * Specifies whether to return the marginalization distance of the subject. Valid values:
   * - 1: yes
   * - 0: no
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnBorderPixel?: number;
  /**
   * @remarks
   * Specifies whether to return the OCR result of the text in the recognized area. Valid values:
   * - 1: yes
   * - 0: no
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnCharacter?: number;
  /**
   * @remarks
   * Specifies whether to return the text proportion. Valid values:
   * - 1: yes
   * - 0: no
   * Default value: 0.
   * This parameter takes effect only when the following two conditions are met:
   * 1. ReturnCharacter is set to 1.
   * 2. ObjectDetectElements or NonObjectDetectElements is set to 3, which means text needs to be recognized.
   * 
   * @example
   * 1
   */
  returnCharacterProp?: number;
  /**
   * @remarks
   * Specifies whether to return the number of subjects. Valid values:
   * - 1: yes
   * - 0: no
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnProductNum?: number;
  /**
   * @remarks
   * Specifies whether to return the area proportion of the subject. Valid values:
   * - 1: yes
   * - 0: no
   * Default value: 0.
   * 
   * @example
   * 1
   */
  returnProductProp?: number;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
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
      bizId: 'string',
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


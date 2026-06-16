// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveRequest extends $dara.Model {
  /**
   * @remarks
   * URL of the image to be processed (mutually exclusive with ImageBase64)
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/bao/uploaded/i2/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Specific removal area in RLE format. If provided, this takes priority and the remove parameters are ignored
   * 
   * @example
   * null
   */
  mask?: string;
  /**
   * @remarks
   * Elements to remove from the non-subject area of the image (1=transparent text blocks; 2=specific names; 3=text; 4=blemishes). Multiple selections allowed
   * 
   * @example
   * [1,2]
   */
  nonObjectRemoveElements?: number[];
  /**
   * @remarks
   * Elements to remove from the image subject (1=transparent text blocks; 2=specific names; 3=text; 4=blemishes). Multiple selections allowed
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2]
   */
  objectRemoveElements?: number[];
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      mask: 'Mask',
      nonObjectRemoveElements: 'NonObjectRemoveElements',
      objectRemoveElements: 'ObjectRemoveElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      mask: 'string',
      nonObjectRemoveElements: { 'type': 'array', 'itemType': 'number' },
      objectRemoveElements: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.nonObjectRemoveElements)) {
      $dara.Model.validateArray(this.nonObjectRemoveElements);
    }
    if(Array.isArray(this.objectRemoveElements)) {
      $dara.Model.validateArray(this.objectRemoveElements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


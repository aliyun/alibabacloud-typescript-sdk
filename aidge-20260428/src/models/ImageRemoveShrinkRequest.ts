// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveShrinkRequest extends $dara.Model {
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
  nonObjectRemoveElementsShrink?: string;
  /**
   * @remarks
   * Elements to remove from the image subject (1=transparent text blocks; 2=specific names; 3=text; 4=blemishes). Multiple selections allowed
   * 
   * This parameter is required.
   * 
   * @example
   * [1,2]
   */
  objectRemoveElementsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      mask: 'Mask',
      nonObjectRemoveElementsShrink: 'NonObjectRemoveElements',
      objectRemoveElementsShrink: 'ObjectRemoveElements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      mask: 'string',
      nonObjectRemoveElementsShrink: 'string',
      objectRemoveElementsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the image to process. This parameter is mutually exclusive with ImageBase64. You must specify one of them.
   * 
   * This parameter is required.
   * 
   * @example
   * https://img.alicdn.com/bao/uploaded/i2/xxx.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The specific erasure region in RLE format. If this parameter is specified, it takes priority and the remove parameters are ignored.
   * 
   * @example
   * null
   */
  mask?: string;
  /**
   * @remarks
   * The elements to remove from the non-subject area of the image. Valid values:
   * - 1: transparent text block
   * - 2: specific name
   * - 3: text
   * - 4: image blemish
   * 
   * You can specify multiple values.
   * 
   * @example
   * [1,2]
   */
  nonObjectRemoveElements?: number[];
  /**
   * @remarks
   * The elements to remove from the image subject area. Valid values:
   * - 1: transparent text block
   * - 2: specific name
   * - 3: text
   * - 4: image blemish
   * 
   * You can specify multiple values.
   * 
   * @example
   * [1,2]
   */
  objectRemoveElements?: number[];
  /**
   * @example
   * [10,10,100,100]
   */
  position?: string;
  /**
   * @example
   * ["https://img.alicdn.com/bao/uploaded/i2/xxx.jpg"]
   */
  userImage?: string[];
  /**
   * @example
   * ["xx","yy"]
   */
  userText?: string[];
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      mask: 'Mask',
      nonObjectRemoveElements: 'NonObjectRemoveElements',
      objectRemoveElements: 'ObjectRemoveElements',
      position: 'Position',
      userImage: 'UserImage',
      userText: 'UserText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      mask: 'string',
      nonObjectRemoveElements: { 'type': 'array', 'itemType': 'number' },
      objectRemoveElements: { 'type': 'array', 'itemType': 'number' },
      position: 'string',
      userImage: { 'type': 'array', 'itemType': 'string' },
      userText: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.nonObjectRemoveElements)) {
      $dara.Model.validateArray(this.nonObjectRemoveElements);
    }
    if(Array.isArray(this.objectRemoveElements)) {
      $dara.Model.validateArray(this.objectRemoveElements);
    }
    if(Array.isArray(this.userImage)) {
      $dara.Model.validateArray(this.userImage);
    }
    if(Array.isArray(this.userText)) {
      $dara.Model.validateArray(this.userText);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


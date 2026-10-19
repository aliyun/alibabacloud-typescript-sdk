// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImageRemoveAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the original image. The image must be in JPG, JPEG, PNG, BMP, or WEBP format. The resolution must be between 256 × 256 and 3000 × 3000 pixels, and the file size must not exceed 10 MB.
   * 
   * This parameter is required.
   * 
   * @example
   * "https://ae01.alicdn.com/kf/S342f0070dc9f4be09a6cbed34e90dc8fs.jpg"
   */
  imageUrl?: string;
  /**
   * @remarks
   * The specific area to erase. This parameter must be used in conjunction with the editor, and the input format is RLE. If this parameter is specified, it takes precedence and the remove_non_product_area_elements and remove_product_area_elements parameters are ignored. This parameter is not required, but you must specify at least one of the following parameters: ObjectRemoveElements, NonObjectRemoveElements, Mask, Position, UserText, and UserImage. If multiple parameters are specified, the priority is as follows: UserImage > UserText > Position > Mask > ObjectRemoveElements = NonObjectRemoveElements.
   * 
   * @example
   * "474556 160 475356 160 476156 160 476956 160 477756 160 478556 160 479356 160 480156 160 480956 160 481756 160 482556 160 483356 160 484156 160 484956 160 485756 160 486556 160 487356 160 488156 160 488956 160 489756 160 490556 160 491356 160 492156 160"
   */
  mask?: string;
  /**
   * @remarks
   * The list of element types to remove from the non-subject area of the image.
   */
  nonObjectRemoveElements?: number[];
  /**
   * @remarks
   * The types of elements to remove from the image subject. Valid values: 1 (transparent text blocks), 2 (specific names), 3 (text), and 4 (watermarks). You can select multiple element types. This parameter is not required, but you must specify at least one of the following parameters: ObjectRemoveElements, NonObjectRemoveElements, Mask, Position, UserText, and UserImage. If multiple parameters are specified, the priority is as follows: UserImage > UserText > Position > Mask > ObjectRemoveElements = NonObjectRemoveElements. For more information about each type, see the product documentation. Image subject: the core product area in the image.
   */
  objectRemoveElements?: number[];
  /**
   * @remarks
   * The specific area to erase. This parameter must be used in conjunction with the editor, and the input format is four-point coordinates [xx,yy,zz,dd]. This parameter is not required, but you must specify at least one of the following parameters: ObjectRemoveElements, NonObjectRemoveElements, Mask, Position, UserText, and UserImage. If multiple parameters are specified, the priority is as follows: UserImage > UserText > Position > Mask > ObjectRemoveElements = NonObjectRemoveElements.
   * 
   * @example
   * [10,20,100,200]
   */
  position?: string;
  /**
   * @remarks
   * The list of URLs for user-specified image elements to erase.
   */
  userImage?: string[];
  /**
   * @remarks
   * The list of user-specified texts to erase.
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


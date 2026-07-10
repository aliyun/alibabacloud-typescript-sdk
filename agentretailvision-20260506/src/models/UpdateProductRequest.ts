// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductRequestMultiViewImages extends $dara.Model {
  /**
   * @remarks
   * The angle of the digital human.
   * 
   * - 0: front view, the default angle
   * - 1: 30 degrees from the left
   * - 2: 30 degrees from the right
   * 
   * For a preview of each angle, refer to [3D Digital Human Video Synthesis User Guide](https://help.aliyun.com/document_detail/447834.html#a989eb5075t9y).
   * 
   * @example
   * 0
   */
  angle?: string;
  /**
   * @remarks
   * The URL of the image.
   * 
   * @example
   * https://nova-tems.oss-cn-shanghai.aliyuncs.com/crop/33dfc602-c9a4-11f0-ac99-ee21a901d6ec.png?OSSAccessKeyId=****&Expires=1764058353&Signature=****
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProductRequest extends $dara.Model {
  /**
   * @remarks
   * The device ID, which is used to establish the vector association between the device and the item.
   * 
   * @example
   * DEVICE_001
   */
  deviceId?: string;
  /**
   * @remarks
   * The list of additional image URLs that can be provided.
   */
  extraImages?: string[];
  /**
   * @remarks
   * The title of the item.
   * 
   * @example
   * 可口可乐330ml
   */
  imageTitle?: string;
  /**
   * @remarks
   * The business-side item ID, which is unique within the same business party.
   * 
   * @example
   * ITEM_001
   */
  itemUniqueId?: string;
  /**
   * @remarks
   * The list of main image URLs for the item. At least one image is required.
   * 
   * @example
   * ["https://img.example.com/item1.jpg"]
   */
  mainImage?: string[];
  /**
   * @remarks
   * The list of multi-angle images for the item.
   */
  multiViewImages?: UpdateProductRequestMultiViewImages[];
  /**
   * @remarks
   * The platform item ID, which is globally unique.
   * 
   * @example
   * PLAT_001
   */
  platformItemId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      extraImages: 'ExtraImages',
      imageTitle: 'ImageTitle',
      itemUniqueId: 'ItemUniqueId',
      mainImage: 'MainImage',
      multiViewImages: 'MultiViewImages',
      platformItemId: 'PlatformItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      extraImages: { 'type': 'array', 'itemType': 'string' },
      imageTitle: 'string',
      itemUniqueId: 'string',
      mainImage: { 'type': 'array', 'itemType': 'string' },
      multiViewImages: { 'type': 'array', 'itemType': UpdateProductRequestMultiViewImages },
      platformItemId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.extraImages)) {
      $dara.Model.validateArray(this.extraImages);
    }
    if(Array.isArray(this.mainImage)) {
      $dara.Model.validateArray(this.mainImage);
    }
    if(Array.isArray(this.multiViewImages)) {
      $dara.Model.validateArray(this.multiViewImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


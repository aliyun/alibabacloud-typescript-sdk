// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductShrinkRequest extends $dara.Model {
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
  extraImagesShrink?: string;
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
  mainImageShrink?: string;
  /**
   * @remarks
   * The list of multi-angle images for the item.
   */
  multiViewImagesShrink?: string;
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
      extraImagesShrink: 'ExtraImages',
      imageTitle: 'ImageTitle',
      itemUniqueId: 'ItemUniqueId',
      mainImageShrink: 'MainImage',
      multiViewImagesShrink: 'MultiViewImages',
      platformItemId: 'PlatformItemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      extraImagesShrink: 'string',
      imageTitle: 'string',
      itemUniqueId: 'string',
      mainImageShrink: 'string',
      multiViewImagesShrink: 'string',
      platformItemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


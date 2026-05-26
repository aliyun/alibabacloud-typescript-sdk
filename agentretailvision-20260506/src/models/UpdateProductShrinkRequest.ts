// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductShrinkRequest extends $dara.Model {
  /**
   * @example
   * DEVICE_001
   */
  deviceId?: string;
  extraImagesShrink?: string;
  /**
   * @example
   * 可口可乐330ml
   */
  imageTitle?: string;
  /**
   * @example
   * ITEM_001
   */
  itemUniqueId?: string;
  /**
   * @example
   * ["https://img.example.com/item1.jpg"]
   */
  mainImageShrink?: string;
  multiViewImagesShrink?: string;
  /**
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


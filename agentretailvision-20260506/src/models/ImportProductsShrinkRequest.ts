// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportProductsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The device ID. This ID is used to establish an association between the device and product vectors.
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
   * The product title.
   * 
   * @example
   * 可口可乐330ml
   */
  imageTitle?: string;
  /**
   * @remarks
   * The product ID assigned by the business party. This ID must be unique within the same business party.
   * 
   * @example
   * ITEM_001
   */
  itemUniqueId?: string;
  /**
   * @remarks
   * The list of main product image URLs. At least one URL is required.
   * 
   * @example
   * ["https://img.example.com/item1.jpg"]
   */
  mainImageShrink?: string;
  /**
   * @remarks
   * The list of multi-angle product images.
   */
  multiViewImagesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      extraImagesShrink: 'ExtraImages',
      imageTitle: 'ImageTitle',
      itemUniqueId: 'ItemUniqueId',
      mainImageShrink: 'MainImage',
      multiViewImagesShrink: 'MultiViewImages',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


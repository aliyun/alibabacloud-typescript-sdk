// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProductRequestMultiViewImages extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: string;
  /**
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
   * @example
   * DEVICE_001
   */
  deviceId?: string;
  extraImages?: string[];
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
  mainImage?: string[];
  multiViewImages?: UpdateProductRequestMultiViewImages[];
  /**
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


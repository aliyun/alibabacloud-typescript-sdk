// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ImportProductsRequestMultiViewImages extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: string;
  /**
   * @example
   * https://img5-parcel.oss-cn-hangzhou.aliyuncs.com/2026/01/12/78568805914464s.jpeg?07
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

export class ImportProductsRequest extends $dara.Model {
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
  multiViewImages?: ImportProductsRequestMultiViewImages[];
  static names(): { [key: string]: string } {
    return {
      deviceId: 'DeviceId',
      extraImages: 'ExtraImages',
      imageTitle: 'ImageTitle',
      itemUniqueId: 'ItemUniqueId',
      mainImage: 'MainImage',
      multiViewImages: 'MultiViewImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceId: 'string',
      extraImages: { 'type': 'array', 'itemType': 'string' },
      imageTitle: 'string',
      itemUniqueId: 'string',
      mainImage: { 'type': 'array', 'itemType': 'string' },
      multiViewImages: { 'type': 'array', 'itemType': ImportProductsRequestMultiViewImages },
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


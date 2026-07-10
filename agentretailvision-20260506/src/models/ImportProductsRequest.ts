// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportProductsRequestMultiViewImages extends $dara.Model {
  /**
   * @remarks
   * The digital human angle. Valid values:
   * 
   * - 0: front view, which is the default angle
   * - 1: left side at 30 degrees
   * - 2: right side at 30 degrees
   * 
   * For a preview of each angle, refer to [3D Digital Human Video Synthesis User Guide](https://help.aliyun.com/document_detail/447834.html#a989eb5075t9y).
   * 
   * @example
   * 0
   */
  angle?: string;
  /**
   * @remarks
   * The task URL.
   * 
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
  extraImages?: string[];
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
  mainImage?: string[];
  /**
   * @remarks
   * The list of multi-angle product images.
   */
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryAttributeMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The product details.
   * 
   * @example
   * Silk, new spring style
   */
  description?: string;
  /**
   * @remarks
   * The product image URLs. A maximum of 10 images are supported.
   * 
   * @example
   * https://frametour-assets.oss-cn-shanghai.aliyuncs.com/user-faces/viid_face/dd0dd06c-9351-4e5f-bc70-24166a754d7f.jpg
   */
  imageUrl?: string[];
  /**
   * @remarks
   * The product attributes that describe the product characteristics.
   * 
   * This parameter is required.
   * 
   * @example
   * For example, the material of the product. Enter the attribute name and attribute value
   */
  itemSpec?: string;
  /**
   * @remarks
   * The product SKU title.
   * 
   * This parameter is required.
   * 
   * @example
   * 0:0:Color:Black (without locator);0:1:Color:Smart Locator (without collar);0:2:Color:Range Locator (without collar);0:3:Color:Blue (without locator);0:4:Color:Orange (without locator);0:5:Color:Pink (without locator);0:6:Color:Red (without locator);0:7:Color:Yellow (without locator);0:8:Color:Purple (without locator)
   */
  sku?: string;
  /**
   * @remarks
   * The product category on the source platform.
   * 
   * This parameter is required.
   * 
   * @example
   * Clothing
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The source platform from which the product originates.
   * 
   * This parameter is required.
   * 
   * @example
   * 1688
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The target listing platform. Currently, only temu is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * temu
   */
  targetPlatform?: string;
  /**
   * @remarks
   * The product title.
   * 
   * This parameter is required.
   * 
   * @example
   * Women\\"s New Spring Clothing
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageUrl: 'ImageUrl',
      itemSpec: 'ItemSpec',
      sku: 'Sku',
      sourceCategory: 'SourceCategory',
      sourcePlatform: 'SourcePlatform',
      targetPlatform: 'TargetPlatform',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      imageUrl: { 'type': 'array', 'itemType': 'string' },
      itemSpec: 'string',
      sku: 'string',
      sourceCategory: 'string',
      sourcePlatform: 'string',
      targetPlatform: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageUrl)) {
      $dara.Model.validateArray(this.imageUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


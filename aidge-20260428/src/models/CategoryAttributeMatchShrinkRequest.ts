// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryAttributeMatchShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The product details.
   * 
   * @example
   * Silk, spring new arrival
   */
  description?: string;
  /**
   * @remarks
   * The URLs of the product images. Up to 10 images are supported.
   * 
   * @example
   * https://frametour-assets.oss-cn-shanghai.aliyuncs.com/user-faces/viid_face/dd0dd06c-9351-4e5f-bc70-24166a754d7f.jpg
   */
  imageUrlShrink?: string;
  /**
   * @remarks
   * The product attributes and feature descriptions.
   * 
   * This parameter is required.
   * 
   * @example
   * For example, the material of the product. Enter the product attribute name and attribute content
   */
  itemSpec?: string;
  /**
   * @remarks
   * The product SKU title.
   * 
   * This parameter is required.
   * 
   * @example
   * 0:0:Color:Black (without tracker);0:1:Color:Smart tracking (without collar);0:2:Color:Range tracking (without collar);0:3:Color:Blue (without tracker);0:4:Color:Orange (without tracker);0:5:Color:Pink (without tracker);0:6:Color:Red (without tracker);0:7:Color:Yellow (without tracker);0:8:Color:Purple (without tracker)
   */
  sku?: string;
  /**
   * @remarks
   * The product category.
   * 
   * This parameter is required.
   * 
   * @example
   * Clothing
   */
  sourceCategory?: string;
  /**
   * @remarks
   * The source platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 1688
   */
  sourcePlatform?: string;
  /**
   * @remarks
   * The target platform. Currently, only TEMU is supported.
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
   * Women\\"s spring new arrival clothing
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      imageUrlShrink: 'ImageUrl',
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
      imageUrlShrink: 'string',
      itemSpec: 'string',
      sku: 'string',
      sourceCategory: 'string',
      sourcePlatform: 'string',
      targetPlatform: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


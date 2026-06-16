// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryAttributeMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The product details.
   * 
   * @example
   * 真丝，春季新款
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
   * 例如商品的材质等。输入商品属性名称和属性内容
   */
  itemSpec?: string;
  /**
   * @remarks
   * The product SKU title.
   * 
   * This parameter is required.
   * 
   * @example
   * 0:0:颜色:黑(不含定位器);0:1:颜色:智能定位(不含项圈);0:2:颜色:范围定位(不含项圈);0:3:颜色:蓝(不含定位器);0:4:颜色:橙(不含定位器);0:5:颜色:粉(不含定位器);0:6:颜色:红(不含定位器);0:7:颜色:黄(不含定位器);0:8:颜色:紫(不含定位器)
   */
  sku?: string;
  /**
   * @remarks
   * The product category on the source platform.
   * 
   * This parameter is required.
   * 
   * @example
   * 衣服
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
   * 女士春季新款衣服
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


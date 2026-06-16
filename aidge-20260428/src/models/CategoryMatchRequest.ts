// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The product details.
   * 
   * This parameter is required.
   * 
   * @example
   * 真丝，春季新款
   */
  description?: string;
  /**
   * @remarks
   * The product attributes that describe the characteristics of the product, such as material. Specify the attribute names and attribute values.
   * 
   * @example
   * 材质:涤纶,适用对象:通用,品牌:艾马逊AMASON PET
   */
  itemSpec?: string;
  /**
   * @remarks
   * The SKU title of the product.
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
   * The source platform from which products are sourced.
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


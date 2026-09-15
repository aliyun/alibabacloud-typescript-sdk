// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CategoryMatchRequest extends $dara.Model {
  /**
   * @remarks
   * The product description.
   * 
   * This parameter is required.
   * 
   * @example
   * Silk, Spring New Arrival
   */
  description?: string;
  /**
   * @remarks
   * The product attributes that describe the characteristics of the product, such as material. Provide the attribute names and values.
   * 
   * @example
   * Material:Polyester,Target Audience:General,Brand:AMASON PET
   */
  itemSpec?: string;
  /**
   * @remarks
   * The SKU title of the product.
   * 
   * @example
   * 0:0:Color:Black(without locator);0:1:Color:Smart Locator(without collar);0:2:Color:Range Locator(without collar);0:3:Color:Blue(without locator);0:4:Color:Orange(without locator);0:5:Color:Pink(without locator);0:6:Color:Red(without locator);0:7:Color:Yellow(without locator);0:8:Color:Purple(without locator)
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
   * Women\\"s Spring New Arrival Clothing
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


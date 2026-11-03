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
   * Silk, new spring arrival
   */
  description?: string;
  /**
   * @remarks
   * The product attributes and feature descriptions, such as the material of the product. Enter the product attribute name and attribute value.
   * 
   * @example
   * Material:Polyester,Target user:Universal,Brand:AMASON PET
   */
  itemSpec?: string;
  /**
   * @remarks
   * The product SKU title.
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
   * Women\\"s new spring clothing
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


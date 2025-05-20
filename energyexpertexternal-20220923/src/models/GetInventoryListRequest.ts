// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInventoryListRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise code.
   * 
   * This parameter is required.
   * 
   * @example
   * C-20080808-1
   */
  code?: string;
  /**
   * @remarks
   * Type of emission
   * 
   * >  Valid values: footprint | emission. Meaning: footprint: all inventories are involved in the calculation; emission: only inventories with positive and zero emissions are involved in the calculation, and negative numbers are not involved in the calculation.
   * 
   * This parameter is required.
   * 
   * @example
   * footprint
   */
  emissionType?: string;
  /**
   * @remarks
   * Group by
   * 
   * >  Valid values: resource | process | resourceType | processType. Meaning: resource: aggregation by inventory group, process: aggregation by operation group, resourceType: aggregation by inventory type, processType: aggregation by phase group
   * 
   * This parameter is required.
   * 
   * @example
   * resource
   */
  group?: string;
  /**
   * @remarks
   * The type of the obtained environmental impact: gwp indicates the carbon footprint of climate change. 
   * <props="intl">[For more information, see the environment impact category enumeration.](https://www.alibabacloud.com/help/en/energy-expert/developer-reference/enumerated-values-of-energy-expert#RhGn7)
   * 
   * This parameter is required.
   * 
   * @example
   * gwp
   */
  methodType?: string;
  /**
   * @remarks
   * The product id.
   * 
   * This parameter is required.
   * 
   * @example
   * 1024
   */
  productId?: number;
  /**
   * @remarks
   * Product type: 1 indicates that the carbon footprint of the product is requested, and 5 indicates that the carbon footprint of the supply chain is requested.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  productType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      emissionType: 'emissionType',
      group: 'group',
      methodType: 'methodType',
      productId: 'productId',
      productType: 'productType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      emissionType: 'string',
      group: 'string',
      methodType: 'string',
      productId: 'number',
      productType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


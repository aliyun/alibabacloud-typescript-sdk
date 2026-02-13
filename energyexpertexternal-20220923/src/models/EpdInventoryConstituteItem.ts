// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EpdInventoryConstituteItem extends $dara.Model {
  /**
   * @remarks
   * Emissions are presented with 24 decimal places. It\\"s advisable to utilize the truncated version. These emissions encompass all tiers: At the first level, they reflect the product\\"s total emissions under the current environmental impact; at the second level, they show the process\\"s total emissions; and at the third level, they represent the inventory\\"s emissions within the same environmental impact context.
   * 
   * @example
   * 1009.976265540000000000000000000000
   */
  carbonEmission?: number;
  /**
   * @remarks
   * The value of the factor. Only the third level is not empty. The factor in the inventory information indicates the factor value of the selected factor. The factor value is kept to four decimal places after the decimal point, and "1.0000" indicates that the factor value is 1. The factor value should be used in combination with factorUnit. If factorUnit is "kg CO2-Eq mg/kg", it means that the carbon emission per 1kg of the list is 1kg CO2-Eq.
   * 
   * @example
   * 1.0000
   */
  factor?: string;
  /**
   * @remarks
   * The database to which the factorDataset factor belongs. This field is used in conjunction with factorType. If factorType is 1, the data name of the factor is displayed. If factorType is 2,factorId indicates the ID of the referenced product. If factorType is null,factorId is meaningless. This field is a new field. Old data may not have data in this field and is displayed as "/".
   * 
   * @example
   * /
   */
  factorDataset?: string;
  /**
   * @remarks
   * The id of the factor.
   * 
   * @example
   * 1234
   */
  factorId?: string;
  /**
   * @remarks
   * The key of the factor type. Only the third level is not empty. The factorType in the inventory information indicates that the factor source type is selected; the optional values are 1, 2, or null:1: factor library, 2: product library. null indicates that the factor is not selected from the factor library or product library, and the factor is constructed by the user.
   * 
   * @example
   * 1
   */
  factorType?: number;
  /**
   * @remarks
   * Factor Unit
   * 
   * @example
   * kg CO2-Eq/kg
   */
  factorUnit?: string;
  /**
   * @remarks
   * manifest id
   * 
   * @example
   * 1
   */
  inventoryId?: number;
  /**
   * @remarks
   * Inventory Unit
   * 
   * @example
   * t
   */
  inventoryUnit?: string;
  /**
   * @remarks
   * The quantity of the inventory. It is not empty only at the third level. The third level is the inventory details. This field indicates the id of the inventory. It should be used in conjunction with the InventoryUnit.
   * 
   * @example
   * 2.000000000000000000000000
   */
  inventoryValue?: number;
  /**
   * @remarks
   * Activity data per functional unit: only the third level is not empty; the value retains 24 decimal places, indicating the number of activities per functional unit; should be used in conjunction with the inventoryValuePerProductUnit.
   * 
   * @example
   * 1.000000000000000000000000
   */
  inventoryValuePerProduct?: number;
  /**
   * @remarks
   * Unit of activity data per functional unit. Only the third level is not empty. in the inventory information indicates the unit of activity data per functional unit.
   * 
   * @example
   * kg
   */
  inventoryValuePerProductUnit?: string;
  /**
   * @remarks
   * List of children
   */
  items?: EpdInventoryConstituteItem[];
  /**
   * @remarks
   * Returns the name of the current level. The names of different levels have different meanings. The first level returns the environmental impact type. The second level returns the current process name. The third level returns the current inventory name
   * 
   * @example
   * climate change
   */
  name?: string;
  /**
   * @remarks
   * Category key, please refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * 1
   */
  num?: number;
  /**
   * @remarks
   * The percentage. Four decimal places are retained and 31.4000 is returned to indicate the percentage 31.4%. The first level returns null; The second level returns the current process as a percentage of total emissions; the third level returns the current inventory as a percentage of total emissions.
   * 
   * @example
   * 31.4000
   */
  percent?: number;
  /**
   * @remarks
   * Raw activity data. Only the third level returns a quantity that is not null, indicating a manifest.
   * 
   * @example
   * 1.000000000000
   */
  quantity?: number;
  /**
   * @remarks
   * The type of the inventory. Only the third level returns non-null, and the third level is the inventory details. This field indicates the resource type name of the inventory. You may refer to [Carbon Footprint Appendices](https://carbon-doc.oss-cn-hangzhou.aliyuncs.com/CarbonFootprintAppendices-en.pdf).
   * 
   * @example
   * Energy
   */
  resourceType?: string;
  /**
   * @remarks
   * The data status. 1 indicates accurate calculation, 2 indicates default data, 3 indicates missing factor, and 0 value is used in other cases.
   * 
   * @example
   * 1
   */
  state?: number;
  /**
   * @remarks
   * The unit of environmental impact result value. This unit is the unit of the environmental impact result value of the corresponding environmental impact category. For example, the unit kg CO2-Eq represent the emission values shown here is kg CO2-Eq.
   * 
   * @example
   * kg CO2-Eq
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      carbonEmission: 'carbonEmission',
      factor: 'factor',
      factorDataset: 'factorDataset',
      factorId: 'factorId',
      factorType: 'factorType',
      factorUnit: 'factorUnit',
      inventoryId: 'inventoryId',
      inventoryUnit: 'inventoryUnit',
      inventoryValue: 'inventoryValue',
      inventoryValuePerProduct: 'inventoryValuePerProduct',
      inventoryValuePerProductUnit: 'inventoryValuePerProductUnit',
      items: 'items',
      name: 'name',
      num: 'num',
      percent: 'percent',
      quantity: 'quantity',
      resourceType: 'resourceType',
      state: 'state',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carbonEmission: 'number',
      factor: 'string',
      factorDataset: 'string',
      factorId: 'string',
      factorType: 'number',
      factorUnit: 'string',
      inventoryId: 'number',
      inventoryUnit: 'string',
      inventoryValue: 'number',
      inventoryValuePerProduct: 'number',
      inventoryValuePerProductUnit: 'string',
      items: { 'type': 'array', 'itemType': EpdInventoryConstituteItem },
      name: 'string',
      num: 'number',
      percent: 'number',
      quantity: 'number',
      resourceType: 'string',
      state: 'number',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


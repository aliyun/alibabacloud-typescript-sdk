// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The commodity code of the instance.
   * 
   * @example
   * rds_customprepaid_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The database engine. Set the value to MySQL.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The instance types.
   */
  instanceType?: string[];
  /**
   * @remarks
   * The instance family. You can call the **DescribeRCInstanceTypeFamilies** operation to query the instance families of instances.
   * 
   * @example
   * gn8.cm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      engine: 'Engine',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      engine: 'string',
      instanceType: { 'type': 'array', 'itemType': 'string' },
      instanceTypeFamily: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


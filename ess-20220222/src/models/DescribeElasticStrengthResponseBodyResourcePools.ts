// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth } from "./DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth";


export class DescribeElasticStrengthResponseBodyResourcePools extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the scaling strength is the weakest.
   * 
   * @example
   * IMG_NOT_SUPPORTED
   */
  code?: string;
  /**
   * @remarks
   * The instance type of the resource pool.
   * 
   * @example
   * ecs.c7t.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The inventory health.
   */
  inventoryHealth?: DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth;
  /**
   * @remarks
   * The error message returned when the scaling strength is the weakest.
   * 
   * @example
   * The instanceType does not support the image in the configuration.
   */
  msg?: string;
  /**
   * @remarks
   * Indicates whether the resource pool is available. Valid values:
   * 
   * *   Available
   * *   Unavailable (If a constraint is not provided, the instance type is not deployed, or the instance type is out of stock, the resource pool becomes unavailable.)
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The scaling strength of the resource pool.
   * 
   * @example
   * 0.6
   */
  strength?: number;
  /**
   * @remarks
   * The IDs of the vSwitches in the zones of the resource pool.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The zone ID of the resource pool.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceType: 'InstanceType',
      inventoryHealth: 'InventoryHealth',
      msg: 'Msg',
      status: 'Status',
      strength: 'Strength',
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      instanceType: 'string',
      inventoryHealth: DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth,
      msg: 'string',
      status: 'string',
      strength: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  validate() {
    if(this.inventoryHealth && typeof (this.inventoryHealth as any).validate === 'function') {
      (this.inventoryHealth as any).validate();
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


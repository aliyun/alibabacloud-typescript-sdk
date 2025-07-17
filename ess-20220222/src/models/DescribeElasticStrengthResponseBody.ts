// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePoolsInventoryHealth extends $dara.Model {
  /**
   * @remarks
   * The adequacy score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  adequacyScore?: number;
  /**
   * @remarks
   * The score of the inventory health.
   * 
   * *   A score between 5 and 6 indicates a sufficient inventory.
   * *   A score between 1 and 4 indicates that there is no guarantee of a sufficient inventory. Select a reservation as necessary.
   * *   A score between -3 and 0 indicates that the inventory is sufficient, and an alert is triggered. Select another instance type.
   * 
   * Calculation formula: `HealthScore` = `AdequacyScore` + `SupplyScore` - `HotScore`.
   * 
   * @example
   * 3
   */
  healthScore?: number;
  /**
   * @remarks
   * The popularity score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 0
   */
  hotScore?: number;
  /**
   * @remarks
   * The score of the replenishment capability.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 2
   */
  supplyScore?: number;
  static names(): { [key: string]: string } {
    return {
      adequacyScore: 'AdequacyScore',
      healthScore: 'HealthScore',
      hotScore: 'HotScore',
      supplyScore: 'SupplyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adequacyScore: 'number',
      healthScore: 'number',
      hotScore: 'number',
      supplyScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the scaling strength is the weakest.
   * 
   * @example
   * InstanceTypesOrDiskTypesNotSupported
   */
  code?: string;
  /**
   * @remarks
   * The instance type of the resource pool.
   * 
   * @example
   * ecs.r7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The inventory health.
   */
  inventoryHealth?: DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePoolsInventoryHealth;
  /**
   * @remarks
   * The error message returned when the scaling strength is the weakest.
   * 
   * @example
   * The instanceTypes or diskTypes are not supported.
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
   * **
   * 
   * **Warning** This parameter is deprecated.
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
      inventoryHealth: DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePoolsInventoryHealth,
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

export class DescribeElasticStrengthResponseBodyElasticStrengthModels extends $dara.Model {
  /**
   * @remarks
   * The scaling strength level of the scaling group. Valid values:
   * 
   * *   Strong
   * *   Medium
   * *   Weak
   * 
   * @example
   * Strong
   */
  elasticStrength?: string;
  /**
   * @remarks
   * The resource pools.
   */
  resourcePools?: DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools[];
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * @example
   * asg-wz98mnj7nblv9gc****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The scaling strength score of the scaling group. Each combination of instance type + zone is scored from 0 to 1 based on its availability, with 0 being the weakest scaling strength and 1 being the strongest. The scaling strength score of the scaling group is measured by the combined scores of all the combinations of instance type + zone.
   * 
   * **
   * 
   * **Warning** This parameter is deprecated.
   * 
   * @example
   * 1.5
   */
  totalStrength?: number;
  static names(): { [key: string]: string } {
    return {
      elasticStrength: 'ElasticStrength',
      resourcePools: 'ResourcePools',
      scalingGroupId: 'ScalingGroupId',
      totalStrength: 'TotalStrength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticStrength: 'string',
      resourcePools: { 'type': 'array', 'itemType': DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools },
      scalingGroupId: 'string',
      totalStrength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePools)) {
      $dara.Model.validateArray(this.resourcePools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticStrengthResponseBodyResourcePoolsInventoryHealth extends $dara.Model {
  /**
   * @remarks
   * The adequacy score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  adequacyScore?: number;
  /**
   * @remarks
   * The inventory health score.
   * 
   * *   A score between 5 and 6 indicates a sufficient inventory.
   * *   A score between 1 and 4 indicates that there is no guarantee of a sufficient inventory. Select a reservation as necessary.
   * *   A score between -3 and 0 indicates that the inventory is sufficient, and an alert is triggered. Select another instance type.
   * 
   * Calculation formula: `HealthScore` = `AdequacyScore` + `SupplyScore` - `HotScore`.
   * 
   * @example
   * 3
   */
  healthScore?: number;
  /**
   * @remarks
   * The popularity score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  hotScore?: number;
  /**
   * @remarks
   * The replenishment capability score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  supplyScore?: number;
  static names(): { [key: string]: string } {
    return {
      adequacyScore: 'AdequacyScore',
      healthScore: 'HealthScore',
      hotScore: 'HotScore',
      supplyScore: 'SupplyScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adequacyScore: 'number',
      healthScore: 'number',
      hotScore: 'number',
      supplyScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeElasticStrengthResponseBody extends $dara.Model {
  /**
   * @remarks
   * The scaling strength level of the scaling group. Valid values:
   * 
   * *   Strong
   * *   Medium
   * *   Weak
   * 
   * @example
   * Strong
   */
  elasticStrength?: string;
  /**
   * @remarks
   * The scaling strength models.
   */
  elasticStrengthModels?: DescribeElasticStrengthResponseBodyElasticStrengthModels[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource pools.
   */
  resourcePools?: DescribeElasticStrengthResponseBodyResourcePools[];
  /**
   * @remarks
   * The scaling strength score of the scaling group. Each combination of instance type + zone is scored from 0 to 1 based on its availability, with 0 being the weakest scaling strength and 1 being the strongest. The scaling strength score of the scaling group is measured by the combined scores of all the combinations of instance type + zone.
   * 
   * **
   * 
   * **Warning** This parameter is deprecated.
   * 
   * @example
   * 1.5
   */
  totalStrength?: number;
  static names(): { [key: string]: string } {
    return {
      elasticStrength: 'ElasticStrength',
      elasticStrengthModels: 'ElasticStrengthModels',
      requestId: 'RequestId',
      resourcePools: 'ResourcePools',
      totalStrength: 'TotalStrength',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticStrength: 'string',
      elasticStrengthModels: { 'type': 'array', 'itemType': DescribeElasticStrengthResponseBodyElasticStrengthModels },
      requestId: 'string',
      resourcePools: { 'type': 'array', 'itemType': DescribeElasticStrengthResponseBodyResourcePools },
      totalStrength: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elasticStrengthModels)) {
      $dara.Model.validateArray(this.elasticStrengthModels);
    }
    if(Array.isArray(this.resourcePools)) {
      $dara.Model.validateArray(this.resourcePools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


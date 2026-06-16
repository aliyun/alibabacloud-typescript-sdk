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
   * The health score.
   * 
   * - A score from 5 to 6 indicates high confidence in supply.
   * 
   * - A score from 1 to 4 indicates that supply is not guaranteed. Consider making on-demand reservations.
   * 
   * - A score from -3 to 0 indicates a supply health alert. Consider using a different instance type.
   * 
   * The health score is calculated using the formula: `HealthScore` = `AdequacyScore` + `SupplyScore` - `HotScore`.
   * 
   * @example
   * 3
   */
  healthScore?: number;
  /**
   * @remarks
   * The hot score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 0
   */
  hotScore?: number;
  /**
   * @remarks
   * The supply score.
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
   * The error code returned when the elastic strength is 0.
   * 
   * @example
   * InstanceTypesOrDiskTypesNotSupported
   */
  code?: string;
  /**
   * @remarks
   * The elastic strength of the resource pool, which is based on its inventory health and current stock. Valid values:
   * 
   * - Strong: high elastic strength.
   * 
   * - Medium: medium elastic strength.
   * 
   * - Weak: weak elastic strength.
   * 
   * @example
   * Strong
   */
  elasticStrength?: string;
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
   * The error message returned when the elastic strength is 0.
   * 
   * @example
   * The instanceTypes or diskTypes are not supported.
   */
  msg?: string;
  /**
   * @remarks
   * The availability of the resource pool. Valid values:
   * 
   * - Available: The resource pool is available.
   * 
   * - Unavailable: The resource pool is unavailable. This can occur if the instance type is not deployed in the zone, has insufficient inventory, or does not meet other constraints.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The elastic strength of the resource pool.>Warning:  This parameter is deprecated.
   * 
   * @example
   * 0.6
   */
  strength?: number;
  /**
   * @remarks
   * The VSwitches in the zone of the resource pool.
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
      elasticStrength: 'ElasticStrength',
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
      elasticStrength: 'string',
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
   * The elastic strength of the current scaling group. Valid values:
   * 
   * - Strong: high elastic strength.
   * 
   * - Medium: medium elastic strength.
   * 
   * - Weak: weak elastic strength.
   * 
   * @example
   * Strong
   */
  elasticStrength?: string;
  /**
   * @remarks
   * Details of the resource pools within the scaling group.
   */
  resourcePools?: DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools[];
  /**
   * @remarks
   * The scaling group ID.
   * 
   * @example
   * asg-wz98mnj7nblv9gc****
   */
  scalingGroupId?: string;
  /**
   * @remarks
   * The total elastic strength of the scaling group. The strength is the sum of scores from all configured instance type and zone combinations. Each combination is scored from 0 (low strength) to 1 (high strength) based on resource availability.>Warning:  This parameter is deprecated.
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
   * The health score.
   * 
   * - A score from 5 to 6 indicates high confidence in supply.
   * 
   * - A score from 1 to 4 indicates that supply is not guaranteed. Consider making on-demand reservations.
   * 
   * - A score from -3 to 0 indicates a supply health alert. Consider using a different instance type.
   * 
   * The health score is calculated using the formula: `HealthScore` = `AdequacyScore` + `SupplyScore` - `HotScore`.
   * 
   * @example
   * 3
   */
  healthScore?: number;
  /**
   * @remarks
   * The hot score.
   * 
   * Valid values: 0 to 3.
   * 
   * @example
   * 3
   */
  hotScore?: number;
  /**
   * @remarks
   * The supply score.
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
   * The error code returned when the elastic strength is 0.
   * 
   * @example
   * IMG_NOT_SUPPORTED
   */
  code?: string;
  /**
   * @remarks
   * The elastic strength of the resource pool, which is based on its inventory health and current stock. Valid values:
   * 
   * - Strong: high elastic strength.
   * 
   * - Medium: medium elastic strength.
   * 
   * - Weak: weak elastic strength.
   * 
   * @example
   * Medium
   */
  elasticStrength?: string;
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
   * The error message returned when the elastic strength is 0.
   * 
   * @example
   * The instanceType does not support the image in the configuration.
   */
  msg?: string;
  /**
   * @remarks
   * The availability of the resource pool. Valid values:
   * 
   * - Available: The resource pool is available.
   * 
   * - Unavailable: The resource pool is unavailable. This can occur if the instance type is not deployed in the zone, has insufficient inventory, or does not meet other constraints.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The elastic strength of the resource pool.
   * 
   * @example
   * 0.6
   */
  strength?: number;
  /**
   * @remarks
   * The VSwitches in the zone of the resource pool.
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
      elasticStrength: 'ElasticStrength',
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
      elasticStrength: 'string',
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
   * The elastic strength of the current scaling group. Valid values:
   * 
   * - Strong: high elastic strength.
   * 
   * - Medium: medium elastic strength.
   * 
   * - Weak: weak elastic strength.
   * 
   * @example
   * Strong
   */
  elasticStrength?: string;
  /**
   * @remarks
   * An array of elastic strength details, returned when the API call targets multiple scaling groups.
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
   * An array of resource pools. This parameter is returned when the API call targets a single scaling group.
   */
  resourcePools?: DescribeElasticStrengthResponseBodyResourcePools[];
  /**
   * @remarks
   * The total elastic strength of the scaling group. The strength is the sum of scores from all configured instance type and zone combinations. Each combination is scored from 0 (low strength) to 1 (high strength) based on resource availability.>Warning:  This parameter is deprecated.
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


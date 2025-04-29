// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools } from "./DescribeElasticStrengthResponseBodyElasticStrengthModelsResourcePools";


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


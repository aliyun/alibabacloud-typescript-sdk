// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticStrengthResponseBodyElasticStrengthModels } from "./DescribeElasticStrengthResponseBodyElasticStrengthModels";
import { DescribeElasticStrengthResponseBodyResourcePools } from "./DescribeElasticStrengthResponseBodyResourcePools";


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


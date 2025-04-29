// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 5
   */
  availableAmount?: number;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   */
  elasticityAssuranceUsages?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c6.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The total number of instances for which capacity of an instance type is reserved.
   * 
   * @example
   * 2
   */
  totalAmount?: number;
  /**
   * @remarks
   * The number of instances that have used the elasticity assurance.
   * 
   * @example
   * 2
   */
  usedAmount?: number;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableAmount: 'AvailableAmount',
      elasticityAssuranceUsages: 'ElasticityAssuranceUsages',
      instanceType: 'InstanceType',
      totalAmount: 'TotalAmount',
      usedAmount: 'UsedAmount',
      zoneId: 'zoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAmount: 'number',
      elasticityAssuranceUsages: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages,
      instanceType: 'string',
      totalAmount: 'number',
      usedAmount: 'number',
      zoneId: 'string',
    };
  }

  validate() {
    if(this.elasticityAssuranceUsages && typeof (this.elasticityAssuranceUsages as any).validate === 'function') {
      (this.elasticityAssuranceUsages as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


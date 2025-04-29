// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources";
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules";
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem extends $dara.Model {
  /**
   * @remarks
   * Details of the allocated resources.
   */
  allocatedResources?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources;
  /**
   * @remarks
   * The description of the elasticity assurance.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * e114477596854834
   */
  elasticityAssuranceOwnerId?: string;
  /**
   * @remarks
   * The time when the elasticity assurance expires.
   * 
   * @example
   * 2021-12-03T16:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The billing method of the instance. The value can be only PostPaid. Only pay-as-you-go instances can be created by using elasticity assurances.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * null
   */
  latestStartTime?: string;
  /**
   * @remarks
   * The type of the elasticity assurance. Valid values:
   * 
   * *   ElasticityAssurance: the general-purpose elasticity assurance.
   * *   TimeDivisionElasticityAssurance: the time-segmented assurance of the elasticity assurance.
   * 
   * @example
   * ElasticityAssurance
   */
  packageType?: string;
  /**
   * @remarks
   * The ID of the elasticity assurance.
   * 
   * @example
   * eap-bp1ir35kqtn8ywci****
   */
  privatePoolOptionsId?: string;
  /**
   * @remarks
   * The type of the private pool associated with the elasticity assurance. Valid values:
   * 
   * *   Open: open private pool
   * *   Target: specific private pool
   * 
   * @example
   * Target
   */
  privatePoolOptionsMatchCriteria?: string;
  /**
   * @remarks
   * The name of the elasticity assurance.
   * 
   * @example
   * eapTestName
   */
  privatePoolOptionsName?: string;
  /**
   * @remarks
   * The recurrence rules of the time-segmented assurances.
   */
  recurrenceRules?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules;
  /**
   * @remarks
   * The region ID of the elasticity assurance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The time when the elasticity assurance takes effect.
   * 
   * @example
   * 2020-12-03T05:25Z
   */
  startTime?: string;
  /**
   * @remarks
   * Indicates when the elasticity assurance takes effect. Valid values:
   * 
   * *   Now: The elasticity assurance takes effect immediately after it is created.
   * *   Later: The elasticity assurance takes effect at a specified time.
   * 
   * @example
   * Now
   */
  startTimeType?: string;
  /**
   * @remarks
   * The status of the elasticity assurance. Valid values:
   * 
   * *   Preparing
   * *   Prepared
   * *   Active
   * *   Released
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags of the elasticity assurance.
   */
  tags?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags;
  /**
   * @remarks
   * The total number of times that the elasticity assurance is applied.
   * 
   * @example
   * Unlimited
   */
  totalAssuranceTimes?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * 0
   */
  usedAssuranceTimes?: number;
  static names(): { [key: string]: string } {
    return {
      allocatedResources: 'AllocatedResources',
      description: 'Description',
      elasticityAssuranceOwnerId: 'ElasticityAssuranceOwnerId',
      endTime: 'EndTime',
      instanceChargeType: 'InstanceChargeType',
      latestStartTime: 'LatestStartTime',
      packageType: 'PackageType',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      privatePoolOptionsMatchCriteria: 'PrivatePoolOptionsMatchCriteria',
      privatePoolOptionsName: 'PrivatePoolOptionsName',
      recurrenceRules: 'RecurrenceRules',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      startTime: 'StartTime',
      startTimeType: 'StartTimeType',
      status: 'Status',
      tags: 'Tags',
      totalAssuranceTimes: 'TotalAssuranceTimes',
      usedAssuranceTimes: 'UsedAssuranceTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResources: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources,
      description: 'string',
      elasticityAssuranceOwnerId: 'string',
      endTime: 'string',
      instanceChargeType: 'string',
      latestStartTime: 'string',
      packageType: 'string',
      privatePoolOptionsId: 'string',
      privatePoolOptionsMatchCriteria: 'string',
      privatePoolOptionsName: 'string',
      recurrenceRules: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemRecurrenceRules,
      regionId: 'string',
      resourceGroupId: 'string',
      startTime: 'string',
      startTimeType: 'string',
      status: 'string',
      tags: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemTags,
      totalAssuranceTimes: 'string',
      usedAssuranceTimes: 'number',
    };
  }

  validate() {
    if(this.allocatedResources && typeof (this.allocatedResources as any).validate === 'function') {
      (this.allocatedResources as any).validate();
    }
    if(this.recurrenceRules && typeof (this.recurrenceRules as any).validate === 'function') {
      (this.recurrenceRules as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


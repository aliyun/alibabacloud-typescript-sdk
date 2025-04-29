// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateElasticityAssuranceRequestPrivatePoolOptions } from "./CreateElasticityAssuranceRequestPrivatePoolOptions";
import { CreateElasticityAssuranceRequestRecurrenceRules } from "./CreateElasticityAssuranceRequestRecurrenceRules";
import { CreateElasticityAssuranceRequestTag } from "./CreateElasticityAssuranceRequestTag";


export class CreateElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: CreateElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * The total number of times that the elasticity assurance can be used. Set the value to Unlimited. This value specifies that the elasticity assurance can be used for an unlimited number of times within its validity period.
   * 
   * Default value: Unlimited.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the elasticity assurance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Unit: month. Valid values: 1, 2, 3, 6, 12, 24, and 36.
   * 
   * *   Default value when `PeriodUnit` is set to Month: 1.
   * *   Default value when `PeriodUnit` is set to Year: 12.
   * 
   * >  If you set `AutoRenew` to `true`, you must specify this parameter.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that you want to use to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The `token` can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the elasticity assurance. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.
   * 
   * This parameter is empty by default.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The total number of instances of an instance type for which you want to reserve capacity.
   * 
   * Valid values: 1 to 1000.
   * 
   * >  You must specify this parameter.
   * 
   * @example
   * 2
   */
  instanceAmount?: number;
  /**
   * @remarks
   * > This parameter is no longer used.
   * 
   * @example
   * null
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The instance type. An elasticity assurance can be created to reserve the capacity of a single instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.xlarge
   */
  instanceType?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The validity period of the elasticity assurance. The unit of the validity period is determined by the value of `PeriodUnit`. Valid values:
   * 
   * *   When the value of `PeriodUnit` is `Month`, the valid values are 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * *   When the value of `PeriodUnit` is `Year`, the valid values are 1, 2, 3, 4, and 5.
   * *   When the value of `PeriodUnit` is `Day`, the valid values are 1 to 365.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the validity period of the elasticity assurance. Valid values:
   * 
   * *   Month
   * 
   * *   Year
   * 
   * *   Day
   * 
   *     **
   * 
   *     **Note** If you set `PeriodUnit` to `Day`, you must specify RecurrenceRules to create a time-segmented elasticity assurance.
   * 
   * Default value: Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The assurance schedules of the time-segmented elasticity assurance.
   * 
   * >  Time-segmented elasticity assurances are available only in specific regions and to specific users. To use time-segmented elasticity assurances, [submit a ticket](https://smartservice.console.aliyun.com/service/create-ticket-intl).
   */
  recurrenceRules?: CreateElasticityAssuranceRequestRecurrenceRules[];
  /**
   * @remarks
   * The ID of the region in which to create the elasticity assurance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which to assign the elasticity assurance.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The time when the elasticity assurance takes effect. The default value is the time when the CreateElasticityAssurance operation is called to create the elasticity assurance. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2020-10-30T06:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags to add to the elasticity assurance.
   */
  tag?: CreateElasticityAssuranceRequestTag[];
  /**
   * @remarks
   * The ID of the zone in which to create the elasticity assurance. An elasticity assurance can be used to reserve resources within a single zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      privatePoolOptions: 'PrivatePoolOptions',
      assuranceTimes: 'AssuranceTimes',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      description: 'Description',
      instanceAmount: 'InstanceAmount',
      instanceCpuCoreCount: 'InstanceCpuCoreCount',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      recurrenceRules: 'RecurrenceRules',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      startTime: 'StartTime',
      tag: 'Tag',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privatePoolOptions: CreateElasticityAssuranceRequestPrivatePoolOptions,
      assuranceTimes: 'string',
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      description: 'string',
      instanceAmount: 'number',
      instanceCpuCoreCount: 'number',
      instanceType: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      period: 'number',
      periodUnit: 'string',
      recurrenceRules: { 'type': 'array', 'itemType': CreateElasticityAssuranceRequestRecurrenceRules },
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      startTime: 'string',
      tag: { 'type': 'array', 'itemType': CreateElasticityAssuranceRequestTag },
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.privatePoolOptions && typeof (this.privatePoolOptions as any).validate === 'function') {
      (this.privatePoolOptions as any).validate();
    }
    if(Array.isArray(this.instanceType)) {
      $dara.Model.validateArray(this.instanceType);
    }
    if(Array.isArray(this.recurrenceRules)) {
      $dara.Model.validateArray(this.recurrenceRules);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.zoneId)) {
      $dara.Model.validateArray(this.zoneId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


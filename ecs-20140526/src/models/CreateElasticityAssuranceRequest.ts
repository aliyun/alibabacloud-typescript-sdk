// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticityAssuranceRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The match mode of the elasticity assurance service. Valid values:
   * 
   * - Open: open mode. The system automatically matches the capacity of open private pools when instances are started. If no matching private pool capacity is available, public pool resources are used to start the instances.
   * - Target: targeted mode. Instances are started by using the capacity of the specified private pool. If the specified private pool capacity is unavailable, the instances fail to start.
   * 
   * Default value: Open.
   * 
   * @example
   * Open
   */
  matchCriteria?: string;
  /**
   * @remarks
   * The name of the elasticity assurance service. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      matchCriteria: 'MatchCriteria',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      matchCriteria: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceRequestRecurrenceRules extends $dara.Model {
  /**
   * @remarks
   * The end time of the time-sharing assurance. The value must be on the hour.
   * 
   * @example
   * 10
   */
  endHour?: number;
  /**
   * @remarks
   * The type of the recurrence rule. Valid values:
   * - Daily: daily recurrence.
   * - Weekly: weekly recurrence.
   * - Monthly: monthly recurrence.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * Daily
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The value of the recurrence rule.
   * 
   * - If `RecurrenceType` is set to `Daily`, you can specify only one value. Valid values: 1 to 31. The value specifies the interval in days between recurrences.
   * - If `RecurrenceType` is set to `Weekly`, you can specify multiple values separated by commas (,). The values for Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday are 0, 1, 2, 3, 4, 5, and 6. For example, `1,2` specifies Monday and Tuesday.
   * - If `RecurrenceType` is set to `Monthly`, the format is `A-B`. Valid values of A and B: 1 to 31. B must be greater than or equal to A. For example, `1-5` specifies the 1st to 5th day of each month.
   * 
   * > You must specify both `RecurrenceType` and `RecurrenceValue`.
   * 
   * @example
   * 1
   */
  recurrenceValue?: string;
  /**
   * @remarks
   * The effective period start hour of the time-sharing assurance. The value must be on the hour.
   * 
   * > You must specify both `StartHour` and `EndHour`, and the difference between them must be at least 4 hours.
   * 
   * @example
   * 4
   */
  startHour?: number;
  static names(): { [key: string]: string } {
    return {
      endHour: 'EndHour',
      recurrenceType: 'RecurrenceType',
      recurrenceValue: 'RecurrenceValue',
      startHour: 'StartHour',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endHour: 'number',
      recurrenceType: 'string',
      recurrenceValue: 'string',
      startHour: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the elasticity assurance service. Valid values of N: 1 to 20. The tag key cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the elasticity assurance service. Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be up to 128 characters in length and cannot start with `acs:` or contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateElasticityAssuranceRequest extends $dara.Model {
  privatePoolOptions?: CreateElasticityAssuranceRequestPrivatePoolOptions;
  /**
   * @remarks
   * The total number of times that the elasticity assurance can be applied. Valid values: Unlimited. Currently, only the unlimited mode is supported within the service validity period.
   * 
   * Default value: Unlimited.
   * 
   * @example
   * Unlimited
   */
  assuranceTimes?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * - true: Auto-renewal is enabled.
   * - false: Auto-renewal is disabled.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The auto-renewal period. Unit: months. Valid values: 1, 2, 3, 6, 12, 24, and 36.
   * 
   * 
   * 
   * - If `PeriodUnit=Month`, the default value is 1.
   * 
   * - If `PeriodUnit=Year`, the default value is 12.
   * 
   * 
   * > This parameter is required when `AutoRenew` is set to `True`.
   * 
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The `ClientToken` value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 0c593ea1-3bea-11e9-b96b-88e9fe637760
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the elasticity assurance service. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`.
   * 
   * Default value: empty.
   * 
   * @example
   * This is description.
   */
  description?: string;
  /**
   * @remarks
   * The total number of instances to be reserved for a single instance type.
   * 
   * Valid values: 1 to 1000.
   * 
   * >Notice: This parameter is required.
   * 
   * @example
   * 2
   */
  instanceAmount?: number;
  /**
   * @remarks
   * > This parameter is deprecated.
   * 
   * @example
   * null
   */
  instanceCpuCoreCount?: number;
  /**
   * @remarks
   * The instance type. Currently, you can configure an elasticity assurance service for only one instance type.
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
   * The purchase duration. The unit of the duration is determined by the `PeriodUnit` parameter. Valid values:
   * 
   * - If `PeriodUnit` is set to `Month`: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
   * - If `PeriodUnit` is set to `Year`: 1, 2, 3, 4, and 5.
   * - If `PeriodUnit` is set to `Day`: 1 to 365.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the purchase duration. Valid values:
   * 
   * - Month: month.
   * - Year: year.
   * - Day: day.
   *   > When `PeriodUnit` is set to `Day`, you must also specify RecurrenceRules to create a time-sharing elasticity assurance.
   * 
   * Default value: Year.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The recurrence rules for the time-sharing elasticity assurance.
   */
  recurrenceRules?: CreateElasticityAssuranceRequestRecurrenceRules[];
  /**
   * @remarks
   * The region ID of the elasticity assurance service. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the elasticity assurance service belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The effective period start time of the elasticity assurance service. By default, the service takes effect when the operation is invoked. Specify the time in the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2020-10-30T06:32:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The tags of the elasticity assurance service.
   */
  tag?: CreateElasticityAssuranceRequestTag[];
  /**
   * @remarks
   * The zone ID within the region of the elasticity assurance service. Currently, you can create an elasticity assurance service in only one zone.
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


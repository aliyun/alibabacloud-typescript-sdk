// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * dukang-chengdu-sgueg
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * {\\"reasons\\": [], \\"patterns\\": [], \\"aggregates\\": [], \\"event_statistic\\": {\\"statistic\\": {}}}
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class RestoreInstanceRequestVSwitches extends $dara.Model {
  /**
   * @remarks
   * VSwitch ID.
   * 
   * @example
   * vsw-bp19mlh98tm9teyyd****
   */
  vswId?: string;
  /**
   * @remarks
   * Zone ID of the VSwitch.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vswId: 'VswId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vswId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Cluster administrator password.
   * 
   * @example
   * password_example
   */
  adminPassword?: string;
  /**
   * @remarks
   * Enable auto-renewal. This parameter applies only when PayType is prePaid. Default: false.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Backup job ID.
   * 
   * @example
   * bk-adskj23hd9s
   */
  backupTaskId?: string;
  /**
   * @remarks
   * Subscription duration. This parameter applies only when PayType is prePaid.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Instance name.
   * 
   * @example
   * c1
   */
  instanceName?: string;
  /**
   * @remarks
   * Payment type:
   * prePaid for subscription
   * postPaid for pay-as-you-go
   * 
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @remarks
   * Billing cycle unit. This parameter applies only when PayType is prePaid.
   * Month for monthly billing
   * Year for yearly billing
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-aekzllkih7jqxxx
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Tag struct.
   */
  tags?: RestoreInstanceRequestTags[];
  /**
   * @remarks
   * VSwitch and zone information.
   */
  vSwitches?: RestoreInstanceRequestVSwitches[];
  /**
   * @remarks
   * VPC ID.
   * 
   * @example
   * vpc-bp1fll2mci6d7pw8m****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      adminPassword: 'AdminPassword',
      autoRenew: 'AutoRenew',
      backupTaskId: 'BackupTaskId',
      duration: 'Duration',
      instanceName: 'InstanceName',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vSwitches: 'VSwitches',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminPassword: 'string',
      autoRenew: 'boolean',
      backupTaskId: 'string',
      duration: 'number',
      instanceName: 'string',
      payType: 'string',
      pricingCycle: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'array', 'itemType': RestoreInstanceRequestTags },
      vSwitches: { 'type': 'array', 'itemType': RestoreInstanceRequestVSwitches },
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitches)) {
      $dara.Model.validateArray(this.vSwitches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequestTags extends $dara.Model {
  /**
   * @example
   * dukang-chengdu-sgueg
   */
  key?: string;
  /**
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
   * @example
   * vsw-bp19mlh98tm9teyyd****
   */
  vswId?: string;
  /**
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
   * @example
   * password_example
   */
  adminPassword?: string;
  /**
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @example
   * bk-adskj23hd9s
   */
  backupTaskId?: string;
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * c1
   */
  instanceName?: string;
  /**
   * @example
   * prePaid
   */
  payType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * rg-aekzllkih7jqxxx
   */
  resourceGroupId?: string;
  tags?: RestoreInstanceRequestTags[];
  vSwitches?: RestoreInstanceRequestVSwitches[];
  /**
   * @remarks
   * vpc ID
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


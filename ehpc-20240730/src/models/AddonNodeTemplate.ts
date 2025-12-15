// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddonNodeTemplateDataDisks extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplateSystemDisk extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplate extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  dataDisks?: AddonNodeTemplateDataDisks[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 位
   */
  osName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osNameEN?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  privateIpAddress?: string;
  /**
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: AddonNodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      osName: 'OsName',
      osNameEN: 'OsNameEN',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': AddonNodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      osName: 'string',
      osNameEN: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: AddonNodeTemplateSystemDisk,
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


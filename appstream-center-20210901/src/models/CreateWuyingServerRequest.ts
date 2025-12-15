// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The data disk category.
   * 
   * Valid values:
   * 
   * *   cloud_auto.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The PL of the data disk.
   * 
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The data disk size.
   * 
   * @example
   * 100
   */
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateWuyingServerRequest extends $dara.Model {
  /**
   * @remarks
   * Quantity.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Auto payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * bandwidth value, the NetworkStrategyType is valid for DirectIp. Unit: Mbps, range 2~100
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * Region.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * Valid values:
   * 
   * *   PrePaid: subscription
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of data disks.
   */
  dataDisk?: CreateWuyingServerRequestDataDisk[];
  hostName?: string;
  /**
   * @remarks
   * Idempotence token to ensure operation uniqueness
   * 
   * @example
   * 6a1b8c3d
   */
  idempotenceToken?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The type of the network policy (in invitational preview).
   * 
   * @example
   * DirectIp
   */
  networkStrategyType?: string;
  /**
   * @remarks
   * The office network IDs.
   * 
   * @example
   * cn-hangzhou+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * Workstation login password.
   * 
   * @example
   * YourPassword123
   */
  password?: string;
  /**
   * @remarks
   * The subscription period.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The time unit.
   * 
   * Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the discount.
   * 
   * >  If PromotionId is set, it will try to apply the corresponding discount.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  savingPlanId?: string;
  /**
   * @remarks
   * Workstation specifications.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  serverPortRange?: string;
  /**
   * @remarks
   * The system disk category.
   * 
   * Valid values:
   * 
   * *   cloud_auto.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level (PL) of the system disk.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of office network vSwitches.
   */
  vSwitchIds?: string[];
  /**
   * @example
   * vnp-0b************gyw
   */
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The name of the workstation. The numeric suffix is automatically added when multiple workstations are created.
   * 
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bandwidth: 'Bandwidth',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      dataDisk: 'DataDisk',
      hostName: 'HostName',
      idempotenceToken: 'IdempotenceToken',
      imageId: 'ImageId',
      networkStrategyType: 'NetworkStrategyType',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      savingPlanId: 'SavingPlanId',
      serverInstanceType: 'ServerInstanceType',
      serverPortRange: 'ServerPortRange',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      vSwitchIds: 'VSwitchIds',
      virtualNodePoolId: 'VirtualNodePoolId',
      wuyingServerName: 'WuyingServerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      bandwidth: 'number',
      bizRegionId: 'string',
      chargeType: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateWuyingServerRequestDataDisk },
      hostName: 'string',
      idempotenceToken: 'string',
      imageId: 'string',
      networkStrategyType: 'string',
      officeSiteId: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      savingPlanId: 'string',
      serverInstanceType: 'string',
      serverPortRange: 'string',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      virtualNodePoolId: 'string',
      wuyingServerName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
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


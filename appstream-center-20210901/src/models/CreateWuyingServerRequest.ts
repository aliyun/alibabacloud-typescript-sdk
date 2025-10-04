// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerRequestDataDisk extends $dara.Model {
  /**
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
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
   * @example
   * 1
   */
  amount?: number;
  /**
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @example
   * PrePaid
   */
  chargeType?: string;
  dataDisk?: CreateWuyingServerRequestDataDisk[];
  /**
   * @example
   * 6a1b8c3d
   */
  idempotenceToken?: string;
  /**
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @example
   * cn-hangzhou+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @example
   * YourPassword123
   */
  password?: string;
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
  /**
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  /**
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @example
   * 100
   */
  systemDiskSize?: number;
  vSwitchIds?: string[];
  virtualNodePoolId?: string;
  /**
   * @example
   * exampleServerName
   */
  wuyingServerName?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      bizRegionId: 'BizRegionId',
      chargeType: 'ChargeType',
      dataDisk: 'DataDisk',
      idempotenceToken: 'IdempotenceToken',
      imageId: 'ImageId',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      serverInstanceType: 'ServerInstanceType',
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
      bizRegionId: 'string',
      chargeType: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateWuyingServerRequestDataDisk },
      idempotenceToken: 'string',
      imageId: 'string',
      officeSiteId: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      serverInstanceType: 'string',
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


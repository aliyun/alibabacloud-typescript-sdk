// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data cloud disk.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the data cloud disk.
   * 
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk.
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
   * The number of workstations to create.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bandwidth value. This parameter takes effect only when NetworkStrategyType is set to DirectIp. Unit: Mbit/s. Valid values: 2 to 100.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  bizRegionId?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of data cloud disks.
   */
  dataDisk?: CreateWuyingServerRequestDataDisk[];
  /**
   * @remarks
   * The hostname. The following limits apply:
   * 
   * - A period (.) or hyphen (-) cannot be used as the first or last character, and consecutive periods or hyphens are not allowed.
   * 
   * - Windows workstations: The hostname must be 2 to 15 characters in length. It cannot contain periods (.), consecutive hyphens, or consist entirely of digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   * - Linux workstations:
   * 
   *   - The hostname must be 2 to 64 characters in length and can contain multiple periods (.). Each segment separated by a period can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   *   - You can use the placeholder `${instance_id}` to include the instance ID in the HostName parameter. For example, if you set `HostName=k8s-${instance_id}` and the ECS instance ID is `i-123abc****`, the hostname is `k8s-i-123abc****`.
   * 
   * - When you create multiple workstation instances at a time, you can use the `name_prefix[begin_number,bits]name_suffix` format to assign sequential hostnames. For example, if you set HostName to `ecd-[1,4]-test`, the hostname of the first workstation is `ecd-0001-test`, the hostname of the second workstation is `ecd-0002-test`, and so on.
   * 
   *   - `name_prefix`: the prefix of the hostname.
   * 
   *   - `[begin_number,bits]`: the sequential number in the hostname.
   * 
   *     - `begin_number`: the starting number. Valid values: 0 to 999999. Default value: 0. If the value is invalid, 0 is used.
   * 
   *     - `bits`: the number of digits. Valid values: 1 to 6. Default value: 6. If the value is invalid, 6 is used.
   * 
   *   - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostName?: string;
  /**
   * @remarks
   * The idempotence token that ensures the uniqueness of the operation.
   * 
   * @example
   * 6a1b8c3d
   */
  idempotenceToken?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  maxPrice?: number;
  /**
   * @remarks
   * The network policy type (in invitational preview).
   * 
   * @example
   * DirectIp
   */
  networkStrategyType?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The logon password of the workstation.
   * 
   * @example
   * YourPassword123
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The promotion ID.
   * 
   * 
   * > If PromotionId is specified, the corresponding discount is applied.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  savingPlanId?: string;
  /**
   * @remarks
   * The workstation instance type.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  serverPortRange?: string;
  subPayType?: string;
  /**
   * @remarks
   * The type of the system cloud disk.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the system cloud disk.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GB.
   * 
   * @example
   * 100
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The list of vSwitches in the office network.
   */
  vSwitchIds?: string[];
  /**
   * @example
   * vnp-0b************gyw
   */
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The workstation name. When you create multiple workstations, a numeric suffix is automatically appended.
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
      maxPrice: 'MaxPrice',
      networkStrategyType: 'NetworkStrategyType',
      officeSiteId: 'OfficeSiteId',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      promotionId: 'PromotionId',
      savingPlanId: 'SavingPlanId',
      serverInstanceType: 'ServerInstanceType',
      serverPortRange: 'ServerPortRange',
      subPayType: 'SubPayType',
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
      maxPrice: 'number',
      networkStrategyType: 'string',
      officeSiteId: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      promotionId: 'string',
      savingPlanId: 'string',
      serverInstanceType: 'string',
      serverPortRange: 'string',
      subPayType: 'string',
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


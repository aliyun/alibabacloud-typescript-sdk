// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The category of the data cloud disk.
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
   * The number of workstations.
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
   * The region.
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
   * Specifies whether to enable dedicated eRDMA network interfaces.
   * 
   * @example
   * true
   */
  erdmaEnabled?: boolean;
  /**
   * @remarks
   * The version of the GPU driver, such as grid19.
   * 
   * @example
   * grid19
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The hostname. The hostname must meet the following requirements:
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-). The hostname cannot contain consecutive periods (.) or hyphens (-).
   * 
   * - For a Windows workstation: The hostname must be 2 to 15 characters in length. It cannot contain periods (.) or consecutive hyphens (-), and cannot contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   * - For a Linux workstation:
   * 
   *   - The hostname must be 2 to 64 characters in length. It can contain multiple periods (.). The string between two consecutive periods is a segment. Each segment can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   *   - You can use the `${instance_id}` placeholder to pass the instance ID to the HostName parameter. For example, if you set HostName to `k8s-${instance_id}` and the created ECS instance ID is `i-123abc****`, the hostname of the instance is `k8s-i-123abc****`.
   * 
   * - When you create multiple workstations at a time, you can use the `name_prefix[begin_number,bits]name_suffix` naming format to name the workstations in a unified manner. For example, if you set HostName to `ecd-[1,4]-test`, the hostname of the first workstation is `ecd-0001-test`, the hostname of the second workstation is `ecd-0002-test`, and so on.
   * 
   *   - `name_prefix`: the prefix of the hostname.
   * 
   *   - `[begin_number,bits]`: the sequential number in the hostname.
   * 
   *     - `begin_number`: the start number. Valid values: 0 to 999999. Default value: 0. If the specified value is invalid, the default value 0 is used.
   * 
   *     - `bits`: the number of digits. Valid values: 1 to 6. Default value: 6. If the specified value is invalid, the default value 6 is used.
   * 
   *   - `name_suffix`: the suffix of the hostname.
   * 
   * @example
   * testhost
   */
  hostName?: string;
  /**
   * @remarks
   * The idempotence token that is used to ensure the uniqueness of the operation.
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
  /**
   * @remarks
   * The maximum price.
   * 
   * @example
   * 0.05
   */
  maxPrice?: number;
  /**
   * @remarks
   * The network policy type. This feature is in invitational preview.
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
   * > If PromotionId is specified, the system attempts to apply the corresponding discount.
   * 
   * @example
   * 17440009****
   */
  promotionId?: string;
  /**
   * @remarks
   * The savings plan ID.
   * 
   * @example
   * spn-ce3f5b4fk**46CY
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The instance type of the workstation.
   * 
   * @example
   * eds.proworkstation_flagship_elite_ne.96c384g.192g4x
   */
  serverInstanceType?: string;
  /**
   * @remarks
   * The service port range.
   * 
   * @example
   * 22/22
   */
  serverPortRange?: string;
  /**
   * @remarks
   * The sub-billing method.
   * 
   * @example
   * postPaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The category of the system cloud disk.
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
   * @remarks
   * The virtual node pool ID.
   * 
   * @example
   * vnp-0b************gyw
   */
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The name of the workstation. When you create multiple workstations, a numeric suffix is automatically added.
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
      erdmaEnabled: 'ErdmaEnabled',
      gpuDriverVersion: 'GpuDriverVersion',
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
      erdmaEnabled: 'boolean',
      gpuDriverVersion: 'string',
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


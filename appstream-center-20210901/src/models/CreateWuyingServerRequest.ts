// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWuyingServerRequestDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data cloud disk.
   * 
   * - cloud: basic cloud disk.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD cloud disk.
   * - cloud_essd: ESSD cloud disk.
   * - cloud_auto: ESSD AutoPL cloud disk.
   * 
   * If this parameter is not specified, cloud is used. The final availability is subject to the specification, region, and cloud disk capacity limits.
   * 
   * @example
   * cloud_auto
   */
  dataDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD data cloud disk. This parameter takes effect when cloud_essd is used. Default value: PL1.
   * 
   * - PL0: ESSD performance level 0.
   * - PL1: ESSD performance level 1.
   * - PL2: ESSD performance level 2.
   * - PL3: ESSD performance level 3.
   * 
   * Based on the 10 GiB step size for data cloud disks, the minimum capacity is 10 GiB for PL0, 20 GiB for PL1, 470 GiB for PL2, and 1270 GiB for PL3.
   * 
   * @example
   * PL0
   */
  dataDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB. This parameter is required when you configure a data cloud disk. The value must be a positive integer and a multiple of 10, and cannot exceed 65536.
   * 
   * The value must also fall within the capacity range of the selected cloud disk type: up to 2000 GiB for a basic cloud disk, 20 to 32768 GiB for a standard SSD cloud disk or ultra cloud disk. An ESSD cloud disk must also meet the minimum capacity requirement of the performance level.
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
   * The number of workstations to create. Default value: 1. Valid values: 1 to 100.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Default value: false.
   * 
   * - true: attempts to automatically pay when the order is placed.
   * - false: manually pays after the order is created.
   * 
   * A returned workstation ID does not indicate that the resource has been created. You must still confirm that the order payment is completed and query the workstation status.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Default value: false.
   * 
   * - true: enables auto-renewal.
   * - false: disables auto-renewal.
   * 
   * Whether this parameter can be configured depends on the sales rules of the selected billing method.
   * 
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The bandwidth. Unit: Mbit/s. If this parameter is specified, the value must be greater than 0 and cannot exceed 1000.
   * 
   * This parameter is required when NetworkStrategyType is set to DirectIp. The value must also meet the actual available configurations of the target region and office network.
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
   * The billing method. **This parameter is required.** If this parameter is not specified or an unrecognized value is passed, InvalidParameter.chargeType is returned.
   * 
   * - PrePaid: subscription. You must specify both Period and PeriodUnit, and use the matching SubPayType=prePaid.
   * - PostPaid: pay-as-you-go. The sub-billing method and specification must support the corresponding sales method.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The list of data cloud disks. This parameter is optional. You can specify up to 16 data cloud disks, and the number cannot exceed the maximum number supported by the selected workstation specification. The data cloud disk types and performance levels in the same request must be the same. The capacity of each data cloud disk is verified separately.
   */
  dataDisk?: CreateWuyingServerRequestDataDisk[];
  /**
   * @remarks
   * Specifies whether to enable the dedicated eRDMA NIC.
   * 
   * - true: enables the dedicated eRDMA NIC.
   * - false: disables the dedicated eRDMA NIC.
   * 
   * @example
   * true
   */
  erdmaEnabled?: boolean;
  /**
   * @remarks
   * The configuration version of the GPU driver, such as grid19.
   * 
   * @example
   * grid19
   */
  gpuDriverVersion?: string;
  /**
   * @remarks
   * The hostname. The limits are as follows:
   * 
   * - The hostname cannot start or end with a period (.) or a hyphen (-). Consecutive periods or hyphens are not allowed.
   * 
   * - Windows workstation: The hostname must be 2 to 15 characters in length. Periods (.) are not supported. Consecutive hyphens are not allowed. The hostname cannot contain only digits. It can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   * - Linux workstation:
   * 
   *   - The hostname must be 2 to 64 characters in length. Multiple periods (.) are supported. The string between two periods is a segment. Each segment can contain uppercase and lowercase letters, digits, and hyphens (-).
   * 
   *   - You can use the ${instance_id} placeholder to write the instance ID into the HostName parameter. For example, if HostName=k8s-${instance_id} and the created ECS instance ID is i-123abc****, the hostname of the instance is k8s-i-123abc****.
   * 
   * - When you create multiple workstation instances at a time, you can use the name_prefix[begin_number,bits]name_suffix naming format to name the workstations uniformly. For example, if HostName is set to ecd-[1,4]-test, the hostname of the first workstation is ecd-0001-test, the hostname of the second workstation is ecd-0002-test, and so on.
   * 
   *   - name_prefix: the prefix of the hostname.
   * 
   *   - [begin_number,bits]: the sequential number in the hostname.
   * 
   *     - begin_number: the start number. Valid values: 0 to 999999. Default value: 0. If the specified value is invalid, 0 is used.
   * 
   *     - bits: the number of digits. Valid values: 1 to 6. Default value: 6. If the specified value is invalid, 6 is used.
   * 
   *   - name_suffix: the suffix of the hostname.
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
   * The ID of the workstation image. **This parameter is required when you create a workstation by calling this operation.** If this parameter is not specified, InvalidParameter.imageId is returned.
   * 
   * You can call ListImage to obtain the image ID applicable to the target workstation.
   * [ListImage](~~ListImage~~)
   * 
   * @example
   * img-bp13mu****
   */
  imageId?: string;
  /**
   * @remarks
   * The maximum bid for a preemptible workstation. This parameter is required when ChargeType is set to PostPaid and SubPayType is set to spot. If this parameter is not specified, InvalidParameter.maxPrice is returned. The final availability for purchase depends on the preemptible sales rules of the target specification.
   * 
   * @example
   * 0.05
   */
  maxPrice?: number;
  /**
   * @remarks
   * The type of the network policy (invitational preview).
   * 
   * @example
   * DirectIp
   */
  networkStrategyType?: string;
  /**
   * @remarks
   * The ID of the office network. To specify an office network, specify the ID of an office network available for the current account in the target region.
   * 
   * If this parameter is not specified, the service attempts to reuse a valid office network configured for the current account in the region. If no reusable network is available, a default office network is created. If this process fails, the workstation creation fails.
   * 
   * The office network ID is different from the region ID and zone ID. You cannot use the zone ID returned by ListZones as a substitute.
   * [ListZones](~~ListZones~~)
   * 
   * @example
   * cn-hangzhou+dir-643067****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The logon password of the workstation. **This parameter is required when you create a workstation by calling this operation.** If this parameter is not specified, InvalidParameter.password is returned.
   * 
   * The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. Spaces, Chinese characters, backslashes, and double quotation marks are not supported. The supported special characters are:
   * 
   * ~~~text
   * ()`~!@#$%^&*-_+=|{}[]:;\\"<>,.?/
   * ~~~
   * 
   * The password of a Windows workstation cannot start with a forward slash /.
   * 
   * @example
   * YourPassword123
   */
  password?: string;
  /**
   * @remarks
   * The numeric part of the subscription duration. This parameter is used together with PeriodUnit.
   * 
   * **This parameter is required when ChargeType is set to PrePaid, and you must also specify PeriodUnit. This parameter has no default value.** If this parameter is not specified, InvalidParameter.period is returned (HTTP status code: 400). For example, Period=1 and PeriodUnit=Month indicate a subscription duration of one month.
   * 
   * The numeric value and unit are verified based on the requested combination and are not automatically converted to other periods. The subscription duration must comply with the sales rules of the target workstation commodity. If the order verification determines that the combination exceeds the allowed range, OrderPeriod.Invalid is returned (HTTP status code: 400).
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration. This parameter is used together with Period.
   * 
   * **This parameter is required when ChargeType is set to PrePaid, and you must also specify Period.** If this parameter is not specified or an unrecognized unit is passed, InvalidParameter.periodUnit is returned (HTTP status code: 400). The value is case-sensitive.
   * 
   * The units recognized by this operation are as follows:
   * 
   * - Hour: hour.
   * - Day: day.
   * - Week: week.
   * - Month: month.
   * - Year: year.
   * 
   * The actual combinations of units and numeric values available for purchase must comply with the sales rules of the target workstation commodity. A recognizable unit does not mean that the combination is definitely available for purchase.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the discount.
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
   * The ID of the savings plan.
   * 
   * @example
   * spn-ce3f5b4fk**46CY
   */
  savingPlanId?: string;
  /**
   * @remarks
   * The workstation specification. **This parameter is required.** If this parameter is not specified, InvalidParameter.serverInstanceType is returned.
   * 
   * You can call ListNodeInstanceType to query the specifications available for purchase in the target region and confirm that they support the selected billing method.
   * [ListNodeInstanceType](~~ListNodeInstanceType~~)
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
   * The sub-billing method. This parameter must match ChargeType and the sales method of the target specification.
   * 
   * Billing combinations for Enterprise Edition workstations:
   * 
   * - ChargeType=PrePaid: use prePaid, which indicates subscription. It cannot be used with postPaid.
   * - ChargeType=PostPaid: usually use postPaid, which indicates pay-as-you-go. If you use spot for preemptible billing, you must also specify MaxPrice, and the target specification must support this method.
   * 
   * If this parameter is not specified, the default value for PrePaid is prePaid, and the default value for PostPaid is postPaid. Incompatible combinations may return InvalidOrder.CommodityCodeNotMatch.
   * 
   * The meanings of the enumerated values are as follows. The actual availability depends on the sales method of the target resource. You cannot arbitrarily combine different billing methods.
   * 
   * - prePaid: subscription.
   * - postPaid: pay-as-you-go.
   * - spot: preemptible billing.
   * - duration: duration package.
   * - mau: pay-as-you-go based on the number of monthly active users.
   * - monthPackage: monthly package.
   * 
   * @example
   * prePaid
   */
  subPayType?: string;
  /**
   * @remarks
   * The type of the system cloud disk. Default value: cloud_auto.
   * 
   * - cloud: basic cloud disk.
   * - cloud_efficiency: ultra cloud disk.
   * - cloud_ssd: standard SSD cloud disk.
   * - cloud_essd: ESSD cloud disk.
   * - cloud_auto: ESSD AutoPL cloud disk.
   * 
   * If you use cloud_essd, you must specify SystemDiskPerformanceLevel. The final availability is subject to the specification, region, and cloud disk capacity limits.
   * 
   * @example
   * cloud_auto
   */
  systemDiskCategory?: string;
  /**
   * @remarks
   * The performance level of the ESSD system cloud disk. This parameter is required when SystemDiskCategory is set to cloud_essd.
   * 
   * - PL0: ESSD performance level 0.
   * - PL1: ESSD performance level 1.
   * - PL2: ESSD performance level 2.
   * - PL3: ESSD performance level 3.
   * 
   * The capacity must also meet the 10 GiB step size for the system cloud disk: at least 20 GiB for PL0 and PL1, at least 470 GiB for PL2, and at least 1270 GiB for PL3.
   * 
   * @example
   * PL0
   */
  systemDiskPerformanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB. Default value: 200. The value must be a multiple of 10. The general valid range is 20 to 65536. The value must also meet the capacity limits of the selected cloud disk type and performance level.
   * 
   * The maximum size of a basic cloud disk is 2000 GiB. The maximum size of a standard SSD cloud disk or ultra cloud disk is 32768 GiB. If the system cloud disk capacity required by the selected image is greater than the requested value, the capacity required by the image is used during creation.
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
   * @remarks
   * The ID of the existing virtual node pool. This parameter is optional. If this parameter is specified, the node pool must exist and belong to the current account.
   * 
   * This operation associates the workstation with an existing node pool and does not create a node pool. If this parameter is not specified, this association is not established.
   * 
   * @example
   * vnp-0b************gyw
   */
  virtualNodePoolId?: string;
  /**
   * @remarks
   * The name of the workstation. When multiple workstations are created, a numeric suffix is automatically added.
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


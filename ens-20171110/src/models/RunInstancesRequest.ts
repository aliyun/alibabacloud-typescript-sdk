// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunInstancesRequestDataDisk } from "./RunInstancesRequestDataDisk";
import { RunInstancesRequestSystemDisk } from "./RunInstancesRequestSystemDisk";
import { RunInstancesRequestTag } from "./RunInstancesRequestTag";


export class RunInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of instances that you want to create. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  amount?: number;
  /**
   * @remarks
   * The time when to automatically release the pay-as-you-go instance. Specify the time in the [ISO 8601](https://help.aliyun.com/document_detail/25696.html) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in Coordinated Universal Time (UTC).
   * 
   * *   If the value of `ss` is not `00`, the start time is automatically rounded down to the nearest minute based on the value of `mm`.
   * *   The specified time must be at least one hour later than the current time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2023-06-28T14:38:52Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the premium bandwidth plan. Valid values:
   * 
   * *   **true**.
   * *   **false** (default).
   * 
   * >  This parameter is not available when InstanceChargeType is set to PostPaid.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * Specifies whether to use coupons. Default value: true.
   * 
   * @example
   * true
   */
  autoUseCoupon?: string;
  /**
   * @remarks
   * The billing cycle of computing resources of the instance. Only pay-as-you-go instances are supported. Valid values:
   * 
   * *   **Day**.
   * *   **Month**.
   * 
   * @example
   * Day
   */
  billingCycle?: string;
  /**
   * @remarks
   * The Internet service provider (ISP).
   * 
   * >  This parameter required if ScheduleAreaLevel is set to Region.\\
   * If you set ScheduleAreaLevel to Region, a node has multiple ISPs, and you do not specify an ISP, then the create instance uses the ISP of the node. If the node has two ISPs, such as China Mobile and China Unicom, the created instance has two ISPs.\\
   * You can call the DescribeRegionIsps operation to query ISPs of the edge node.[](~~2637461~~)
   * 
   * @example
   * telecom
   */
  carrier?: string;
  /**
   * @remarks
   * The specifications of data disks.
   */
  dataDisk?: RunInstancesRequestDataDisk[];
  /**
   * @remarks
   * The ID of the node.
   * 
   * >  This parameter is required if ScheduleAreaLevel is set to Region and is not available if ScheduleAreaLevel is set to other values.
   * 
   * @example
   * cn-foshan-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The name of the host.
   * 
   * @example
   * test-HostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image. For ARM PCB-based server instances, leave this parameter empty. For other instances, this parameter is required.
   * 
   * @example
   * m-5si16wo6simkt267p8b7hcmy3
   */
  imageId?: string;
  /**
   * @remarks
   * The billing policy of the instance. Valid values:
   * 
   * *   **instance**: Bills are generated based on instances.
   * *   If you do not specify this parameter, bills are generated based on users.
   * 
   * @example
   * instance
   */
  instanceChargeStrategy?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   **PrePaid**: subscription.
   * *   **PostPaid:** pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The name of the instance. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * The default value of this parameter is the value of the InstanceId parameter.
   * 
   * @example
   * TestName
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * This parameter is required.
   * 
   * @example
   * ens.sn1.small
   */
  instanceType?: string;
  /**
   * @remarks
   * The bandwidth billing method. Valid values:
   * 
   * *   **BandwidthByDay**: pay by daily peak bandwidth
   * *   **95BandwidthByMonth**: pay by monthly 95th percentile bandwidth
   * 
   * >  This parameter is required if you purchase an ENS instance for the first time. The value that you specified is used as the default value for subsequent purchases.
   * 
   * @example
   * BandwidthByDay
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum public bandwidth. If the value of this parameter is greater than 0, a public IP address is assigned to the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The type of the IP address. Valid values:
   * 
   * *   **ipv4** (default).
   * *   **ipv6**.
   * *   **ipv4Andipv6** (single stack).
   * *   **ipv4Withipv6** (dual stack).
   * 
   * @example
   * ipv4
   */
  ipType?: string;
  ipv6AddressCount?: number;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * >  You need to specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * wx2-jumpserver
   */
  keyPairName?: string;
  /**
   * @remarks
   * The code of the region.
   * 
   * >  This parameter is not available if ScheduleAreaLevel is set to Region and is required if ScheduleAreaLevel is set to other values.
   * 
   * @example
   * 350000
   */
  netDistrictCode?: string;
  /**
   * @remarks
   * The ID of the network.
   * 
   * >  This parameter is available only if ScheduleAreaLevel is set to Region and cannot be configured if ScheduleAreaLevel is set to other values. Otherwise, an error occurs.
   * 
   * @example
   * net-id
   */
  netWorkId?: string;
  /**
   * @remarks
   * The password that is used to connect to the instance.
   * 
   * >  You need to specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * Specifies whether to use the preset password of the image. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * >  You need to specify at least one of **Password**, **KeyPairName**, and **PasswordInherit**.
   * 
   * @example
   * false
   */
  passwordInherit?: boolean;
  /**
   * @remarks
   * The unit of the subscription period.
   * 
   * *   If **PeriodUnit** is set to **Day**, **Period** can only be set to **3**.
   * *   If **PeriodUnit** is **Month**, **Period** can be set to **1 to 9** or **12**.
   * 
   * @example
   * 1-9,12
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period. Valid values:
   * 
   * *   **Month** (default).
   * *   **Day**.
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * >  This parameter is available only if ScheduleAreaLevel is set to Region and cannot be configured if ScheduleAreaLevel is set to other values. Otherwise, an error occurs. If you specify a private IP address, the number of instances must be 1. The private IP address takes effect only when the private IP address and the vSwitch ID are not empty.
   * 
   * @example
   * 10.0.0.120
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Specifies whether to enable public IP address identification. Valid values: true and false. Default value: false.
   * 
   * @example
   * true
   */
  publicIpIdentification?: boolean;
  /**
   * @remarks
   * The scheduling level. This parameter specifies area-level scheduling or node-level scheduling. Valid values:
   * 
   * *   **Big**: greater area
   * *   **Middle**: province
   * *   **Small**: city
   * *   **Region**: node
   * 
   * This parameter is required.
   * 
   * @example
   * Region
   */
  scheduleAreaLevel?: string;
  /**
   * @remarks
   * The scheduling price policy. Valid values:
   * 
   * *   **PriceHighPriority**: The high price prevails.
   * *   **PriceLowPriority**: The low price prevails.
   * 
   * @example
   * PriceHighPriority
   */
  schedulingPriceStrategy?: string;
  /**
   * @remarks
   * The scheduling policy of the taint. Valid values:
   * 
   * *   **Concentrate**
   * *   **Disperse**
   * 
   * >  If ScheduleAreaLevel is set to Region, set this parameter to **Concentrate**. If ScheduleAreaLevel is set to other values, set this parameter to Concentrate or Disperse based on your business requirements.
   * 
   * @example
   * concentrate
   */
  schedulingStrategy?: string;
  /**
   * @remarks
   * The ID of security group.
   * 
   * @example
   * sg-test
   */
  securityId?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Default value: 1. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Preemptible instances are billed by second. We recommend that you specify an appropriate protection period based on your business requirements.
   * 
   * @example
   * 2
   */
  spotDuration?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. This parameter is valid only when the `InstanceChargeType` parameter is set to `PostPaid`. Valid values:
   * 
   * *   NoSpot: The elastic container instances are pay-as-you-go instances.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price at the time of purchase is automatically used as the bidding price.
   * 
   * Default value: NoSpot.
   * 
   * @example
   * SpotAsPriceGo
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The specification of the system disk.
   */
  systemDisk?: RunInstancesRequestSystemDisk;
  /**
   * @remarks
   * The tags.
   */
  tag?: RunInstancesRequestTag[];
  /**
   * @remarks
   * Specifies whether to append sequential suffixes to the hostname specified by the **HostName** parameter and to the instance name specified by the **InstanceName** parameter. The sequential suffixes range from 001 to 999.
   * 
   * @example
   * True
   */
  uniqueSuffix?: boolean;
  /**
   * @remarks
   * The custom data. The maximum data size is 16 KB. You can specify **UserData**. **UserData** must be Base64-encoded.
   * 
   * @example
   * ZWtest
   */
  userData?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * >  This parameter is available only if ScheduleAreaLevel is set to Region and cannot be configured if ScheduleAreaLevel is set to other values. Otherwise, an error occurs.
   * 
   * @example
   * vsw-5sagnw7m613oulalkd10nv0ob
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoReleaseTime: 'AutoReleaseTime',
      autoRenew: 'AutoRenew',
      autoUseCoupon: 'AutoUseCoupon',
      billingCycle: 'BillingCycle',
      carrier: 'Carrier',
      dataDisk: 'DataDisk',
      ensRegionId: 'EnsRegionId',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeStrategy: 'InstanceChargeStrategy',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ipType: 'IpType',
      ipv6AddressCount: 'Ipv6AddressCount',
      keyPairName: 'KeyPairName',
      netDistrictCode: 'NetDistrictCode',
      netWorkId: 'NetWorkId',
      password: 'Password',
      passwordInherit: 'PasswordInherit',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      publicIpIdentification: 'PublicIpIdentification',
      scheduleAreaLevel: 'ScheduleAreaLevel',
      schedulingPriceStrategy: 'SchedulingPriceStrategy',
      schedulingStrategy: 'SchedulingStrategy',
      securityId: 'SecurityId',
      spotDuration: 'SpotDuration',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      uniqueSuffix: 'UniqueSuffix',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoReleaseTime: 'string',
      autoRenew: 'boolean',
      autoUseCoupon: 'string',
      billingCycle: 'string',
      carrier: 'string',
      dataDisk: { 'type': 'array', 'itemType': RunInstancesRequestDataDisk },
      ensRegionId: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeStrategy: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ipType: 'string',
      ipv6AddressCount: 'number',
      keyPairName: 'string',
      netDistrictCode: 'string',
      netWorkId: 'string',
      password: 'string',
      passwordInherit: 'boolean',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      publicIpIdentification: 'boolean',
      scheduleAreaLevel: 'string',
      schedulingPriceStrategy: 'string',
      schedulingStrategy: 'string',
      securityId: 'string',
      spotDuration: 'number',
      spotStrategy: 'string',
      systemDisk: RunInstancesRequestSystemDisk,
      tag: { 'type': 'array', 'itemType': RunInstancesRequestTag },
      uniqueSuffix: 'boolean',
      userData: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisk)) {
      $dara.Model.validateArray(this.dataDisk);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


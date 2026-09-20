// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMultiZoneClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID of the arbiter zone. The vSwitch must be in the zone specified by ArbiterZoneId.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxb*****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the arbiter zone.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-b
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The version of the deployment architecture. Currently, only the hbaseue engine type is supported. Set the value to **2.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The Unified Auto Renewal Cycle. Unit: months.
   * 
   * ><ul><li>Default value: 0, which indicates that auto-renewal is disabled.</li>
   * <li>If AutoRenewPeriod is set to 2, the instance is automatically renewed for two epochs upon expiration.</li></ul>
   * 
   * @example
   * 0
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The token that is used to ensure the idempotence of the request.
   * 
   * @example
   * dfh3sf5gslfksfk****
   */
  clientToken?: string;
  /**
   * @remarks
   * The name of the instance. The following rules apply:
   * 
   * - The name must be 2 to 128 characters in length.
   * - The name must start with an uppercase letter, a lowercase letter, or a Chinese character.
   * - The name can contain digits or special characters, including periods (.), hyphens (-), and underscores (_).
   * 
   * @example
   * hbaseue_test
   */
  clusterName?: string;
  /**
   * @remarks
   * The disk size of the node. Valid values: 400 to 64000. Unit: GB. The value must be a multiple of 40.
   * 
   * This parameter is required.
   * 
   * @example
   * 400
   */
  coreDiskSize?: number;
  /**
   * @remarks
   * The disk type of the core node. Valid values:
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * - **local_hdd_pro**: throughput-intensive local disk.
   * - **local_ssd_pro**: I/O-intensive local disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  coreDiskType?: string;
  /**
   * @remarks
   * The node specifications of the core node. You can invoke the [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) operation to query the node specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  coreInstanceType?: string;
  /**
   * @remarks
   * The number of core nodes. Valid values: 2 to 20. The value must be an even number.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  coreNodeCount?: number;
  /**
   * @remarks
   * The service type. Currently, only ApsaraDB for HBase Performance-enhanced Edition is supported. Set the value to **hbaseue**.
   * 
   * This parameter is required.
   * 
   * @example
   * hbaseue
   */
  engine?: string;
  /**
   * @remarks
   * The version number of the engine type. Set the value to **2.0**.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The disk size of the log node. Valid values: 400 to 64000. Unit: GB. The value must be a multiple of 40.
   * 
   * This parameter is required.
   * 
   * @example
   * 400
   */
  logDiskSize?: number;
  /**
   * @remarks
   * The disk type of the log node. Valid values:
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * - **local_hdd_pro**: throughput-intensive local disk.
   * - **local_ssd_pro**: I/O-intensive local disk.
   * 
   * This parameter is required.
   * 
   * @example
   * cloud_ssd
   */
  logDiskType?: string;
  /**
   * @remarks
   * The node specifications of the log node. You can invoke the [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) operation to query the node specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  logInstanceType?: string;
  /**
   * @remarks
   * The number of log nodes. Valid values: 4 to 400. The value must be a multiple of 4.
   * 
   * This parameter is required.
   * 
   * @example
   * 4
   */
  logNodeCount?: number;
  /**
   * @remarks
   * The node specifications of the master node. You can invoke the [DescribeInstanceType](https://help.aliyun.com/document_detail/145796.html) operation to query the node specifications.
   * 
   * This parameter is required.
   * 
   * @example
   * hbase.sn1.medium
   */
  masterInstanceType?: string;
  /**
   * @remarks
   * <props="china">The zone combination. You can go to the buy page or call the [DescribeMultiZoneAvailableRegions](https://help.aliyun.com/document_detail/203039.html) operation to view the supported zone combinations.
   * <props="intl">The zone combination. You can go to the buy page to view the supported zone combinations..
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-bef-aliyun-com
   */
  multiZoneCombination?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * - **Prepaid**: subscription.
   * - **Postpaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the subscription instance. Valid values:
   * 
   * - If PeriodUnit is set to year, valid values are 1 to 3.
   * - If PeriodUnit is set to month, valid values are 1 to 9.
   * 
   * > This parameter is required only when PayType is set to Prepaid.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription period for the subscription instance. Valid values:
   * - **year**: year.
   * - **month**: month.
   * 
   * > This parameter is required only when PayType is set to Prepaid.
   * 
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The vSwitch ID of the primary zone instance. The vSwitch must be in the zone specified by PrimaryZoneId.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxe****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary zone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The ID of the region in which the instance resides. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can query the resource group ID in the resource group console. If you do not specify this parameter, the instance is added to the default resource group.
   * 
   * @example
   * rg-gg3f4f5d5g5w****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IP addresses in the whitelist of the instance. Separate multiple IP addresses with commas (,).
   * 
   * > If the IP address is set to 127.0.0.1, no IP addresses are allowed to access the instance. For example, 192.168.0.0/24 indicates that all IP addresses in the 192.168.0.XX range are allowed to access the instance.
   * 
   * @example
   * 127.0.0.1
   */
  securityIPList?: string;
  /**
   * @remarks
   * The vSwitch ID of the secondary zone instance. The vSwitch must be in the zone specified by StandbyZoneId.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-hangxzhouxf****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the secondary zone instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). The VPC must be in the region specified by RegionId.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterName: 'ClusterName',
      coreDiskSize: 'CoreDiskSize',
      coreDiskType: 'CoreDiskType',
      coreInstanceType: 'CoreInstanceType',
      coreNodeCount: 'CoreNodeCount',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      logDiskSize: 'LogDiskSize',
      logDiskType: 'LogDiskType',
      logInstanceType: 'LogInstanceType',
      logNodeCount: 'LogNodeCount',
      masterInstanceType: 'MasterInstanceType',
      multiZoneCombination: 'MultiZoneCombination',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityIPList: 'SecurityIPList',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterName: 'string',
      coreDiskSize: 'number',
      coreDiskType: 'string',
      coreInstanceType: 'string',
      coreNodeCount: 'number',
      engine: 'string',
      engineVersion: 'string',
      logDiskSize: 'number',
      logDiskType: 'string',
      logInstanceType: 'string',
      logNodeCount: 'number',
      masterInstanceType: 'string',
      multiZoneCombination: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityIPList: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


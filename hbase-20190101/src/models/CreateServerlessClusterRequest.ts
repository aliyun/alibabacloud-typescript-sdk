// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateServerlessClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal period of the instance. Unit: months.
   * 
   * > <ul><li>The default value of the auto-renewal period is 0, which indicates that the instance is not automatically renewed after the instance expires.</li>
   * <li>For example, if the auto-renewal period is set to 2, the instance is automatically renewed for two months after the instance expires.</li></ul>
   * 
   * @example
   * 2
   */
  autoRenewPeriod?: number;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can be up to 64 ASCII characters in length and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The parameter that identifies the source of the creation request. For public cloud, leave this parameter empty.
   * 
   * @example
   * xx
   */
  clientType?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * serverless-name
   */
  clusterName?: string;
  /**
   * @remarks
   * The disk type of the instance. Valid values:
   * 
   * - **cloud_efficiency**: ultra cloud disk.
   * - **cloud_ssd**: standard SSD.
   * - **local_hdd_pro**: local HDD.
   * - **local_ssd_pro**: local SSD.
   * - **cloud_essd_pl1**: ESSD.
   * 
   * @example
   * cloud_ssd
   */
  diskType?: string;
  /**
   * @remarks
   * The engine type of the HBase Serverless instance. Set the value to **serverlesshbase**.
   * 
   * @example
   * serverlesshbase
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **Prepaid**: subscription.
   * - **Postpaid**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * Prepaid
   */
  payType?: string;
  /**
   * @remarks
   * The subscription duration of the subscription instance. Valid values:
   * 
   * - If PeriodUnit is set to year, valid values are **1** to **3**.
   * - If PeriodUnit is set to month, valid values are **1** to **9**.
   * 
   * > This parameter is required only when the billing method of the instance is **Prepaid**.
   * 
   * @example
   * 6
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription duration for the subscription instance. Valid values:
   * 
   * - **year**: year.
   * - **month**: month.
   * 
   * > This parameter is required only when the billing method of the instance is **Prepaid**.
   * 
   * @example
   * month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. For more information about resource groups, see [View basic information of a resource group](https://help.aliyun.com/document_detail/151181.html).
   * 
   * @example
   * rg-j4d53glb3****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The processing capability per unit. Unit: CU.
   * 
   * @example
   * 1000
   */
  serverlessCapability?: number;
  /**
   * @remarks
   * The specification type. Valid values: leave empty or **serverless.small**.
   * 
   * @example
   * serverless.small
   */
  serverlessSpec?: string;
  /**
   * @remarks
   * The storage size. Unit: GB.
   * 
   * @example
   * 100
   */
  serverlessStorage?: number;
  /**
   * @remarks
   * The vSwitch ID within the VPC.
   * 
   * @example
   * vsw-bp191ipotqj1ssyl*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * > If both this parameter and the VswitchId parameter are left empty, the network type of the instance is classic network.
   * 
   * @example
   * vpc-bp120k6ixs4eog****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/144489.html) operation to query the zone ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clientType: 'ClientType',
      clusterName: 'ClusterName',
      diskType: 'DiskType',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      payType: 'PayType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverlessCapability: 'ServerlessCapability',
      serverlessSpec: 'ServerlessSpec',
      serverlessStorage: 'ServerlessStorage',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clientType: 'string',
      clusterName: 'string',
      diskType: 'string',
      engine: 'string',
      engineVersion: 'string',
      payType: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serverlessCapability: 'number',
      serverlessSpec: 'string',
      serverlessStorage: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
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


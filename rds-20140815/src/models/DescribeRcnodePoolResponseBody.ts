// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data cloud disk. Only **cloud_essd** (ESSD cloud disk) is supported.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether the cloud disk is encrypted. Valid values:
   * 
   * - **true**: Encrypted.
   * - **false** (default): Not encrypted.
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level (PL) of the standard SSD. Valid values:
   * 
   * - **PL0**: A maximum of 10,000 random read/write IOPS per cloud disk.
   * - **PL1**: A maximum of 50,000 random read/write IOPS per cloud disk.
   * - **PL2**: A maximum of 100,000 random read/write IOPS per cloud disk.
   * - **PL3**: A maximum of 1,000,000 random read/write IOPS per cloud disk.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the data cloud disk. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      encrypted: 'Encrypted',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'string',
      performanceLevel: 'string',
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

export class DescribeRCNodePoolResponseBodyNodePoolListSystemDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the system cloud disk. Only **cloud_essd** (Enterprise SSD (ESSD)) is supported.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level (PL) of the standard SSD. Valid values:
   * 
   * - **PL0**: A maximum of 10,000 random read/write IOPS per cloud disk.
   * - **PL1**: A maximum of 50,000 random read/write IOPS per cloud disk.
   * - **PL2**: A maximum of 100,000 random read/write IOPS per cloud disk.
   * - **PL3**: A maximum of 1,000,000 random read/write IOPS per cloud disk.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system cloud disk. Unit: GiB.
   * 
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      performanceLevel: 'PerformanceLevel',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      performanceLevel: 'string',
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

export class DescribeRCNodePoolResponseBodyNodePoolListTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value that corresponds to the tag key.
   * 
   * @example
   * Testvalue1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
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

export class DescribeRCNodePoolResponseBodyNodePoolList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether automatic payment is enabled. Valid values:
   * - **true** (default): Automatic payment is enabled. Make sure that your account balance is sufficient.
   * - **false**: Only an order is generated. No payment is made.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance. Valid values:
   * 
   * * **true** (default): Enabled.
   * * **false**: Disabled.
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the RDS Custom container cluster.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether the node is allowed to join an ACK cluster.
   * 
   * @example
   * 1
   */
  createMode?: string;
  /**
   * @remarks
   * The list of data cloud disks.
   */
  dataDisk?: DescribeRCNodePoolResponseBodyNodePoolListDataDisk[];
  /**
   * @remarks
   * The deployment set ID.
   * 
   * @example
   * ds-bp18ukv66rlyuffv****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The instance description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHost1
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image used by the instance.
   * 
   * @example
   * image-dsvjzw2ii8n4fvr****
   */
  imageId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * * **Prepaid**: subscription.
   * * **Postpaid**: pay-as-you-go.
   * 
   * @example
   * Prepaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * test
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * mysql.i8.large.2cm
   */
  instanceType?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetChargeType?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * dell5502
   */
  keyPairName?: string;
  /**
   * @remarks
   * The node pool ID.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodePoolId?: string;
  /**
   * @remarks
   * The name of the node pool.
   * 
   * @example
   * np31da1b38983f4511b490fc62108a****
   */
  nodePoolName?: string;
  /**
   * @remarks
   * The password of the root account of the instance.
   * 
   * @example
   * testPassword
   */
  password?: string;
  /**
   * @remarks
   * The subscription duration of the resource.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the subscription billable methods duration. Valid values:
   * - **Year**: year.
   * - **Month** (default): month.
   * 
   * @example
   * Year
   */
  periodUnit?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  securityEnhancementStrategy?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-uf6av412xaxixuez****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * A reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The system cloud disk specifications.
   */
  systemDisk?: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeRCNodePoolResponseBodyNodePoolListTag[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-zm0qvgv3sm3sjzbkr****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      createMode: 'CreateMode',
      dataDisk: 'DataDisk',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      nodePoolId: 'NodePoolId',
      nodePoolName: 'NodePoolName',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      autoRenew: 'boolean',
      clusterId: 'string',
      createMode: 'string',
      dataDisk: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolListDataDisk },
      deploymentSetId: 'string',
      description: 'string',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      nodePoolId: 'string',
      nodePoolName: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      systemDisk: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk,
      tag: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolListTag },
      vSwitchId: 'string',
      zoneId: 'string',
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

export class DescribeRCNodePoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of node pool information.
   */
  nodePoolList?: DescribeRCNodePoolResponseBodyNodePoolList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C816A4BF-A6EC-4722-95F9-2055859CCFD2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodePoolList: 'NodePoolList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodePoolList: { 'type': 'array', 'itemType': DescribeRCNodePoolResponseBodyNodePoolList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodePoolList)) {
      $dara.Model.validateArray(this.nodePoolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


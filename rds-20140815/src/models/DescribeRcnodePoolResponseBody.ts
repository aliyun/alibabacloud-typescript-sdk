// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
  /**
   * @remarks
   * The type of the data disk. Set the value to **cloud_essd**, which indicates Enterprise SSDs (ESSDs).
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  deleteWithInstance?: boolean;
  /**
   * @remarks
   * Indicates whether to encrypt the cloud disk. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  encrypted?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   **PL0**: A single ESSD delivers up to 10,000 random read/write IOPS.
   * *   **PL1**: A single ESSD delivers up to 50,000 random read/write IOPS.
   * *   **PL2**: A single ESSD delivers up to 100,000 random read/write IOPS.
   * *   **PL3**: A single ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL0
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The data disk size. Unit: GiB.
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
   * The type of the system disk. Set the value to **cloud_essd**, which indicates ESSDs.
   * 
   * @example
   * cloud_essd
   */
  category?: string;
  /**
   * @remarks
   * The performance level of the ESSD. Valid values:
   * 
   * *   **PL0**: A single ESSD delivers up to 10,000 random read/write IOPS.
   * *   **PL1**: A single ESSD delivers up to 50,000 random read/write IOPS.
   * *   **PL2**: A single ESSD delivers up to 100,000 random read/write IOPS.
   * *   **PL3**: A single ESSD delivers up to 1,000,000 random read/write IOPS.
   * 
   * @example
   * PL1
   */
  performanceLevel?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB.
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
   * The tag keys.
   * 
   * @example
   * Testkey1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * Indicates whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables the feature. You must make sure that your account balance is sufficient.
   * *   **false**: disables the feature. An unpaid order is generated.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * Indicates whether to enable auto-renewal for the instance. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the container cluster in which the RDS Custom instance resides.
   * 
   * @example
   * c463aaa89e2b84cacacfbf23c4867****
   */
  clusterId?: string;
  /**
   * @remarks
   * Indicates whether to add the instance to the ACK cluster.
   * 
   * @example
   * 1
   */
  createMode?: string;
  /**
   * @remarks
   * The data disks.
   */
  dataDisk?: DescribeRCNodePoolResponseBodyNodePoolListDataDisk[];
  /**
   * @remarks
   * The ID of the deployment set.
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
   * The instance hostname.
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
   * The billing method. Valid value:
   * 
   * *   **Prepaid**: subscription
   * *   **Postpaid**: pay-as-you-go
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
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The key pair name.
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
   * The password of the root user of the instance.
   * 
   * @example
   * testPassword
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
   * The unit of the subscription period. Valid values:
   * 
   * *   **Year**
   * *   **Month** (default)
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The reserved parameter. This parameter is not supported.
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
   * The reserved parameter. This parameter is not supported.
   * 
   * @example
   * None
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The specification of the system disk.
   */
  systemDisk?: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk;
  /**
   * @remarks
   * The tags.
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
   * The node pool information.
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


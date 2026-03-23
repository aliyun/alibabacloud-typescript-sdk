// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCNodePoolResponseBodyNodePoolListDataDisk extends $dara.Model {
  category?: string;
  deleteWithInstance?: boolean;
  encrypted?: string;
  performanceLevel?: string;
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
  category?: string;
  performanceLevel?: string;
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
  key?: string;
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
  autoPay?: boolean;
  autoRenew?: boolean;
  clusterId?: string;
  createMode?: string;
  dataDisk?: DescribeRCNodePoolResponseBodyNodePoolListDataDisk[];
  deploymentSetId?: string;
  description?: string;
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceName?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  keyPairName?: string;
  nodePoolId?: string;
  nodePoolName?: string;
  password?: string;
  period?: number;
  periodUnit?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  spotStrategy?: string;
  systemDisk?: DescribeRCNodePoolResponseBodyNodePoolListSystemDisk;
  tag?: DescribeRCNodePoolResponseBodyNodePoolListTag[];
  vSwitchId?: string;
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
  nodePoolList?: DescribeRCNodePoolResponseBodyNodePoolList[];
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


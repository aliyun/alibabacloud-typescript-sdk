// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRCNodePoolRequestDataDisk extends $dara.Model {
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

export class CreateRCNodePoolRequestSystemDisk extends $dara.Model {
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

export class CreateRCNodePoolRequestTag extends $dara.Model {
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

export class CreateRCNodePoolRequest extends $dara.Model {
  amount?: number;
  autoPay?: boolean;
  autoRenew?: boolean;
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  clusterId?: string;
  createMode?: string;
  dataDisk?: CreateRCNodePoolRequestDataDisk[];
  deploymentSetId?: string;
  description?: string;
  dryRun?: boolean;
  hostName?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  ioOptimized?: string;
  keyPairName?: string;
  nodePoolName?: string;
  password?: string;
  period?: number;
  periodUnit?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceGroupId?: string;
  securityEnhancementStrategy?: string;
  securityGroupId?: string;
  spotStrategy?: string;
  supportCase?: string;
  systemDisk?: CreateRCNodePoolRequestSystemDisk;
  tag?: CreateRCNodePoolRequestTag[];
  userData?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      autoPay: 'AutoPay',
      autoRenew: 'AutoRenew',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      createMode: 'CreateMode',
      dataDisk: 'DataDisk',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      dryRun: 'DryRun',
      hostName: 'HostName',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceName: 'InstanceName',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      nodePoolName: 'NodePoolName',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityEnhancementStrategy: 'SecurityEnhancementStrategy',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      supportCase: 'SupportCase',
      systemDisk: 'SystemDisk',
      tag: 'Tag',
      userData: 'UserData',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      autoPay: 'boolean',
      autoRenew: 'boolean',
      clientToken: 'string',
      clusterId: 'string',
      createMode: 'string',
      dataDisk: { 'type': 'array', 'itemType': CreateRCNodePoolRequestDataDisk },
      deploymentSetId: 'string',
      description: 'string',
      dryRun: 'boolean',
      hostName: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceName: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      nodePoolName: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityEnhancementStrategy: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      supportCase: 'string',
      systemDisk: CreateRCNodePoolRequestSystemDisk,
      tag: { 'type': 'array', 'itemType': CreateRCNodePoolRequestTag },
      userData: 'string',
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


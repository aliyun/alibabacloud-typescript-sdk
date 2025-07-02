// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DiskInfo } from "./DiskInfo";
import { SystemDiskParam } from "./SystemDiskParam";


export class CreateNodeGroupParam extends $dara.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewDuration?: number;
  /**
   * @example
   * Monthly
   */
  autoRenewDurationUnit?: string;
  dataDisks?: DiskInfo[];
  instanceTypes?: string[];
  /**
   * @example
   * 2
   */
  nodeCount?: number;
  /**
   * @example
   * core-1
   */
  nodeGroupName?: string;
  /**
   * @example
   * CORE
   */
  nodeGroupType?: string;
  /**
   * @example
   * sshkey
   */
  nodeKeyPairName?: string;
  /**
   * @example
   * AliyunEmrEcsDefaultRole
   */
  nodeRamRole?: string;
  /**
   * @example
   * *******
   */
  nodeRootPassword?: string;
  /**
   * @example
   * 1
   */
  paymentDuration?: number;
  /**
   * @example
   * Monthly
   */
  paymentDurationUnit?: string;
  /**
   * @example
   * Subscription
   */
  paymentType?: string;
  /**
   * @example
   * sg-hp3abbae8lb6lmb1****
   */
  securityGroupId?: string;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: SystemDiskParam;
  vSwitchIds?: string[];
  /**
   * @example
   * true
   */
  withPublicIp?: boolean;
  /**
   * @example
   * cn-hangzhou-e
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewDurationUnit: 'AutoRenewDurationUnit',
      dataDisks: 'DataDisks',
      instanceTypes: 'InstanceTypes',
      nodeCount: 'NodeCount',
      nodeGroupName: 'NodeGroupName',
      nodeGroupType: 'NodeGroupType',
      nodeKeyPairName: 'NodeKeyPairName',
      nodeRamRole: 'NodeRamRole',
      nodeRootPassword: 'NodeRootPassword',
      paymentDuration: 'PaymentDuration',
      paymentDurationUnit: 'PaymentDurationUnit',
      paymentType: 'PaymentType',
      securityGroupId: 'SecurityGroupId',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
      vSwitchIds: 'VSwitchIds',
      withPublicIp: 'WithPublicIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewDuration: 'number',
      autoRenewDurationUnit: 'string',
      dataDisks: { 'type': 'array', 'itemType': DiskInfo },
      instanceTypes: { 'type': 'array', 'itemType': 'string' },
      nodeCount: 'number',
      nodeGroupName: 'string',
      nodeGroupType: 'string',
      nodeKeyPairName: 'string',
      nodeRamRole: 'string',
      nodeRootPassword: 'string',
      paymentDuration: 'number',
      paymentDurationUnit: 'string',
      paymentType: 'string',
      securityGroupId: 'string',
      spotStrategy: 'string',
      systemDisk: SystemDiskParam,
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      withPublicIp: 'boolean',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataDisks)) {
      $dara.Model.validateArray(this.dataDisks);
    }
    if(Array.isArray(this.instanceTypes)) {
      $dara.Model.validateArray(this.instanceTypes);
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
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


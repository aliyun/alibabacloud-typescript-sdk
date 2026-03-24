// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ResourceInstanceLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * key
   */
  labelKey?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * value
   */
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstance extends $dara.Model {
  /**
   * @remarks
   * The system architecture of the instance.
   * 
   * @example
   * arm64
   */
  arch?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the instance.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method of the instance.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-07-05T22:51:32Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the instance expires.
   * 
   * @example
   * 2020-08-05T22:51:32Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The number of CPU cores for the instance.
   * 
   * @example
   * 4
   */
  instanceCpuCount?: number;
  /**
   * @remarks
   * The number of GPUs for the instance.
   * 
   * @example
   * 0
   */
  instanceGpuCount?: number;
  /**
   * @remarks
   * The GPU memory size of the instance.
   * 
   * @example
   * 0G
   */
  instanceGpuMemory?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eas-i-1800z74n30kao****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 11.227.XX.XX
   */
  instanceIp?: string;
  /**
   * @remarks
   * The memory size of the instance.
   * 
   * @example
   * 8192M
   */
  instanceMemory?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * eas01122713204*****
   */
  instanceName?: string;
  instancePhase?: string;
  /**
   * @remarks
   * The instance status.
   * 
   * Valid values:
   * 
   * *   Ready-SchedulingDisabled
   * *   Ready
   * *   NotReady
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The system disk size of the instance.
   * 
   * @example
   * 200
   */
  instanceSystemDiskSize?: number;
  /**
   * @remarks
   * The IP address of the instance in the VPC.
   * 
   * @example
   * 192.168.xx.xx
   */
  instanceTenantIp?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The number of CPU cores used by the instance.
   * 
   * @example
   * 2.4
   */
  instanceUsedCpu?: number;
  /**
   * @remarks
   * The number of GPUs used by the instance.
   * 
   * @example
   * 0
   */
  instanceUsedGpu?: number;
  /**
   * @remarks
   * The size of the GPU memory used by the instance.
   * 
   * @example
   * 470M
   */
  instanceUsedGpuMemory?: string;
  /**
   * @remarks
   * The size of the memory used by the instance.
   * 
   * @example
   * 1000M
   */
  instanceUsedMemory?: string;
  /**
   * @remarks
   * The instance tags.
   */
  labels?: ResourceInstanceLabels[];
  lastCordonOperator?: string;
  lastCordonReason?: string;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * eas-r-xxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the zone to which the instance belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      arch: 'Arch',
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      instanceCpuCount: 'InstanceCpuCount',
      instanceGpuCount: 'InstanceGpuCount',
      instanceGpuMemory: 'InstanceGpuMemory',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceMemory: 'InstanceMemory',
      instanceName: 'InstanceName',
      instancePhase: 'InstancePhase',
      instanceStatus: 'InstanceStatus',
      instanceSystemDiskSize: 'InstanceSystemDiskSize',
      instanceTenantIp: 'InstanceTenantIp',
      instanceType: 'InstanceType',
      instanceUsedCpu: 'InstanceUsedCpu',
      instanceUsedGpu: 'InstanceUsedGpu',
      instanceUsedGpuMemory: 'InstanceUsedGpuMemory',
      instanceUsedMemory: 'InstanceUsedMemory',
      labels: 'Labels',
      lastCordonOperator: 'LastCordonOperator',
      lastCordonReason: 'LastCordonReason',
      region: 'Region',
      resourceId: 'ResourceId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      createTime: 'string',
      expiredTime: 'string',
      instanceCpuCount: 'number',
      instanceGpuCount: 'number',
      instanceGpuMemory: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceMemory: 'string',
      instanceName: 'string',
      instancePhase: 'string',
      instanceStatus: 'string',
      instanceSystemDiskSize: 'number',
      instanceTenantIp: 'string',
      instanceType: 'string',
      instanceUsedCpu: 'number',
      instanceUsedGpu: 'number',
      instanceUsedGpuMemory: 'string',
      instanceUsedMemory: 'string',
      labels: { 'type': 'array', 'itemType': ResourceInstanceLabels },
      lastCordonOperator: 'string',
      lastCordonReason: 'string',
      region: 'string',
      resourceId: 'string',
      zone: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


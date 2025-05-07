// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRCInstanceAttributeResponseBodyDataDisks } from "./DescribeRcinstanceAttributeResponseBodyDataDisks";
import { DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute } from "./DescribeRcinstanceAttributeResponseBodyDedicatedHostAttribute";
import { DescribeRCInstanceAttributeResponseBodyEipAddress } from "./DescribeRcinstanceAttributeResponseBodyEipAddress";
import { DescribeRCInstanceAttributeResponseBodyInnerIpAddress } from "./DescribeRcinstanceAttributeResponseBodyInnerIpAddress";
import { DescribeRCInstanceAttributeResponseBodyOperationLocks } from "./DescribeRcinstanceAttributeResponseBodyOperationLocks";
import { DescribeRCInstanceAttributeResponseBodyPublicIpAddress } from "./DescribeRcinstanceAttributeResponseBodyPublicIpAddress";
import { DescribeRCInstanceAttributeResponseBodySecurityGroupIds } from "./DescribeRcinstanceAttributeResponseBodySecurityGroupIds";
import { DescribeRCInstanceAttributeResponseBodySystemDisk } from "./DescribeRcinstanceAttributeResponseBodySystemDisk";
import { DescribeRCInstanceAttributeResponseBodyTags } from "./DescribeRcinstanceAttributeResponseBodyTags";
import { DescribeRCInstanceAttributeResponseBodyVpcAttributes } from "./DescribeRcinstanceAttributeResponseBodyVpcAttributes";


export class DescribeRCInstanceAttributeResponseBody extends $dara.Model {
  autoRenew?: boolean;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * >  This parameter will be deprecated. We recommend that you use other parameters to ensure compatibility.
   * 
   * @example
   * None
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: number;
  createMode?: number;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-04-22T06:52:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance.
   * 
   * @example
   * None
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The details of the data disk.
   */
  dataDisks?: DescribeRCInstanceAttributeResponseBodyDataDisks;
  dbType?: string;
  /**
   * @remarks
   * The attributes of the dedicated hosts.
   * 
   * **if can be null:**
   * true
   */
  dedicatedHostAttribute?: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute;
  /**
   * @remarks
   * The ID of the deployment set.
   * 
   * @example
   * ds-uf6c8qerk019bj1l****
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
   * The reserved parameter.
   * 
   * @example
   * None
   */
  diskType?: string;
  /**
   * @remarks
   * The Elastic Compute Service (ECS) instance family.
   * 
   * @example
   * ecs.g6.2xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The elastic IP address (EIP) associated with the instance.
   */
  eipAddress?: DescribeRCInstanceAttributeResponseBodyEipAddress;
  /**
   * @remarks
   * Indicates whether the Jumbo Frame feature is enabled for the instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  /**
   * @remarks
   * The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
   * 
   * @example
   * 2024-08-10T00:00:00Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The instance hostname.
   * 
   * @example
   * iZ2zej1n3cin51rlmby****
   */
  hostName?: string;
  /**
   * @remarks
   * The storage type of the host. Valid values:
   * 
   * *   **dhg_cloud_ssd**: ESSD
   * *   **dhg_local_ssd**: local SSD
   * 
   * @example
   * dhg_cloud_ssd
   */
  hostType?: string;
  /**
   * @remarks
   * The image ID of the instance.
   * 
   * @example
   * m-2oqiu973jwcxe****
   */
  imageId?: string;
  /**
   * @remarks
   * The private IP addresses of the instance in the classic network.
   */
  innerIpAddress?: DescribeRCInstanceAttributeResponseBodyInnerIpAddress;
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rc-dh2jf9n6j4s14926****
   */
  instanceId?: string;
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
   * The network type. Valid values:
   * 
   * *   **classic**
   * *   **vpc**
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * mysql.x4.xlarge.6cm
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   **PayByBandwidth**: pay-by-bandwidth
   * *   **PayByTraffic**: pay-by-data-transfer
   * 
   * >  If the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound bandwidth from the Internet. Unit: Mbit/s.
   * 
   * @example
   * 1
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound bandwidth to the Internet. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the instance is I/O optimized.
   * 
   * *   **optimized**: The instance is I/O optimized.
   * *   **none**: The instance is not I/O optimized.
   * 
   * @example
   * optimized
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * test_01
   */
  keyPairName?: string;
  /**
   * @remarks
   * The memory capacity of the instance. Unit: MiB.
   * 
   * @example
   * 8192
   */
  memory?: number;
  /**
   * @remarks
   * The reasons why the instance is locked.
   */
  operationLocks?: DescribeRCInstanceAttributeResponseBodyOperationLocks;
  /**
   * @remarks
   * The public IP address of the instance.
   */
  publicIpAddress?: DescribeRCInstanceAttributeResponseBodyPublicIpAddress;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EA2D4F34-01A7-46EB-A339-D80882135206
   */
  requestId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * The security groups.
   */
  securityGroupIds?: DescribeRCInstanceAttributeResponseBodySecurityGroupIds;
  /**
   * @remarks
   * The serial number of the instance.
   * 
   * @example
   * b076f6ff-46d1-4234-a608-4e951ed6****
   */
  serialNumber?: string;
  spotStrategy?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * 
   * *   **Pending**
   * *   **Running**
   * *   **Starting**
   * *   **Stopping**
   * *   **Stopped**
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the billing of the instance continues after the instance is stopped. Valid values:
   * 
   * *   **KeepCharging**: The billing of the instance continues after the instance is stopped, and resources are retained for the instance.
   * *   **StopCharging**: The billing of the instance stops after the instance is stopped. After the instance is stopped, resources such as CPU cores, memory resources, and public IP address are released. The instance may be unable to restart if some required resources are out of stock in the current region.
   * *   **Not-applicable**: The No Fees for Stopped Instances feature is not supported for the instance.
   * 
   * @example
   * Not-applicable
   */
  stoppedMode?: string;
  systemDisk?: DescribeRCInstanceAttributeResponseBodySystemDisk;
  tags?: DescribeRCInstanceAttributeResponseBodyTags;
  /**
   * @remarks
   * The virtual LAN (VLAN) ID of the instance.
   * 
   * >  This parameter will be deprecated. We recommend that you use other parameters to ensure compatibility.
   * 
   * @example
   * None
   */
  vlanId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) attributes of the instance.
   * 
   * **if can be null:**
   * true
   */
  vpcAttributes?: DescribeRCInstanceAttributeResponseBodyVpcAttributes;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      createMode: 'CreateMode',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dataDisks: 'DataDisks',
      dbType: 'DbType',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      diskType: 'DiskType',
      ecsInstanceType: 'EcsInstanceType',
      eipAddress: 'EipAddress',
      enableJumboFrame: 'EnableJumboFrame',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      hostType: 'HostType',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      memory: 'Memory',
      operationLocks: 'OperationLocks',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      serialNumber: 'SerialNumber',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      systemDisk: 'SystemDisk',
      tags: 'Tags',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      clusterId: 'string',
      cpu: 'number',
      createMode: 'number',
      creationTime: 'string',
      creditSpecification: 'string',
      dataDisks: DescribeRCInstanceAttributeResponseBodyDataDisks,
      dbType: 'string',
      dedicatedHostAttribute: DescribeRCInstanceAttributeResponseBodyDedicatedHostAttribute,
      deploymentSetId: 'string',
      description: 'string',
      diskType: 'string',
      ecsInstanceType: 'string',
      eipAddress: DescribeRCInstanceAttributeResponseBodyEipAddress,
      enableJumboFrame: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      hostType: 'string',
      imageId: 'string',
      innerIpAddress: DescribeRCInstanceAttributeResponseBodyInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      keyPairName: 'string',
      memory: 'number',
      operationLocks: DescribeRCInstanceAttributeResponseBodyOperationLocks,
      publicIpAddress: DescribeRCInstanceAttributeResponseBodyPublicIpAddress,
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: DescribeRCInstanceAttributeResponseBodySecurityGroupIds,
      serialNumber: 'string',
      spotStrategy: 'string',
      status: 'string',
      stoppedMode: 'string',
      systemDisk: DescribeRCInstanceAttributeResponseBodySystemDisk,
      tags: DescribeRCInstanceAttributeResponseBodyTags,
      vlanId: 'string',
      vpcAttributes: DescribeRCInstanceAttributeResponseBodyVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dataDisks && typeof (this.dataDisks as any).validate === 'function') {
      (this.dataDisks as any).validate();
    }
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    if(this.systemDisk && typeof (this.systemDisk as any).validate === 'function') {
      (this.systemDisk as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


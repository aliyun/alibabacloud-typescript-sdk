// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo } from "./DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo";
import { DescribeInstancesResponseBodyInstancesInstanceCpuOptions } from "./DescribeInstancesResponseBodyInstancesInstanceCpuOptions";
import { DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute } from "./DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute";
import { DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute } from "./DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute";
import { DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr } from "./DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr";
import { DescribeInstancesResponseBodyInstancesInstanceEipAddress } from "./DescribeInstancesResponseBodyInstancesInstanceEipAddress";
import { DescribeInstancesResponseBodyInstancesInstanceHibernationOptions } from "./DescribeInstancesResponseBodyInstancesInstanceHibernationOptions";
import { DescribeInstancesResponseBodyInstancesInstanceImageOptions } from "./DescribeInstancesResponseBodyInstancesInstanceImageOptions";
import { DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress } from "./DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress";
import { DescribeInstancesResponseBodyInstancesInstanceMetadataOptions } from "./DescribeInstancesResponseBodyInstancesInstanceMetadataOptions";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces";
import { DescribeInstancesResponseBodyInstancesInstanceOperationLocks } from "./DescribeInstancesResponseBodyInstancesInstanceOperationLocks";
import { DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions } from "./DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions";
import { DescribeInstancesResponseBodyInstancesInstancePublicIpAddress } from "./DescribeInstancesResponseBodyInstancesInstancePublicIpAddress";
import { DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress } from "./DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress";
import { DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds } from "./DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds";
import { DescribeInstancesResponseBodyInstancesInstanceTags } from "./DescribeInstancesResponseBodyInstancesInstanceTags";
import { DescribeInstancesResponseBodyInstancesInstanceVpcAttributes } from "./DescribeInstancesResponseBodyInstancesInstanceVpcAttributes";


export class DescribeInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * **if can be null:**
   * true
   */
  additionalInfo?: DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo;
  /**
   * @remarks
   * The automatic release time of the pay-as-you-go instance.
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * c-bp67acfmxazb4p****
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 8
   */
  cpu?: number;
  /**
   * @remarks
   * Details about the CPU options.
   */
  cpuOptions?: DescribeInstancesResponseBodyInstancesInstanceCpuOptions;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the "Standard mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * *   Unlimited: the unlimited mode. For more information, see the "Unlimited mode" section in [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * The information about the dedicated host. The value is an array that consists of DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName.
   */
  dedicatedHostAttribute?: DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute;
  /**
   * @remarks
   * The attributes of the instance on the dedicated host.
   */
  dedicatedInstanceAttribute?: DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute;
  /**
   * @remarks
   * Indicates whether release protection is enabled for the instance. This parameter determines whether you can use the ECS console or call the DeleteInstance operation to release the instance. Valid values:
   * 
   * *   true: Release protection is enabled for the instance.
   * *   false: Release protection is disabled for the instance.
   * 
   * >  This parameter is applicable only to pay-as-you-go instances. The release protection feature can protect instances against manual releases, but not against automatic releases.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * The number of the deployment set group to which the instance belongs in a deployment set.
   * 
   * @example
   * 1
   */
  deploymentSetGroupNo?: number;
  /**
   * @remarks
   * The ID of the deployment set to which the instance belongs.
   * 
   * @example
   * ds-bp67acfmxazb4p****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The description of the instance.
   * 
   * @example
   * testDescription
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether data disks can be attached to the instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deviceAvailable?: boolean;
  /**
   * @remarks
   * Details about the capacity reservation associated with the instance.
   */
  ecsCapacityReservationAttr?: DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr;
  /**
   * @remarks
   * Details about the EIP associated with the instance.
   */
  eipAddress?: DescribeInstancesResponseBodyInstancesInstanceEipAddress;
  enableNVS?: boolean;
  /**
   * @remarks
   * The expiration time of the instance. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The number of GPUs for the instance type.
   * 
   * @example
   * 4
   */
  GPUAmount?: number;
  /**
   * @remarks
   * The category of GPUs for the instance type.
   * 
   * @example
   * NVIDIA V100
   */
  GPUSpec?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   */
  hibernationOptions?: DescribeInstancesResponseBodyInstancesInstanceHibernationOptions;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the HPC cluster to which the instance belongs.
   * 
   * @example
   * hpc-bp67acfmxazb4p****
   */
  hpcClusterId?: string;
  /**
   * @remarks
   * >  This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * null
   */
  ISP?: string;
  /**
   * @remarks
   * The image ID of the instance.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @remarks
   * The image options.
   */
  imageOptions?: DescribeInstancesResponseBodyInstancesInstanceImageOptions;
  /**
   * @remarks
   * The internal IP addresses of the instance located in the classic network.
   */
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * InstanceNameTest
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   classic
   * *   vpc
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
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family of the instance.
   * 
   * @example
   * ecs.g5
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth: pay-by-bandwidth
   * *   PayByTraffic: pay-by-traffic
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The maximum inbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 50
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The maximum outbound public bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * Indicates whether the instance is an I/O optimized instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * testKeyPairName
   */
  keyPairName?: string;
  /**
   * @remarks
   * The number of local disks attached to the instance.
   * 
   * @example
   * 2
   */
  localStorageAmount?: number;
  /**
   * @remarks
   * The capacity of local disks attached to the instance. Unit: GiB.
   * 
   * @example
   * 1000
   */
  localStorageCapacity?: number;
  /**
   * @remarks
   * The memory size. Unit: MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  /**
   * @remarks
   * Details about the metadata options.
   */
  metadataOptions?: DescribeInstancesResponseBodyInstancesInstanceMetadataOptions;
  /**
   * @remarks
   * The ENIs attached to the instance.
   */
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces;
  /**
   * @remarks
   * The name of the operating system of the instance.
   * 
   * @example
   * CentOS 7.4 64-bit
   */
  OSName?: string;
  /**
   * @remarks
   * The English name of the operating system of the instance.
   * 
   * @example
   * CentOS  7.4 64 bit
   */
  OSNameEn?: string;
  /**
   * @remarks
   * The type of the operating system of the instance. Valid values:
   * 
   * *   windows: Windows operating systems
   * *   linux: Linux operating systems
   * 
   * @example
   * linux
   */
  OSType?: string;
  /**
   * @remarks
   * The reasons why the instance was locked.
   */
  operationLocks?: DescribeInstancesResponseBodyInstancesInstanceOperationLocks;
  /**
   * @remarks
   * The private domain name options of the instance.
   * 
   * For information about the resolution of ECS private domain names, see [ECS private DNS resolution](https://help.aliyun.com/document_detail/2844797.html).
   * 
   * >  This parameter is returned only when the `AdditionalAttributes` parameter contains `PRIVATE_DNS_OPTIONS` in the request.
   */
  privateDnsNameOptions?: DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions;
  /**
   * @remarks
   * The public IP addresses of the instance.
   */
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  /**
   * @remarks
   * The RDMA IP addresses of the instance in the HPC cluster.
   */
  rdmaIpAddress?: DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress;
  /**
   * @remarks
   * Indicates whether the instance can be recycled.
   * 
   * @example
   * false
   */
  recyclable?: boolean;
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
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-bp67acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * >  The parameter is removed.
   * 
   * @example
   * month
   */
  saleCycle?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the instance belongs.
   */
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  /**
   * @remarks
   * The serial number of the instance.
   * 
   * @example
   * 51d1353b-22bf-4567-a176-8b3e12e4****
   */
  serialNumber?: string;
  /**
   * @remarks
   * The protection period of the preemptible instance. Unit: hours. Valid values:
   * 
   * *   1: After a preemptible instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * *   0: After a preemptible instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
   * 
   * Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Preemptible instances are billed by second. We recommend that you specify a protection period based on your business requirements.
   * 
   * >  This parameter is returned when SpotStrategy is set to SpotWithPriceLimit or SpotAsPriceGo.
   * 
   * @example
   * 1
   */
  spotDuration?: number;
  /**
   * @remarks
   * The interruption mode of the preemptible instance when the system initiates a preemptible instance interruption operation. Valid values:
   * 
   * *   Terminate: releases the preemptible instance.
   * *   Stop: stops the instance in economical mode.
   * 
   * @example
   * Terminate
   */
  spotInterruptionBehavior?: string;
  /**
   * @remarks
   * The maximum hourly price of the instance. The value can be accurate to three decimal places. This parameter is valid when SpotStrategy is set to SpotWithPriceLimit.
   * 
   * @example
   * 0.98
   */
  spotPriceLimit?: number;
  /**
   * @remarks
   * The bidding policy for the pay-as-you-go instance. Valid values:
   * 
   * *   NoSpot: The instance is a regular pay-as-you-go instance.
   * *   SpotWithPriceLimit: The instance is a preemptible instance with a user-defined maximum hourly price.
   * *   SpotAsPriceGo: The instance is a preemptible instance for which the market price is automatically used as the bid price. The market price can be up to the pay-as-you-go price.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The time when the instance was last started. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the instance continues to be billed after it is stopped. Valid values:
   * 
   * *   KeepCharging: The instance is stopped in standard mode. Billing for the instance continues after the instance is stopped, and resources are retained for the instance.
   * *   StopCharging: The instance is stopped in economical mode. Billing for some resources of the instance stops after the instance is stopped. When the instance is stopped, its resources such as vCPUs, memory, and public IP addresses are released. The instance may be unable to restart if some required resources are out of stock in the current region.
   * *   Not-applicable: The instance does not support economical mode.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  /**
   * @remarks
   * The tags of the instance.
   */
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  /**
   * @remarks
   * The virtual LAN (VLAN) ID of the instance.
   * 
   * >  This parameter will be removed in the future. We recommend that you use other parameters to ensure future compatibility.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The VPC attributes of the instance.
   */
  vpcAttributes?: DescribeInstancesResponseBodyInstancesInstanceVpcAttributes;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalInfo: 'AdditionalInfo',
      autoReleaseTime: 'AutoReleaseTime',
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      cpuOptions: 'CpuOptions',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      dedicatedInstanceAttribute: 'DedicatedInstanceAttribute',
      deletionProtection: 'DeletionProtection',
      deploymentSetGroupNo: 'DeploymentSetGroupNo',
      deploymentSetId: 'DeploymentSetId',
      description: 'Description',
      deviceAvailable: 'DeviceAvailable',
      ecsCapacityReservationAttr: 'EcsCapacityReservationAttr',
      eipAddress: 'EipAddress',
      enableNVS: 'EnableNVS',
      expiredTime: 'ExpiredTime',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      hibernationOptions: 'HibernationOptions',
      hostName: 'HostName',
      hpcClusterId: 'HpcClusterId',
      ISP: 'ISP',
      imageId: 'ImageId',
      imageOptions: 'ImageOptions',
      innerIpAddress: 'InnerIpAddress',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceNetworkType: 'InstanceNetworkType',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      ioOptimized: 'IoOptimized',
      keyPairName: 'KeyPairName',
      localStorageAmount: 'LocalStorageAmount',
      localStorageCapacity: 'LocalStorageCapacity',
      memory: 'Memory',
      metadataOptions: 'MetadataOptions',
      networkInterfaces: 'NetworkInterfaces',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      OSType: 'OSType',
      operationLocks: 'OperationLocks',
      privateDnsNameOptions: 'PrivateDnsNameOptions',
      publicIpAddress: 'PublicIpAddress',
      rdmaIpAddress: 'RdmaIpAddress',
      recyclable: 'Recyclable',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      saleCycle: 'SaleCycle',
      securityGroupIds: 'SecurityGroupIds',
      serialNumber: 'SerialNumber',
      spotDuration: 'SpotDuration',
      spotInterruptionBehavior: 'SpotInterruptionBehavior',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      startTime: 'StartTime',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      tags: 'Tags',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalInfo: DescribeInstancesResponseBodyInstancesInstanceAdditionalInfo,
      autoReleaseTime: 'string',
      clusterId: 'string',
      cpu: 'number',
      cpuOptions: DescribeInstancesResponseBodyInstancesInstanceCpuOptions,
      creationTime: 'string',
      creditSpecification: 'string',
      dedicatedHostAttribute: DescribeInstancesResponseBodyInstancesInstanceDedicatedHostAttribute,
      dedicatedInstanceAttribute: DescribeInstancesResponseBodyInstancesInstanceDedicatedInstanceAttribute,
      deletionProtection: 'boolean',
      deploymentSetGroupNo: 'number',
      deploymentSetId: 'string',
      description: 'string',
      deviceAvailable: 'boolean',
      ecsCapacityReservationAttr: DescribeInstancesResponseBodyInstancesInstanceEcsCapacityReservationAttr,
      eipAddress: DescribeInstancesResponseBodyInstancesInstanceEipAddress,
      enableNVS: 'boolean',
      expiredTime: 'string',
      GPUAmount: 'number',
      GPUSpec: 'string',
      hibernationOptions: DescribeInstancesResponseBodyInstancesInstanceHibernationOptions,
      hostName: 'string',
      hpcClusterId: 'string',
      ISP: 'string',
      imageId: 'string',
      imageOptions: DescribeInstancesResponseBodyInstancesInstanceImageOptions,
      innerIpAddress: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'boolean',
      keyPairName: 'string',
      localStorageAmount: 'number',
      localStorageCapacity: 'number',
      memory: 'number',
      metadataOptions: DescribeInstancesResponseBodyInstancesInstanceMetadataOptions,
      networkInterfaces: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces,
      OSName: 'string',
      OSNameEn: 'string',
      OSType: 'string',
      operationLocks: DescribeInstancesResponseBodyInstancesInstanceOperationLocks,
      privateDnsNameOptions: DescribeInstancesResponseBodyInstancesInstancePrivateDnsNameOptions,
      publicIpAddress: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress,
      rdmaIpAddress: DescribeInstancesResponseBodyInstancesInstanceRdmaIpAddress,
      recyclable: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      saleCycle: 'string',
      securityGroupIds: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds,
      serialNumber: 'string',
      spotDuration: 'number',
      spotInterruptionBehavior: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      startTime: 'string',
      status: 'string',
      stoppedMode: 'string',
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
      vlanId: 'string',
      vpcAttributes: DescribeInstancesResponseBodyInstancesInstanceVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.additionalInfo && typeof (this.additionalInfo as any).validate === 'function') {
      (this.additionalInfo as any).validate();
    }
    if(this.cpuOptions && typeof (this.cpuOptions as any).validate === 'function') {
      (this.cpuOptions as any).validate();
    }
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.dedicatedInstanceAttribute && typeof (this.dedicatedInstanceAttribute as any).validate === 'function') {
      (this.dedicatedInstanceAttribute as any).validate();
    }
    if(this.ecsCapacityReservationAttr && typeof (this.ecsCapacityReservationAttr as any).validate === 'function') {
      (this.ecsCapacityReservationAttr as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.hibernationOptions && typeof (this.hibernationOptions as any).validate === 'function') {
      (this.hibernationOptions as any).validate();
    }
    if(this.imageOptions && typeof (this.imageOptions as any).validate === 'function') {
      (this.imageOptions as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.metadataOptions && typeof (this.metadataOptions as any).validate === 'function') {
      (this.metadataOptions as any).validate();
    }
    if(this.networkInterfaces && typeof (this.networkInterfaces as any).validate === 'function') {
      (this.networkInterfaces as any).validate();
    }
    if(this.operationLocks && typeof (this.operationLocks as any).validate === 'function') {
      (this.operationLocks as any).validate();
    }
    if(this.privateDnsNameOptions && typeof (this.privateDnsNameOptions as any).validate === 'function') {
      (this.privateDnsNameOptions as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.rdmaIpAddress && typeof (this.rdmaIpAddress as any).validate === 'function') {
      (this.rdmaIpAddress as any).validate();
    }
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
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


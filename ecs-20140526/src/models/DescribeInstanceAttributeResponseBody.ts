// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceAttributeResponseBodyDedicatedHostAttribute } from "./DescribeInstanceAttributeResponseBodyDedicatedHostAttribute";
import { DescribeInstanceAttributeResponseBodyEipAddress } from "./DescribeInstanceAttributeResponseBodyEipAddress";
import { DescribeInstanceAttributeResponseBodyInnerIpAddress } from "./DescribeInstanceAttributeResponseBodyInnerIpAddress";
import { DescribeInstanceAttributeResponseBodyNetworkOptions } from "./DescribeInstanceAttributeResponseBodyNetworkOptions";
import { DescribeInstanceAttributeResponseBodyOperationLocks } from "./DescribeInstanceAttributeResponseBodyOperationLocks";
import { DescribeInstanceAttributeResponseBodyPublicIpAddress } from "./DescribeInstanceAttributeResponseBodyPublicIpAddress";
import { DescribeInstanceAttributeResponseBodySecurityGroupIds } from "./DescribeInstanceAttributeResponseBodySecurityGroupIds";
import { DescribeInstanceAttributeResponseBodyVpcAttributes } from "./DescribeInstanceAttributeResponseBodyVpcAttributes";


export class DescribeInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the instance belongs.
   * 
   * > This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.
   * 
   * @example
   * cls-bp67acfmxazb4p****
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
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The performance mode of the burstable instance. Valid values:
   * 
   * *   Standard: the standard mode. For more information, see the [Performance modes](~~59977#section-svb-w9d-dju~~) section of the "Overview of burstable instances" topic.
   * *   Unlimited: the unlimited mode. For more information, see the [Performance modes](~~59977#section-svb-w9d-dju~~) section of the "Overview of burstable instances" topic.
   * 
   * @example
   * Standard
   */
  creditSpecification?: string;
  /**
   * @remarks
   * Details about the dedicated host. It is an array that consists of the DedicatedHostClusterId, DedicatedHostId, and DedicatedHostName parameters.
   */
  dedicatedHostAttribute?: DescribeInstanceAttributeResponseBodyDedicatedHostAttribute;
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
   * The elastic IP address (EIP) associated with the instance.
   */
  eipAddress?: DescribeInstanceAttributeResponseBodyEipAddress;
  /**
   * @remarks
   * Indicates whether the Jumbo Frame feature is enabled for the instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * For more information, see [MTUs](https://help.aliyun.com/document_detail/200512.html).
   * 
   * @example
   * false
   */
  enableJumboFrame?: boolean;
  enableNetworkEncryption?: boolean;
  /**
   * @remarks
   * The time when the instance expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC. For more information, see [ISO 8601](https://help.aliyun.com/document_detail/25696.html).
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  expiredTime?: string;
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
   * The ID of the image that the instance is running.
   * 
   * @example
   * m-bp1h46wfpjsjastc****
   */
  imageId?: string;
  /**
   * @remarks
   * The internal IP address of the instance located in the classic network.
   */
  innerIpAddress?: DescribeInstanceAttributeResponseBodyInnerIpAddress;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go
   * 
   * @example
   * PrePaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID
   * 
   * @example
   * i-uf6f5trc95ug8t33****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * testInstanceName
   */
  instanceName?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   classic: classic network
   * *   vpc: VPC
   * 
   * @example
   * vpc
   */
  instanceNetworkType?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The billing method for network usage. Valid values:
   * 
   * *   PayByBandwidth
   * *   PayByTraffic
   * 
   * >  When the **pay-by-traffic** billing method is used for network usage, the maximum inbound and outbound bandwidths are used as the upper limits of bandwidths instead of guaranteed performance specifications. In scenarios in which demands exceed resource supplies, the maximum bandwidths may not be reached. If you want guaranteed bandwidths for your instance, use the **pay-by-bandwidth** billing method for network usage.
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
   * Indicates whether the ECS instance is I/O optimized. Valid values:
   * 
   * *   optimized: The ECS instance is I/O optimized.
   * *   none: The ECS instance is not I/O optimized.
   * 
   * @example
   * true
   */
  ioOptimized?: string;
  /**
   * @remarks
   * The memory size of the instance. Unit: MiB.
   * 
   * @example
   * 16384
   */
  memory?: number;
  networkOptions?: DescribeInstanceAttributeResponseBodyNetworkOptions;
  /**
   * @remarks
   * The reason why the instance was locked. Valid values:
   * 
   * *   financial: The dedicated host was locked due to overdue payments.
   * *   security: The instance was locked due to security reasons.
   * *   recycling: The spot instance was locked and pending release.
   * *   dedicatedhostfinancial: The instance was locked due to overdue payments for the dedicated host.
   * *   refunded: The instance was locked because a refund was made for the instance.
   */
  operationLocks?: DescribeInstanceAttributeResponseBodyOperationLocks;
  /**
   * @remarks
   * The public IP address of the instance.
   */
  publicIpAddress?: DescribeInstanceAttributeResponseBodyPublicIpAddress;
  /**
   * @remarks
   * The ID of the region in which the instance resides.
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
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which the instance belongs.
   */
  securityGroupIds?: DescribeInstanceAttributeResponseBodySecurityGroupIds;
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
   * The status of the instance. Valid values:
   * 
   * *   Pending: The instance is being created.
   * *   Running: The instance is running.
   * *   Starting: The instance is being started.
   * *   Stopping: The instance is being stopped.
   * *   Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the system implements billing after the instance is stopped. Valid values:
   * 
   * *   KeepCharging: The instance is stopped in standard mode. The billing of the instance continues after the instance is stopped, and resources are retained for the instance.
   * *   StopCharging: The instance is stopped in economical mode. The billing of some resources of the instance stops after the instance is stopped. When the instance is stopped, its resources such as vCPUs, memory, and public IP address are released. The instance may be unable to start again if some required resources are out of stock in the current region.
   * *   Not-applicable: The instance does not support economical mode.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  /**
   * @remarks
   * The virtual LAN (VLAN) ID of the instance.
   * 
   * > This parameter will be removed in the future. To ensure future compatibility, we recommend that you use other parameters.
   * 
   * @example
   * 10
   */
  vlanId?: string;
  /**
   * @remarks
   * The VPC attributes of the instance.
   */
  vpcAttributes?: DescribeInstanceAttributeResponseBodyVpcAttributes;
  /**
   * @remarks
   * The ID of the zone in which the instance resides.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      creditSpecification: 'CreditSpecification',
      dedicatedHostAttribute: 'DedicatedHostAttribute',
      description: 'Description',
      eipAddress: 'EipAddress',
      enableJumboFrame: 'EnableJumboFrame',
      enableNetworkEncryption: 'EnableNetworkEncryption',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
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
      memory: 'Memory',
      networkOptions: 'NetworkOptions',
      operationLocks: 'OperationLocks',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      securityGroupIds: 'SecurityGroupIds',
      serialNumber: 'SerialNumber',
      status: 'Status',
      stoppedMode: 'StoppedMode',
      vlanId: 'VlanId',
      vpcAttributes: 'VpcAttributes',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpu: 'number',
      creationTime: 'string',
      creditSpecification: 'string',
      dedicatedHostAttribute: DescribeInstanceAttributeResponseBodyDedicatedHostAttribute,
      description: 'string',
      eipAddress: DescribeInstanceAttributeResponseBodyEipAddress,
      enableJumboFrame: 'boolean',
      enableNetworkEncryption: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      innerIpAddress: DescribeInstanceAttributeResponseBodyInnerIpAddress,
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceNetworkType: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      ioOptimized: 'string',
      memory: 'number',
      networkOptions: DescribeInstanceAttributeResponseBodyNetworkOptions,
      operationLocks: DescribeInstanceAttributeResponseBodyOperationLocks,
      publicIpAddress: DescribeInstanceAttributeResponseBodyPublicIpAddress,
      regionId: 'string',
      requestId: 'string',
      securityGroupIds: DescribeInstanceAttributeResponseBodySecurityGroupIds,
      serialNumber: 'string',
      status: 'string',
      stoppedMode: 'string',
      vlanId: 'string',
      vpcAttributes: DescribeInstanceAttributeResponseBodyVpcAttributes,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.dedicatedHostAttribute && typeof (this.dedicatedHostAttribute as any).validate === 'function') {
      (this.dedicatedHostAttribute as any).validate();
    }
    if(this.eipAddress && typeof (this.eipAddress as any).validate === 'function') {
      (this.eipAddress as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.networkOptions && typeof (this.networkOptions as any).validate === 'function') {
      (this.networkOptions as any).validate();
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
    if(this.vpcAttributes && typeof (this.vpcAttributes as any).validate === 'function') {
      (this.vpcAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


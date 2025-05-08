// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstancesResponseBodyInstancesInstanceDataDisk } from "./DescribeInstancesResponseBodyInstancesInstanceDataDisk";
import { DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress } from "./DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes";
import { DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces } from "./DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces";
import { DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses } from "./DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses";
import { DescribeInstancesResponseBodyInstancesInstancePublicIpAddress } from "./DescribeInstancesResponseBodyInstancesInstancePublicIpAddress";
import { DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses } from "./DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses";
import { DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds } from "./DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds";
import { DescribeInstancesResponseBodyInstancesInstanceSystemDisk } from "./DescribeInstancesResponseBodyInstancesInstanceSystemDisk";
import { DescribeInstancesResponseBodyInstancesInstanceTags } from "./DescribeInstancesResponseBodyInstancesInstanceTags";


export class DescribeInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The automatic release time of the instance.
   * 
   * @example
   * 2023-06-28T14:38:52Z
   */
  autoReleaseTime?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * The time when the instance was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-07-26T06:40:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Details of the data disk.
   */
  dataDisk?: DescribeInstancesResponseBodyInstancesInstanceDataDisk;
  /**
   * @remarks
   * The total size of the disk. Unit: MiB.
   * 
   * @example
   * 71680
   */
  disk?: number;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou-telecom
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2119-07-13T02:38:57Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The hostname of the instance.
   * 
   * *   The hostname cannot start or end with a period (.) or hyphen (-). It cannot contain consecutive periods (.) or hyphens (-).
   * *   For a Windows instance, the hostname must be 2 to 15 characters in length and can contain letters, digits, and hyphens (-). The hostname cannot contain periods (.) or contain only digits.
   * *   For an instance that runs another operating system such as Linux, the hostname must be 2 to 64 characters in length. You can use periods (.) to separate the hostname into multiple segments. Each segment can contain letters, digits, and hyphens (-).
   * 
   * @example
   * testHostName
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * m-****
   */
  imageId?: string;
  /**
   * @remarks
   * The private IP addresses of the instances.
   */
  innerIpAddress?: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * i-instanc****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * i-5itef0f28t17bcdw9deu6meub
   */
  instanceName?: string;
  /**
   * @remarks
   * The category of the instance. Valid values:
   * 
   * *   EnsInstance: ENS instances that you purchase.
   * *   EnsService: ENS instances that belong to edge services.
   * *   BuildMachine: ENS instances that are configured with image builders.
   * *   EnsPostPaidInstance: pay-as-you-go ENS instances that you purchase.
   * 
   * @example
   * EnsService
   */
  instanceResourceType?: string;
  /**
   * @remarks
   * The instance family. Valid values:
   * 
   * *   x86_vm: x86-based computing instance.
   * *   x86_pm: x86-based physical machine.
   * *   x86_bmi: x86-based bare metal instance.
   * *   x86_bm: bare metal instance with the SmartNIC.
   * *   pc_bmi: heterogeneous bare metal instance.
   * *   pc_vm: heterogeneous virtual machine.
   * *   arm_bmi: Arm-based computing instance.
   * 
   * @example
   * x86_vm
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The maximum outbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 40
   */
  internetMaxBandwidthIn?: number;
  /**
   * @remarks
   * The minimum inbound bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  internetMaxBandwidthOut?: number;
  /**
   * @remarks
   * The name of the SSH key pair.
   * 
   * @example
   * terraform-example
   */
  keyPairName?: string;
  /**
   * @remarks
   * The memory size. Unit: MB.
   * 
   * @example
   * 2048
   */
  memory?: number;
  /**
   * @remarks
   * Details of the network.
   */
  networkAttributes?: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes;
  /**
   * @remarks
   * The ENI attached to the instance.
   */
  networkInterfaces?: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * centos 6.8 x86_64
   */
  OSName?: string;
  /**
   * @remarks
   * Details of the private IP addresses.
   */
  privateIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses;
  /**
   * @remarks
   * The public IP addresses of the instances.
   */
  publicIpAddress?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress;
  /**
   * @remarks
   * Details of the public IP addresses.
   */
  publicIpAddresses?: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses;
  /**
   * @remarks
   * The IDs of the security groups.
   */
  securityGroupIds?: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds;
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * Deleting
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ens.sn1.stiny
   */
  specName?: string;
  /**
   * @remarks
   * The bidding policy of the preemptible instance.
   * 
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * *   Running
   * *   Expired
   * *   Stopped
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * Details of the system disk.
   */
  systemDisk?: DescribeInstancesResponseBodyInstancesInstanceSystemDisk;
  /**
   * @remarks
   * The tags of the instance.
   * 
   * >  This operation does not return tag information. You can call this operation in combination with the tag-related operations.
   */
  tags?: DescribeInstancesResponseBodyInstancesInstanceTags;
  static names(): { [key: string]: string } {
    return {
      autoReleaseTime: 'AutoReleaseTime',
      cpu: 'Cpu',
      creationTime: 'CreationTime',
      dataDisk: 'DataDisk',
      disk: 'Disk',
      ensRegionId: 'EnsRegionId',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      imageId: 'ImageId',
      innerIpAddress: 'InnerIpAddress',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceResourceType: 'InstanceResourceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      keyPairName: 'KeyPairName',
      memory: 'Memory',
      networkAttributes: 'NetworkAttributes',
      networkInterfaces: 'NetworkInterfaces',
      OSName: 'OSName',
      privateIpAddresses: 'PrivateIpAddresses',
      publicIpAddress: 'PublicIpAddress',
      publicIpAddresses: 'PublicIpAddresses',
      securityGroupIds: 'SecurityGroupIds',
      serviceStatus: 'ServiceStatus',
      specName: 'SpecName',
      spotStrategy: 'SpotStrategy',
      status: 'Status',
      systemDisk: 'SystemDisk',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoReleaseTime: 'string',
      cpu: 'string',
      creationTime: 'string',
      dataDisk: DescribeInstancesResponseBodyInstancesInstanceDataDisk,
      disk: 'number',
      ensRegionId: 'string',
      expiredTime: 'string',
      hostName: 'string',
      imageId: 'string',
      innerIpAddress: DescribeInstancesResponseBodyInstancesInstanceInnerIpAddress,
      instanceId: 'string',
      instanceName: 'string',
      instanceResourceType: 'string',
      instanceTypeFamily: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      keyPairName: 'string',
      memory: 'number',
      networkAttributes: DescribeInstancesResponseBodyInstancesInstanceNetworkAttributes,
      networkInterfaces: DescribeInstancesResponseBodyInstancesInstanceNetworkInterfaces,
      OSName: 'string',
      privateIpAddresses: DescribeInstancesResponseBodyInstancesInstancePrivateIpAddresses,
      publicIpAddress: DescribeInstancesResponseBodyInstancesInstancePublicIpAddress,
      publicIpAddresses: DescribeInstancesResponseBodyInstancesInstancePublicIpAddresses,
      securityGroupIds: DescribeInstancesResponseBodyInstancesInstanceSecurityGroupIds,
      serviceStatus: 'string',
      specName: 'string',
      spotStrategy: 'string',
      status: 'string',
      systemDisk: DescribeInstancesResponseBodyInstancesInstanceSystemDisk,
      tags: DescribeInstancesResponseBodyInstancesInstanceTags,
    };
  }

  validate() {
    if(this.dataDisk && typeof (this.dataDisk as any).validate === 'function') {
      (this.dataDisk as any).validate();
    }
    if(this.innerIpAddress && typeof (this.innerIpAddress as any).validate === 'function') {
      (this.innerIpAddress as any).validate();
    }
    if(this.networkAttributes && typeof (this.networkAttributes as any).validate === 'function') {
      (this.networkAttributes as any).validate();
    }
    if(this.networkInterfaces && typeof (this.networkInterfaces as any).validate === 'function') {
      (this.networkInterfaces as any).validate();
    }
    if(this.privateIpAddresses && typeof (this.privateIpAddresses as any).validate === 'function') {
      (this.privateIpAddresses as any).validate();
    }
    if(this.publicIpAddress && typeof (this.publicIpAddress as any).validate === 'function') {
      (this.publicIpAddress as any).validate();
    }
    if(this.publicIpAddresses && typeof (this.publicIpAddresses as any).validate === 'function') {
      (this.publicIpAddresses as any).validate();
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


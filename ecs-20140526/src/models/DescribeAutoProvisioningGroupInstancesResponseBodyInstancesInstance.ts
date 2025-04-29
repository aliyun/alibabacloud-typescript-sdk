// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAutoProvisioningGroupInstancesResponseBodyInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The number of vCPU cores of the instance.
   * 
   * @example
   * 2
   */
  CPU?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2017-12-10T04:04Z
   */
  creationTime?: string;
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
   * The ECS instance type.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether the instance is an I/O optimized instance.
   * 
   * @example
   * true
   */
  ioOptimized?: boolean;
  /**
   * @remarks
   * Indicates whether the instance is a preemptible instance.
   * 
   * @example
   * true
   */
  isSpot?: boolean;
  /**
   * @remarks
   * The memory capacity of the instance. Unit: MiB.
   * 
   * @example
   * 1024
   */
  memory?: number;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   vpc: Virtual Private Cloud (VPC)
   * *   classic: classic network
   * 
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @remarks
   * The operating system type of the instance. Valid values:
   * 
   * *   windows
   * *   linux
   * 
   * @example
   * linux
   */
  osType?: string;
  /**
   * @remarks
   * The region ID of the container group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The ID of the zone to which the instance belongs.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      creationTime: 'CreationTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ioOptimized: 'IoOptimized',
      isSpot: 'IsSpot',
      memory: 'Memory',
      networkType: 'NetworkType',
      osType: 'OsType',
      regionId: 'RegionId',
      status: 'Status',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      creationTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ioOptimized: 'boolean',
      isSpot: 'boolean',
      memory: 'number',
      networkType: 'string',
      osType: 'string',
      regionId: 'string',
      status: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


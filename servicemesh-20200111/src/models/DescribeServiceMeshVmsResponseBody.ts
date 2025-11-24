// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceMeshVMsResponseBodyVMs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ECS instance has labels.
   * 
   * @example
   * false
   */
  hasTag?: boolean;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * iZ2ze45cgxkx4q12eh****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2ze0kub9scdguom****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * @example
   * 192.168.2.241
   */
  ipAddress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The security group to which the ECS instance belongs.
   * 
   * @example
   * sg-2zeaqy08amco9osl****
   */
  securityGroupIds?: string;
  /**
   * @remarks
   * The ASM instance ID.
   * 
   * @example
   * ccb37ff104caf419fbf48fb38e6f3****
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The state of the ECS instance.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hasTag: 'HasTag',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      ipAddress: 'IpAddress',
      region: 'Region',
      securityGroupIds: 'SecurityGroupIds',
      serviceMeshId: 'ServiceMeshId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hasTag: 'boolean',
      hostName: 'string',
      instanceId: 'string',
      ipAddress: 'string',
      region: 'string',
      securityGroupIds: 'string',
      serviceMeshId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMeshVMsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4b2c0fe0-6705-4614-8521-6b9d289163c8
   */
  requestId?: string;
  /**
   * @remarks
   * The ECS instances that reside in the same VPC as the ASM instance.
   */
  VMs?: DescribeServiceMeshVMsResponseBodyVMs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VMs: 'VMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VMs: { 'type': 'array', 'itemType': DescribeServiceMeshVMsResponseBodyVMs },
    };
  }

  validate() {
    if(Array.isArray(this.VMs)) {
      $dara.Model.validateArray(this.VMs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


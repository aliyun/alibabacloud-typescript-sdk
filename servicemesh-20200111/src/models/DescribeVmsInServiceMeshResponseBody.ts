// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVMsInServiceMeshResponseBodyVMs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the ECS instance has labels.
   * 
   * @example
   * true
   */
  hasTag?: boolean;
  /**
   * @remarks
   * The host name.
   * 
   * @example
   * iZ2ze45cgxkx4q12eh9l****
   */
  hostName?: string;
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-2ze45cgxkx4q12e****
   */
  instanceId?: string;
  /**
   * @remarks
   * The IP address of the ECS instance.
   * 
   * @example
   * 10.0.*,***
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

export class DescribeVMsInServiceMeshResponseBody extends $dara.Model {
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
   * The VMs that are added to the ASM instance.
   */
  VMs?: DescribeVMsInServiceMeshResponseBodyVMs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      VMs: 'VMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      VMs: { 'type': 'array', 'itemType': DescribeVMsInServiceMeshResponseBodyVMs },
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


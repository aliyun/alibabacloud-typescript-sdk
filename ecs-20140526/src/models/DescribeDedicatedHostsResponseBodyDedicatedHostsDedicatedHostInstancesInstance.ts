// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostInstancesInstance extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * @example
   * i-bp14ot0ykf8w13a1****
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the ECS instance owner.
   * 
   * @example
   * 128************0
   */
  instanceOwnerId?: number;
  /**
   * @remarks
   * The instance type of the ECS instance that was created on the dedicated host.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The ID of the socket to which the ECS instance belongs.
   * 
   * @example
   * 0,1
   */
  socketId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceOwnerId: 'InstanceOwnerId',
      instanceType: 'InstanceType',
      socketId: 'SocketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceOwnerId: 'number',
      instanceType: 'string',
      socketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


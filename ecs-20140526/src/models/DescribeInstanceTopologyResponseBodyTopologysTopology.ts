// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTopologyResponseBodyTopologysTopology extends $dara.Model {
  /**
   * @remarks
   * The ID of the host where the ECS instance resides. This parameter is encrypted and cannot match the ID of the ECS instance. However, if the values of this parameter for different ECS instances are the same, the ECS instances reside on the same host.
   * 
   * @example
   * ZWNobyBo****
   */
  hostId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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

export class DescribeInstanceTopologyResponseBodyTopologys extends $dara.Model {
  topology?: DescribeInstanceTopologyResponseBodyTopologysTopology[];
  static names(): { [key: string]: string } {
    return {
      topology: 'Topology',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topology: { 'type': 'array', 'itemType': DescribeInstanceTopologyResponseBodyTopologysTopology },
    };
  }

  validate() {
    if(Array.isArray(this.topology)) {
      $dara.Model.validateArray(this.topology);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Details about the topology.
   */
  topologys?: DescribeInstanceTopologyResponseBodyTopologys;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      topologys: 'Topologys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      topologys: DescribeInstanceTopologyResponseBodyTopologys,
    };
  }

  validate() {
    if(this.topologys && typeof (this.topologys as any).validate === 'function') {
      (this.topologys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


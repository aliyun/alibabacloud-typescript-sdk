// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalAccelerationInstancesResponseBodyGlobalAccelerationInstancesGlobalAccelerationInstanceBackendServersBackendServer extends $dara.Model {
  /**
   * @remarks
   * The region where the backend servers are deployed.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-2zeg83zvn5d4ed4y****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 172.xx.xx.109
   */
  serverIpAddress?: string;
  /**
   * @remarks
   * The type of the backend server.
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **SlbInstance**: Server Load Balancer (SLB) instance
   * 
   * @example
   * EcsInstance
   */
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      serverId: 'ServerId',
      serverIpAddress: 'ServerIpAddress',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      serverId: 'string',
      serverIpAddress: 'string',
      serverType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


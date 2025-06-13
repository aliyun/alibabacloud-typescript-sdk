// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceServersInServerGroupRequestRemovedServers extends $dara.Model {
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**. You can specify at most 200 servers in each call.
   * 
   * @example
   * 81
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server. You can specify at most 200 servers in each call.
   * 
   * *   If the server group is of the **Instance** type, set ServerId to the ID of a resource of the **Ecs**, **Eni**, or **Eci** type.
   * *   If the server group is of the **Ip** type, set ServerId to IP addresses.
   * 
   * >  You cannot perform this operation on a server group of the Function Compute type. You can call the [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) operation to query the type of server groups.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp1ac9uozods2uc****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the ENI in exclusive mode.
   * 
   * @example
   * 192.168.1.12
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of backend server. You can specify at most 200 servers in each call. Valid values:
   * 
   * *   **Ecs**: ECS instance
   * *   **Eni**: ENI
   * *   **Eci**: elastic container instance
   * 
   * @example
   * ecs
   */
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
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


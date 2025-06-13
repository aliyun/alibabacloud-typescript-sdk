// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceServersInServerGroupRequestAddedServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server. The description must be 2 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The port used by the backend server in the server group. Valid values: **1** to **65535**. You can specify at most 200 servers in each call.
   * 
   * @example
   * 80
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
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the elastic network interface (ENI) in exclusive mode.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of backend server. You can specify at most 200 servers in each call. Valid values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: ENI
   * *   **Eci**: elastic container instance
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. You can specify at most 200 servers in each call.
   * 
   * Valid values: **0** to **100**. Default value: **100**. If the value is set to **0**, no requests are forwarded to the server.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


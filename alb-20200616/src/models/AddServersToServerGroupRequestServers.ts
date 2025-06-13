// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServersToServerGroupRequestServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**. You can specify at most 200 servers in each call.
   * 
   * >  This parameter is required if you set **ServerType** to **Ecs**, **Eni**, **Eci**, or **Ip**. You do not need to set this parameter if **ServerType** is set to **Fc**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Specifies whether to enable the remote IP feature. You can specify at most 200 servers in each call. Default values:
   * 
   * *   **true**: enables the feature.
   * *   **false**: disables the feature.
   * 
   * >  This parameter takes effect only when **ServerType** is set to **Ip**.
   * 
   * @example
   * false
   */
  remoteIpEnabled?: boolean;
  /**
   * @remarks
   * The ID of the server group. You can specify at most 200 servers in each call.
   * 
   * *   If the server group is of the **Instance** type, set ServerId to the ID of a resource of the **Ecs**, **Eni**, or **Eci** type.
   * *   If the server group is of the **Ip** type, set this parameter to IP addresses.
   * *   If the server group is of the **Fc** type, set ServerId to an Alibaba Cloud Resource Name (ARN).
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server. You can specify at most 200 servers in each call.
   * 
   * >  You do not need to set this parameter if you set **ServerType** to **Fc**.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. You can specify at most 200 servers in each call. Default values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: elastic network interface (ENI)
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * *   **Fc**: Function Compute
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the value is set to **0**, no requests are forwarded to the server. You can specify at most 200 servers in each call.
   * 
   * >  You do not need to set this parameter if you set **ServerType** to **Fc**.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      remoteIpEnabled: 'RemoteIpEnabled',
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
      remoteIpEnabled: 'boolean',
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


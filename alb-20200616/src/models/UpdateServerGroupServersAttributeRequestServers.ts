// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupServersAttributeRequestServers extends $dara.Model {
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
   * The port that is used by the backend server. Valid values: **1** to **65535**.
   * 
   * > You do not need to set this parameter if **ServerType** is set to **Fc**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * *   Specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance if you set **ServerType** to **Ecs**, **Eni**, or **Eci**.
   * *   Specify an IP address if you set **ServerType** to **Ip**.
   * *   Specify the Alibaba Cloud Resource Name (ARN) of a Function Compute function if you set **ServerType** to **Fc**.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: ECS instance
   * *   **Eni**: ENI
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
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the value is set to **0**, no requests are forwarded to the server. You can specify up to 40 servers in each call.
   * 
   * > You do not need to set this parameter if **ServerType** is set to **Fc**.
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


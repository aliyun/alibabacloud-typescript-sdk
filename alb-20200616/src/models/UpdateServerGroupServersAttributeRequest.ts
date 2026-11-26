// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupServersAttributeRequestServers extends $dara.Model {
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
   * The port used by the backend server. Valid values: **1** to **65535**.
   * > This parameter does not take effect when **ServerType** is set to **Fc**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * - If **ServerType** is set to **Ecs**, **Eni**, or **Eci**, this parameter specifies the resource ID of the ECS instance, ENI, or ECI.
   * - If **ServerType** is set to **Ip**, this parameter specifies the IP address.
   * - If **ServerType** is set to **Fc**, this parameter specifies the ARN of the function.
   * 
   * @example
   * ecs-123
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The server type of the backend server. Valid values:
   * - **Ecs**: ECS instance.
   * - **Eni**: network interface controller (NIC).
   * - **Eci**: elastic container instance.
   * - **Ip**: IP address.
   * - **Fc**: Function Compute.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the weight is set to **0**, no requests are forwarded to the backend server. You can specify up to 40 servers in a single request.
   * 
   * > This parameter does not take effect when **ServerType** is set to **Fc**.
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

export class UpdateServerGroupServersAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * - **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request format, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a Normal request, passes the dry run, and returns an HTTP 2xx status code. The operation to update the weight and description of the backend server in the server group is directly performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtop****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The backend server group list. You can specify up to 40 servers in a single invoke.
   * 
   * This parameter is required.
   */
  servers?: UpdateServerGroupServersAttributeRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      serverGroupId: 'string',
      servers: { 'type': 'array', 'itemType': UpdateServerGroupServersAttributeRequestServers },
    };
  }

  validate() {
    if(Array.isArray(this.servers)) {
      $dara.Model.validateArray(this.servers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


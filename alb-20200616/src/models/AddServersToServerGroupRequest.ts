// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddServersToServerGroupRequestServers extends $dara.Model {
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
   * The port used by the backend server. Valid values: **1** to **65535**. You can add up to 200 servers in a single call.
   * 
   * > This parameter is required when **ServerType** is set to **Ecs**, **Eni**, **Eci**, or **Ip**. This parameter is not required when **ServerType** is set to **Fc**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Specifies whether to enable the remote IP address feature. You can add up to 200 servers in a single call. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false**: disables the feature.
   * 
   * 
   * > This parameter takes effect only when **ServerType** is set to **Ip**.
   * 
   * @example
   * false
   */
  remoteIpEnabled?: boolean;
  /**
   * @remarks
   * The ID of the backend server. You can add up to 200 servers in a single call.
   * 
   * - If the server group is of the **Instance** type, this parameter specifies the ID of an **Ecs**, **Eni**, or **Eci** resource.
   * 
   * - If the server group is of the **Ip** type, this parameter specifies an IP address.
   * 
   * - If the server group is of the **Fc** type, this parameter specifies the ARN of the Function Compute resource.
   * 
   * @example
   * i-uf616vu8me******
   */
  serverId?: string;
  /**
   * @remarks
   * The specified IP address. You can add up to 200 servers in a single call.
   * 
   * If **ServerType** is set to **Eni**, you can specify the primary or secondary private IP address of the ENI.
   * 
   * > This parameter is not required when **ServerType** is set to **Fc**.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The backend server type. You can add up to 200 servers each time you invoke the operation. Valid values:
   * - **Ecs**: ECS instance.
   * - **Eni**: elastic network interfaces (ENIs) or network interface controller (NIC).
   * - **Eci**: Elastic Container Instance (ECI).
   * - **Ip**: IP address.
   * - **Fc**: Function Compute.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the weight is set to **0**, no requests are forwarded to the backend server. You can add up to 200 servers in a single call.
   * 
   * > This parameter is not required when **ServerType** is set to **Fc**.
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

export class AddServersToServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is unique.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0******
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: sends a check request and does not add the backend servers to the server group. The system checks whether the required parameters are specified, the request format, and the service limits. If the request fails the check, the corresponding error is returned. If the request passes the check, the `DryRunOperation` error code is returned.
   * - **false** (default): sends a normal request. After the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtop****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The list of backend servers. You can add up to 200 servers in a single call.
   * 
   * This parameter is required.
   */
  servers?: AddServersToServerGroupRequestServers[];
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
      servers: { 'type': 'array', 'itemType': AddServersToServerGroupRequestServers },
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


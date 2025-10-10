// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveServersFromServerGroupRequestServers extends $dara.Model {
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**.
   * 
   * >  This parameter is required when you set **ServerType** to **Ecs**, **Eni**, **Eci**, or **Ip**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * *   If the server group is of the **Instance** type, set ServerId to the ID of a resource of the **Ecs**, **Eni**, or **Eci** type.
   * *   If the server group is of the **Ip** type, set this parameter to IP addresses.
   * *   If the server group is of the **Fc** type, set ServerId to the Alibaba Cloud Resource Name (ARN) of a function.
   * 
   * >  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/2254862.html) operation to query information about the server group type so that you can set ServerId to a proper value.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the elastic network interface (ENI) in inclusive mode.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: ENI
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * *   **Fc**: Function Compute instance
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
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

export class RemoveServersFromServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * The backend servers to be removed. You can specify up to 200 backend servers.
   * 
   * This parameter is required.
   */
  servers?: RemoveServersFromServerGroupRequestServers[];
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
      servers: { 'type': 'array', 'itemType': RemoveServersFromServerGroupRequestServers },
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


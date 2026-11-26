// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceServersInServerGroupRequestAddedServers extends $dara.Model {
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
   * The port used by the backend server group. Valid values: **1** to **65535**. You can specify up to 200 servers in a single request.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID. You can specify up to 200 servers in a single request.
   * 
   * - If the server group type is **Instance**, set this parameter to the ID of an **Ecs**, **Eni**, or **Eci** resource.
   * 
   * - If the server group type is **Ip**, set this parameter to an IP address.
   * 
   * >Server groups of the Function Compute type do not support replacing backend servers. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the server group type.
   * 
   * @example
   * ecs-123
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * If **ServerType** is set to **Eni**, you can specify the primary private IP address or a secondary private IP address of the ENI.
   * 
   * @example
   * 192.168.1.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The backend server type. You can specify up to 200 servers in a single call. Valid values:
   * - **Ecs**: ECS instance.
   * - **Eni**: ENI network interface controller (NIC) instance.
   * - **Eci**: ECI elastic container.
   * - **Ip**: IP address.
   * - **Fc**: Function Compute.
   * 
   * @example
   * ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. You can specify up to 200 servers in a single request.
   * 
   * Valid values: **0** to **100**. Default value: **100**. If the weight is set to **0**, no requests are forwarded to the backend server.
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

export class ReplaceServersInServerGroupRequestRemovedServers extends $dara.Model {
  /**
   * @remarks
   * The port used by the backend server. Valid values: **1** to **65535**. You can specify up to 200 servers in a single request.
   * 
   * @example
   * 81
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID. You can specify up to 200 servers in a single request.
   * 
   * - If the server group type is **Instance**, set this parameter to the ID of an **Ecs**, **Eni**, or **Eci** resource.
   * 
   * - If the server group type is **Ip**, set this parameter to an IP address.
   * 
   * >Server groups of the Function Compute type do not support replacing backend servers. You can call [ListServerGroups](https://help.aliyun.com/document_detail/213627.html) to query the server group type.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * If **ServerType** is set to **Eni**, you can specify the primary private IP address or a secondary private IP address of the ENI.
   * 
   * @example
   * 192.168.1.12
   */
  serverIp?: string;
  /**
   * @remarks
   * The backend server type. You can specify up to 200 servers in a single call. Valid values:
   * 
   * - **Ecs**: ECS instance.
   * - **Eni**: ENI network interface controller (NIC) instance.
   * - **Eci**: ECI elastic container.
   * - **Ip**: IP address.
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

export class ReplaceServersInServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of backend servers to add. You can specify up to 200 servers in a single request.
   * 
   * This parameter is required.
   */
  addedServers?: ReplaceServersInServerGroupRequestAddedServers[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a parameter value from your client to ensure uniqueness across different requests. ClientToken supports only ASCII characters.
   * 
   * > If you do not specify this parameter, the system uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may differ for each API request.
   * 
   * @example
   * 593B0448-D13E-4C56-AC0D-FDF0FDE0E9A3
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run without replacing backend servers in the server group. The system checks the required parameters, request syntax, and business limitations. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the check succeeds, an `HTTP 2xx` status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The backend servers to remove.
   * 
   * This parameter is required.
   */
  removedServers?: ReplaceServersInServerGroupRequestRemovedServers[];
  /**
   * @remarks
   * The server group ID.
   * 
   * >Server groups of the Function Compute type do not support replacing backend servers.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-5114d593o96qxy****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      addedServers: 'AddedServers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      removedServers: 'RemovedServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestAddedServers },
      clientToken: 'string',
      dryRun: 'boolean',
      removedServers: { 'type': 'array', 'itemType': ReplaceServersInServerGroupRequestRemovedServers },
      serverGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addedServers)) {
      $dara.Model.validateArray(this.addedServers);
    }
    if(Array.isArray(this.removedServers)) {
      $dara.Model.validateArray(this.removedServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


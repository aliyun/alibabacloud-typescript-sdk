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

export class ReplaceServersInServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The backend servers. You can specify at most 200 servers in each call.
   * 
   * This parameter is required.
   */
  addedServers?: ReplaceServersInServerGroupRequestAddedServers[];
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
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a `2xx` HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The backend servers that you want to remove.
   * 
   * This parameter is required.
   */
  removedServers?: ReplaceServersInServerGroupRequestRemovedServers[];
  /**
   * @remarks
   * The ID of the server group.
   * 
   * > You cannot perform this operation on a server group of the Function type.
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


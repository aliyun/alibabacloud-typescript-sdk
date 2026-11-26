// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupServersResponseBodyServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The port used by the backend server. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * Indicates whether remote IP is enabled. Valid values:
   *  
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * true
   */
  remoteIpEnabled?: boolean;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-qy042e1jabmprh****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The backend server ID.
   * 
   * >If **ServerType** is set to **Fc**, **ServerId** specifies the ARN of the Function Compute function.
   * 
   * @example
   * i-bp1f9kdprbgy9uiu****
   */
  serverId?: string;
  /**
   * @remarks
   * The specified IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  serverIp?: string;
  /**
   * @remarks
   * The server type of the backend server.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The status of the backend server. Valid values:
   * 
   * - **Adding**: being added.
   * - **Available**: available.
   * - **Configuring**: being configured.
   * - **Removing**: being removed.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The weight of the backend server. A server with a higher weight receives more requests.
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
      serverGroupId: 'ServerGroupId',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      status: 'Status',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      remoteIpEnabled: 'boolean',
      serverGroupId: 'string',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      status: 'string',
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

export class ListServerGroupServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records returned in this request.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * - If **NextToken** is empty, no next query exists.
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * caeba0bbb2be03f8****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF*****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of servers.
   */
  servers?: ListServerGroupServersResponseBodyServers[];
  /**
   * @remarks
   * The total number of records that match the specified filter conditions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      servers: 'Servers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      servers: { 'type': 'array', 'itemType': ListServerGroupServersResponseBodyServers },
      totalCount: 'number',
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


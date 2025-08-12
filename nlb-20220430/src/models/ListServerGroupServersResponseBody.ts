// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServerGroupServersResponseBodyServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * @example
   * ECS
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.2.1
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of backend server. Valid values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: elastic network interface (ENI)
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The status of the backend server. Valid values:
   * 
   * *   **Adding**
   * *   **Available**
   * *   **Configuring**
   * *   **Removing**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The weight of the backend server.
   * 
   * @example
   * 100
   */
  weight?: number;
  /**
   * @remarks
   * The zone ID of the server.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      port: 'Port',
      serverGroupId: 'ServerGroupId',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
      status: 'Status',
      weight: 'Weight',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      port: 'number',
      serverGroupId: 'string',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
      status: 'string',
      weight: 'number',
      zoneId: 'string',
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
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If this is your first query or no next query is to be sent, ignore this parameter.
   * *   If a next query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The backend servers.
   */
  servers?: ListServerGroupServersResponseBodyServers[];
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
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


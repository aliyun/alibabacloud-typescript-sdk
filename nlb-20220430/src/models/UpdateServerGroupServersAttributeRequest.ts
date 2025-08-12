// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServerGroupServersAttributeRequestServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at sings (@), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The port used by the backend server. Valid values: **1** to **65535**.
   * 
   * >  This parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * *   If the server group is of the **Instance** type, set this parameter to the IDs of servers of the **Ecs**, **Eni**, or **Eci** type.
   * *   If the server group is of the **Ip** type, set this parameter to IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP addresses of servers. If the server group type is **Ip**, set the ServerId parameter to IP addresses.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: Elastic Compute Service (ECS) instance
   * *   **Eni**: elastic network interface (ENI)
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the value is set to **0**, no requests are forwarded to the server.
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
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate this value. Ensure that the value is unique among all requests. Only ASCII characters are allowed.
   * 
   * >  If you do not specify this parameter, the value of **RequestId** is used.**** **RequestId** of each request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The backend servers. You can specify at most 200 backend servers in each call.
   * 
   * This parameter is required.
   */
  servers?: UpdateServerGroupServersAttributeRequestServers[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      servers: 'Servers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
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


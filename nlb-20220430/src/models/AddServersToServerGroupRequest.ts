// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddServersToServerGroupRequestServers extends $dara.Model {
  /**
   * @remarks
   * The description of the server.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, Chinese characters, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * ECS
   */
  description?: string;
  /**
   * @remarks
   * The port used by the backend server. Valid values: **0** to **65535**. If you do not specify this parameter, the default value **0** is used.
   * 
   * If the all-port forwarding feature is enabled for the server group, you do not need to specify a port when you add a backend server. In this case, the default value 0 is used, and NLB forwards traffic to the backend server based on the frontend request port. You can check whether the all-port forwarding feature is enabled by querying the **AnyPortEnabled** field returned by the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * - If the server group is of the **Instance** type, this parameter specifies the resource ID of an **Ecs**, **Eni**, or **Eci** resource.
   * 
   * - If the server group is of the **Ip** type, this parameter specifies an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the server. This parameter is required when the server group is of the **Ip** type.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The backend server type. Valid values:
   * 
   * - **Ecs**: an ECS instance.
   * - **Eni**: an elastic network interface (ENI).
   * - **Eci**: an Elastic Container Instance (ECI).
   * - **Ip**: an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the weight is set to **0**, no requests are forwarded to the backend server.
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

export class AddServersToServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values:
   * - **true**: prechecks the request without adding the servers. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, an error is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * - **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query region IDs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The list of backend servers.
   * 
   * > You can specify up to 200 servers in a single call.
   * 
   * This parameter is required.
   */
  servers?: AddServersToServerGroupRequestServers[];
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


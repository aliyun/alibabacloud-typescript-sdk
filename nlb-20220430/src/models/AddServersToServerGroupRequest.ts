// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddServersToServerGroupRequestServers extends $dara.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at sings (@), underscores (_), and hyphens (-).
   * 
   * @example
   * ECS
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server to provide services. Valid values: **0 to 65535**. If you do not set this parameter, the default value **0** is used.
   * 
   * If multi-port forwarding is enabled, you do not need to set this parameter. The default value 0 is used. NLB forwards requests to the requested ports. To determine whether multi-port forwarding is enabled, call the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation and check the value of the **AnyPortEnabled** parameter.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * *   If the server group is of the **Instance** type, set this parameter to the IDs of **Elastic Compute Service (ECS) instances**, **elastic network interfaces (ENIs)**, or **elastic container instances**.
   * *   If the server group is of the **Ip** type, set ServerId to IP addresses.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server. If the server group type is **Ip**, set the ServerId parameter to IP addresses.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: the ECS instance
   * *   **Eni**: the ENI
   * *   **Eci**: the elastic container instance
   * *   **Ip**: the IP address
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If this parameter is set to **0**, no requests are forwarded to the server.
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
   * The client token used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The value of **RequestId** is different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
   * *   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
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
   * The backend servers that you want to add.
   * 
   * >  You can add up to 200 backend servers in each call.
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


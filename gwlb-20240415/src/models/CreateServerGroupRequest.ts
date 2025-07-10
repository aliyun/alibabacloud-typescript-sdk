// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServerGroupRequestConnectionDrainConfig } from "./CreateServerGroupRequestConnectionDrainConfig";
import { CreateServerGroupRequestHealthCheckConfig } from "./CreateServerGroupRequestHealthCheckConfig";
import { CreateServerGroupRequestTag } from "./CreateServerGroupRequestTag";


export class CreateServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of connection draining.
   */
  connectionDrainConfig?: CreateServerGroupRequestConnectionDrainConfig;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * False
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The health check configurations.
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * The backend protocol. Valid value:
   * 
   * *   **GENEVE** (default)
   * 
   * @example
   * GENEVE
   */
  protocol?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **5TCH** (default): specifies consistent hashing that is based on the following factors: source IP address, destination IP address, source port, protocol, and destination port. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * *   **3TCH**: specifies consistent hashing that is based on the following factors: source IP address, destination IP address, and protocol. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * *   **2TCH**: specifies consistent hashing that is based on the following factors: source IP address and destination IP address. Requests that contain the same information based on the preceding factors are forwarded to the same backend server.
   * 
   * @example
   * 5TCH
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies how GWLB processes requests over existing connections when a backend server is not running as expected. Valid values:
   * 
   * *   **NoRebalance** (default): GWLB continues to forward requests over existing connections to the unavailable backend server.
   * *   **Rebalance**: GWLB forwards requests over existing connections to the remaining healthy backend servers.
   * 
   * @example
   * NoRebalance
   */
  serverFailoverMode?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * The name must be 2 to 128 characters in length, and can contain digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
   * 
   * @example
   * testServerGroupName
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The type of the server group. Valid values:
   * 
   * *   **Instance** (default): allows you to specify resources of the **Ecs**, **Eni**, or **Eci** type.
   * *   **Ip**: allows you to add servers by specifying their IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tag keys.
   * 
   * You can specify at most 20 tags in each call.
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * > If **ServerGroupType** is set to **Instance**, only servers in the specified VPC can be added to the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainConfig: 'ConnectionDrainConfig',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      protocol: 'Protocol',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverFailoverMode: 'ServerFailoverMode',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionDrainConfig: CreateServerGroupRequestConnectionDrainConfig,
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      protocol: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverFailoverMode: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      vpcId: 'string',
    };
  }

  validate() {
    if(this.connectionDrainConfig && typeof (this.connectionDrainConfig as any).validate === 'function') {
      (this.connectionDrainConfig as any).validate();
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


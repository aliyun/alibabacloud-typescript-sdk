// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVServerGroupBackendServersRequest extends $dara.Model {
  /**
   * @remarks
   * The backend servers that you want to add to the vServer group. Configure the following parameters:
   * 
   * *   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of ECS instances, ENIs, and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add an ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add an elastic container instance
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]
   */
  newBackendServers?: string;
  /**
   * @remarks
   * The backend servers that you want to replace. Configure the following parameters:
   * 
   * *   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
   * 
   * *   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
   * 
   * *   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (_).
   * 
   * *   **Type**: the type of the backend server. Valid values:
   * 
   *     *   **ecs** (default): ECS instance
   *     *   **eni**: ENI
   *     *   **eci**: elastic container instance
   * 
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * *   **Port**: the backend port.
   * 
   * Examples:
   * 
   * *   Add an ECS instance:
   * 
   *     `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-112" }]`
   * 
   * *   Add an ENI with multiple IP addresses:
   * 
   *     `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "``172.166.**.**``", "Port":"80","Description":"test-113" }]`
   * 
   * *   Add an elastic container instance
   * 
   *     `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "``192.168.**.**``", "Port":"80","Description":"test-114" }]`
   * 
   * >  You can add only running backend servers to SLB instances. You can specify at most 20 backend servers in each call.
   * 
   * @example
   * [{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"80","Description":"test-112" }]
   */
  oldBackendServers?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Classic Load Balancer (CLB) instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * This parameter is required.
   * 
   * @example
   * rsp-cige6j****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      newBackendServers: 'NewBackendServers',
      oldBackendServers: 'OldBackendServers',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newBackendServers: 'string',
      oldBackendServers: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


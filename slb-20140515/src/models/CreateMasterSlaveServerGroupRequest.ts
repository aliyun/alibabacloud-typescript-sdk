// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMasterSlaveServerGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * 1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMasterSlaveServerGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1hv944r69al4j******
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The backend servers in the primary/secondary server group. Each primary/secondary server group consists of two backend servers.
   * 
   * Configure the following parameters:
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
   * >  You can specify ENIs and elastic container instances as backend servers only for high-performance CLB instances.
   * 
   * *   **ServerIp**: the IP address of the ENI or elastic container instance.
   * 
   * *   **Port**: the backend port.
   * 
   * *   **ServerType**: Specify the primary and secondary backend servers in a string. Valid values:
   * 
   *     *   **Master**: primary server
   *     *   **Slave**: secondary server
   * 
   * @example
   * [{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"82","ServerType":"Master","Description":"test-112" },  { "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",  "Port":"84","ServerType":"Slave","Description":"test-112" }]
   */
  masterSlaveBackendServers?: string;
  /**
   * @remarks
   * The name of the primary/secondary server group.
   * 
   * @example
   * Group1
   */
  masterSlaveServerGroupName?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Classic Load Balancer (CLB) instance.
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
   * The tags.
   */
  tag?: CreateMasterSlaveServerGroupRequestTag[];
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      masterSlaveBackendServers: 'MasterSlaveBackendServers',
      masterSlaveServerGroupName: 'MasterSlaveServerGroupName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      masterSlaveBackendServers: 'string',
      masterSlaveServerGroupName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': CreateMasterSlaveServerGroupRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


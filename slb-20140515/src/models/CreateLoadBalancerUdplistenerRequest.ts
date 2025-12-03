// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLoadBalancerUDPListenerRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key must be 1 to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
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

export class CreateLoadBalancerUDPListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 123
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off** (default): no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application. After a whitelist is configured, only IP addresses in the whitelist can access the CLB listener. Risks may arise if the whitelist is improperly set.
   * 
   *     If a whitelist is configured but no IP address is added to the whitelist, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are blocked. Blacklists apply to scenarios in which you want to deny access from specific IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If the **VServerGroupId** parameter is not set, this parameter is required.
   * 
   * @example
   * 80
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * **-1**: For a pay-by-data-transfer Internet-facing CLB instance, you can set this parameter to **-1**. This way, the bandwidth of the listener is unlimited.
   * 
   * This parameter is required.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * udp_80
   */
  description?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * If this parameter is not set, the backend port specified by **BackendServerPort** is used for health checks.
   * 
   * @example
   * 80
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check.
   * 
   * If a backend server, such as an Elastic Compute Service (ECS) instance, does not respond to a probe packet within the specified timeout period, the server fails the health check. Unit: seconds
   * 
   * Valid values: **1** to **300**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on** (default): yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * Valid values: **1** to **65535**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-bp1ygod3yctvg1y7****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You can set only one of the VServerGroupId and MasterSlaveServerGroupId parameters.
   * 
   * @example
   * rsp-0bfucwu****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the CLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than those with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * *   **qch**: specifies consistent hashing that is based on QUIC connection IDs. Requests that contain the same QUIC connection ID are distributed to the same backend server.
   * 
   * Only high-performance CLB instances support the sch, tch, and qch consistent hashing algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: CreateLoadBalancerUDPListenerRequestTag[];
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j8****
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The response string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * ok
   */
  healthCheckExp?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 3
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The request string for UDP listener health checks. The string must be 1 to 64 characters in length and can contain only letters and digits.
   * 
   * @example
   * hello
   */
  healthCheckReq?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      description: 'Description',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      tag: 'Tag',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
      healthCheckExp: 'healthCheckExp',
      healthCheckInterval: 'healthCheckInterval',
      healthCheckReq: 'healthCheckReq',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      description: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckSwitch: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerUDPListenerRequestTag },
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
      healthCheckExp: 'string',
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
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


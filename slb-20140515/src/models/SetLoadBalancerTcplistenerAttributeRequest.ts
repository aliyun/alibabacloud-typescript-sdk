// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetLoadBalancerTCPListenerAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network access control list (ACL) that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * 12333
   */
  aclId?: string;
  /**
   * @remarks
   * Specifies whether to enable access control. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  aclStatus?: string;
  /**
   * @remarks
   * The type of the network ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios where you want to allow only specific IP addresses to access an application. Your service may be adversely affected if the allowlist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the ACL are rejected. Blacklists apply to scenarios where you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is required.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values: **-1** and **1** to **5120**.
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, you can set this parameter to **-1**, which specifies unlimited bandwidth.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of the maximum bandwidth values of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * 43
   */
  bandwidth?: number;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * off
   */
  connectionDrain?: string;
  /**
   * @remarks
   * The timeout period of connection draining. This parameter is required if **ConnectionDrain** is set to **on**. Unit: seconds.
   * 
   * Valid values: **10** to **900**.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 256 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_).
   * 
   * @example
   * tcp_80
   */
  description?: string;
  /**
   * @remarks
   * The timeout period of a connection. Unit: seconds. Valid values: **10** to **900**.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * If you do not set this parameter, the port specified by the **BackendServerPort** parameter is used.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period of a health check.
   * 
   * If a backend ECS instance does not return a health check response within the specified timeout period, the server fails the health check.
   * 
   * Valid values: **1** to **300**. Unit: seconds.
   * 
   * >  If the value of the **HealthCheckConnectTimeout** parameter is smaller than that of the **HealthCheckInterval** parameter, the timeout period specified by the **HCTimeout** parameter is ignored and the period of time specified by the **HealthCheckInterval** parameter is used as the timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. You can set this parameter when the TCP listener requires HTTP health checks. If you do not set this parameter, TCP health checks are performed.
   * 
   * *   **$_ip**: the private IP addresses of the backend servers.
   * 
   *     If you do not set the HealthCheckHost parameter or set the parameter to $SERVER_IP, the CLB instance uses the private IP addresses of backend servers for health checks.
   * 
   * *   **domain**: The domain name is 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * 192.168.XX.XX
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check. Separate multiple HTTP status codes with commas (,).
   * 
   * Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * Valid values: **1** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheckSwitch?: string;
  /**
   * @remarks
   * The type of the health check. Valid values: **tcp** and **http**.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URI that is used for health checks. The URI must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URI must start with a forward slash (/) but cannot be a single forward slash (/).
   * 
   * You can set this parameter when the TCP listener requires HTTP health checks.
   * 
   * If you do not set this parameter, TCP health checks are performed.
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
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
   * lb-bp1ygod3yctvg1y****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * Specifies whether to use a primary/secondary server group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * You cannot set both **VserverGroup** and **MasterSlaveServerGroup** to **on**.
   * 
   * @example
   * on
   */
  masterSlaveServerGroup?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group.
   * 
   * >  You can set only one of the VServerGroupId and MasterSlaveServerGroupId parameters.
   * 
   * @example
   * rsp-cige****
   */
  masterSlaveServerGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The timeout period of session persistence. Valid values: **0** to **3600**. Unit: seconds.
   * 
   * Default value: **0**. If the default value is used, the system disables session persistence.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  proxyProtocolV2Enabled?: boolean;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can query the region ID from the [Regions and zones](https://help.aliyun.com/document_detail/40654.html) list or by calling the [DescribeRegions](~~DescribeRegions~~) operation.
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
   * *   **wrr**: Backend servers that have higher weights receive more requests than backend servers that have lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * 
   * > *   Only high-performance CLB instances support the **sch** and **tch** algorithms.
   * > *   CLB does not support converting the **wrr** and **rr** algorithms to sch or tch. You cannot switch the hash algorithm from one to another.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * Specifies whether to enable the SynProxy feature of CLB for protection. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * We recommend that you use the default value of this parameter.
   * 
   * @example
   * enable
   */
  synProxy?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * Specifies whether to use a vServer group. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * >  You cannot set both **VserverGroup** and **MasterSlaveServerGroup** to **on**.
   * 
   * @example
   * on
   */
  VServerGroup?: string;
  /**
   * @remarks
   * The ID of the vServer group.
   * 
   * @example
   * rsp-cige6j5****
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckSwitch: 'HealthCheckSwitch',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroup: 'MasterSlaveServerGroup',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduler: 'Scheduler',
      synProxy: 'SynProxy',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroup: 'VServerGroup',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclStatus: 'string',
      aclType: 'string',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckSwitch: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroup: 'string',
      masterSlaveServerGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduler: 'string',
      synProxy: 'string',
      unhealthyThreshold: 'number',
      VServerGroup: 'string',
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


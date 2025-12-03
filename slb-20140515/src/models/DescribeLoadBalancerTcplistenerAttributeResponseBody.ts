// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds extends $dara.Model {
  aclId?: string[];
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.aclId)) {
      $dara.Model.validateArray(this.aclId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. Valid values of N: **1** to **20**. The tag value cannot be an empty string. The tag key can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of tag N. Valid values of N: **1** to **20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot start with `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerTCPListenerAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLoadBalancerTCPListenerAttributeResponseBodyTagsTag },
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

export class DescribeLoadBalancerTCPListenerAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network ACL that is associated with the listener.
   * 
   * If **AclStatus** is set to **on**, this parameter is returned.
   * 
   * @example
   * acl-uf60jwfi******
   */
  aclId?: string;
  /**
   * @remarks
   * The IDs of the ACLs.
   */
  aclIds?: DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds;
  /**
   * @remarks
   * Indicates whether access control is enabled. Valid values:
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
   * The type of the ACL. Valid values:
   * 
   * *   **white**: a whitelist. Only requests from the IP addresses or CIDR blocks in the network ACL are forwarded. Whitelists apply to scenarios in which you want to allow only specific IP addresses to access an application.
   * 
   *     Your service may be adversely affected if the whitelist is not properly configured. After a whitelist is configured, only requests from IP addresses that are added to the whitelist are forwarded by the listener.
   * 
   *     If you enable a whitelist but do not add an IP address to the ACL, the listener forwards all requests.
   * 
   * *   **black**: a blacklist. All requests from the IP addresses or CIDR blocks in the network ACL are rejected. Blacklists apply to scenarios in which you want to block access from specified IP addresses to an application.
   * 
   *     If a blacklist is configured for a listener but no IP address is added to the blacklist, the listener forwards all requests.
   * 
   * >  If **AclStatus** is set to **on**, this parameter is returned.
   * 
   * @example
   * white
   */
  aclType?: string;
  /**
   * @remarks
   * The backend port used by the CLB instance.
   * 
   * >  If the listener is associated with a vServer group, this parameter is not returned.
   * 
   * @example
   * 443
   */
  backendServerPort?: number;
  /**
   * @remarks
   * The maximum bandwidth of the listener. Unit: Mbit/s. Valid values:
   * 
   * *   **-1**: For a pay-by-data-transfer Internet-facing CLB instance, this parameter is set to -1. This indicates that the bandwidth of the listener is unlimited.
   * *   **1** to **5120**: For a pay-by-bandwidth Internet-facing CLB instance, you can specify the maximum bandwidth of each listener. The sum of maximum bandwidth of all listeners cannot exceed the maximum bandwidth of the CLB instance.
   * 
   * @example
   * -1
   */
  bandwidth?: number;
  /**
   * @remarks
   * Indicates whether connection draining is enabled. If **ConnectionDrain** is set to **on**, the parameter is returned. Valid values:
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
   * The timeout period of connection draining. If **ConnectionDrain** is set to **on**, the parameter is returned.
   * 
   * Valid values: 10 to 900. Unit: seconds.
   * 
   * @example
   * 300
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * TCP_80
   */
  description?: string;
  /**
   * @remarks
   * The timeout period of a connection.
   * 
   * @example
   * 500
   */
  establishedTimeout?: number;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **on**: yes
   * *   **off**: no
   * 
   * @example
   * on
   */
  healthCheck?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**. If this parameter is not set, the port specified by BackendServerPort is used for health checks.
   * 
   * @example
   * 8080
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that is used for health checks. Valid values:
   * 
   * *   **$_ip**: the private IP addresses of backend servers. If you do not set the HealthCheckDomain parameter or set the parameter to $_ip, the CLB instance uses the private IP address of each backend server for health checks.
   * *   **domain**: The domain name is 1 to 80 characters in length, and can contain letters, digits, periods (.), and hyphens (-).
   * 
   * @example
   * www.domain.com
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * The HTTP status code for a successful health check.
   * 
   * @example
   * http_2xx
   */
  healthCheckHttpCode?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Valid values: **1** to **50**. Unit: seconds.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  /**
   * @remarks
   * The health check method.
   * 
   * @example
   * tcp
   */
  healthCheckMethod?: string;
  /**
   * @remarks
   * The health check method that is used by the TCP listener.
   * 
   * Valid values: **tcp** and **http**.
   * 
   * @example
   * tcp
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The URL that is used for health checks. The URL must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), and ampersands (&). The URL is not a single forward slash (/) but it starts with a forward slash (/).
   * 
   * @example
   * /test/index.html
   */
  healthCheckURI?: string;
  /**
   * @remarks
   * The healthy threshold. The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status is changed from **fail** to **success**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The frontend port used by the CLB instance.
   * 
   * @example
   * 110
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1ygod3yctvg1y****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The ID of the primary/secondary server group that is associated with the listener.
   * 
   * @example
   * rsp-0bfucw****
   */
  masterSlaveServerGroupId?: string;
  /**
   * @remarks
   * The timeout period of session persistence.
   * 
   * Valid values: **0** to **3600**. Unit: seconds. Default value: **0**. If the default value is used, the system disables session persistence.
   * 
   * @example
   * 0
   */
  persistenceTimeout?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol is used to pass client IP addresses to backend servers. Valid values:
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
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling algorithm.
   * 
   * *   **wrr** (default): Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are distributed to backend servers in sequence.
   * *   **sch**: specifies consistent hashing that is based on source IP addresses. Requests from the same source IP address are distributed to the same backend server.
   * *   **tch**: specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are distributed to the same backend server.
   * 
   * > Only high-performance CLB instances support the sch and tch algorithms.
   * 
   * @example
   * wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **running**
   * *   **stopped**
   * 
   * @example
   * stopped
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the SynProxy feature of CLB is enabled for protection.
   * 
   * We recommend that you use the default value of this parameter. Valid values:
   * 
   * *   **enable**: yes
   * *   **disable**: no
   * 
   * @example
   * disable
   */
  synProxy?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeLoadBalancerTCPListenerAttributeResponseBodyTags;
  /**
   * @remarks
   * The unhealthy threshold. The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status is changed from **success** to **fail**. Valid values: **2** to **10**.
   * 
   * @example
   * 4
   */
  unhealthyThreshold?: number;
  /**
   * @remarks
   * The ID of the associated server group.
   * 
   * @example
   * rsp-cige6******8
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      aclIds: 'AclIds',
      aclStatus: 'AclStatus',
      aclType: 'AclType',
      backendServerPort: 'BackendServerPort',
      bandwidth: 'Bandwidth',
      connectionDrain: 'ConnectionDrain',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      description: 'Description',
      establishedTimeout: 'EstablishedTimeout',
      healthCheck: 'HealthCheck',
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckMethod: 'HealthCheckMethod',
      healthCheckType: 'HealthCheckType',
      healthCheckURI: 'HealthCheckURI',
      healthyThreshold: 'HealthyThreshold',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      masterSlaveServerGroupId: 'MasterSlaveServerGroupId',
      persistenceTimeout: 'PersistenceTimeout',
      proxyProtocolV2Enabled: 'ProxyProtocolV2Enabled',
      requestId: 'RequestId',
      scheduler: 'Scheduler',
      status: 'Status',
      synProxy: 'SynProxy',
      tags: 'Tags',
      unhealthyThreshold: 'UnhealthyThreshold',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      aclIds: DescribeLoadBalancerTCPListenerAttributeResponseBodyAclIds,
      aclStatus: 'string',
      aclType: 'string',
      backendServerPort: 'number',
      bandwidth: 'number',
      connectionDrain: 'string',
      connectionDrainTimeout: 'number',
      description: 'string',
      establishedTimeout: 'number',
      healthCheck: 'string',
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckHttpCode: 'string',
      healthCheckInterval: 'number',
      healthCheckMethod: 'string',
      healthCheckType: 'string',
      healthCheckURI: 'string',
      healthyThreshold: 'number',
      listenerPort: 'number',
      loadBalancerId: 'string',
      masterSlaveServerGroupId: 'string',
      persistenceTimeout: 'number',
      proxyProtocolV2Enabled: 'boolean',
      requestId: 'string',
      scheduler: 'string',
      status: 'string',
      synProxy: 'string',
      tags: DescribeLoadBalancerTCPListenerAttributeResponseBodyTags,
      unhealthyThreshold: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    if(this.aclIds && typeof (this.aclIds as any).validate === 'function') {
      (this.aclIds as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


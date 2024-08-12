// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddServersToServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not add the servers to the server group. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
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
   * A list of backend servers.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
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
   * The ID of the server group.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AddServersToServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddServersToServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The additional certificates. You can associate up to 15 additional certificates with a listener in each request.
   * 
   * This parameter is required.
   */
  additionalCertificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID. You must specify the ID of a listener that uses SSL over TCP.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCertificateIds: 'AdditionalCertificateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCertificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-93F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AssociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AssociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the EIP bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-bp1pzf0ym72pu3y76****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not associate the EIP bandwidth plan with the NLB instance. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachCommonBandwidthPackageToLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachCommonBandwidthPackageToLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachCommonBandwidthPackageToLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
   * The mappings between zones and vSwitches.
   * 
   * > You can add at most one zone in each call.
   * 
   * This parameter is required.
   */
  zoneMappings?: CancelShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CancelShiftLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CancelShiftLoadBalancerZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CancelShiftLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy.
   * 
   * Valid values:
   * 
   * *   HTTP1Only
   * *   HTTP2Only
   * *   HTTP2Preferred
   * *   HTTP2Optional
   * 
   * @example
   * ALPN
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The certificate authority (CA) certificates. This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * > You can specify only one CA certificate.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates. This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * > You can specify only one server certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** specifies that the number of connections is unlimited.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The last port in the listener port range. Valid values: **0** to **65535**. The number of the last port must be greater than the number of the first port.
   * 
   * > This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 566
   */
  endPort?: number;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds. Valid values: **1** to **900**. Default value: **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcp_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener port. Valid values: **0** to **65535**.
   * 
   * If you set the value to **0**, the listener listens by port range. If you set the value to **0**, you must specify **StartPort** and **EndPort**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the Network Load Balancer (NLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The maximum size of a TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged.
   * 
   * > This parameter is supported only by TCP listeners and listeners that use SSL over TCP.
   * 
   * @example
   * 43
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: CreateListenerRequestProxyProtocolV2Config;
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
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The security policy ID. System security policies and custom security policies are supported.
   * 
   * Valid values: **tls_cipher_policy_1_0** (default), **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * 
   * > This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listener port range. Valid values: **0** to **65535**.
   * 
   * > This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 244
   */
  startPort?: number;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateListenerRequestTag[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      endPort: 'number',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: CreateListenerRequestProxyProtocolV2Config,
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'number',
      tag: { 'type': 'array', 'itemType': CreateListenerRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy.
   * 
   * Valid values:
   * 
   * *   HTTP1Only
   * *   HTTP2Only
   * *   HTTP2Preferred
   * *   HTTP2Optional
   * 
   * @example
   * ALPN
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The certificate authority (CA) certificates. This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * > You can specify only one CA certificate.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates. This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * > You can specify only one server certificate.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** specifies that the number of connections is unlimited.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The last port in the listener port range. Valid values: **0** to **65535**. The number of the last port must be greater than the number of the first port.
   * 
   * > This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 566
   */
  endPort?: number;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds. Valid values: **1** to **900**. Default value: **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcp_80
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener port. Valid values: **0** to **65535**.
   * 
   * If you set the value to **0**, the listener listens by port range. If you set the value to **0**, you must specify **StartPort** and **EndPort**.
   * 
   * This parameter is required.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the Network Load Balancer (NLB) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The maximum size of a TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged.
   * 
   * > This parameter is supported only by TCP listeners and listeners that use SSL over TCP.
   * 
   * @example
   * 43
   */
  mss?: number;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass client IP addresses to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2ConfigShrink?: string;
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
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The security policy ID. System security policies and custom security policies are supported.
   * 
   * Valid values: **tls_cipher_policy_1_0** (default), **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * 
   * > This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listener port range. Valid values: **0** to **65535**.
   * 
   * > This parameter is required when **ListenerPort** is set to **0**.
   * 
   * @example
   * 244
   */
  startPort?: number;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateListenerShrinkRequestTag[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2ConfigShrink: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      endPort: 'number',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2ConfigShrink: 'string',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'number',
      tag: { 'type': 'array', 'itemType': CreateListenerShrinkRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      listenerId: 'ListenerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      listenerId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **ipv4:** IPv4. This is the default value.
   * *   **DualStack:** dual stack.
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IPv4 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the virtual private cloud (VPC) where the NLB instance is deployed.
   * 
   * >  To enable a public IPv6 address for an NLB instance, call the [EnableLoadBalancerIpv6Internet](https://help.aliyun.com/document_detail/445878.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the EIP bandwidth plan that is associated with the Internet-facing NLB instance.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request is different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: CreateLoadBalancerRequestDeletionProtectionConfig;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. This is the default value. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The billing settings of the NLB instance.
   */
  loadBalancerBillingConfig?: CreateLoadBalancerRequestLoadBalancerBillingConfig;
  /**
   * @remarks
   * The name of the NLB instance.
   * 
   * The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The type of the instance. Set the value to **network**, which specifies an NLB instance.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: CreateLoadBalancerRequestModificationProtectionConfig;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateLoadBalancerRequestTag[];
  /**
   * @remarks
   * The ID of the VPC where the NLB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. You must add at least two zones. You can add a maximum of 10 zones.
   * 
   * This parameter is required.
   */
  zoneMappings?: CreateLoadBalancerRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      dryRun: 'DryRun',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      clientToken: 'string',
      deletionProtectionConfig: CreateLoadBalancerRequestDeletionProtectionConfig,
      dryRun: 'boolean',
      loadBalancerBillingConfig: CreateLoadBalancerRequestLoadBalancerBillingConfig,
      loadBalancerName: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: CreateLoadBalancerRequestModificationProtectionConfig,
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': CreateLoadBalancerRequestTag },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': CreateLoadBalancerRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadbalancerId?: string;
  /**
   * @remarks
   * The ID of the order for the NLB instance.
   * 
   * @example
   * 20230000
   */
  orderId?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loadbalancerId: 'LoadbalancerId',
      orderId: 'OrderId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadbalancerId: 'string',
      orderId: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   * 
   * This parameter is required.
   */
  ciphers?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: checks the request but does not create the security policy. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The name of the security policy.
   * 
   * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * 标签列表。
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateSecurityPolicyRequestTag[];
  /**
   * @remarks
   * The supported versions of the Transport Layer Security (TLS) protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * This parameter is required.
   */
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyName: 'SecurityPolicyName',
      tag: 'Tag',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyName: 'string',
      tag: { 'type': 'array', 'itemType': CreateSecurityPolicyRequestTag },
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **ipv4** (default): IPv4
   * *   **DualStack**: dual stack
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable all-port forwarding. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds. Valid values: **0** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the health check feature.
   */
  healthCheckConfig?: CreateServerGroupRequestHealthCheckConfig;
  /**
   * @remarks
   * Specifies whether to enable client IP preservation. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   * 
   * **if can be null:**
   * false
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The protocol used to forward requests to the backend servers. Valid values:
   * 
   * *   **TCP** (default)
   * *   **UDP**
   * *   **TCPSSL**
   * 
   * @example
   * TCP
   */
  protocol?: string;
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
   * The ID of the resource group to which the server group belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The scheduling algorithm. Valid values:
   * 
   * *   **Wrr:** The weighted round-robin algorithm is used. Backend servers with higher weights receive more requests than backend servers with lower weights. This is the default value.
   * *   **rr:** The round-robin algorithm is used. Requests are forwarded to backend servers in sequence.
   * *   **sch:** Source IP hashing is used. Requests from the same source IP address are forwarded to the same backend server.
   * *   **tch:** Four-element hashing is used. It specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are forwarded to the same backend server.
   * *   **qch**: QUIC ID hashing. Requests that contain the same QUIC ID are forwarded to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The name of the server group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * NLB_ServerGroup
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance**: allows you to add servers of the **Ecs**, **Ens**, or **Eci** type. This is the default value.
   * *   **Ip**: allows you to add servers by specifying IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * **if can be null:**
   * true
   */
  tag?: CreateServerGroupRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the server group belongs.
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
      addressIPVersion: 'AddressIPVersion',
      anyPortEnabled: 'AnyPortEnabled',
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverGroupName: 'ServerGroupName',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      anyPortEnabled: 'boolean',
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: CreateServerGroupRequestHealthCheckConfig,
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      scheduler: 'string',
      serverGroupName: 'string',
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': CreateServerGroupRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not delete the listener. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to only precheck this request. Valid values:
   * 
   * *   **true**: prechecks the request without deleting the NLB instance. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can only contain ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can only contain ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * The ID of the server group.
   * 
   * This parameter is required.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHdMonitorRegionConfigRequest extends $tea.Model {
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHdMonitorRegionConfigResponseBody extends $tea.Model {
  /**
   * @example
   * hdmonitor-cn-hangzhou-223794579283657556
   */
  logProject?: string;
  /**
   * @example
   * hdmonitor-cn-hangzhou-metricStore-1
   */
  metricStore?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      metricStore: 'MetricStore',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      metricStore: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHdMonitorRegionConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeHdMonitorRegionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeHdMonitorRegionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsRequest extends $tea.Model {
  /**
   * @remarks
   * The supported natural language. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * *   **ja**: Japanese
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The service code. Set the value to **nlb**.
   * 
   * @example
   * nlb
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of regions.
   */
  regions?: DescribeRegionsResponseBodyRegions[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The supported natural language. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * *   **ja**: Japanese
   * 
   * @example
   * zh-CN
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the region to which the zone belongs. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The service code. Set the value to **nlb**.
   * 
   * @example
   * nlb
   */
  serviceCode?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      clientToken: 'ClientToken',
      regionId: 'RegionId',
      serviceCode: 'ServiceCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      clientToken: 'string',
      regionId: 'string',
      serviceCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The list of zones.
   */
  zones?: DescribeZonesResponseBodyZones[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      zones: { 'type': 'array', 'itemType': DescribeZonesResponseBodyZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCommonBandwidthPackageFromLoadBalancerRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the EIP bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-bp1pzf0ym72pu3y76****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not disassociate the NLB instance from the EIP bandwidth plan. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      bandwidthPackageId: 'BandwidthPackageId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCommonBandwidthPackageFromLoadBalancerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachCommonBandwidthPackageFromLoadBalancerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachCommonBandwidthPackageFromLoadBalancerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachCommonBandwidthPackageFromLoadBalancerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisableLoadBalancerIpv6InternetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisableLoadBalancerIpv6InternetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisableLoadBalancerIpv6InternetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The additional certificates. You can disassociate up to 15 additional certificates from a listener in each request.
   * 
   * This parameter is required.
   */
  additionalCertificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID. You must specify the ID of a listener that uses SSL over TCP.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the Network Load Balancer (NLB) instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalCertificateIds: 'AdditionalCertificateIds',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalCertificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 365F4154-92F6-4AE4-92F8-7FF34B540710
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DisassociateAdditionalCertificatesWithListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DisassociateAdditionalCertificatesWithListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DisassociateAdditionalCertificatesWithListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not change the network type of the NLB instance. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnableLoadBalancerIpv6InternetResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnableLoadBalancerIpv6InternetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnableLoadBalancerIpv6InternetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * This parameter is required.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponseBody extends $tea.Model {
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
   * The state of the task. Valid values:
   * 
   * *   **Succeeded**: The task is successful.
   * *   **processing**: The ticket is being executed.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetJobStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetJobStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** of each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: checks the request but does not query the listener details. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**
   * *   **HTTP2Only**
   * *   **HTTP2Preferred**
   * *   **HTTP2Optional**
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificates. Only one CA certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates. Only one server certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** specifies that the number of connections is unlimited.
   * 
   * @example
   * 1000
   */
  cps?: number;
  /**
   * @remarks
   * The last port in the listening port range. Valid values: **0** to **65535**. The number of the last port must be smaller than that of the first port.
   * 
   * @example
   * 455
   */
  endPort?: string;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsn-ga6sjjcll6ou34l1et****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port. Valid values: **0** to **65535**. A value of **0** specifies all ports. If you set the value to **0**, you must also set the **StartPort** and **EndPort** parameters.
   * 
   * @example
   * 233
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Stopping**: The listener is being stopped.
   * *   **Stopped**: The listener is stopped.
   * *   **Starting**: The listener is being started.
   * *   **Deleting**: The listener is being deleted.
   * *   **Deleted**: The listener is deleted.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The size of the largest TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged.
   * 
   * >  This parameter is supported only by listeners that use SSL over TCP.
   * 
   * @example
   * 166
   */
  mss?: number;
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
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: GetListenerAttributeResponseBodyProxyProtocolV2Config;
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether fine-grained monitoring is enabled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy. System security policies and custom security policies are supported.
   * 
   * Valid values: **tls_cipher_policy_1_0**, **tls_cipher_policy_1_1**, **tls_cipher_policy_1_2**, **tls_cipher_policy_1_2_strict**, and **tls_cipher_policy_1_2_strict_with_1_3**.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listening port range. Valid values: **0** to **65535**.
   * 
   * @example
   * 233
   */
  startPort?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: GetListenerAttributeResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      cps: 'Cps',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      requestId: 'RequestId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      cps: 'number',
      endPort: 'string',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: GetListenerAttributeResponseBodyProxyProtocolV2Config,
      regionId: 'string',
      requestId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': GetListenerAttributeResponseBodyTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the listener of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
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
   * The ID of the region where the NLB instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBody extends $tea.Model {
  /**
   * @remarks
   * The health check status of the server groups that are associated with the listener.
   */
  listenerHealthStatus?: GetListenerHealthStatusResponseBodyListenerHealthStatus[];
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
   * - If **NextToken** is empty, it indicates that no next query is to be sent.
   * - If a value of **NextToken** is returned, the value is the token used for the next query.
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
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listenerHealthStatus: 'ListenerHealthStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerHealthStatus: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatus },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetListenerHealthStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetListenerHealthStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must ensure that it is unique among all requests. ClientToken can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: checks the request but does not query the listener details. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **DualStack**: dual stack
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The IPv4 network type of the NLB instance. Valid values:
   * 
   * *   **Internet** The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet** The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC in which the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the EIP bandwidth plan.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The maximum number of connections per second that can be created on the NLB instance. Valid values: **0** to **1000000**.
   * 
   * **0** indicates that the number of connections is unlimited.
   * 
   * @example
   * 100
   */
  cps?: number;
  /**
   * @remarks
   * The time when the NLB instance was created. This value is a UNIX timestamp.
   * 
   * Unit: milliseconds.
   * 
   * @example
   * 2022-07-02T02:49:05Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the NLB instance is accessible across zones. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The domain name of the NLB instance.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig;
  /**
   * @remarks
   * The IPv6 network type of the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. In this case, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing information of the NLB instance.
   */
  loadBalancerBillingConfig?: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig;
  /**
   * @remarks
   * The status of workloads on the NLB instance. Valid values:
   * 
   * *   **Abnormal**
   * *   **Normal**
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The NLB instance name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The NLB instance status. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. The listeners of NLB instances in the Inactive state do not forward traffic.
   * *   **Active**: The NLB instance is running.
   * *   **Provisioning**: The NLB instance is being created.
   * *   **Configuring**: The NLB instance is being modified.
   * *   **CreateFailed**: The system failed to create the NLB instance. In this case, you are not charged for the NLB instance. You can only delete the NLB instance.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which specifies NLB.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig;
  /**
   * @remarks
   * The information about the locked NLB instance. This parameter is returned only when `LoadBalancerBussinessStatus` is **Abnormal**.
   */
  operationLocks?: GetLoadBalancerAttributeResponseBodyOperationLocks[];
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the security group associated with the NLB instance.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The tags.
   */
  tags?: GetLoadBalancerAttributeResponseBodyTags[];
  /**
   * @remarks
   * The VPC ID of the NLB instance.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The list of zones and vSwitches in the zones. You must specify 2 to 10 zones.
   */
  zoneMappings?: GetLoadBalancerAttributeResponseBodyZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      cps: 'Cps',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      operationLocks: 'OperationLocks',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      cps: 'number',
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: GetLoadBalancerAttributeResponseBodyModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyOperationLocks },
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the certificate. Valid values:
   * 
   * *   **Server**: a server certificate.
   * *   **Ca**: Certificate Authority Certificate
   * 
   * @example
   * Server
   */
  certType?: string;
  /**
   * @remarks
   * The ID of the listener. Specify the ID of a listener that uses SSL over TCP.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-j49ht1jxxqyg45****@80
   */
  listenerId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the Network Load Balancer (NLB) instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      certType: 'CertType',
      listenerId: 'ListenerId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certType: 'string',
      listenerId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The server certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The certificates.
   */
  certificates?: ListListenerCertificatesResponseBodyCertificates[];
  /**
   * @remarks
   * The number of entries returned per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2198BD6D-9EBB-5E1C-9C48-E0ABB79CF831
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      certificateIds: 'CertificateIds',
      certificates: 'Certificates',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      certificates: { 'type': 'array', 'itemType': ListListenerCertificatesResponseBodyCertificates },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListListenerCertificatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenerCertificatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequest extends $tea.Model {
  /**
   * @remarks
   * The listener IDs.
   */
  listenerIds?: string[];
  /**
   * @remarks
   * The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The ID of the NLB instance. You can query up to 20 NLB instances at a time.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
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
   * NextToken	FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
  secSensorEnabled?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListListenersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      listenerIds: 'ListenerIds',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerIds: 'LoadBalancerIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerIds: { 'type': 'array', 'itemType': 'string' },
      listenerProtocol: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      secSensorEnabled: 'string',
      tag: { 'type': 'array', 'itemType': ListListenersRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBody extends $tea.Model {
  /**
   * @remarks
   * A list of listeners.
   */
  listeners?: ListListenersResponseBodyListeners[];
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
   * *   If **NextToken** is empty, it indicates that no next query is to be sent.
   * *   If a value of **NextToken** is returned, the value is the token used for the next query.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: { 'type': 'array', 'itemType': ListListenersResponseBodyListeners },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListListenersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListListenersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequest extends $tea.Model {
  /**
   * @remarks
   * The protocol version. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **DualStack**: dual stack
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IPv4 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The domain name of the NLB instance.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The type of IPv6 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The business status of the NLB instance. Valid values:
   * 
   * *   **Abnormal**: The NLB instance is not working as expected.
   * *   **Normal**: The NLB instance is working as expected.
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the NLB instance. You can query up to 20 NLB instances at a time.
   */
  loadBalancerIds?: string[];
  /**
   * @remarks
   * The name of the NLB instance. You can specify up to 20 names at a time.
   */
  loadBalancerNames?: string[];
  /**
   * @remarks
   * The status of the NLB instance. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. Listeners of NLB instances in the Inactive state do not forward traffic.
   * *   **Active**: The NLB instance is running.
   * *   **Provisioning**: The NLB instance is being created.
   * *   **Configuring**: The NLB instance is being modified.
   * *   **Deleting**: The NLB instance is being deleted.
   * *   **Deleted**: The NLB instance is deleted.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the Server Load Balancer (SLB) instance. Set the value to **network**, which specifies NLB.
   * 
   * @example
   * network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the NLB instance.
   */
  tag?: ListLoadBalancersRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the NLB instance is deployed. You can specify up to 10 VPC IDs at a time.
   */
  vpcIds?: string[];
  /**
   * @remarks
   * The name of the zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      DNSName: 'DNSName',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerIds: 'LoadBalancerIds',
      loadBalancerNames: 'LoadBalancerNames',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      vpcIds: 'VpcIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      DNSName: 'string',
      ipv6AddressType: 'string',
      loadBalancerBusinessStatus: 'string',
      loadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      loadBalancerNames: { 'type': 'array', 'itemType': 'string' },
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListLoadBalancersRequestTag },
      vpcIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The NLB instances.
   */
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
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
   * The token that determines the start point of the next query. Valid values:
   * 
   * *   If this is your first query and no subsequent queries are to be sent, ignore this parameter.
   * *   If a subsequent query is to be sent, set the parameter to the value of NextToken that is returned from the last call.
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
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLoadBalancersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListLoadBalancersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The IDs of the TLS security policies. You can specify at most 20 policy IDs in each call.
   */
  securityPolicyIds?: string[];
  /**
   * @remarks
   * The names of the TLS security policies. You can specify at most 20 policy names.
   */
  securityPolicyNames?: string[];
  /**
   * @remarks
   * The tags.
   */
  tag?: ListSecurityPolicyRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyIds: 'SecurityPolicyIds',
      securityPolicyNames: 'SecurityPolicyNames',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityPolicyIds: { 'type': 'array', 'itemType': 'string' },
      securityPolicyNames: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': ListSecurityPolicyRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If NextToken is empty, no next page exists.
   * *   If a value is returned for NextToken, specify the value in the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * A list of TLS security policies.
   */
  securityPolicies?: ListSecurityPolicyResponseBodySecurityPolicies[];
  /**
   * @remarks
   * The total number of entries returned.
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
      securityPolicies: 'SecurityPolicies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPolicies },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.
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
   * The ID of the server group.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The IDs of the servers.
   */
  serverIds?: string[];
  /**
   * @remarks
   * The IP addresses of the servers.
   */
  serverIps?: string[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      serverGroupId: 'ServerGroupId',
      serverIds: 'ServerIds',
      serverIps: 'ServerIps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      serverGroupId: 'string',
      serverIds: { 'type': 'array', 'itemType': 'string' },
      serverIps: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBody extends $tea.Model {
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
   * A list of backend servers.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServerGroupServersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServerGroupServersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
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
   * The ID of the resource group to which the server group belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The server group ID. You can specify up to 20 server group IDs in each call.
   */
  serverGroupIds?: string[];
  /**
   * @remarks
   * The names of the server groups to be queried. You can specify up to 20 names in each call.
   */
  serverGroupNames?: string[];
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance** : allows you to add servers of the **Ecs**, **Ens**, and **Eci** types.
   * *   **Ip**: allows you to add servers by specifying IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListServerGroupsRequestTag[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the server group belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      serverGroupIds: 'ServerGroupIds',
      serverGroupNames: 'ServerGroupNames',
      serverGroupType: 'ServerGroupType',
      tag: 'Tag',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      serverGroupIds: { 'type': 'array', 'itemType': 'string' },
      serverGroupNames: { 'type': 'array', 'itemType': 'string' },
      serverGroupType: 'string',
      tag: { 'type': 'array', 'itemType': ListServerGroupsRequestTag },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B28E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * A list of server groups.
   */
  serverGroups?: ListServerGroupsResponseBodyServerGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      serverGroups: 'ServerGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      serverGroups: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroups },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServerGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServerGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyRequest extends $tea.Model {
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
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5C057647-284B-5C67-A07E-4B8F3DABA9F9
   */
  requestId?: string;
  /**
   * @remarks
   * A list of TLS security policies.
   */
  securityPolicies?: ListSystemSecurityPolicyResponseBodySecurityPolicies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityPolicies: 'SecurityPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityPolicies: { 'type': 'array', 'itemType': ListSystemSecurityPolicyResponseBodySecurityPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSystemSecurityPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSystemSecurityPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **50**. Default value: **50**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   You do not need to specify this parameter for the first request.
   * *   You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of resource to query. Valid values:
   * 
   * *   **loadbalancer**: a Network Load Balancer (NLB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * *   **listener**: a listener
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The details about the resource and its tags, including the resource ID, the resource type, and the keys and values of the tags.
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  /**
   * @remarks
   * The total number of entries returned.
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
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerJoinSecurityGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The ID of the NLB instance to be associated with the security group.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
   * The security group ID of the instance.
   * 
   * This parameter is required.
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerJoinSecurityGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerJoinSecurityGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoadBalancerJoinSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoadBalancerJoinSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: checks the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to be disassociated.
   * 
   * This parameter is required.
   */
  securityGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      securityGroupIds: 'SecurityGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LoadBalancerLeaveSecurityGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: LoadBalancerLeaveSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: LoadBalancerLeaveSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the new resource group.
   * 
   * You can log on to the [Resource Management console](https://resourcemanager.console.aliyun.com/resource-groups) to view resource group IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * rg-aekzjcnrv3vvqhq
   */
  newResourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the bastion host for which you want to change the resource group.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-nrnrxwd15en27r****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **loadbalancer**: a Network Load Balancer (NLB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      newResourceGroupId: 'NewResourceGroupId',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      newResourceGroupId: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: MoveResourceGroupResponseBodyData;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: MoveResourceGroupResponseBodyData,
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: MoveResourceGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: MoveResourceGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * The backend servers that you want to add to the server group. You can specify up to 40 servers in each call.
   * 
   * This parameter is required.
   */
  servers?: RemoveServersFromServerGroupRequestServers[];
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
      servers: { 'type': 'array', 'itemType': RemoveServersFromServerGroupRequestServers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RemoveServersFromServerGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveServersFromServerGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHdMonitorRegionConfigRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hdmonitor-cn-hangzhou-223794579283657556
   */
  logProject?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hdmonitor-cn-hangzhou-metricStore-1
   */
  metricStore?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      metricStore: 'MetricStore',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      metricStore: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHdMonitorRegionConfigResponseBody extends $tea.Model {
  /**
   * @example
   * hdmonitor-cn-hangzhou-223794579283657556
   */
  logProject?: string;
  /**
   * @example
   * hdmonitor-cn-hangzhou-metricStore-1
   */
  metricStore?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      metricStore: 'MetricStore',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      metricStore: 'string',
      regionId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetHdMonitorRegionConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: SetHdMonitorRegionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SetHdMonitorRegionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
   * The mappings between zones and vSwitches.
   * 
   * > You can remove only one zone in each call.
   * 
   * This parameter is required.
   */
  zoneMappings?: StartShiftLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': StartShiftLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartShiftLoadBalancerZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StartShiftLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The listener ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      listenerId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopListenerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopListenerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: StopListenerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource. Valid values:
   * 
   * *   **loadbalancer**: a Network Load Balancer (NLB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: TagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: TagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to remove all tags from the specified resource. Valid values:
   * 
   * *   **true**: removes all tags from the specified resource.
   * *   **false**: does not remove all tags from the specified resource. This is the default value.
   * 
   * @example
   * false
   */
  all?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the system automatically uses the value of **RequestId** as the value of **ClientToken**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * *   **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the resource.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The type of the resource from which you want to remove tags. Valid values:
   * 
   * *   **loadbalancer**: a Network Load Balancer (NLB) instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * This parameter is required.
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The key of the tag that you want to remove. You can remove up to 20 tags in each call.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UntagResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UntagResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**: uses only HTTP 1.x. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
   * *   **HTTP2Only**: uses only HTTP 2.0.
   * *   **HTTP2Optional**: preferentially uses HTTP 1.x over HTTP 2.0. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0, and the priority of HTTP 1.0 is higher than the priority of HTTP 2.0.
   * *   **HTTP2Preferred**: preferentially uses HTTP 2.0 over HTTP 1.x. The priority of HTTP 2.0 is higher than the priority of HTTP 1.1, and the priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
   * 
   * > This parameter is required if AlpnEnabled is set to true.
   * 
   * @example
   * ALPN
   * 
   * **if can be null:**
   * true
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificates. Only one CA certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** specifies that the number of connections is unlimited.
   * 
   * @example
   * 10000
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not update the configurations of the listener. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Enter a name for the listener.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The size of the largest TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged. This parameter is supported only by listeners that use SSL over TCP.
   * 
   * @example
   * 344
   */
  mss?: number;
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
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: UpdateListenerAttributeRequestProxyProtocolV2Config;
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
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: UpdateListenerAttributeRequestProxyProtocolV2Config,
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable Application-Layer Protocol Negotiation (ALPN). Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**: uses only HTTP 1.x. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
   * *   **HTTP2Only**: uses only HTTP 2.0.
   * *   **HTTP2Optional**: preferentially uses HTTP 1.x over HTTP 2.0. The priority of HTTP 1.1 is higher than the priority of HTTP 1.0, and the priority of HTTP 1.0 is higher than the priority of HTTP 2.0.
   * *   **HTTP2Preferred**: preferentially uses HTTP 2.0 over HTTP 1.x. The priority of HTTP 2.0 is higher than the priority of HTTP 1.1, and the priority of HTTP 1.1 is higher than the priority of HTTP 1.0.
   * 
   * > This parameter is required if AlpnEnabled is set to true.
   * 
   * @example
   * ALPN
   * 
   * **if can be null:**
   * true
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * The CA certificates. Only one CA certificate is supported.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable mutual authentication. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificates.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** specifies that the number of connections is unlimited.
   * 
   * @example
   * 10000
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether only to precheck the request. Valid values:
   * 
   * *   **true**: prechecks the request but does not update the configurations of the listener. The system prechecks the required parameters, request syntax, and limits. If the request fails the precheck, an error message is returned. If the request passes the precheck, the `DryRunOperation` error code is returned.
   * *   **false** (default): sends the request. If the request passes the precheck, an HTTP 2xx status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The timeout period of an idle connection. Unit: seconds. Valid values: **1** to **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * Enter a name for the listener.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The size of the largest TCP segment. Unit: bytes. Valid values: **0** to **1500**. **0** specifies that the maximum segment size remains unchanged. This parameter is supported only by listeners that use SSL over TCP.
   * 
   * @example
   * 344
   */
  mss?: number;
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
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Specifies that the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2ConfigShrink?: string;
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
   * Specifies whether to enable fine-grained monitoring. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      clientToken: 'ClientToken',
      cps: 'Cps',
      dryRun: 'DryRun',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2ConfigShrink: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      cps: 'number',
      dryRun: 'boolean',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2ConfigShrink: 'string',
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateListenerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateListenerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The new network type. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. In this case, the NLB instance can be accessed over the virtual private cloud (VPC) where the NLB instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
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
   * The mappings between zones and vSwitches. You can specify at most 10 zones in each call.
   */
  zoneMappings?: UpdateLoadBalancerAddressTypeConfigRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerAddressTypeConfigRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLoadBalancerAddressTypeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLoadBalancerAddressTypeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **1** to **1000000**.
   * 
   * @example
   * 1
   */
  cps?: number;
  /**
   * @remarks
   * Specifies whether to enable cross-zone load balancing for the NLB instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The NLB instance name.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to query the most recent region list.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cps: 'Cps',
      crossZoneEnabled: 'CrossZoneEnabled',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cps: 'number',
      crossZoneEnabled: 'boolean',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * aab74cfa-3bc4-48fc-80fc-0101da5a****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7294679F-08DE-16D4-8E5D-1625685DC10B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLoadBalancerAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLoadBalancerAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  deletionProtectionEnabled?: boolean;
  /**
   * @remarks
   * The reason why deletion protection is enabled. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * > This parameter takes effect only when **DeletionProtectionEnabled** is set to **true**.
   * 
   * @example
   * Instance_Is_Bound_By_Acceleration_Instance
   */
  deletionProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The reason must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * > This parameter takes effect only if **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionReason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: disables the configuration read-only mode. In this case, you cannot set the **ModificationProtectionReason** parameter. If you specify **ModificationProtectionReason**, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. In this case, you can specify **ModificationProtectionReason**.
   * 
   * > If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  modificationProtectionStatus?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      deletionProtectionEnabled: 'DeletionProtectionEnabled',
      deletionProtectionReason: 'DeletionProtectionReason',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      modificationProtectionReason: 'ModificationProtectionReason',
      modificationProtectionStatus: 'ModificationProtectionStatus',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      deletionProtectionEnabled: 'boolean',
      deletionProtectionReason: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      modificationProtectionReason: 'string',
      modificationProtectionStatus: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerProtectionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLoadBalancerProtectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLoadBalancerProtectionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**: sends the request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches. You can specify at most 10 zones.
   * 
   * This parameter is required.
   */
  zoneMappings?: UpdateLoadBalancerZonesRequestZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      loadBalancerId: 'LoadBalancerId',
      regionId: 'RegionId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      loadBalancerId: 'string',
      regionId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': UpdateLoadBalancerZonesRequestZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateLoadBalancerZonesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLoadBalancerZonesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   */
  ciphers?: string[];
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * This parameter is required.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The name of the security policy.
   * 
   * The name must be 1 to 200 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The supported versions of the Transport Layer Security (TLS) protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**. You can specify at most four TLS protocol versions.
   */
  tlsVersions?: string[];
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      regionId: 'RegionId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      tlsVersions: 'TlsVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      dryRun: 'boolean',
      regionId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      tlsVersions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7A8875F-373A-5F48-8484-25B07A61F2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the TLS security policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      securityPolicyId: 'SecurityPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      securityPolicyId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityPolicyAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateSecurityPolicyAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateSecurityPolicyAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to enable connection draining. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds. Valid values: **10** to **900**.
   * 
   * @example
   * 10
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the health check feature.
   */
  healthCheckConfig?: UpdateServerGroupAttributeRequestHealthCheckConfig;
  /**
   * @remarks
   * Specifies whether to enable client IP preservation. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/443657.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **Wrr**: Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are forwarded to backend servers in sequence.
   * *   **sch:** Source IP hashing is used. Requests from the same source IP address are forwarded to the same backend server.
   * *   **tch:** Four-element hashing is used. It specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are forwarded to the same backend server.
   * *   **qch**: QUIC ID hashing. Requests that contain the same QUIC ID are forwarded to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
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
   * The new name of the server group.
   * 
   * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * NLB_ServerGroup1
   */
  serverGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      dryRun: 'DryRun',
      healthCheckConfig: 'HealthCheckConfig',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      dryRun: 'boolean',
      healthCheckConfig: UpdateServerGroupAttributeRequestHealthCheckConfig,
      preserveClientIpEnabled: 'boolean',
      regionId: 'string',
      scheduler: 'string',
      serverGroupId: 'string',
      serverGroupName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServerGroupAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServerGroupAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequest extends $tea.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false**(default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
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
   * The backend servers that you want to modify. You can specify up to 40 servers in each call.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * 72dcd26b-f12d-4c27-b3af-18f6aed5****
   */
  jobId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B45
   */
  requestId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServerGroupServersAttributeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateServerGroupServersAttributeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddServersToServerGroupRequestServers extends $tea.Model {
  /**
   * @remarks
   * The description of the servers.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * >  You can specify at most 40 servers in each call.
   * 
   * @example
   * ECS
   */
  description?: string;
  /**
   * @remarks
   * The port used by the backend server. Valid values: **1** to **65535**.
   * 
   * >  You can specify at most 40 servers in each call.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The ID of the server. You can specify at most 40 server IDs in each call.
   * 
   * *   If the server group type is **Instance**, set the ServerId parameter to the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. These backend servers are specified by **Ecs**, **Eni**, or **Eci**.
   * *   If the server group type is **Ip**, set the ServerId parameter to an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the server. If the server group type is **Ip**, set the ServerId parameter to an IP address.
   * 
   * >  You can specify at most 40 server IP addresses in each call.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: an ECS instance
   * *   **Eni**: an ENI
   * *   **Eci**: an elastic container instance
   * *   **Ip**: an IP address
   * 
   * >  You can specify at most 40 servers in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the weight of a backend server is set to **0**, no requests are forwarded to the backend server.
   * 
   * >  You can specify at most 40 servers in each call.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelShiftLoadBalancerZonesRequestZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone uses one vSwitch and one subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the NLB instance.
   * 
   * > You can add at most one zone in each call.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestProxyProtocolV2Config extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the Ppv2PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'boolean',
      ppv2PrivateLinkEpsIdEnabled: 'boolean',
      ppv2VpcIdEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerShrinkRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestDeletionProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * @example
   * The instance is running
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestLoadBalancerBillingConfig extends $tea.Model {
  /**
   * @remarks
   * The billing method of the NLB instance.
   * 
   * Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestModificationProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * >  This parameter takes effect only if the **Status** parameter is set to **ConsoleProtection**.
   * 
   * @example
   * Service guarantee period
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * product
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLoadBalancerRequestZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP) that is associated with the Internet-facing NLB instance. You can specify one EIP for each zone. You must add at least two zones. You can add a maximum of 10 zones.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  ipv4LocalAddresses?: string[];
  ipv6Address?: string;
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IP address. You must add at least two zones. You can add a maximum of 10 zones.
   * 
   * @example
   * 192.168.10.1
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The vSwitch in the zone. You can specify only one vSwitch (subnet) in each zone of an NLB instance. You must add at least two zones. You can add a maximum of 10 zones.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-sersdf****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone of the NLB instance. You must add at least two zones. You can add a maximum of 10 zones.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      privateIPv4Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSecurityPolicyRequestTag extends $tea.Model {
  /**
   * @remarks
   * 标签键。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
   * 
   * 一次调用最多支持添加20个标签。
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * 标签值。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
   * 
   * 一次调用最多支持添加20个标签。
   * 
   * @example
   * ValueTest
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestHealthCheckConfig extends $tea.Model {
  /**
   * @remarks
   * The port that you want to use for health checks on backend servers.
   * 
   * Valid values: **0** to **65535**.
   * 
   * Default value: **0**. If you set the value to 0, the port of the backend server is used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds. Valid values: **1** to **300**. Default value: **5**.
   * 
   * @example
   * 5
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the private IP address of a backend server.
   * *   **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes to return for health checks. Separate multiple HTTP status codes with commas (,). Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **5** to **50**.
   * 
   * Default value: **10**.
   * 
   * @example
   * 10
   */
  healthCheckInterval?: number;
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks. Valid values: **TCP** (default) and **HTTP**.
   * 
   * @example
   * TCP
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The path to which health check requests are sent.
   * 
   * The path must be 1 to 80 characters in length, and can contain letters, digits, and the following special characters: `- / . % ? # &`. It must start with a forward slash (/).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **GET** (default) and **HEAD**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * Default value: **2**.
   * 
   * @example
   * 2
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckExp: 'HealthCheckExp',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckExp: 'string',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServerGroupRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * product
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
  /**
   * @remarks
   * The name of the region.
   * 
   * @example
   * us-east-1
   */
  localName?: string;
  /**
   * @remarks
   * The endpoint of the region service.
   * 
   * @example
   * nlb.cn-hangzhou.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeZonesResponseBodyZones extends $tea.Model {
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * ap_southeast_2
   */
  localName?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyProxyProtocolV2Config extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'boolean',
      ppv2PrivateLinkEpsIdEnabled: 'boolean',
      ppv2VpcIdEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerAttributeResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * ac-cus-tag-4
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ON
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason extends $tea.Model {
  /**
   * @remarks
   * The reason why the **status** is abnormal. Valid values:
   * 
   * *   **CONNECT_TIMEOUT**: The NLB instance failed to connect to the backend server within the specified period of time.
   * *   **CONNECT_FAILED**: The NLB instance failed to connect to the backend server.
   * *   **RECV_RESPONSE_TIMEOUT**: The NLB instance failed to receive a response from the backend server within the specified period of time.
   * *   **CONNECT_INTERRUPT**: The connection between the health check and the backend servers was interrupted.
   * *   **HTTP_CODE_NOT_MATCH**: The HTTP status code from the backend servers was not the expected one.
   * *   **HTTP_INVALID_HEADER**: The format of the response from the backend servers is invalid.
   * 
   * @example
   * CONNECT_TIMEOUT
   */
  reasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      reasonCode: 'ReasonCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reasonCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers extends $tea.Model {
  /**
   * @remarks
   * The backend port.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The cause of the health check failure.
   */
  reason?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason;
  /**
   * @remarks
   * The ID of the backend server.
   * 
   * @example
   * i-bp1bt75jaujl7tjl****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server.
   * 
   * @example
   * 192.168.8.10
   */
  serverIp?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * 
   * *   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
   * *   **Unhealthy**: indicates that the backend server consecutively fails health checks.
   * *   **Unused**: indicates that the weight of the backend server is 0.
   * *   **Unavailable**: indicates that health checks are disabled.
   * 
   * @example
   * Initial
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      reason: 'Reason',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      reason: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServersReason,
      serverId: 'string',
      serverIp: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  heathCheckEnabled?: boolean;
  /**
   * @remarks
   * A list of unhealthy backend servers.
   */
  nonNormalServers?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers[];
  /**
   * @remarks
   * The ID of the server group.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      heathCheckEnabled: 'HeathCheckEnabled',
      nonNormalServers: 'NonNormalServers',
      serverGroupId: 'ServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      heathCheckEnabled: 'boolean',
      nonNormalServers: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfosNonNormalServers },
      serverGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetListenerHealthStatusResponseBodyListenerHealthStatus extends $tea.Model {
  /**
   * @remarks
   * The ID of the listener of the NLB instance.
   * 
   * @example
   * lsn-agkd9gmjx8nd85jjs0****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listening port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The information about the server groups.
   */
  serverGroupInfos?: GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos[];
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      serverGroupInfos: 'ServerGroupInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      serverGroupInfos: { 'type': 'array', 'itemType': GetListenerHealthStatusResponseBodyListenerHealthStatusServerGroupInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyDeletionProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to enable deletion protection. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when the deletion protection feature was enabled. The time follows the ISO 8601 standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2022-11-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * @example
   * create-by-mse-can-not-delete
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyLoadBalancerBillingConfig extends $tea.Model {
  /**
   * @remarks
   * The billing method of the NLB instance. Set the value to **PostPay**, which specifies the pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyModificationProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * The time when the modification protection feature was enabled. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02T02:49:05Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The value must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The value must start with a letter.
   * 
   * >  This parameter takes effect only if the **Status** parameter is set to **ConsoleProtection**.
   * 
   * @example
   * create-by-mse-cannot-modify
   */
  reason?: string;
  /**
   * @remarks
   * Specifies whether to enable the configuration read-only mode. Valid values:
   * 
   * *   **NonProtection**: does not enable the configuration read-only mode. You cannot set the **Reason** parameter. If the **Reason** parameter is set, the value is cleared.
   * *   **ConsoleProtection**: enables the configuration read-only mode. You can set the **Reason** parameter.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTime: 'EnabledTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyOperationLocks extends $tea.Model {
  /**
   * @remarks
   * The reason why the NLB instance is locked.
   * 
   * @example
   * security
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of the lock. Valid values:
   * 
   * *   **SecurityLocked**: The NLB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The NLB instance is locked due to other resources associated with the NLB instance.
   * *   **FinancialLocked**: The NLB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The NLB instance is locked because the associated resources have overdue payments and the resources are released.
   * 
   * @example
   * SecurityLocked
   */
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * KeyTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ValueTest
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $tea.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * The IPv6 address of the NLB instance.
   * 
   * @example
   * 2001:db8:1:1:1:1:1:1
   */
  ipv6Address?: string;
  ipv6LocalAddresses?: string[];
  /**
   * @remarks
   * The private IPv4 address of the NLB instance.
   * 
   * @example
   * 192.168.3.32
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health status of the private IPv4 address of the NLB instance. Valid values:
   * 
   * *   **Healthy**
   * *   **Unhealthy**
   * 
   * > This parameter is returned only when the **Status** of the zone is **Active**.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health status of the IPv6 address of the NLB instance. Valid values:
   * 
   * *   **Healthy**
   * *   **Unhealthy**
   * 
   * > This parameter is returned only when the **Status** of the zone is **Active**.
   * 
   * @example
   * Healthy
   */
  privateIPv6HcStatus?: string;
  /**
   * @remarks
   * The public IPv4 address of the NLB instance.
   * 
   * @example
   * 120.XX.XX.69
   */
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eniId: 'EniId',
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
      privateIPv4Address: 'PrivateIPv4Address',
      privateIPv4HcStatus: 'PrivateIPv4HcStatus',
      privateIPv6HcStatus: 'PrivateIPv6HcStatus',
      publicIPv4Address: 'PublicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLoadBalancerAttributeResponseBodyZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The information about the IP addresses used by the NLB instance.
   */
  loadBalancerAddresses?: GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The zone status. Valid values:
   * 
   * *   **Active**: The zone is available.
   * *   **Stopped**: The zone is disabled. You can set the zone to this status only by using Cloud Architect Design Tools (CADT).
   * *   **Shifted**: The DNS record is removed.
   * *   **Starting**: The zone is being enabled. You can set the zone to this status only by using CADT.
   * *   **Stopping** You can set the zone to this status only by using CADT.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenerCertificatesResponseBodyCertificates extends $tea.Model {
  /**
   * @remarks
   * The ID of the certificate.
   * 
   * @example
   * 12315790343_166f8204689_1714763408_70998****
   */
  certificateId?: string;
  /**
   * @remarks
   * The type of the certificate.
   * 
   * -  Server
   * - Ca
   * 
   * @example
   * Server
   */
  certificateType?: string;
  /**
   * @remarks
   * Indicates whether the certificate is the default certificate of the listener. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * Indicates whether the certificate is associated with the listener. Valid values:
   * 
   * *   **Associating**
   * *   **Associated**
   * *   **Diassociating**
   * 
   * @example
   * Associating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      certificateId: 'CertificateId',
      certificateType: 'CertificateType',
      isDefault: 'IsDefault',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificateId: 'string',
      certificateType: 'string',
      isDefault: 'boolean',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * product
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersProxyProtocolV2Config extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'boolean',
      ppv2PrivateLinkEpsIdEnabled: 'boolean',
      ppv2VpcIdEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListenersTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Created
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TF
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListListenersResponseBodyListeners extends $tea.Model {
  /**
   * @remarks
   * Indicates whether Application-Layer Protocol Negotiation (ALPN) is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  alpnEnabled?: boolean;
  /**
   * @remarks
   * The ALPN policy. Valid values:
   * 
   * *   **HTTP1Only**
   * *   **HTTP2Only**
   * *   **HTTP2Preferred**
   * *   **HTTP2Optional**
   * 
   * @example
   * HTTP1Only
   */
  alpnPolicy?: string;
  /**
   * @remarks
   * A list of CA certificates.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  caCertificateIds?: string[];
  /**
   * @remarks
   * Indicates whether mutual authentication is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  caEnabled?: boolean;
  /**
   * @remarks
   * The server certificate.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   */
  certificateIds?: string[];
  /**
   * @remarks
   * The maximum number of connections that can be created per second on the NLB instance. Valid values: **0** to **1000000**. **0** indicates that the number of connections is unlimited.
   * 
   * @example
   * 1000
   */
  cps?: number;
  /**
   * @remarks
   * The last port in the listener port range.
   * 
   * @example
   * 455
   */
  endPort?: string;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds. Valid values: **1** to **900**. Default value: **900**.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * tcpssl_443
   */
  listenerDescription?: string;
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-ga6sjjcll6ou34l1et****
   */
  listenerId?: string;
  /**
   * @remarks
   * The information about the listener port of your server.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The status of the listener. Valid values:
   * 
   * *   **Provisioning**: The listener is being created.
   * *   **Running**: The listener is running.
   * *   **Configuring**: The listener is being configured.
   * *   **Stopping**: The listener is being stopped.
   * *   **Stopped**: The listener is stopped.
   * *   **Starting**: The listener is being started.
   * *   **Deleting**: The listener is being deleted.
   * *   **Deleted**: The listener is deleted.
   * 
   * @example
   * Running
   */
  listenerStatus?: string;
  /**
   * @remarks
   * The CLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The size of the largest TCP packet segment. Unit: bytes. Valid values: **0** to **1500**. **0** indicates that the Mss value of TCP packets remains unchanged.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * 200
   */
  mss?: number;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes source client IP addresses to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  proxyProtocolEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether the Proxy protocol passes the VpcId, PrivateLinkEpId, and PrivateLinkEpsId parameters to backend servers.
   */
  proxyProtocolV2Config?: ListListenersResponseBodyListenersProxyProtocolV2Config;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether fine-grained monitoring is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  secSensorEnabled?: boolean;
  /**
   * @remarks
   * The ID of the security policy.
   * 
   * >  This parameter takes effect only for listeners that use SSL over TCP.
   * 
   * @example
   * tls_cipher_policy_1_1
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-ppdpc14gdm3x4o****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The first port in the listener port range.
   * 
   * @example
   * 233
   */
  startPort?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListListenersResponseBodyListenersTags[];
  static names(): { [key: string]: string } {
    return {
      alpnEnabled: 'AlpnEnabled',
      alpnPolicy: 'AlpnPolicy',
      caCertificateIds: 'CaCertificateIds',
      caEnabled: 'CaEnabled',
      certificateIds: 'CertificateIds',
      cps: 'Cps',
      endPort: 'EndPort',
      idleTimeout: 'IdleTimeout',
      listenerDescription: 'ListenerDescription',
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      listenerStatus: 'ListenerStatus',
      loadBalancerId: 'LoadBalancerId',
      mss: 'Mss',
      proxyProtocolEnabled: 'ProxyProtocolEnabled',
      proxyProtocolV2Config: 'ProxyProtocolV2Config',
      regionId: 'RegionId',
      secSensorEnabled: 'SecSensorEnabled',
      securityPolicyId: 'SecurityPolicyId',
      serverGroupId: 'ServerGroupId',
      startPort: 'StartPort',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alpnEnabled: 'boolean',
      alpnPolicy: 'string',
      caCertificateIds: { 'type': 'array', 'itemType': 'string' },
      caEnabled: 'boolean',
      certificateIds: { 'type': 'array', 'itemType': 'string' },
      cps: 'number',
      endPort: 'string',
      idleTimeout: 'number',
      listenerDescription: 'string',
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      listenerStatus: 'string',
      loadBalancerId: 'string',
      mss: 'number',
      proxyProtocolEnabled: 'boolean',
      proxyProtocolV2Config: ListListenersResponseBodyListenersProxyProtocolV2Config,
      regionId: 'string',
      secSensorEnabled: 'boolean',
      securityPolicyId: 'string',
      serverGroupId: 'string',
      startPort: 'string',
      tags: { 'type': 'array', 'itemType': ListListenersResponseBodyListenersTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * ValueTest
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * Indicates whether deletion protection is enabled. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when deletion protection was enabled. The time is displayed in UTC in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-01T17:22Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the deletion protection feature is enabled or disabled. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * @example
   * The instance is running
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      enabledTime: 'EnabledTime',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      enabledTime: 'string',
      reason: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig extends $tea.Model {
  /**
   * @remarks
   * The billing method of the NLB instance. Only **PostPay** is supported, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPay
   */
  payType?: string;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig extends $tea.Model {
  /**
   * @remarks
   * The time when the configuration read-only mode was enabled. The time is displayed in UTC in `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-12-01T17:22Z
   */
  enabledTime?: string;
  /**
   * @remarks
   * The reason why the configuration read-only mode is enabled. The reason must be 2 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The reason must start with a letter.
   * 
   * This parameter takes effect only if **Status** is set to **ConsoleProtection**.
   * 
   * @example
   * Service guarantee period
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the configuration read-only mode is enabled. Valid values:
   * 
   * *   **NonProtection**: disabled. In this case, **Reason** is not returned. If **Reason** is set, the value is cleared.
   * *   **ConsoleProtection**: enabled. In this case, **Reason** is returned.
   * 
   * >  If you set this parameter to **ConsoleProtection**, you cannot use the NLB console to modify instance configurations. However, you can call API operations to modify instance configurations.
   * 
   * @example
   * ConsoleProtection
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      enabledTime: 'EnabledTime',
      reason: 'Reason',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabledTime: 'string',
      reason: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersOperationLocks extends $tea.Model {
  /**
   * @remarks
   * The reason why the NLB instance is locked.
   * 
   * @example
   * Service exception
   */
  lockReason?: string;
  /**
   * @remarks
   * The type of lock. Valid values:
   * 
   * *   **SecurityLocked**: The NLB instance is locked due to security reasons.
   * *   **RelatedResourceLocked**: The NLB instance is locked due to association issues.
   * *   **FinancialLocked**: The NLB instance is locked due to overdue payments.
   * *   **ResidualLocked**: The NLB instance is locked because the payments of the associated resources are overdue and the resources are released.
   * 
   * @example
   * SecurityLocked
   */
  lockType?: string;
  static names(): { [key: string]: string } {
    return {
      lockReason: 'LockReason',
      lockType: 'LockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockReason: 'string',
      lockType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersTags extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * KeyTest
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * ValueTest
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses extends $tea.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) attached to the NLB instance.
   * 
   * @example
   * eni-bp12f1xhs5yal61a****
   */
  eniId?: string;
  /**
   * @remarks
   * The IPv6 address used by the NLB instance.
   * 
   * @example
   * 2001:db8:1:1:1:1:1:1
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The private IPv4 address of the NLB instance.
   * 
   * @example
   * 192.168.3.32
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The health check status of the private IPv4 address.
   * 
   * @example
   * Healthy
   */
  privateIPv4HcStatus?: string;
  /**
   * @remarks
   * The health check status of the private IPv6 address.
   * 
   * @example
   * Healthy
   */
  privateIPv6HcStatus?: string;
  /**
   * @remarks
   * The public IPv4 address of the NLB instance.
   * 
   * @example
   * 120.XX.XX.69
   */
  publicIPv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eniId: 'EniId',
      ipv6Address: 'Ipv6Address',
      privateIPv4Address: 'PrivateIPv4Address',
      privateIPv4HcStatus: 'PrivateIPv4HcStatus',
      privateIPv6HcStatus: 'PrivateIPv6HcStatus',
      publicIPv4Address: 'PublicIPv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eniId: 'string',
      ipv6Address: 'string',
      privateIPv4Address: 'string',
      privateIPv4HcStatus: 'string',
      privateIPv6HcStatus: 'string',
      publicIPv4Address: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancersZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The IP addresses that are used by the NLB instance.
   */
  loadBalancerAddresses?: ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses[];
  /**
   * @remarks
   * The state of the task. Valid values:
   * 
   * *   **Succeeded**: The task is successful.
   * *   **processing**: The ticket is being executed.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the zone. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the zones.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerAddresses: 'LoadBalancerAddresses',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerAddresses: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses },
      status: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLoadBalancersResponseBodyLoadBalancers extends $tea.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **ipv4**: IPv4
   * *   **DualStack**: dual stack
   * 
   * @example
   * ipv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * The type of IPv4 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  addressType?: string;
  /**
   * @remarks
   * The ID of the EIP bandwidth plan that is associated with the NLB instance if the NLB instance uses a public IP address.
   * 
   * @example
   * cbwp-bp1vevu8h3ieh****
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The time when the resource was created. The time is displayed in UTC in the `yyyy-MM-ddTHH:mm:ssZ` format.
   * 
   * @example
   * 2022-07-18T17:22Z
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether cross-zone load balancing is enabled for the NLB instance. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * true
   */
  crossZoneEnabled?: boolean;
  /**
   * @remarks
   * The domain name of the NLB instance.
   * 
   * @example
   * nlb-wb7r6dlwetvt5j****.cn-hangzhou.nlb.aliyuncs.com
   */
  DNSName?: string;
  /**
   * @remarks
   * The configuration of the deletion protection feature.
   */
  deletionProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig;
  /**
   * @remarks
   * The type of IPv6 address used by the NLB instance. Valid values:
   * 
   * *   **Internet**: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
   * *   **Intranet**: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
   * 
   * @example
   * Internet
   */
  ipv6AddressType?: string;
  /**
   * @remarks
   * The billing settings of the NLB instance.
   */
  loadBalancerBillingConfig?: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig;
  /**
   * @remarks
   * The business status of the NLB instance. Valid values:
   * 
   * *   **Abnormal**: The NLB instance is not working as expected.
   * *   **Normal**: The NLB instance is working as expected.
   * 
   * @example
   * Normal
   */
  loadBalancerBusinessStatus?: string;
  /**
   * @remarks
   * The ID of the NLB instance.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the NLB instance.
   * 
   * @example
   * NLB1
   */
  loadBalancerName?: string;
  /**
   * @remarks
   * The status of the NLB instance. Valid values:
   * 
   * *   **Inactive**: The NLB instance is disabled. Listeners of NLB instances in the Inactive state do not forward traffic.
   * *   **Active**: The NLB instance is running.
   * *   **Provisioning**: The NLB instance is being created.
   * *   **Configuring**: The NLB instance is being modified.
   * *   **Deleting**: The NLB instance is being deleted.
   * *   **Deleted**: The NLB instance is deleted.
   * 
   * @example
   * Active
   */
  loadBalancerStatus?: string;
  /**
   * @remarks
   * The type of the SLB instance. Only **Network** is returned, which indicates NLB.
   * 
   * @example
   * Network
   */
  loadBalancerType?: string;
  /**
   * @remarks
   * The configuration of the configuration read-only mode.
   */
  modificationProtectionConfig?: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig;
  /**
   * @remarks
   * The configuration of the operation lock. This parameter takes effect if the value of `LoadBalancerBussinessStatus` is **Abnormal**.
   */
  operationLocks?: ListLoadBalancersResponseBodyLoadBalancersOperationLocks[];
  /**
   * @remarks
   * The ID of the region where the NLB instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The security group to which the NLB instance is added.
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListLoadBalancersResponseBodyLoadBalancersTags[];
  /**
   * @remarks
   * The ID of the VPC where the NLB instance is deployed.
   * 
   * @example
   * vpc-bp1b49rqrybk45nio****
   */
  vpcId?: string;
  /**
   * @remarks
   * The mappings between zones and vSwitches.
   */
  zoneMappings?: ListLoadBalancersResponseBodyLoadBalancersZoneMappings[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      addressType: 'AddressType',
      bandwidthPackageId: 'BandwidthPackageId',
      createTime: 'CreateTime',
      crossZoneEnabled: 'CrossZoneEnabled',
      DNSName: 'DNSName',
      deletionProtectionConfig: 'DeletionProtectionConfig',
      ipv6AddressType: 'Ipv6AddressType',
      loadBalancerBillingConfig: 'LoadBalancerBillingConfig',
      loadBalancerBusinessStatus: 'LoadBalancerBusinessStatus',
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
      loadBalancerStatus: 'LoadBalancerStatus',
      loadBalancerType: 'LoadBalancerType',
      modificationProtectionConfig: 'ModificationProtectionConfig',
      operationLocks: 'OperationLocks',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupIds: 'SecurityGroupIds',
      tags: 'Tags',
      vpcId: 'VpcId',
      zoneMappings: 'ZoneMappings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      addressType: 'string',
      bandwidthPackageId: 'string',
      createTime: 'string',
      crossZoneEnabled: 'boolean',
      DNSName: 'string',
      deletionProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersDeletionProtectionConfig,
      ipv6AddressType: 'string',
      loadBalancerBillingConfig: ListLoadBalancersResponseBodyLoadBalancersLoadBalancerBillingConfig,
      loadBalancerBusinessStatus: 'string',
      loadBalancerId: 'string',
      loadBalancerName: 'string',
      loadBalancerStatus: 'string',
      loadBalancerType: 'string',
      modificationProtectionConfig: ListLoadBalancersResponseBodyLoadBalancersModificationProtectionConfig,
      operationLocks: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersOperationLocks },
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersTags },
      vpcId: 'string',
      zoneMappings: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancersZoneMappings },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners extends $tea.Model {
  /**
   * @remarks
   * The listener ID.
   * 
   * @example
   * lsn-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  /**
   * @remarks
   * The listener protocol. Valid value: **TCPSSL**.
   * 
   * @example
   * TCPSSL
   */
  listenerProtocol?: string;
  /**
   * @remarks
   * The NLB instance ID.
   * 
   * @example
   * nlb-83ckzc8d4xlp8o****
   */
  loadBalancerId?: string;
  static names(): { [key: string]: string } {
    return {
      listenerId: 'ListenerId',
      listenerPort: 'ListenerPort',
      listenerProtocol: 'ListenerProtocol',
      loadBalancerId: 'LoadBalancerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenerId: 'string',
      listenerPort: 'number',
      listenerProtocol: 'string',
      loadBalancerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPoliciesTags extends $tea.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityPolicyResponseBodySecurityPolicies extends $tea.Model {
  /**
   * @remarks
   * The supported cipher suites, which are determined by the TLS protocol version. You can specify at most 32 cipher suites.
   * 
   * TLS 1.0 and TLS 1.1 support the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * 
   * TLS 1.2 supports the following cipher suites:
   * 
   * *   **ECDHE-ECDSA-AES128-SHA**
   * *   **ECDHE-ECDSA-AES256-SHA**
   * *   **ECDHE-RSA-AES128-SHA**
   * *   **ECDHE-RSA-AES256-SHA**
   * *   **AES128-SHA**
   * *   **AES256-SHA**
   * *   **DES-CBC3-SHA**
   * *   **ECDHE-ECDSA-AES128-GCM-SHA256**
   * *   **ECDHE-ECDSA-AES256-GCM-SHA384**
   * *   **ECDHE-ECDSA-AES128-SHA256**
   * *   **ECDHE-ECDSA-AES256-SHA384**
   * *   **ECDHE-RSA-AES128-GCM-SHA256**
   * *   **ECDHE-RSA-AES256-GCM-SHA384**
   * *   **ECDHE-RSA-AES128-SHA256**
   * *   **ECDHE-RSA-AES256-SHA384**
   * *   **AES128-GCM-SHA256**
   * *   **AES256-GCM-SHA384**
   * *   **AES128-SHA256**
   * *   **AES256-SHA256**
   * 
   * TLS 1.3 supports the following cipher suites:
   * 
   * *   **TLS_AES_128_GCM_SHA256**
   * *   **TLS_AES_256_GCM_SHA384**
   * *   **TLS_CHACHA20_POLY1305_SHA256**
   * *   **TLS_AES_128_CCM_SHA256**
   * *   **TLS_AES_128_CCM_8_SHA256**
   * 
   * @example
   * ECDHE-ECDSA-AES128-SHA
   */
  ciphers?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The listeners that are associated with the NLB instance.
   */
  relatedListeners?: ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners[];
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
   * The ID of the TLS security policy.
   * 
   * @example
   * tls-bp14bb1e7dll4f****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The name of the TLS security policy.
   * 
   * @example
   * TLSCipherPolicy
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The status of the TLS security policy. Valid values:
   * 
   * *   **Configuring**
   * *   **Available**
   * 
   * @example
   * Available
   */
  securityPolicyStatus?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListSecurityPolicyResponseBodySecurityPoliciesTags[];
  /**
   * @remarks
   * The supported versions of the TLS protocol. Valid values: **TLSv1.0**, **TLSv1.1**, **TLSv1.2**, and **TLSv1.3**.
   * 
   * @example
   * TLSv1.0
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      regionId: 'RegionId',
      relatedListeners: 'RelatedListeners',
      resourceGroupId: 'ResourceGroupId',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      securityPolicyStatus: 'SecurityPolicyStatus',
      tags: 'Tags',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      regionId: 'string',
      relatedListeners: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesRelatedListeners },
      resourceGroupId: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      securityPolicyStatus: 'string',
      tags: { 'type': 'array', 'itemType': ListSecurityPolicyResponseBodySecurityPoliciesTags },
      tlsVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupServersResponseBodyServers extends $tea.Model {
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
   * The port used by the backend server. Valid values: **1** to **65535**.
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
   * The ID of the server.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
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
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: an Elastic Compute Service (ECS) instance
   * *   **Eni**: an elastic network interface (ENI)
   * *   **Eci**: an elastic container instance
   * *   **Ip**: an IP address
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * Indicates the status of the backend server. Valid values:
   * 
   * *   **Adding**: The backend server is being added.
   * *   **Available**: The backend server is added.
   * *   **Configuring**: The backend server is being configured.
   * *   **Removing**: The backend server is being removed.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsRequestTag extends $tea.Model {
  /**
   * @remarks
   * The key of the tag. You can specify up to 10 tag keys.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. You can specify up to 10 tag values.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsHealthCheck extends $tea.Model {
  /**
   * @remarks
   * The backend port that is used for health checks.
   * 
   * Valid values: **0** to **65535**.
   * 
   * A value of **0** indicates that the port on a backend server is used for health checks.
   * 
   * @example
   * 200
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds. Valid values: **1** to **300**.
   * 
   * @example
   * 200
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the private IP address of a backend server.
   * *   **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes returned for health checks. Multiple HTTP status codes are separated by commas (,). Valid values: **http_2xx**, **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **5** to **50**.
   * 
   * @example
   * 200
   */
  healthCheckInterval?: number;
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol that is used for health checks. Valid values: **TCP** and **HTTP**.
   * 
   * @example
   * TCP
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The path to which health check probes are sent.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 2
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **GET** and **HEAD**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckExp: 'HealthCheckExp',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckExp: 'string',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroupsTags extends $tea.Model {
  /**
   * @remarks
   * The tag key. At most 10 tag keys are returned.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
   */
  key?: string;
  /**
   * @remarks
   * The tag value. At most 10 tag values are returned.
   * 
   * The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * Test
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServerGroupsResponseBodyServerGroups extends $tea.Model {
  /**
   * @remarks
   * The IP version. Valid values:
   * 
   * *   **ipv4**
   * *   **DualStack**
   * 
   * @example
   * ipv4
   */
  addressIPVersion?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 165820696622****
   */
  aliUid?: number;
  /**
   * @remarks
   * Indicates whether the feature of forwarding requests to all ports is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  anyPortEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether connection draining is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  connectionDrainEnabled?: boolean;
  /**
   * @remarks
   * The timeout period of connection draining. Unit: seconds. Valid values: **10** to **900**.
   * 
   * @example
   * 200
   */
  connectionDrainTimeout?: number;
  /**
   * @remarks
   * The configurations of health checks.
   */
  healthCheck?: ListServerGroupsResponseBodyServerGroupsHealthCheck;
  /**
   * @remarks
   * Indicates whether client IP preservation is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * > This parameter is set to **true** by default when **AddressIPVersion** is set to **ipv4**. This parameter is set to **false** when **AddressIPVersion** is set to **ipv6**. **true** will be supported by later versions.
   * 
   * @example
   * true
   */
  preserveClientIpEnabled?: boolean;
  /**
   * @remarks
   * The protocol used to forward requests to the backend servers. Valid values: **TCP**, **UDP**, and **TCPSSL**.
   * 
   * @example
   * TCP
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the NLB instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The NLB instances.
   */
  relatedLoadBalancerIds?: string[];
  /**
   * @remarks
   * The ID of the resource group to which the server group belongs.
   * 
   * @example
   * rg-atstuj3rtop****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The routing algorithm. Valid values:
   * 
   * *   **Wrr**: Backend servers with higher weights receive more requests than backend servers with lower weights.
   * *   **rr**: Requests are forwarded to the backend servers in sequence. sch: Requests are forwarded to the backend servers based on source IP address hashing.
   * *   **sch**: Requests from the same source IP address are forwarded to the same backend server.
   * *   **tch**: Four-element hashing, which specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are forwarded to the same backend server.
   * *   **qch**: QUIC ID hashing. Requests that contain the same QUIC ID are forwarded to the same backend server.
   * 
   * @example
   * Wrr
   */
  scheduler?: string;
  /**
   * @remarks
   * The number of server groups associated with the NLB instances.
   * 
   * @example
   * 2
   */
  serverCount?: number;
  /**
   * @remarks
   * The server group ID.
   * 
   * @example
   * sgp-atstuj3rtoptyui****
   */
  serverGroupId?: string;
  /**
   * @remarks
   * The server group name.
   * 
   * @example
   * NLB_ServerGroup
   */
  serverGroupName?: string;
  /**
   * @remarks
   * The status of the server group. Valid values:
   * 
   * *   **Creating**
   * *   **Available**
   * *   **Configuring**
   * 
   * @example
   * Available
   */
  serverGroupStatus?: string;
  /**
   * @remarks
   * The type of server group. Valid values:
   * 
   * *   **Instance** : contains servers of the **Ecs**, **Ens**, and **Eci** types.
   * *   **Ip**: contains servers specified by IP addresses.
   * 
   * @example
   * Instance
   */
  serverGroupType?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: ListServerGroupsResponseBodyServerGroupsTags[];
  /**
   * @remarks
   * The ID of the VPC to which the server group belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressIPVersion: 'AddressIPVersion',
      aliUid: 'AliUid',
      anyPortEnabled: 'AnyPortEnabled',
      connectionDrainEnabled: 'ConnectionDrainEnabled',
      connectionDrainTimeout: 'ConnectionDrainTimeout',
      healthCheck: 'HealthCheck',
      preserveClientIpEnabled: 'PreserveClientIpEnabled',
      protocol: 'Protocol',
      regionId: 'RegionId',
      relatedLoadBalancerIds: 'RelatedLoadBalancerIds',
      resourceGroupId: 'ResourceGroupId',
      scheduler: 'Scheduler',
      serverCount: 'ServerCount',
      serverGroupId: 'ServerGroupId',
      serverGroupName: 'ServerGroupName',
      serverGroupStatus: 'ServerGroupStatus',
      serverGroupType: 'ServerGroupType',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIPVersion: 'string',
      aliUid: 'number',
      anyPortEnabled: 'boolean',
      connectionDrainEnabled: 'boolean',
      connectionDrainTimeout: 'number',
      healthCheck: ListServerGroupsResponseBodyServerGroupsHealthCheck,
      preserveClientIpEnabled: 'boolean',
      protocol: 'string',
      regionId: 'string',
      relatedLoadBalancerIds: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      scheduler: 'string',
      serverCount: 'number',
      serverGroupId: 'string',
      serverGroupName: 'string',
      serverGroupStatus: 'string',
      serverGroupType: 'string',
      tags: { 'type': 'array', 'itemType': ListServerGroupsResponseBodyServerGroupsTags },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSystemSecurityPolicyResponseBodySecurityPolicies extends $tea.Model {
  /**
   * @remarks
   * The cipher suites.
   * 
   * @example
   * ECDHE-ECDSA-AES128-SHA
   */
  ciphers?: string;
  /**
   * @remarks
   * The TLS policy ID.
   * 
   * @example
   * sp-3fdab6dkkke10s****
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The TLS policy name.
   * 
   * @example
   * test
   */
  securityPolicyName?: string;
  /**
   * @remarks
   * The version of the TLS protocol.
   * 
   * @example
   * TLSv1.0
   */
  tlsVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ciphers: 'Ciphers',
      securityPolicyId: 'SecurityPolicyId',
      securityPolicyName: 'SecurityPolicyName',
      tlsVersion: 'TlsVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphers: 'string',
      securityPolicyId: 'string',
      securityPolicyName: 'string',
      tlsVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length, and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * product
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponseBodyTagResources extends $tea.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 1429****39299349
   */
  aliUid?: number;
  /**
   * @remarks
   * The type of the tag. Valid values:
   * 
   * *   **Custom**
   * *   **System**
   * *   **All**
   * 
   * @example
   * All
   */
  category?: string;
  /**
   * @remarks
   * The region information.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * nlb-nrnrxwd15en27r****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of resource. Valid values:
   * 
   * *   **loadbalancer**: an NLB instance
   * *   **securitypolicy**: a security policy
   * *   **servergroup**: a server group
   * 
   * @example
   * loadbalancer
   */
  resourceType?: string;
  /**
   * @remarks
   * The visible range of the tags.
   * 
   * @example
   * public
   */
  scope?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * env
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * product
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      category: 'Category',
      regionNo: 'RegionNo',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      category: 'string',
      regionNo: 'string',
      resourceId: 'string',
      resourceType: 'string',
      scope: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveResourceGroupResponseBodyData extends $tea.Model {
  /**
   * @remarks
   * The ID of the resource. You can specify up to 50 resource IDs in each call.
   * 
   * @example
   * nlb-nrnrxwd15en27r****
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveServersFromServerGroupRequestServers extends $tea.Model {
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**.
   * 
   * @example
   * 443
   * 
   * **if can be null:**
   * true
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID.
   * 
   * *   If the server group type is **Instance**, set this parameter to the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. The backend servers are specified by **Ecs**, **Eni**, or **Eci**.
   * *   If the server group type is **Ip**, set this parameter to an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server. If the server group type is **Ip**, you must specify an IP address.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: ECS instance
   * *   **Eni**: ENI
   * *   **Eci**: elastic container instance
   * *   **Ip**: IP address
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      serverId: 'ServerId',
      serverIp: 'ServerIp',
      serverType: 'ServerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'number',
      serverId: 'string',
      serverIp: 'string',
      serverType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartShiftLoadBalancerZonesRequestZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone contains one vSwitch and one subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the NLB instance.
   * 
   * > You can remove only one zone in each call.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. It cannot contain `http://` or `https://`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * product
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateListenerAttributeRequestProxyProtocolV2Config extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the PrivateLinkEpId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the PrivateLinkEpsId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2PrivateLinkEpsIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy protocol to pass the VpcId parameter to backend servers. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  ppv2VpcIdEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'Ppv2PrivateLinkEpIdEnabled',
      ppv2PrivateLinkEpsIdEnabled: 'Ppv2PrivateLinkEpsIdEnabled',
      ppv2VpcIdEnabled: 'Ppv2VpcIdEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ppv2PrivateLinkEpIdEnabled: 'boolean',
      ppv2PrivateLinkEpsIdEnabled: 'boolean',
      ppv2VpcIdEnabled: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerAddressTypeConfigRequestZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * *   **Common**
   * *   **Anycast**
   * 
   * > Anycast EIPs are supported only by NLB instances in the China (Hong Kong) region. This parameter is required when **AddressType** is set to **Internet**.
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. Each zone can contain only one vSwitch and one subnet.
   * 
   * @example
   * vsw-bp10ttov87felojcn****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the NLB instance.
   * 
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLoadBalancerZonesRequestZoneMappings extends $tea.Model {
  /**
   * @remarks
   * The ID of the elastic IP address (EIP) or Anycast EIP.
   * 
   * @example
   * eip-bp1aedxso6u80u0qf****
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of the EIP. Valid values:
   * 
   * *   **Common**
   * *   **Anycast**
   * 
   * > Anycast EIPs are supported only by NLB instances in the China (Hong Kong) region. This parameter is required when **AddressType** is set to **Internet**.
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The private IP addresses.
   * 
   * @example
   * 192.168.36.16
   */
  privateIPv4Address?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the zone. By default, each zone uses one vSwitch and one subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1rmcrwg3erh1fh8****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID. You can call the [DescribeZones](https://help.aliyun.com/document_detail/443890.html) operation to query the most recent zone list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      eipType: 'EipType',
      privateIPv4Address: 'PrivateIPv4Address',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      eipType: 'string',
      privateIPv4Address: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupAttributeRequestHealthCheckConfig extends $tea.Model {
  /**
   * @remarks
   * The port that you want to use for health checks on backend servers. Valid values: **0** to **65535**. If you set the value to **0**, the ports of backend servers are used for health checks.
   * 
   * @example
   * 0
   */
  healthCheckConnectPort?: number;
  /**
   * @remarks
   * The maximum timeout period of a health check. Unit: seconds. Valid values: **1** to **300**.
   * 
   * @example
   * 100
   */
  healthCheckConnectTimeout?: number;
  /**
   * @remarks
   * The domain name that you want to use for health checks. Valid values:
   * 
   * *   **$SERVER_IP**: the private IP address of a backend server.
   * *   **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * $SERVER_IP
   */
  healthCheckDomain?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  healthCheckExp?: string;
  /**
   * @remarks
   * The HTTP status codes to return for health checks. Separate multiple HTTP status codes with commas (,). Valid values: **http_2xx** (default), **http_3xx**, **http_4xx**, and **http_5xx**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   */
  healthCheckHttpCode?: string[];
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * Valid values: **5** to **50**.
   * 
   * @example
   * 5
   */
  healthCheckInterval?: number;
  healthCheckReq?: string;
  /**
   * @remarks
   * The protocol that you want to use for health checks. Valid values: **TCP** and **HTTP**.
   * 
   * @example
   * TCP
   */
  healthCheckType?: string;
  /**
   * @remarks
   * The path to which health check requests are sent.
   * 
   * The path must be 1 to 80 characters in length, and can contain only letters, digits, and the following special characters: `- / . % ? # & =`. It can also contain the following extended characters: `_ ; ~ ! ( ) * [ ] @ $ ^ : \\" , +`. The path must start with a forward slash (/).
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * /test/index.html
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**. Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  healthyThreshold?: number;
  /**
   * @remarks
   * The HTTP method that is used for health checks. Valid values: **GET** and **HEAD**.
   * 
   * > This parameter takes effect only when **HealthCheckType** is set to **HTTP**.
   * 
   * @example
   * GET
   */
  httpCheckMethod?: string;
  /**
   * @remarks
   * The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**. Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  unhealthyThreshold?: number;
  static names(): { [key: string]: string } {
    return {
      healthCheckConnectPort: 'HealthCheckConnectPort',
      healthCheckConnectTimeout: 'HealthCheckConnectTimeout',
      healthCheckDomain: 'HealthCheckDomain',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckExp: 'HealthCheckExp',
      healthCheckHttpCode: 'HealthCheckHttpCode',
      healthCheckInterval: 'HealthCheckInterval',
      healthCheckReq: 'HealthCheckReq',
      healthCheckType: 'HealthCheckType',
      healthCheckUrl: 'HealthCheckUrl',
      healthyThreshold: 'HealthyThreshold',
      httpCheckMethod: 'HttpCheckMethod',
      unhealthyThreshold: 'UnhealthyThreshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      healthCheckConnectPort: 'number',
      healthCheckConnectTimeout: 'number',
      healthCheckDomain: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckExp: 'string',
      healthCheckHttpCode: { 'type': 'array', 'itemType': 'string' },
      healthCheckInterval: 'number',
      healthCheckReq: 'string',
      healthCheckType: 'string',
      healthCheckUrl: 'string',
      healthyThreshold: 'number',
      httpCheckMethod: 'string',
      unhealthyThreshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServerGroupServersAttributeRequestServers extends $tea.Model {
  /**
   * @remarks
   * The description of the backend server.
   * 
   * The description must be 2 to 256 characters in length, and can contain letters, digits, commas (,), periods (.), semicolons (;), forward slashes (/), at signs (@), underscores (_), and hyphens (-).
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The port that is used by the backend server. Valid values: **1** to **65535**. You can specify at most 40 backend servers in each call.
   * 
   * > This is parameter cannot be modified.
   * 
   * This parameter is required.
   * 
   * @example
   * 443
   */
  port?: number;
  /**
   * @remarks
   * The backend server ID. You can specify at most 40 backend servers in each call.
   * 
   * *   If the server group type is **Instance**, set the ServerId parameter to the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. These backend servers are specified by **Ecs**, **Eni**, or **Eci**.
   * *   If the server group type is **Ip**, set this parameter to an IP address.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs-bp67acfmxazb4p****
   */
  serverId?: string;
  /**
   * @remarks
   * The IP address of the backend server. If the server group type is **Ip**, you must specify an IP address.
   * 
   * > You can specify at most 40 backend servers in each call.
   * 
   * @example
   * 192.168.6.6
   */
  serverIp?: string;
  /**
   * @remarks
   * The type of the backend server. Valid values:
   * 
   * *   **Ecs**: ECS instance
   * *   **Eni**: ENI
   * *   **Eci**: an elastic container instance
   * *   **Ip**: an IP address
   * 
   * > You can specify at most 40 backend servers in each call.
   * 
   * This parameter is required.
   * 
   * @example
   * Ecs
   */
  serverType?: string;
  /**
   * @remarks
   * The weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If the weight of a backend server is set to **0**, no requests are forwarded to the backend server.
   * 
   * > You can specify at most 40 backend servers in each call.
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("nlb", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * Adds backend servers to a specified server group.
   * 
   * @param request - AddServersToServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroupWithOptions(request: AddServersToServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddServersToServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.servers)) {
      bodyFlat["Servers"] = request.servers;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddServersToServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddServersToServerGroupResponse>(await this.callApi(params, req, runtime), new AddServersToServerGroupResponse({}));
  }

  /**
   * Adds backend servers to a specified server group.
   * 
   * @param request - AddServersToServerGroupRequest
   * @returns AddServersToServerGroupResponse
   */
  async addServersToServerGroup(request: AddServersToServerGroupRequest): Promise<AddServersToServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addServersToServerGroupWithOptions(request, runtime);
  }

  /**
   * Associates additional certificates with a listener that uses SSL over TCP.
   * 
   * @remarks
   * *AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If the listener is in the **Associating** state, the additional certificates are being associated.
   * *   If the listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListenerWithOptions(request: AssociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AssociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AssociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new AssociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
   * Associates additional certificates with a listener that uses SSL over TCP.
   * 
   * @remarks
   * *AssociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If the listener is in the **Associating** state, the additional certificates are being associated.
   * *   If the listener is in the **Associated** state, the additional certificates are associated.
   * 
   * @param request - AssociateAdditionalCertificatesWithListenerRequest
   * @returns AssociateAdditionalCertificatesWithListenerResponse
   */
  async associateAdditionalCertificatesWithListener(request: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.associateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * 绑定带宽包
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancerWithOptions(request: AttachCommonBandwidthPackageToLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AttachCommonBandwidthPackageToLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachCommonBandwidthPackageToLoadBalancerResponse>(await this.callApi(params, req, runtime), new AttachCommonBandwidthPackageToLoadBalancerResponse({}));
  }

  /**
   * 绑定带宽包
   * 
   * @param request - AttachCommonBandwidthPackageToLoadBalancerRequest
   * @returns AttachCommonBandwidthPackageToLoadBalancerResponse
   */
  async attachCommonBandwidthPackageToLoadBalancer(request: AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachCommonBandwidthPackageToLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Adds the elastic IP address (EIP) and virtual IP address (VIP) of a zone to the DNS record.
   * 
   * @remarks
   * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2411999.html) API operation.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZonesWithOptions(request: CancelShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<CancelShiftLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CancelShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CancelShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new CancelShiftLoadBalancerZonesResponse({}));
  }

  /**
   * Adds the elastic IP address (EIP) and virtual IP address (VIP) of a zone to the DNS record.
   * 
   * @remarks
   * Before you call this operation, the zone of the Network Load Balancer (NLB) instance is removed from the DNS record by using the console or calling the [StartShiftLoadBalancerZones](https://help.aliyun.com/document_detail/2411999.html) API operation.
   * 
   * @param request - CancelShiftLoadBalancerZonesRequest
   * @returns CancelShiftLoadBalancerZonesResponse
   */
  async cancelShiftLoadBalancerZones(request: CancelShiftLoadBalancerZonesRequest): Promise<CancelShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.cancelShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Creates a TCP or UDP listener, or a listener that uses SSL over TCP for a Network Load Balancer (NLB) instance.
   * 
   * @param tmpReq - CreateListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateListenerResponse
   */
  async createListenerWithOptions(tmpReq: CreateListenerRequest, runtime: $Util.RuntimeOptions): Promise<CreateListenerResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateListenerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.proxyProtocolV2Config)) {
      request.proxyProtocolV2ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proxyProtocolV2Config, "ProxyProtocolV2Config", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!Util.isUnset(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!Util.isUnset(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!Util.isUnset(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.endPort)) {
      body["EndPort"] = request.endPort;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!Util.isUnset(request.listenerPort)) {
      body["ListenerPort"] = request.listenerPort;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      body["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!Util.isUnset(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!Util.isUnset(request.proxyProtocolV2ConfigShrink)) {
      body["ProxyProtocolV2Config"] = request.proxyProtocolV2ConfigShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.startPort)) {
      body["StartPort"] = request.startPort;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateListenerResponse>(await this.callApi(params, req, runtime), new CreateListenerResponse({}));
  }

  /**
   * Creates a TCP or UDP listener, or a listener that uses SSL over TCP for a Network Load Balancer (NLB) instance.
   * 
   * @param request - CreateListenerRequest
   * @returns CreateListenerResponse
   */
  async createListener(request: CreateListenerRequest): Promise<CreateListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createListenerWithOptions(request, runtime);
  }

  /**
   * Creates a Network Load Balancer (NLB) instance in a specified region.
   * 
   * @remarks
   *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
   * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) to query the status of an NLB instance.
   *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
   *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancerWithOptions(request: CreateLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<CreateLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressIpVersion)) {
      body["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.deletionProtectionConfig)) {
      bodyFlat["DeletionProtectionConfig"] = request.deletionProtectionConfig;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerBillingConfig)) {
      bodyFlat["LoadBalancerBillingConfig"] = request.loadBalancerBillingConfig;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.loadBalancerType)) {
      body["LoadBalancerType"] = request.loadBalancerType;
    }

    if (!Util.isUnset(request.modificationProtectionConfig)) {
      bodyFlat["ModificationProtectionConfig"] = request.modificationProtectionConfig;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      bodyFlat["ZoneMappings"] = request.zoneMappings;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLoadBalancerResponse>(await this.callApi(params, req, runtime), new CreateLoadBalancerResponse({}));
  }

  /**
   * Creates a Network Load Balancer (NLB) instance in a specified region.
   * 
   * @remarks
   *   When you create an NLB instance, the service-linked role AliyunServiceRoleForNlb is automatically created and assigned to you.
   * *   **CreateLoadBalancer** is an asynchronous operation. After you send a request, the system returns an instance ID and runs the task in the background. You can call [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) to query the status of an NLB instance.
   *     *   If an NLB instance is in the **Provisioning** state, the NLB instance is being created.
   *     *   If an NLB instance is in the **Active** state, the NLB instance is created.
   * 
   * @param request - CreateLoadBalancerRequest
   * @returns CreateLoadBalancerResponse
   */
  async createLoadBalancer(request: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Creates a custom security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicyWithOptions(request: CreateSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<CreateSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSecurityPolicyResponse>(await this.callApi(params, req, runtime), new CreateSecurityPolicyResponse({}));
  }

  /**
   * Creates a custom security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - CreateSecurityPolicyRequest
   * @returns CreateSecurityPolicyResponse
   */
  async createSecurityPolicy(request: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Creates a server group in a region.
   * 
   * @remarks
   *   **protocol** specifies the protocol used to forward requests to the backend servers.
   * *   NLB instances support only backend server groups that use TCP, UDP, or SSL over TCP.
   * *   **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the creation status of the task.
   *     *   If the task is in the **Succeeded** status, the server group is created.
   *     *   If the task is in the **Processing** status, the server group is being created.
   * 
   * @param request - CreateServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServerGroupResponse
   */
  async createServerGroupWithOptions(request: CreateServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<CreateServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressIPVersion)) {
      body["AddressIPVersion"] = request.addressIPVersion;
    }

    if (!Util.isUnset(request.anyPortEnabled)) {
      body["AnyPortEnabled"] = request.anyPortEnabled;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!Util.isUnset(request.protocol)) {
      body["Protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.tag)) {
      body["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateServerGroupResponse>(await this.callApi(params, req, runtime), new CreateServerGroupResponse({}));
  }

  /**
   * Creates a server group in a region.
   * 
   * @remarks
   *   **protocol** specifies the protocol used to forward requests to the backend servers.
   * *   NLB instances support only backend server groups that use TCP, UDP, or SSL over TCP.
   * *   **CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the creation status of the task.
   *     *   If the task is in the **Succeeded** status, the server group is created.
   *     *   If the task is in the **Processing** status, the server group is being created.
   * 
   * @param request - CreateServerGroupRequest
   * @returns CreateServerGroupResponse
   */
  async createServerGroup(request: CreateServerGroupRequest): Promise<CreateServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createServerGroupWithOptions(request, runtime);
  }

  /**
   * 删除监听
   * 
   * @param request - DeleteListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteListenerResponse
   */
  async deleteListenerWithOptions(request: DeleteListenerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteListenerResponse>(await this.callApi(params, req, runtime), new DeleteListenerResponse({}));
  }

  /**
   * 删除监听
   * 
   * @param request - DeleteListenerRequest
   * @returns DeleteListenerResponse
   */
  async deleteListener(request: DeleteListenerRequest): Promise<DeleteListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteListenerWithOptions(request, runtime);
  }

  /**
   * 删除负载均衡
   * 
   * @param request - DeleteLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancerWithOptions(request: DeleteLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLoadBalancerResponse>(await this.callApi(params, req, runtime), new DeleteLoadBalancerResponse({}));
  }

  /**
   * 删除负载均衡
   * 
   * @param request - DeleteLoadBalancerRequest
   * @returns DeleteLoadBalancerResponse
   */
  async deleteLoadBalancer(request: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLoadBalancerWithOptions(request, runtime);
  }

  /**
   * 删除安全策略
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicyWithOptions(request: DeleteSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityPolicyResponse>(await this.callApi(params, req, runtime), new DeleteSecurityPolicyResponse({}));
  }

  /**
   * 删除安全策略
   * 
   * @param request - DeleteSecurityPolicyRequest
   * @returns DeleteSecurityPolicyResponse
   */
  async deleteSecurityPolicy(request: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * DeleteServerGroup
   * 
   * @remarks
   * You can delete server groups that are not associated with listeners.
   * 
   * @param request - DeleteServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroupWithOptions(request: DeleteServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteServerGroupResponse>(await this.callApi(params, req, runtime), new DeleteServerGroupResponse({}));
  }

  /**
   * DeleteServerGroup
   * 
   * @remarks
   * You can delete server groups that are not associated with listeners.
   * 
   * @param request - DeleteServerGroupRequest
   * @returns DeleteServerGroupResponse
   */
  async deleteServerGroup(request: DeleteServerGroupRequest): Promise<DeleteServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteServerGroupWithOptions(request, runtime);
  }

  /**
   * 查询秒级监控存储配置
   * 
   * @param request - DescribeHdMonitorRegionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeHdMonitorRegionConfigResponse
   */
  async describeHdMonitorRegionConfigWithOptions(request: DescribeHdMonitorRegionConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeHdMonitorRegionConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeHdMonitorRegionConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeHdMonitorRegionConfigResponse>(await this.callApi(params, req, runtime), new DescribeHdMonitorRegionConfigResponse({}));
  }

  /**
   * 查询秒级监控存储配置
   * 
   * @param request - DescribeHdMonitorRegionConfigRequest
   * @returns DescribeHdMonitorRegionConfigResponse
   */
  async describeHdMonitorRegionConfig(request: DescribeHdMonitorRegionConfigRequest): Promise<DescribeHdMonitorRegionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeHdMonitorRegionConfigWithOptions(request, runtime);
  }

  /**
   * Queries regions that support Network Load Balancer (NLB) instances.
   * 
   * @param request - DescribeRegionsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeRegionsResponse
   */
  async describeRegionsWithOptions(request: DescribeRegionsRequest, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  /**
   * Queries regions that support Network Load Balancer (NLB) instances.
   * 
   * @param request - DescribeRegionsRequest
   * @returns DescribeRegionsResponse
   */
  async describeRegions(request: DescribeRegionsRequest): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeRegionsWithOptions(request, runtime);
  }

  /**
   * Queries zones in a region that supports Network Load Balancer (NLB).
   * 
   * @param request - DescribeZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeZonesResponse
   */
  async describeZonesWithOptions(request: DescribeZonesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeZonesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serviceCode)) {
      query["ServiceCode"] = request.serviceCode;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeZonesResponse>(await this.callApi(params, req, runtime), new DescribeZonesResponse({}));
  }

  /**
   * Queries zones in a region that supports Network Load Balancer (NLB).
   * 
   * @param request - DescribeZonesRequest
   * @returns DescribeZonesResponse
   */
  async describeZones(request: DescribeZonesRequest): Promise<DescribeZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeZonesWithOptions(request, runtime);
  }

  /**
   * 解绑带宽包
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancerWithOptions(request: DetachCommonBandwidthPackageFromLoadBalancerRequest, runtime: $Util.RuntimeOptions): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.bandwidthPackageId)) {
      body["BandwidthPackageId"] = request.bandwidthPackageId;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DetachCommonBandwidthPackageFromLoadBalancer",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachCommonBandwidthPackageFromLoadBalancerResponse>(await this.callApi(params, req, runtime), new DetachCommonBandwidthPackageFromLoadBalancerResponse({}));
  }

  /**
   * 解绑带宽包
   * 
   * @param request - DetachCommonBandwidthPackageFromLoadBalancerRequest
   * @returns DetachCommonBandwidthPackageFromLoadBalancerResponse
   */
  async detachCommonBandwidthPackageFromLoadBalancer(request: DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachCommonBandwidthPackageFromLoadBalancerWithOptions(request, runtime);
  }

  /**
   * Changes the network type of an IPv6 Network Load Balancer (NLB) instance from Internet-facing to internal-facing.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6InternetWithOptions(request: DisableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<DisableLoadBalancerIpv6InternetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new DisableLoadBalancerIpv6InternetResponse({}));
  }

  /**
   * Changes the network type of an IPv6 Network Load Balancer (NLB) instance from Internet-facing to internal-facing.
   * 
   * @param request - DisableLoadBalancerIpv6InternetRequest
   * @returns DisableLoadBalancerIpv6InternetResponse
   */
  async disableLoadBalancerIpv6Internet(request: DisableLoadBalancerIpv6InternetRequest): Promise<DisableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * Disassociates additional certificates from a listener that uses SSL over TCP.
   * 
   * @remarks
   * *DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
   * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
   * 
   * @param request - DisassociateAdditionalCertificatesWithListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListenerWithOptions(request: DisassociateAdditionalCertificatesWithListenerRequest, runtime: $Util.RuntimeOptions): Promise<DisassociateAdditionalCertificatesWithListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalCertificateIds)) {
      body["AdditionalCertificateIds"] = request.additionalCertificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DisassociateAdditionalCertificatesWithListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DisassociateAdditionalCertificatesWithListenerResponse>(await this.callApi(params, req, runtime), new DisassociateAdditionalCertificatesWithListenerResponse({}));
  }

  /**
   * Disassociates additional certificates from a listener that uses SSL over TCP.
   * 
   * @remarks
   * *DisassociateAdditionalCertificatesWithListener** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [ListListenerCertificates](https://help.aliyun.com/document_detail/615175.html) operation to query the status of the task:
   * *   If an additional certificate is in the **Dissociating** state, the additional certificate is being disassociated.
   * *   If an additional certificate is in the **Dissociated** state, the additional certificate is disassociated.
   * 
   * @param request - DisassociateAdditionalCertificatesWithListenerRequest
   * @returns DisassociateAdditionalCertificatesWithListenerResponse
   */
  async disassociateAdditionalCertificatesWithListener(request: DisassociateAdditionalCertificatesWithListenerRequest): Promise<DisassociateAdditionalCertificatesWithListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.disassociateAdditionalCertificatesWithListenerWithOptions(request, runtime);
  }

  /**
   * Changes the network type of the IPv6 address of a dual-stack NLB instance from private to the public.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6InternetWithOptions(request: EnableLoadBalancerIpv6InternetRequest, runtime: $Util.RuntimeOptions): Promise<EnableLoadBalancerIpv6InternetResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "EnableLoadBalancerIpv6Internet",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EnableLoadBalancerIpv6InternetResponse>(await this.callApi(params, req, runtime), new EnableLoadBalancerIpv6InternetResponse({}));
  }

  /**
   * Changes the network type of the IPv6 address of a dual-stack NLB instance from private to the public.
   * 
   * @param request - EnableLoadBalancerIpv6InternetRequest
   * @returns EnableLoadBalancerIpv6InternetResponse
   */
  async enableLoadBalancerIpv6Internet(request: EnableLoadBalancerIpv6InternetRequest): Promise<EnableLoadBalancerIpv6InternetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.enableLoadBalancerIpv6InternetWithOptions(request, runtime);
  }

  /**
   * 获取工作流状态
   * 
   * @param request - GetJobStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetJobStatusResponse
   */
  async getJobStatusWithOptions(request: GetJobStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetJobStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetJobStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetJobStatusResponse>(await this.callApi(params, req, runtime), new GetJobStatusResponse({}));
  }

  /**
   * 获取工作流状态
   * 
   * @param request - GetJobStatusRequest
   * @returns GetJobStatusResponse
   */
  async getJobStatus(request: GetJobStatusRequest): Promise<GetJobStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getJobStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttributeWithOptions(request: GetListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetListenerAttributeResponse>(await this.callApi(params, req, runtime), new GetListenerAttributeResponse({}));
  }

  /**
   * Queries the details of a Network Load Balancer (NLB) listener.
   * 
   * @param request - GetListenerAttributeRequest
   * @returns GetListenerAttributeResponse
   */
  async getListenerAttribute(request: GetListenerAttributeRequest): Promise<GetListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Queries the health check status of a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatusWithOptions(request: GetListenerHealthStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetListenerHealthStatusResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerId)) {
      query["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetListenerHealthStatus",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetListenerHealthStatusResponse>(await this.callApi(params, req, runtime), new GetListenerHealthStatusResponse({}));
  }

  /**
   * Queries the health check status of a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetListenerHealthStatusRequest
   * @returns GetListenerHealthStatusResponse
   */
  async getListenerHealthStatus(request: GetListenerHealthStatusRequest): Promise<GetListenerHealthStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getListenerHealthStatusWithOptions(request, runtime);
  }

  /**
   * Queries the details about a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttributeWithOptions(request: GetLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<GetLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clientToken)) {
      query["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      query["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      query["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new GetLoadBalancerAttributeResponse({}));
  }

  /**
   * Queries the details about a Network Load Balancer (NLB) instance.
   * 
   * @param request - GetLoadBalancerAttributeRequest
   * @returns GetLoadBalancerAttributeResponse
   */
  async getLoadBalancerAttribute(request: GetLoadBalancerAttributeRequest): Promise<GetLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables deletion protection and the configuration read-only mode for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenerCertificatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificatesWithOptions(request: ListListenerCertificatesRequest, runtime: $Util.RuntimeOptions): Promise<ListListenerCertificatesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certType)) {
      body["CertType"] = request.certType;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListListenerCertificates",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenerCertificatesResponse>(await this.callApi(params, req, runtime), new ListListenerCertificatesResponse({}));
  }

  /**
   * Enables or disables deletion protection and the configuration read-only mode for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenerCertificatesRequest
   * @returns ListListenerCertificatesResponse
   */
  async listListenerCertificates(request: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenerCertificatesWithOptions(request, runtime);
  }

  /**
   * Queries listeners added to a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListListenersResponse
   */
  async listListenersWithOptions(request: ListListenersRequest, runtime: $Util.RuntimeOptions): Promise<ListListenersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.listenerIds)) {
      query["ListenerIds"] = request.listenerIds;
    }

    if (!Util.isUnset(request.listenerProtocol)) {
      query["ListenerProtocol"] = request.listenerProtocol;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.secSensorEnabled)) {
      query["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListListeners",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListListenersResponse>(await this.callApi(params, req, runtime), new ListListenersResponse({}));
  }

  /**
   * Queries listeners added to a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListListenersRequest
   * @returns ListListenersResponse
   */
  async listListeners(request: ListListenersRequest): Promise<ListListenersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listListenersWithOptions(request, runtime);
  }

  /**
   * Queries Network Load Balancer (NLB) instances in a region based on specified conditions.
   * 
   * @param request - ListLoadBalancersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancersWithOptions(request: ListLoadBalancersRequest, runtime: $Util.RuntimeOptions): Promise<ListLoadBalancersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addressIpVersion)) {
      query["AddressIpVersion"] = request.addressIpVersion;
    }

    if (!Util.isUnset(request.addressType)) {
      query["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.DNSName)) {
      query["DNSName"] = request.DNSName;
    }

    if (!Util.isUnset(request.ipv6AddressType)) {
      query["Ipv6AddressType"] = request.ipv6AddressType;
    }

    if (!Util.isUnset(request.loadBalancerBusinessStatus)) {
      query["LoadBalancerBusinessStatus"] = request.loadBalancerBusinessStatus;
    }

    if (!Util.isUnset(request.loadBalancerIds)) {
      query["LoadBalancerIds"] = request.loadBalancerIds;
    }

    if (!Util.isUnset(request.loadBalancerNames)) {
      query["LoadBalancerNames"] = request.loadBalancerNames;
    }

    if (!Util.isUnset(request.loadBalancerStatus)) {
      query["LoadBalancerStatus"] = request.loadBalancerStatus;
    }

    if (!Util.isUnset(request.loadBalancerType)) {
      query["LoadBalancerType"] = request.loadBalancerType;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    if (!Util.isUnset(request.vpcIds)) {
      query["VpcIds"] = request.vpcIds;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLoadBalancers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListLoadBalancersResponse>(await this.callApi(params, req, runtime), new ListLoadBalancersResponse({}));
  }

  /**
   * Queries Network Load Balancer (NLB) instances in a region based on specified conditions.
   * 
   * @param request - ListLoadBalancersRequest
   * @returns ListLoadBalancersResponse
   */
  async listLoadBalancers(request: ListLoadBalancersRequest): Promise<ListLoadBalancersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listLoadBalancersWithOptions(request, runtime);
  }

  /**
   * Queries the TLS security policies set for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSecurityPolicyResponse
   */
  async listSecurityPolicyWithOptions(request: ListSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityPolicyIds)) {
      body["SecurityPolicyIds"] = request.securityPolicyIds;
    }

    if (!Util.isUnset(request.securityPolicyNames)) {
      body["SecurityPolicyNames"] = request.securityPolicyNames;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityPolicyResponse>(await this.callApi(params, req, runtime), new ListSecurityPolicyResponse({}));
  }

  /**
   * Queries the TLS security policies set for a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListSecurityPolicyRequest
   * @returns ListSecurityPolicyResponse
   */
  async listSecurityPolicy(request: ListSecurityPolicyRequest): Promise<ListSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the backend servers in a specified server group.
   * 
   * @param request - ListServerGroupServersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServersWithOptions(request: ListServerGroupServersRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupServersResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverIds)) {
      body["ServerIds"] = request.serverIds;
    }

    if (!Util.isUnset(request.serverIps)) {
      body["ServerIps"] = request.serverIps;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroupServers",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerGroupServersResponse>(await this.callApi(params, req, runtime), new ListServerGroupServersResponse({}));
  }

  /**
   * Queries the backend servers in a specified server group.
   * 
   * @param request - ListServerGroupServersRequest
   * @returns ListServerGroupServersResponse
   */
  async listServerGroupServers(request: ListServerGroupServersRequest): Promise<ListServerGroupServersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupServersWithOptions(request, runtime);
  }

  /**
   * Queries the server groups of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServerGroupsResponse
   */
  async listServerGroupsWithOptions(request: ListServerGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListServerGroupsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.tag)) {
      query["Tag"] = request.tag;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      body["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.serverGroupIds)) {
      body["ServerGroupIds"] = request.serverGroupIds;
    }

    if (!Util.isUnset(request.serverGroupNames)) {
      body["ServerGroupNames"] = request.serverGroupNames;
    }

    if (!Util.isUnset(request.serverGroupType)) {
      body["ServerGroupType"] = request.serverGroupType;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListServerGroups",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListServerGroupsResponse>(await this.callApi(params, req, runtime), new ListServerGroupsResponse({}));
  }

  /**
   * Queries the server groups of a Network Load Balancer (NLB) instance.
   * 
   * @param request - ListServerGroupsRequest
   * @returns ListServerGroupsResponse
   */
  async listServerGroups(request: ListServerGroupsRequest): Promise<ListServerGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listServerGroupsWithOptions(request, runtime);
  }

  /**
   * Queries the default TLS policy.
   * 
   * @param request - ListSystemSecurityPolicyRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSystemSecurityPolicyResponse
   */
  async listSystemSecurityPolicyWithOptions(request: ListSystemSecurityPolicyRequest, runtime: $Util.RuntimeOptions): Promise<ListSystemSecurityPolicyResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListSystemSecurityPolicy",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSystemSecurityPolicyResponse>(await this.callApi(params, req, runtime), new ListSystemSecurityPolicyResponse({}));
  }

  /**
   * Queries the default TLS policy.
   * 
   * @param request - ListSystemSecurityPolicyRequest
   * @returns ListSystemSecurityPolicyResponse
   */
  async listSystemSecurityPolicy(request: ListSystemSecurityPolicyRequest): Promise<ListSystemSecurityPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSystemSecurityPolicyWithOptions(request, runtime);
  }

  /**
   * Queries the tags of a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(request: ListTagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxResults)) {
      body["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      body["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Queries the tags of a resource.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTagResourcesWithOptions(request, runtime);
  }

  /**
   * Associates a security group with a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html).
   * *   An NLB instance can be associated with up to four security groups.
   * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation.
   * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   *     *   If the task is in the **Succeeded** state, the security group is associated.
   *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroupWithOptions(request: LoadBalancerJoinSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LoadBalancerJoinSecurityGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LoadBalancerJoinSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoadBalancerJoinSecurityGroupResponse>(await this.callApi(params, req, runtime), new LoadBalancerJoinSecurityGroupResponse({}));
  }

  /**
   * Associates a security group with a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that you have created a security group. For more information about how to create a security group, see [CreateSecurityGroup](https://help.aliyun.com/document_detail/25553.html).
   * *   An NLB instance can be associated with up to four security groups.
   * *   You can query the security groups that are associated with an NLB instance by calling the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/214362.html) operation.
   * *   LoadBalancerJoinSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   *     *   If the task is in the **Succeeded** state, the security group is associated.
   *     *   If the task is in the **Processing** state, the security group is being associated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerJoinSecurityGroupRequest
   * @returns LoadBalancerJoinSecurityGroupResponse
   */
  async loadBalancerJoinSecurityGroup(request: LoadBalancerJoinSecurityGroupRequest): Promise<LoadBalancerJoinSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loadBalancerJoinSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Disassociates a security group from a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   * *   If the task is in the **Succeeded** state, the security group is disassociated.
   * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroupWithOptions(request: LoadBalancerLeaveSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<LoadBalancerLeaveSecurityGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityGroupIds)) {
      body["SecurityGroupIds"] = request.securityGroupIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "LoadBalancerLeaveSecurityGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<LoadBalancerLeaveSecurityGroupResponse>(await this.callApi(params, req, runtime), new LoadBalancerLeaveSecurityGroupResponse({}));
  }

  /**
   * Disassociates a security group from a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * LoadBalancerLeaveSecurityGroup is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the status of a task.
   * *   If the task is in the **Succeeded** state, the security group is disassociated.
   * *   If the task is in the **Processing** state, the security group is being disassociated. In this case, you can perform only query operations.
   * 
   * @param request - LoadBalancerLeaveSecurityGroupRequest
   * @returns LoadBalancerLeaveSecurityGroupResponse
   */
  async loadBalancerLeaveSecurityGroup(request: LoadBalancerLeaveSecurityGroupRequest): Promise<LoadBalancerLeaveSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.loadBalancerLeaveSecurityGroupWithOptions(request, runtime);
  }

  /**
   * Modify the group of resource.
   * 
   * @param request - MoveResourceGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroupWithOptions(request: MoveResourceGroupRequest, runtime: $Util.RuntimeOptions): Promise<MoveResourceGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.newResourceGroupId)) {
      body["NewResourceGroupId"] = request.newResourceGroupId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "MoveResourceGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MoveResourceGroupResponse>(await this.callApi(params, req, runtime), new MoveResourceGroupResponse({}));
  }

  /**
   * Modify the group of resource.
   * 
   * @param request - MoveResourceGroupRequest
   * @returns MoveResourceGroupResponse
   */
  async moveResourceGroup(request: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.moveResourceGroupWithOptions(request, runtime);
  }

  /**
   * Removes backend servers from a server group of a Network Load Balancer (NLB) instance.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroupWithOptions(request: RemoveServersFromServerGroupRequest, runtime: $Util.RuntimeOptions): Promise<RemoveServersFromServerGroupResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveServersFromServerGroup",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveServersFromServerGroupResponse>(await this.callApi(params, req, runtime), new RemoveServersFromServerGroupResponse({}));
  }

  /**
   * Removes backend servers from a server group of a Network Load Balancer (NLB) instance.
   * 
   * @param request - RemoveServersFromServerGroupRequest
   * @returns RemoveServersFromServerGroupResponse
   */
  async removeServersFromServerGroup(request: RemoveServersFromServerGroupRequest): Promise<RemoveServersFromServerGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeServersFromServerGroupWithOptions(request, runtime);
  }

  /**
   * 配置秒级监控存储
   * 
   * @param request - SetHdMonitorRegionConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns SetHdMonitorRegionConfigResponse
   */
  async setHdMonitorRegionConfigWithOptions(request: SetHdMonitorRegionConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetHdMonitorRegionConfigResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.logProject)) {
      query["LogProject"] = request.logProject;
    }

    if (!Util.isUnset(request.metricStore)) {
      query["MetricStore"] = request.metricStore;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetHdMonitorRegionConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetHdMonitorRegionConfigResponse>(await this.callApi(params, req, runtime), new SetHdMonitorRegionConfigResponse({}));
  }

  /**
   * 配置秒级监控存储
   * 
   * @param request - SetHdMonitorRegionConfigRequest
   * @returns SetHdMonitorRegionConfigResponse
   */
  async setHdMonitorRegionConfig(request: SetHdMonitorRegionConfigRequest): Promise<SetHdMonitorRegionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setHdMonitorRegionConfigWithOptions(request, runtime);
  }

  /**
   * Enables a listener for a Network Load Balancer (NLB) instance.
   * 
   * @param request - StartListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartListenerResponse
   */
  async startListenerWithOptions(request: StartListenerRequest, runtime: $Util.RuntimeOptions): Promise<StartListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartListenerResponse>(await this.callApi(params, req, runtime), new StartListenerResponse({}));
  }

  /**
   * Enables a listener for a Network Load Balancer (NLB) instance.
   * 
   * @param request - StartListenerRequest
   * @returns StartListenerResponse
   */
  async startListener(request: StartListenerRequest): Promise<StartListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startListenerWithOptions(request, runtime);
  }

  /**
   * Removes an elastic IP address (EIP) or a virtual IP address (VIP) of a zone from a DNS record.
   * 
   * @remarks
   * > If a Network Load Balancer (NLB) instance is deployed only in one zone, you cannot remove the NLB instance from the zone.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZonesWithOptions(request: StartShiftLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<StartShiftLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StartShiftLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartShiftLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new StartShiftLoadBalancerZonesResponse({}));
  }

  /**
   * Removes an elastic IP address (EIP) or a virtual IP address (VIP) of a zone from a DNS record.
   * 
   * @remarks
   * > If a Network Load Balancer (NLB) instance is deployed only in one zone, you cannot remove the NLB instance from the zone.
   * 
   * @param request - StartShiftLoadBalancerZonesRequest
   * @returns StartShiftLoadBalancerZonesResponse
   */
  async startShiftLoadBalancerZones(request: StartShiftLoadBalancerZonesRequest): Promise<StartShiftLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startShiftLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Disables a listener for a Network Load Balancer (NLB) instance.
   * 
   * @param request - StopListenerRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopListenerResponse
   */
  async stopListenerWithOptions(request: StopListenerRequest, runtime: $Util.RuntimeOptions): Promise<StopListenerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopListener",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopListenerResponse>(await this.callApi(params, req, runtime), new StopListenerResponse({}));
  }

  /**
   * Disables a listener for a Network Load Balancer (NLB) instance.
   * 
   * @param request - StopListenerRequest
   * @returns StopListenerResponse
   */
  async stopListener(request: StopListenerRequest): Promise<StopListenerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopListenerWithOptions(request, runtime);
  }

  /**
   * Adds tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tag)) {
      bodyFlat["Tag"] = request.tag;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to specified resources.
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.tagResourcesWithOptions(request, runtime);
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(request: UntagResourcesRequest, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["All"] = request.all;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceId)) {
      bodyFlat["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKey)) {
      bodyFlat["TagKey"] = request.tagKey;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from resources.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.untagResourcesWithOptions(request, runtime);
  }

  /**
   * Updates the attributes of a listener, such as the name and the idle connection timeout period.
   * 
   * @param tmpReq - UpdateListenerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttributeWithOptions(tmpReq: UpdateListenerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateListenerAttributeResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateListenerAttributeShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.proxyProtocolV2Config)) {
      request.proxyProtocolV2ConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.proxyProtocolV2Config, "ProxyProtocolV2Config", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alpnEnabled)) {
      body["AlpnEnabled"] = request.alpnEnabled;
    }

    if (!Util.isUnset(request.alpnPolicy)) {
      body["AlpnPolicy"] = request.alpnPolicy;
    }

    if (!Util.isUnset(request.caCertificateIds)) {
      body["CaCertificateIds"] = request.caCertificateIds;
    }

    if (!Util.isUnset(request.caEnabled)) {
      body["CaEnabled"] = request.caEnabled;
    }

    if (!Util.isUnset(request.certificateIds)) {
      body["CertificateIds"] = request.certificateIds;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.idleTimeout)) {
      body["IdleTimeout"] = request.idleTimeout;
    }

    if (!Util.isUnset(request.listenerDescription)) {
      body["ListenerDescription"] = request.listenerDescription;
    }

    if (!Util.isUnset(request.listenerId)) {
      body["ListenerId"] = request.listenerId;
    }

    if (!Util.isUnset(request.mss)) {
      body["Mss"] = request.mss;
    }

    if (!Util.isUnset(request.proxyProtocolEnabled)) {
      body["ProxyProtocolEnabled"] = request.proxyProtocolEnabled;
    }

    if (!Util.isUnset(request.proxyProtocolV2ConfigShrink)) {
      body["ProxyProtocolV2Config"] = request.proxyProtocolV2ConfigShrink;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.secSensorEnabled)) {
      body["SecSensorEnabled"] = request.secSensorEnabled;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateListenerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateListenerAttributeResponse>(await this.callApi(params, req, runtime), new UpdateListenerAttributeResponse({}));
  }

  /**
   * Updates the attributes of a listener, such as the name and the idle connection timeout period.
   * 
   * @param request - UpdateListenerAttributeRequest
   * @returns UpdateListenerAttributeResponse
   */
  async updateListenerAttribute(request: UpdateListenerAttributeRequest): Promise<UpdateListenerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateListenerAttributeWithOptions(request, runtime);
  }

  /**
   * Changes the network type of the IPv4 address of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the **AddressType** value of an NLB instance after you change the network type.
   * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the task status:
   *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
   *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfigWithOptions(request: UpdateLoadBalancerAddressTypeConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressType)) {
      body["AddressType"] = request.addressType;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAddressTypeConfig",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerAddressTypeConfigResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerAddressTypeConfigResponse({}));
  }

  /**
   * Changes the network type of the IPv4 address of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   *   Make sure that an NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the **AddressType** value of an NLB instance after you change the network type.
   * *   **UpdateLoadBalancerAddressTypeConfig** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation to query the task status:
   *     *   If the task is in the **Succeeded** state, the network type of the IPv4 address of the NLB instance is changed.
   *     *   If the task is in the **Processing** state, the network type of the IPv4 address of the NLB instance is being changed. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerAddressTypeConfigRequest
   * @returns UpdateLoadBalancerAddressTypeConfigResponse
   */
  async updateLoadBalancerAddressTypeConfig(request: UpdateLoadBalancerAddressTypeConfigRequest): Promise<UpdateLoadBalancerAddressTypeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAddressTypeConfigWithOptions(request, runtime);
  }

  /**
   * Updates the attributes, including the name, of a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttributeWithOptions(request: UpdateLoadBalancerAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.cps)) {
      body["Cps"] = request.cps;
    }

    if (!Util.isUnset(request.crossZoneEnabled)) {
      body["CrossZoneEnabled"] = request.crossZoneEnabled;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.loadBalancerName)) {
      body["LoadBalancerName"] = request.loadBalancerName;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerAttributeResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerAttributeResponse({}));
  }

  /**
   * Updates the attributes, including the name, of a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateLoadBalancerAttributeRequest
   * @returns UpdateLoadBalancerAttributeResponse
   */
  async updateLoadBalancerAttribute(request: UpdateLoadBalancerAttributeRequest): Promise<UpdateLoadBalancerAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerAttributeWithOptions(request, runtime);
  }

  /**
   * Enables or disables deletion protection and the configuration read-only mode for a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * > You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the details about deletion protection and the configuration read-only mode.
   * 
   * @param request - UpdateLoadBalancerProtectionRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtectionWithOptions(request: UpdateLoadBalancerProtectionRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerProtectionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.deletionProtectionEnabled)) {
      body["DeletionProtectionEnabled"] = request.deletionProtectionEnabled;
    }

    if (!Util.isUnset(request.deletionProtectionReason)) {
      body["DeletionProtectionReason"] = request.deletionProtectionReason;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.modificationProtectionReason)) {
      body["ModificationProtectionReason"] = request.modificationProtectionReason;
    }

    if (!Util.isUnset(request.modificationProtectionStatus)) {
      body["ModificationProtectionStatus"] = request.modificationProtectionStatus;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerProtection",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerProtectionResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerProtectionResponse({}));
  }

  /**
   * Enables or disables deletion protection and the configuration read-only mode for a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * > You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the details about deletion protection and the configuration read-only mode.
   * 
   * @param request - UpdateLoadBalancerProtectionRequest
   * @returns UpdateLoadBalancerProtectionResponse
   */
  async updateLoadBalancerProtection(request: UpdateLoadBalancerProtectionRequest): Promise<UpdateLoadBalancerProtectionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerProtectionWithOptions(request, runtime);
  }

  /**
   * Modifies the zones and zone attributes of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
   * Prerequisites
   * *   An NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the zones and zone attributes of an NLB instance.
   * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation query to query the status of a task:
   *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
   *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZonesWithOptions(request: UpdateLoadBalancerZonesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLoadBalancerZonesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.loadBalancerId)) {
      body["LoadBalancerId"] = request.loadBalancerId;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneMappings)) {
      body["ZoneMappings"] = request.zoneMappings;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLoadBalancerZones",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLoadBalancerZonesResponse>(await this.callApi(params, req, runtime), new UpdateLoadBalancerZonesResponse({}));
  }

  /**
   * Modifies the zones and zone attributes of a Network Load Balancer (NLB) instance.
   * 
   * @remarks
   * When you call this operation, make sure that you specify all the zones of the NLB instance, including the existing zones and new zones. If you do not specify the existing zones, the existing zones are removed.
   * Prerequisites
   * *   An NLB instance is created. For more information, see [CreateLoadBalancer](https://help.aliyun.com/document_detail/445868.html).
   * *   You can call the [GetLoadBalancerAttribute](https://help.aliyun.com/document_detail/445873.html) operation to query the zones and zone attributes of an NLB instance.
   * *   **UpdateLoadBalancerZones** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [GetJobStatus](https://help.aliyun.com/document_detail/445904.html) operation query to query the status of a task:
   *     *   If the task is in the **Succeeded** state, the zones and zone attributes are modified.
   *     *   If the task is in the **Processing** state, the zones and zone attributes are being modified. In this case, you can perform only query operations.
   * 
   * @param request - UpdateLoadBalancerZonesRequest
   * @returns UpdateLoadBalancerZonesResponse
   */
  async updateLoadBalancerZones(request: UpdateLoadBalancerZonesRequest): Promise<UpdateLoadBalancerZonesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLoadBalancerZonesWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttributeWithOptions(request: UpdateSecurityPolicyAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateSecurityPolicyAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ciphers)) {
      body["Ciphers"] = request.ciphers;
    }

    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.securityPolicyId)) {
      body["SecurityPolicyId"] = request.securityPolicyId;
    }

    if (!Util.isUnset(request.securityPolicyName)) {
      body["SecurityPolicyName"] = request.securityPolicyName;
    }

    if (!Util.isUnset(request.tlsVersions)) {
      body["TlsVersions"] = request.tlsVersions;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateSecurityPolicyAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateSecurityPolicyAttributeResponse>(await this.callApi(params, req, runtime), new UpdateSecurityPolicyAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a security policy for a Network Load Balancer (NLB) instance.
   * 
   * @param request - UpdateSecurityPolicyAttributeRequest
   * @returns UpdateSecurityPolicyAttributeResponse
   */
  async updateSecurityPolicyAttribute(request: UpdateSecurityPolicyAttributeRequest): Promise<UpdateSecurityPolicyAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateSecurityPolicyAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of a server group of Network Load Balancer (NLB).
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttributeWithOptions(request: UpdateServerGroupAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.connectionDrainEnabled)) {
      body["ConnectionDrainEnabled"] = request.connectionDrainEnabled;
    }

    if (!Util.isUnset(request.connectionDrainTimeout)) {
      body["ConnectionDrainTimeout"] = request.connectionDrainTimeout;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    let bodyFlat : {[key: string ]: any} = { };
    if (!Util.isUnset(request.healthCheckConfig)) {
      bodyFlat["HealthCheckConfig"] = request.healthCheckConfig;
    }

    if (!Util.isUnset(request.preserveClientIpEnabled)) {
      body["PreserveClientIpEnabled"] = request.preserveClientIpEnabled;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.scheduler)) {
      body["Scheduler"] = request.scheduler;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.serverGroupName)) {
      body["ServerGroupName"] = request.serverGroupName;
    }

    body = {
      ...body,
      ...OpenApiUtil.query(bodyFlat),
    };
    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServerGroupAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServerGroupAttributeResponse({}));
  }

  /**
   * Modifies the configurations of a server group of Network Load Balancer (NLB).
   * 
   * @param request - UpdateServerGroupAttributeRequest
   * @returns UpdateServerGroupAttributeResponse
   */
  async updateServerGroupAttribute(request: UpdateServerGroupAttributeRequest): Promise<UpdateServerGroupAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupAttributeWithOptions(request, runtime);
  }

  /**
   * Modifies the configurations of backend servers in a server group, such as the weight and description.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1.  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation to query the status of a server group.
   *     *   If a server group is in the **Configuring** state, the server group is being modified.
   *     *   If a server group is in the **Available** state, the server group is running.
   * 2.  You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/445896.html) operation to query the status of a backend server.
   *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
   *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttributeWithOptions(request: UpdateServerGroupServersAttributeRequest, runtime: $Util.RuntimeOptions): Promise<UpdateServerGroupServersAttributeResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clientToken)) {
      body["ClientToken"] = request.clientToken;
    }

    if (!Util.isUnset(request.dryRun)) {
      body["DryRun"] = request.dryRun;
    }

    if (!Util.isUnset(request.regionId)) {
      body["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.serverGroupId)) {
      body["ServerGroupId"] = request.serverGroupId;
    }

    if (!Util.isUnset(request.servers)) {
      body["Servers"] = request.servers;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServerGroupServersAttribute",
      version: "2022-04-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateServerGroupServersAttributeResponse>(await this.callApi(params, req, runtime), new UpdateServerGroupServersAttributeResponse({}));
  }

  /**
   * Modifies the configurations of backend servers in a server group, such as the weight and description.
   * 
   * @remarks
   * *UpdateServerGroupServersAttribute** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background.
   * 1.  You can call the [ListServerGroups](https://help.aliyun.com/document_detail/445895.html) operation to query the status of a server group.
   *     *   If a server group is in the **Configuring** state, the server group is being modified.
   *     *   If a server group is in the **Available** state, the server group is running.
   * 2.  You can call the [ListServerGroupServers](https://help.aliyun.com/document_detail/445896.html) operation to query the status of a backend server.
   *     *   If a backend server is in the **Configuring** state, it indicates that the backend server is being modified.
   *     *   If a backend server is in the **Available** state, it indicates that the backend server is running.
   * 
   * @param request - UpdateServerGroupServersAttributeRequest
   * @returns UpdateServerGroupServersAttributeResponse
   */
  async updateServerGroupServersAttribute(request: UpdateServerGroupServersAttributeRequest): Promise<UpdateServerGroupServersAttributeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateServerGroupServersAttributeWithOptions(request, runtime);
  }

}

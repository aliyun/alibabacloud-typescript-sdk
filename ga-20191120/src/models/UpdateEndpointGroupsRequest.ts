// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client IP addresses. Valid values:
   * 
   * - **true**: preserves client IP addresses.
   * 
   * - **false** (default): does not preserve client IP addresses.
   * 
   * > * By default, client IP address preservation is disabled for endpoint groups of TCP and UDP listeners. You can enable it based on your business needs.
   * >
   * > * Client IP address preservation is enabled by default for endpoint groups of HTTP and HTTPS listeners. The client IP addresses are retrieved from the X-Forwarded-For header field. You cannot disable this feature.
   * >
   * > * EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >
   * > * For more information, see [](t1863665.xdita#).
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:
   * 
   * - **true**: uses the Proxy Protocol.
   * 
   * - **false** (default): does not use the Proxy Protocol.
   * 
   * > * This parameter is available only for endpoint groups of TCP listeners.
   * >
   * > * EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >
   * > * For more information, see [](t1863665.xdita#).
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or instance ID of the endpoint, based on the value of Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.0.XX.XX
   */
  endpoint?: string;
  /**
   * @example
   * BAILIAN
   */
  provider?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * > - This parameter is available only when the endpoint type is ENI. You can specify this parameter. If you do not specify this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of the endpoint.
   * 
   * - **Domain**: a custom domain name.
   * 
   * - **Ip**: a custom IP address.
   * 
   * - **IpTarget**: a custom private IP address.
   * 
   * - **PublicIp**: an Alibaba Cloud public IP address.
   * 
   * - **ECS**: an Alibaba Cloud Elastic Compute Service (ECS) instance.
   * 
   * - **SLB**: an Alibaba Cloud Server Load Balancer (SLB) instance.
   * 
   * - **ALB**: an Alibaba Cloud Application Load Balancer (ALB) instance.
   * 
   * - **OSS**: an Alibaba Cloud Object Storage Service (OSS) bucket.
   * 
   * - **ENI**: an Alibaba Cloud Elastic Network Interface (ENI).
   * 
   * - **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
   * 
   * > * If you set the endpoint type to **ECS**, **ENI**, **SLB**, **NLB**, or **IpTarget**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint.
   * >
   * > * If you set the endpoint type to **ALB**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb.
   * >
   * > * If you set the endpoint type to **OSS**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss.
   * >
   * > > For more information, see [](t1963894.xdita#).
   * 
   * This parameter is required.
   * 
   * @example
   * Ip
   */
  type?: string;
  /**
   * @remarks
   * The list of vSwitches in the VPC.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * You can specify at most one VPC ID for an endpoint group that is associated with a listener that uses smart routing.
   * 
   * > This parameter is required and takes effect only when the endpoint type is **IpTarget**.
   * 
   * @example
   * vpc-uf66oesmrqge1t2gs****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
   * 
   * Valid values: **0** to **255**.
   * 
   * > If you set the weight of an endpoint to 0, GA stops distributing traffic to the endpoint. Handle this with care.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'ApiKeys',
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      provider: 'Provider',
      subAddress: 'SubAddress',
      type: 'Type',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': 'string' },
      enableClientIPPreservation: 'boolean',
      enableProxyProtocol: 'boolean',
      endpoint: 'string',
      provider: 'string',
      subAddress: 'string',
      type: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port.
   * 
   * Valid values: **1** to **65499**.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port.
   * 
   * Valid values: **1** to **65499**.
   * 
   * > - For TCP listeners, virtual endpoint groups do not support port mapping. If a virtual endpoint group already exists under the listener, you cannot configure port mapping for the default endpoint group. If port mapping is already configured for the default endpoint group, you cannot add a virtual endpoint group.
   * >
   * > - After you configure port mapping, the following limits apply to subsequent listener modifications: You cannot change the listener protocol, except for changing it between HTTP and HTTPS.
   * >
   * > - Listener port: The modified listener port range must include all listener ports that are currently mapped. For example, if the listener port range is 80-82 and the ports are mapped to endpoint ports 100-102, you cannot change the listener port range to 80-81.
   * 
   * @example
   * 443
   */
  listenerPort?: number;
  static names(): { [key: string]: string } {
    return {
      endpointPort: 'EndpointPort',
      listenerPort: 'ListenerPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointPort: 'number',
      listenerPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequestEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * false
   */
  enableClientIPPreservationProxyProtocol?: boolean;
  /**
   * @remarks
   * Specifies whether to use the TCP Option Address (TOA) module to preserve client IP addresses. Valid values:
   * 
   * - **true**: yes.
   * 
   * - **false**: no.
   * 
   * @example
   * false
   */
  enableClientIPPreservationToa?: boolean;
  /**
   * @remarks
   * The configurations of the endpoint.
   */
  endpointConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters in length and cannot start with http\\:// or https\\://.
   * 
   * @example
   * group1
   */
  endpointGroupDescription?: string;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * ep-bp1d2utp8qqe2a44t****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * group1
   */
  endpointGroupName?: string;
  endpointIpVersion?: string;
  /**
   * @remarks
   * The version of the backend service protocol for endpoints in a listener that uses smart routing. Valid values:
   * 
   * - **HTTP1.1** (default): HTTP/1.1
   * 
   * - **HTTP2**: HTTP/2
   * 
   * > This parameter is available only when you set EndpointRequestProtocol to HTTPS.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol of the backend service. Valid values:
   * 
   * - **HTTP**: HTTP
   * 
   * - **HTTPS**: HTTPS
   * 
   * > * You can set this parameter only when you create an endpoint group for an HTTP or HTTPS listener.
   * >
   * > * For an HTTP listener, the backend service protocol must be HTTP.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature.
   * 
   * - **true**: enables the health check feature.
   * 
   * - **false** (default): disables the health check feature.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path of the health check.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port that is used for health checks.
   * 
   * Valid values: **1** to **65535**.
   * 
   * @example
   * 20
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol that is used for health checks.
   * 
   * - **tcp** or **TCP**: TCP
   * 
   * - **http** or **HTTP**: HTTP
   * 
   * - **https** or **HTTPS**: HTTPS
   * 
   * @example
   * tcp
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The port mapping.
   */
  portOverrides?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  /**
   * @remarks
   * The number of consecutive health checks that an endpoint must pass to be considered healthy, or fail to be considered unhealthy.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can specify this parameter to distribute traffic to the endpoint groups.
   * 
   * Valid values: **1** to **100**.
   * 
   * @example
   * 20
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservationProxyProtocol: 'EnableClientIPPreservationProxyProtocol',
      enableClientIPPreservationToa: 'EnableClientIPPreservationToa',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupDescription: 'EndpointGroupDescription',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupName: 'EndpointGroupName',
      endpointIpVersion: 'EndpointIpVersion',
      endpointProtocolVersion: 'EndpointProtocolVersion',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      portOverrides: 'PortOverrides',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservationProxyProtocol: 'boolean',
      enableClientIPPreservationToa: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupDescription: 'string',
      endpointGroupId: 'string',
      endpointGroupName: 'string',
      endpointIpVersion: 'string',
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      thresholdCount: 'number',
      trafficPercentage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpointConfigurations)) {
      $dara.Model.validateArray(this.endpointConfigurations);
    }
    if(Array.isArray(this.portOverrides)) {
      $dara.Model.validateArray(this.portOverrides);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateEndpointGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * Generate a value for this parameter on your client. Make sure that the value is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, a 2xx HTTP status code is returned.
   * 
   * - **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the endpoint group.
   * 
   * This parameter is required.
   */
  endpointGroupConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The ID of the listener.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The region ID of the GA instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupsRequestEndpointGroupConfigurations },
      listenerId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroupConfigurations)) {
      $dara.Model.validateArray(this.endpointGroupConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


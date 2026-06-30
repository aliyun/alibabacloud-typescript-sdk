// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * > This parameter is required only for HTTPS listeners.
   * 
   * @example
   * 449****-cn-hangzhou
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations extends $dara.Model {
  /**
   * @remarks
   * The first port of the backend service.
   * 
   * The valid port range is **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * In each endpoint group for a custom routing type listener, you can enter up to 20 backend service starting ports.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The protocols of the backend service.
   * 
   * You can specify up to four backend service protocols for each mapping configuration.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  protocols?: string[];
  /**
   * @remarks
   * The last port of the backend service.
   * 
   * The valid port range is **1** to **65499**. The value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * In each endpoint group of a listener of the custom routing type, you can enter a maximum of 20 backend service ports.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      protocols: 'Protocols',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      protocols: { 'type': 'array', 'itemType': 'string' },
      toPort: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.protocols)) {
      $dara.Model.validateArray(this.protocols);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port of the destination that is allowed to receive traffic. The port must be within the port range of the backend service.
   * 
   * This parameter is required only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for each endpoint, and up to 5 first ports for each destination.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the destination that is allowed to receive traffic. The port must be within the port range of the backend service.
   * 
   * This parameter is required only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for each endpoint, and up to 5 last ports for each destination.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * 80
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations extends $dara.Model {
  /**
   * @remarks
   * The IP address of the destination that is allowed to receive traffic.
   * 
   * This parameter is required only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 destination IP addresses for each endpoint.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The port range of the destination that is allowed to receive traffic. The port range must be within the port range of the backend service.
   * 
   * If you leave this parameter empty, all ports of the destination are allowed.
   * 
   * This parameter is required only when **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 port ranges for each endpoint, and up to 5 port ranges for each destination.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  portRanges?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      portRanges: 'PortRanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurationsPortRanges },
    };
  }

  validate() {
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The vSwitch of the custom routing listener.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The destination configurations for a custom routing listener.
   * 
   * You can specify up to 20 destinations for each endpoint.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  policyConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy for the backend service of a custom routing listener. Valid values:
   * 
   * - **DenyAll** (default): Denies all traffic to the specified backend service.
   * 
   * - **AllowAll**: Allows all traffic to the specified backend service.
   * 
   * - **AllowCustom**: Allows traffic to specific destinations.
   *   You must specify the IP addresses and port ranges of the allowed destinations. If no port range is specified, all ports of the destination are allowed.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The type of the backend service for a custom routing listener. Valid value:
   * 
   * **PrivateSubNet** (default): a private CIDR block.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * PrivateSubNet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      policyConfigurations: 'PolicyConfigurations',
      trafficToEndpointPolicy: 'TrafficToEndpointPolicy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      policyConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations },
      trafficToEndpointPolicy: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyConfigurations)) {
      $dara.Model.validateArray(this.policyConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestCustomRoutingEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters long and cannot contain `http://` or `https://`.
   * 
   * You can enter up to 5 endpoint group descriptions.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The mapping configurations for the endpoint group.
   * 
   * You must specify the port ranges and protocols for the backend service. The settings are mapped to the associated listener port ranges.
   * 
   * You can specify up to 20 mapping configurations for each endpoint group.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  destinationConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations[];
  /**
   * @remarks
   * The endpoint configurations.
   * 
   * You can specify up to 10 endpoints for each endpoint group.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  endpointConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the region where the endpoint group is created.
   * 
   * You can enter up to 5 endpoint group region IDs.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 1 to 128 characters long, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * You can enter up to 5 endpoint group names.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationConfigurations: 'DestinationConfigurations',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupRegion: 'EndpointGroupRegion',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations },
      endpointConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupRegion: 'string',
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.destinationConfigurations)) {
      $dara.Model.validateArray(this.destinationConfigurations);
    }
    if(Array.isArray(this.endpointConfigurations)) {
      $dara.Model.validateArray(this.endpointConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client source IP addresses. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * > * This feature is disabled by default for endpoint groups of TCP or UDP listeners. You can enable it as needed.
   * >
   * > * This feature is enabled by default for endpoint groups of HTTP or HTTPS listeners. Client source IP addresses are retrieved from the `X-Forwarded-For` header. You cannot disable this feature.
   * >
   * > * You cannot set both `EnableClientIPPreservation` and `EnableProxyProtocol` to `true`.
   * >
   * > * For more information, see [Preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the proxy protocol to preserve client source IP addresses. Valid values:
   * 
   * - **true**: enables the feature.
   * 
   * - **false** (default): disables the feature.
   * 
   * > * You can configure this parameter only for endpoint groups of TCP listeners.
   * >
   * > * You cannot set both `EnableClientIPPreservation` and `EnableProxyProtocol` to `true`.
   * >
   * > * For more information, see [Preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address or domain name of the endpoint.
   * 
   * In an endpoint group of an intelligent routing listener, you can enter up to 100 IP addresses or domain names of endpoints.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
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
   * > If the endpoint type is **ENI**, you can specify this parameter. If you do not specify this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Domain**: a custom domain name.
   * 
   * - **Ip**: a custom IP address.
   * 
   * - **PublicIp**: a public IP address of an Alibaba Cloud service.
   * 
   * - **ECS**: an Elastic Compute Service (ECS) instance.
   * 
   * - **SLB**: a Server Load Balancer (SLB) instance.
   * 
   * - **ALB**: an Application Load Balancer (ALB) instance.
   * 
   * - **OSS**: an Object Storage Service (OSS) bucket.
   * 
   * - **ENI**: an elastic network interface (ENI).
   * 
   * - **NLB**: a Network Load Balancer (NLB) instance.
   * 
   * - **IpTarget**: a custom private IP address.
   * 
   * You can specify up to 100 endpoints in an endpoint group.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - When you add endpoints, Global Accelerator may create service-linked roles to access your resources. The role created depends on the endpoint type:
   * >
   * > -
   * >
   * > -
   * >
   * > -
   * >
   * > > For more information, see [Service-linked roles](https://help.aliyun.com/document_detail/178360.html).
   * 
   * @example
   * Ip
   */
  type?: string;
  /**
   * @remarks
   * The list of vSwitches in the VPC. You can specify up to two vSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * In an endpoint group of an intelligent routing listener, you can enter a maximum of 1 VPC ID.
   * 
   * > This parameter is required only for **IpTarget** endpoints.
   * 
   * @example
   * vpc-bp13r1kpr2lel****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
   * 
   * Valid values: **0** to **255**.
   * 
   * In an endpoint group for an intelligent routing type listener, you can enter weights for up to 100 endpoints.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - If an endpoint\\"s weight is set to 0, Global Accelerator stops sending traffic to it. Use this setting with caution.
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

export class CreateListenerRequestEndpointGroupConfigurationsPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port that is specified in the port mapping.
   * 
   * You can enter a maximum of 5 endpoint ports for port mapping.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - For TCP listeners, you cannot configure a port mapping for a virtual endpoint group. If a virtual endpoint group already exists for the listener, you cannot configure a port mapping for the default endpoint group. If a port mapping is configured for the default endpoint group, you cannot add a virtual endpoint group to the listener.
   * >
   * > - After you configure a port mapping, you cannot modify the listener protocol, except for switching between HTTP and HTTPS.
   * >
   * > - When you modify the listener port range, make sure that the new port range includes all listener ports that are specified in the port mapping. For example, if the listener port range is 80-82 and the listener ports are mapped to the endpoint ports 100-102, you cannot change the listener port range to 80-81.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port that is specified in the port mapping.
   * 
   * You can enter up to 5 listener ports for port mappings.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - For TCP listeners, you cannot configure a port mapping for a virtual endpoint group. If a virtual endpoint group already exists for the listener, you cannot configure a port mapping for the default endpoint group. If a port mapping is configured for the default endpoint group, you cannot add a virtual endpoint group to the listener.
   * >
   * > - After you configure a port mapping, you cannot modify the listener protocol, except for switching between HTTP and HTTPS.
   * >
   * > - When you modify the listener port range, make sure that the new port range includes all listener ports that are specified in the port mapping. For example, if the listener port range is 80-82 and the listener ports are mapped to the endpoint ports 100-102, you cannot change the listener port range to 80-81.
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

export class CreateListenerRequestEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * The endpoint configurations.
   */
  endpointConfigurations?: CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters long and cannot contain `http://` or `https://`.
   * 
   * You can enter up to 10 endpoint group descriptions.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * test
   */
  endpointGroupDescription?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 1 to 128 characters long, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * You can enter up to 10 endpoint group names.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * test
   */
  endpointGroupName?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint group is created.
   * 
   * You can enter up to 10 endpoint group region IDs.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * - **default** (default): a default endpoint group.
   * 
   * - **virtual**: a virtual endpoint group.
   * 
   * You can enter up to 10 endpoint group types.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - You can create virtual endpoint groups only for HTTP or HTTPS listeners.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The IP version used by the backend service. Valid values:
   * 
   * - **IPv4** (default): GA uses only IPv4 addresses to communicate with backend services.
   * 
   * - **IPv6**: GA uses only IPv6 addresses to communicate with backend services.
   * 
   * - **ProtocolAffinity**: GA uses the same IP version as the client request to communicate with backend services.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * The protocol version of the backend service. Valid values:
   * 
   * - **HTTP1.1** (default): HTTP/1.1
   * 
   * - **HTTP2**: HTTP/2
   * 
   * > This parameter is available only when EndpointRequestProtocol is set to HTTPS.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol used by the backend service. Valid values:
   * 
   * - **HTTP** (default)
   * 
   * - **HTTPS**
   * 
   * You can enter up to 10 backend service protocols.
   * 
   * > - This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * >
   * > - You can configure this parameter only for endpoint groups of HTTP or HTTPS listeners.
   * >
   * > - For an HTTP listener, the backend service protocol must be **HTTP**.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks for the endpoint group. Valid values:
   * 
   * - **true**: Enables health checks.
   * 
   * - **false** (Default): Disables health checks.
   * 
   * You can enable health checks for up to 10 endpoint groups.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name that is used for health checks.
   * 
   * @example
   * www.taobao.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The health check interval, in seconds.
   * 
   * You can enter up to 10 health check intervals.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path to which health check requests are sent.
   * 
   * You can enter up to 10 health check paths.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port that is used for health checks. Valid values: **1** to **65535**.
   * 
   * You can enter a maximum of 10 ports for health checks.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * 20
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol over which health check requests are sent. Valid values:
   * 
   * - **tcp** or **TCP**: TCP
   * 
   * - **http** or **HTTP**: HTTP
   * 
   * - **https** or **HTTPS**: HTTPS
   * 
   * You can enter up to 10 health check protocols.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * tcp
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The port mapping. You can specify up to five port mappings.
   */
  portOverrides?: CreateListenerRequestEndpointGroupConfigurationsPortOverrides[];
  /**
   * @remarks
   * The number of consecutive successful health checks required to mark an endpoint as healthy, or consecutive failed health checks to mark an endpoint as unhealthy.
   * Valid values: **2** to **10**. Default value: **3**.
   * 
   * You can enter up to 10 values for the number of consecutive health checks required to trigger a health status change.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic distribution ratio. If a standard listener is associated with multiple endpoint groups, this parameter specifies the percentage of traffic that is distributed to each endpoint group.
   * 
   * Valid values: **1** to **100**. Default value: **100**.
   * 
   * You can enter traffic distribution values for up to 10 endpoint groups.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   * 
   * @example
   * 100
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupDescription: 'EndpointGroupDescription',
      endpointGroupName: 'EndpointGroupName',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
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
      endpointConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations },
      endpointGroupDescription: 'string',
      endpointGroupName: 'string',
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointIpVersion: 'string',
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurationsPortOverrides },
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

export class CreateListenerRequestPortRanges extends $dara.Model {
  /**
   * @remarks
   * The first port in the listener range used to receive and forward requests to endpoints.
   * 
   * The port number must be in the range of **1** to **65499**, and the value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * > For HTTP or HTTPS listeners, you can specify only one listener port. In this case, the value of **FromPort** must be the same as the value of **ToPort**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port in the listener range used to receive and forward requests to endpoints.
   * 
   * The port number must be in the range of **1** to **65499**, and the value of **FromPort** must be less than or equal to the value of **ToPort**.
   * 
   * > For HTTP or HTTPS listeners, you can specify only one listener port. In this case, the value of **FromPort** must be the same as the value of **ToPort**.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  toPort?: number;
  static names(): { [key: string]: string } {
    return {
      fromPort: 'FromPort',
      toPort: 'ToPort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fromPort: 'number',
      toPort: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequestXForwardedForConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the `GA-AP` header to pass information about the acceleration region to the backend server. Valid values:
   * 
   * - **true**
   * 
   * - **false** (Default)
   * 
   * > This parameter applies only to HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaApEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-ID` header to pass the Global Accelerator instance ID to the backend server. Valid values:
   * 
   * - **true**
   * 
   * - **false** (Default)
   * 
   * > This parameter applies only to HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForGaIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Port` header to pass the listener port of the Global Accelerator instance to the backend server. Valid values:
   * 
   * - **true**
   * 
   * - **false** (Default)
   * 
   * > This parameter applies only to HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Proto` header to pass the listener protocol of the Global Accelerator instance to the backend server. Valid values:
   * 
   * - **true**
   * 
   * - **false** (Default)
   * 
   * > This parameter applies only to HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Real-IP` header to pass the client\\"s real IP address to the backend server. Valid values:
   * 
   * - **true**
   * 
   * - **false** (Default)
   * 
   * > This parameter applies only to HTTP and HTTPS listeners.
   * 
   * @example
   * false
   */
  XRealIpEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      XForwardedForGaApEnabled: 'XForwardedForGaApEnabled',
      XForwardedForGaIdEnabled: 'XForwardedForGaIdEnabled',
      XForwardedForPortEnabled: 'XForwardedForPortEnabled',
      XForwardedForProtoEnabled: 'XForwardedForProtoEnabled',
      XRealIpEnabled: 'XRealIpEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      XForwardedForGaApEnabled: 'boolean',
      XForwardedForGaIdEnabled: 'boolean',
      XForwardedForPortEnabled: 'boolean',
      XForwardedForProtoEnabled: 'boolean',
      XRealIpEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateListenerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The SSL certificates for an HTTPS listener.
   */
  certificates?: CreateListenerRequestCertificates[];
  /**
   * @remarks
   * The client affinity for the listener.
   * 
   * - By default, client affinity is disabled, and requests from the same client may be routed to different endpoints.
   * 
   * - Set to **SOURCE_IP** to enable client affinity. This setting directs all requests from the same client to the same endpoint, regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * A client token that ensures the idempotence of the request.
   * 
   * Generate a unique token on your client for each request. The token must contain only ASCII characters.
   * 
   * > If you omit this parameter, the system uses the request\\"s **RequestId** as the **ClientToken**.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The configurations of the endpoint groups for a custom routing listener.
   * 
   * You can specify up to five endpoint groups.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **CustomRouting**.
   */
  customRoutingEndpointGroupConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurations[];
  /**
   * @remarks
   * The description of the listener.
   * 
   * The description can be up to 200 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * Listener
   */
  description?: string;
  /**
   * @remarks
   * The configurations of the endpoint groups for a standard listener.
   * 
   * You can specify up to 10 endpoint groups.
   * 
   * > This parameter applies only when the listener\\"s routing type (**Type**) is **Standard**.
   */
  endpointGroupConfigurations?: CreateListenerRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The maximum HTTP version. Valid values:
   * 
   * - **http3**: HTTP/3
   * 
   * - **http2** (default): HTTP/2
   * 
   * - **http1.1**: HTTP/1.1
   * 
   * > This parameter applies only to HTTPS listeners.
   * 
   * @example
   * http2
   */
  httpVersion?: string;
  /**
   * @remarks
   * The connection idle timeout, in seconds.
   * 
   * - TCP: 10–900 seconds. Default: 900 seconds.
   * 
   * - UDP: 10–20 seconds. Default: 20 seconds.
   * 
   * - HTTP/HTTPS: 1–60 seconds. Default: 15 seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 128 characters long, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * Listener
   */
  name?: string;
  /**
   * @remarks
   * The listener port range. The port numbers must be within the range of **1** to **65499**. The maximum number of allowed ports depends on the listener\\"s routing type and protocol. For more information, see [Listener ports](https://help.aliyun.com/document_detail/153216.html).
   * 
   * This parameter is required.
   */
  portRanges?: CreateListenerRequestPortRanges[];
  /**
   * @remarks
   * The listener\\"s network protocol. Valid values:
   * 
   * - **tcp**: TCP.
   * 
   * - **udp**: UDP.
   * 
   * - **http**: HTTP.
   * 
   * - **https**: HTTPS.
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request timeout for HTTP/HTTPS connections, in seconds.
   * 
   * Valid values: 1–180 seconds. Default: 60 seconds.
   * 
   * > This parameter applies only to HTTP or HTTPS listeners. If the backend server does not respond within the timeout period, Global Accelerator returns an HTTP 504 error to the client.
   * 
   * @example
   * 15
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy. Valid values:
   * 
   * - **tls_cipher_policy_1_0**
   * 
   *   - Supported TLS versions: TLS 1.0, TLS 1.1, and TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_1**
   * 
   *   - Supported TLS versions: TLS 1.1 and TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2**
   * 
   *   - Supported TLS version: TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict**
   * 
   *   - Supported TLS version: TLS 1.2.
   * 
   *   - Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * - **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *   - Supported TLS versions: TLS 1.2 and TLS 1.3.
   * 
   *   - Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA.
   * 
   * > This parameter applies only to HTTPS listeners.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The routing type of the listener. Valid values:
   * 
   * - **Standard** (default): standard routing.
   * 
   * - **CustomRouting**: custom routing.
   * 
   * > * Custom routing is in invitation-only preview. To use this feature, contact your Alibaba Cloud account manager.
   * >
   * > * A standard Global Accelerator instance supports only one routing type for all of its listeners. The routing type cannot be changed after the listener is created. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * Settings for `X-Forwarded-For` related headers.
   */
  XForwardedForConfig?: CreateListenerRequestXForwardedForConfig;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      certificates: 'Certificates',
      clientAffinity: 'ClientAffinity',
      clientToken: 'ClientToken',
      customRoutingEndpointGroupConfigurations: 'CustomRoutingEndpointGroupConfigurations',
      description: 'Description',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      httpVersion: 'HttpVersion',
      idleTimeout: 'IdleTimeout',
      name: 'Name',
      portRanges: 'PortRanges',
      protocol: 'Protocol',
      regionId: 'RegionId',
      requestTimeout: 'RequestTimeout',
      securityPolicyId: 'SecurityPolicyId',
      type: 'Type',
      XForwardedForConfig: 'XForwardedForConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      certificates: { 'type': 'array', 'itemType': CreateListenerRequestCertificates },
      clientAffinity: 'string',
      clientToken: 'string',
      customRoutingEndpointGroupConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestCustomRoutingEndpointGroupConfigurations },
      description: 'string',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateListenerRequestEndpointGroupConfigurations },
      httpVersion: 'string',
      idleTimeout: 'number',
      name: 'string',
      portRanges: { 'type': 'array', 'itemType': CreateListenerRequestPortRanges },
      protocol: 'string',
      regionId: 'string',
      requestTimeout: 'number',
      securityPolicyId: 'string',
      type: 'string',
      XForwardedForConfig: CreateListenerRequestXForwardedForConfig,
    };
  }

  validate() {
    if(Array.isArray(this.certificates)) {
      $dara.Model.validateArray(this.certificates);
    }
    if(Array.isArray(this.customRoutingEndpointGroupConfigurations)) {
      $dara.Model.validateArray(this.customRoutingEndpointGroupConfigurations);
    }
    if(Array.isArray(this.endpointGroupConfigurations)) {
      $dara.Model.validateArray(this.endpointGroupConfigurations);
    }
    if(Array.isArray(this.portRanges)) {
      $dara.Model.validateArray(this.portRanges);
    }
    if(this.XForwardedForConfig && typeof (this.XForwardedForConfig as any).validate === 'function') {
      (this.XForwardedForConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


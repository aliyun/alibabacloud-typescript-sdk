// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateListenerRequestCertificates extends $dara.Model {
  /**
   * @remarks
   * The ID of the SSL certificate.
   * 
   * > This parameter is required only when you create an HTTPS listener.
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
   * The start port used by the endpoint group that is associated with the custom routing listener.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be equal to or smaller than the value of **ToPort**.
   * 
   * You can specify up to 20 start ports for an endpoint group of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The protocol used by the endpoint group that is associated with the custom routing listener.
   * 
   * You can specify up to four protocol types for an endpoint group of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   */
  protocols?: string[];
  /**
   * @remarks
   * The end port used by the endpoint group that is associated with the custom routing listener.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be equal to or smaller than the value of **ToPort**.
   * 
   * You can specify up to 20 end ports for an endpoint group of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
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
   * The start port of the port range. The value of this parameter must fall within the port range of the backend service.
   * 
   * This parameter takes effect only if **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations in each endpoint of a custom routing listener. You can specify up to five start ports for each destination.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * 80
   */
  fromPort?: number;
  /**
   * @remarks
   * The end port of the destination port range. The value of this parameter must fall within the port range of the backend service.
   * 
   * This parameter takes effect only if **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations in each endpoint of a custom routing listener. You can specify up to five end ports for each destination.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
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
   * The IP address of the destination.
   * 
   * This parameter takes effect only if **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify up to 20 destination IP addresses for each endpoint of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * 10.0.XX.XX
   */
  address?: string;
  /**
   * @remarks
   * The port ranges of the destination to which traffic is forwarded. The value of this parameter must fall within the port range of the endpoint group.
   * 
   * If you do not specify this parameter, traffic is forwarded over all ports.
   * 
   * This parameter takes effect only if **TrafficToEndpointPolicy** is set to **AllowCustom**.
   * 
   * You can specify port ranges for up to 20 destinations in each endpoint of a custom routing listener. You can specify up to five port ranges for each destination.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
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
   * The name of the vSwitch attached to the endpoint of the custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * vsw-test01
   */
  endpoint?: string;
  /**
   * @remarks
   * The destinations in the endpoint that is associated with the custom routing listener.
   * 
   * You can specify up to 20 traffic destinations for each endpoint of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   */
  policyConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurationsPolicyConfigurations[];
  /**
   * @remarks
   * The traffic policy for the endpoint that is associated with the custom routing listener. Default value: DenyAll. Valid values:
   * 
   * *   **DenyAll** (default): denies all traffic to the specified backend service.
   * *   **AllowAll**: allows all traffic to the specified backend service.
   * *   **AllowCustom**: allows traffic only to specified destinations in the endpoint. If you set this parameter to AllowCustom, you must specify IP addresses and port ranges as the destinations to which you want to distribute traffic. If you specify only IP addresses and do not specify port ranges, GA can forward traffic to the specified IP addresses over all destination ports.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * DenyAll
   */
  trafficToEndpointPolicy?: string;
  /**
   * @remarks
   * The service type of the endpoint that is associated with the custom routing listener. Default value: PrivateSubNet. Set the value to
   * 
   * **PrivateSubNet**, which specifies a private CIDR block.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
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
   * The description of the endpoint group that is associated with the custom routing listener.
   * 
   * The description can be up to 200 characters in length and cannot contain `http://` or `https://`.
   * 
   * You can specify up to five endpoint group descriptions.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The mapping configurations of the endpoint group that is associated with the custom routing listener.
   * 
   * You need to specify the port ranges and protocols used by the endpoint group. The ports are mapped to listener ports.
   * 
   * You can specify up to 20 mapping configurations for an endpoint group of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   */
  destinationConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsDestinationConfigurations[];
  /**
   * @remarks
   * The endpoints that are associated with the custom routing listener.
   * 
   * You can configure up to 10 endpoints for an endpoint group of a custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   */
  endpointConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The region ID of the endpoint group that is associated with the custom routing listener.
   * 
   * You can enter the region IDs of up to five endpoint groups.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The name of the endpoint group that is associated with the custom routing listener.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * You can specify up to five endpoint group names.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
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
  /**
   * @remarks
   * Specifies whether to automatically preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   By default, client IP address preservation is disabled for an endpoint group that is associated with a UDP or TCP listener. You can configure this parameter based on your business requirements.
   * >*   By default, client IP address preservation is enabled for an endpoint group that is associated with a HTTP or HTTPS listener. Client IP addresses are obtained by using the X-Forwarded-For header. You cannot disable the feature.
   * >*   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >>For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * >*   This parameter is supported only by endpoint groups associated with TCP listeners.
   * >*   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >>For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address or domain name of the endpoint that is associated with the intelligent routing listener.
   * 
   * You can enter the IP addresses or domain names of up to 100 endpoints in an endpoint group that is associated with the intelligent routing listener.
   * 
   * >  If you set **Type** to **Standard**, you can configure endpoint groups and endpoints, and this parameter is required.
   * 
   * @example
   * 47.0.XX.XX
   */
  endpoint?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * >  This parameter is available only when you set the endpoint type to **ENI**. If you leave this parameter empty, the primary private IP address of the ENI is used.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of the endpoint that is associated with the intelligent routing listener. Valid values:
   * 
   * *   **Domain**: a custom domain name.
   * *   **Ip**: a custom IP address.
   * *   **PublicIp**: a public IP address provided by Alibaba Cloud.
   * *   **ECS**: an Elastic Compute Service (ECS) instance.
   * *   **SLB**: a Server Load Balancer (SLB) instance.
   * *   **ALB**: an Application Load Balancer (ALB) instance.
   * *   **OSS**: an Object Storage Service (OSS) bucket.
   * *   **ENI**: an elastic network interface (ENI).
   * *   **NLB**: a Network Load Balancer (NLB) instance.
   * *   **IpTarget**: a custom private IP address.
   * 
   * You can specify up to 100 endpoint types in the endpoint group that is associated with the intelligent routing listener.
   * 
   * > *   If you set **Type** to **Standard**, you can configure the endpoint group and endpoint that are associated with the intelligent routing listener. In addition, this parameter is required.
   * >*   If you set this parameter to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget** and the AliyunServiceRoleForGaVpcEndpoint service-linked role does not exist, the system automatically creates the role.
   * >*   If you set this parameter to **ALB** and the AliyunServiceRoleForGaAlb service-linked role does not exist, the system automatically creates the role.
   * >*   If you set this parameter to **OSS** and the AliyunServiceRoleForGaOss service-linked role does not exist, the system automatically creates the role.
   * >*   If you set this parameter to **NLB** and the AliyunServiceRoleForGaNlb service-linked role does not exist, the system automatically creates the role.
   * >>For more information, see [Service-linked roles](https://help.aliyun.com/document_detail/178360.html).
   * 
   * @example
   * Ip
   */
  type?: string;
  /**
   * @remarks
   * The IDs of vSwitches that are deployed in the VPC.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * You can specify one VPC ID for an endpoint group of an intelligent routing listener.
   * 
   * >  This parameter is valid and required only if Type is set to **IpTarget**.
   * 
   * @example
   * vpc-bp13r1kpr2lel****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint that is associated with the intelligent routing listener.
   * 
   * Valid values: **0** to **255**.
   * 
   * You can specify the weights of up to 100 endpoints for an endpoint group of an intelligent routing listener.
   * 
   * > *   If you set **Type** to **Standard**, you can configure the endpoint group and endpoint that are associated with the intelligent routing listener. In addition, this parameter is required.
   * >*   If the weight of an endpoint is set to 0, GA stops distributing network traffic to the endpoint. Proceed with caution.
   * 
   * @example
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      subAddress: 'SubAddress',
      type: 'Type',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableClientIPPreservation: 'boolean',
      enableProxyProtocol: 'boolean',
      endpoint: 'string',
      subAddress: 'string',
      type: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      weight: 'number',
    };
  }

  validate() {
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
   * The endpoint port that is mapped to the listener port.
   * 
   * You can specify endpoint ports in up to five port mappings.
   * 
   * > *   You can configure endpoint groups and endpoints for an intelligent routing listener only if you set **Type** to **Standard**.
   * >*   You cannot configure port mappings for virtual endpoint groups of TCP listeners. If a virtual endpoint group already exists on the listener, you cannot configure port mappings for the default endpoint group. If port mappings are configured for the default endpoint group, you cannot add a virtual endpoint group.
   * >*   If you configure port mappings for a listener, you cannot modify the listener protocol. You can only switch between HTTP and HTTPS.
   * >*   Listener port: When you modify the listener port range, make sure that the port range includes the ports configured in port mappings. For example, if you set the listener port range to 80 to 82 and map the listener ports to endpoint ports 100 to 102, you cannot change the listener port range to 80 to 81.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port that is mapped to the endpoint port.
   * 
   * You can specify listener ports in up to five port mappings.
   * 
   * > *   You can configure endpoint groups and endpoints for an intelligent routing listener only if you set **Type** to **Standard**.
   * >*   You cannot configure port mappings for virtual endpoint groups of TCP listeners. If a virtual endpoint group already exists on the listener, you cannot configure port mappings for the default endpoint group. If port mappings are configured for the default endpoint group, you cannot add a virtual endpoint group.
   * >*   If you configure port mappings for a listener, you cannot modify the listener protocol. You can only switch between HTTP and HTTPS.
   * >*   Listener port: When you modify the listener port range, make sure that the port range includes the ports configured in port mappings. For example, if you set the listener port range to 80 to 82 and map the listener ports to endpoint ports 100 to 102, you cannot change the listener port range to 80 to 81.
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
   * The endpoints that are associated with the intelligent routing listener.
   */
  endpointConfigurations?: CreateListenerRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The description of the endpoint group that is associated with the intelligent routing listener.
   * 
   * The description can be up to 200 characters in length and cannot contain `http://` or `https://`.
   * 
   * You can enter the descriptions of up to 10 endpoint groups.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * test
   */
  endpointGroupDescription?: string;
  /**
   * @remarks
   * The name of the endpoint group that is associated with the intelligent routing listener.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * You can enter the names of up to 10 endpoint groups.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * test
   */
  endpointGroupName?: string;
  /**
   * @remarks
   * The region ID of the endpoint group that is associated with the intelligent routing listener.
   * 
   * You can enter the IDs of up to 10 regions.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group associated with the intelligent routing listener. Valid values:
   * 
   * *   **default** (default): a default endpoint group.
   * *   **virtual**: a virtual endpoint group.
   * 
   * You can specify up to 10 endpoint group types.
   * 
   * > *   You can configure endpoint groups and endpoints for an intelligent routing listener only if you set **Type** to **Standard**.
   * >*   Only HTTP and HTTPS intelligent routing listeners support virtual endpoint groups.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  endpointIpVersion?: string;
  /**
   * @remarks
   * The backend service protocol version of the endpoint that is associated with the intelligent routing listener. Valid values:
   * 
   * *   **HTTP1.1** (default)
   * *   **HTTP2**
   * 
   * >  You can specify this parameter only if EndpointRequestProtocol is set to HTTPS.
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The backend service protocol of the endpoint that is associated with the intelligent routing listener. Valid values:
   * 
   * *   **HTTP** (default)
   * *   **HTTPS**
   * 
   * You can specify up to 10 backend service protocols.
   * 
   * > *   You can configure endpoint groups and endpoints for an intelligent routing listener only if you set **Type** to **Standard**.
   * >*   You can specify this parameter only for HTTP and HTTPS intelligent routing listeners.
   * >* For an HTTP listener, the backend service protocol must be **HTTP**.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks for the endpoint group. Valid values:
   * 
   * *   **true**: enables the health check feature.
   * *   **false** (default): disables the health check feature.
   * 
   * You can enable the health check feature for up to 10 endpoint groups.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * You can specify up to 10 health check intervals.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The health check path.
   * 
   * You can specify up to 10 health check paths.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port that you want to use for health checks. Valid values: **1** to **65535**.
   * 
   * You can specify up to 10 ports for health checks.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * 20
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol over which health check requests are sent. Valid values:
   * 
   * *   **tcp** or **TCP**
   * *   **http** or **HTTP**
   * *   **https** or **HTTPS**
   * 
   * You can specify up to 10 health check protocols.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * tcp
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The port mappings.
   */
  portOverrides?: CreateListenerRequestEndpointGroupConfigurationsPortOverrides[];
  /**
   * @remarks
   * The number of failed consecutive health checks that must occur before a healthy endpoint group is considered unhealthy or the number of successful consecutive health checks that must occur before an unhealthy endpoint group is considered healthy. Valid values: **2** to **10**. Default value: **3**.
   * 
   * You can specify up to 10 values (the number of consecutive health check successes or consecutive health check failures).
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic distribution ratio. If an intelligent routing listener is associated with multiple endpoint groups, you can configure this parameter to specify the ratio of traffic distributed to each endpoint group.
   * 
   * Valid values: **1** to **100**. Default value: **100**.
   * 
   * You can specify traffic distribution ratios for up to 10 endpoint groups.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
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
   * The first port of the listener port range that you want to use to receive and forward requests to endpoints.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be smaller than or equal to the value of **ToPort**.
   * 
   * The maximum number of ports that can be configured varies based on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * > You can configure only one listener port for an HTTP or HTTPS listener. In this case, the first port is the same as the last port.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  fromPort?: number;
  /**
   * @remarks
   * The last port of the listener port range that you want to use to receive and forward requests to endpoints.
   * 
   * Valid values: **1** to **65499**. The value of **FromPort** must be smaller than or equal to the value of **ToPort**.
   * 
   * The maximum number of ports that can be configured varies based on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * > You can configure only one listener port for an HTTP or HTTPS listener. In this case, the first port is the same as the last port.
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
   * Specifies whether to use the `GA-AP` header to retrieve the information about acceleration regions. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForGaApEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-ID` header to retrieve the ID of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForGaIdEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Port` header to retrieve the listener ports of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForPortEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `GA-X-Forward-Proto` header to retrieve the listener protocol of the GA instance. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
   * 
   * @example
   * false
   */
  XForwardedForProtoEnabled?: boolean;
  /**
   * @remarks
   * Specifies whether to use the `X-Real-IP` header to retrieve client IP addresses. Valid values:
   * 
   * *   **true**: yes
   * *   **false** (default): no
   * 
   * > This parameter is available only when you create an HTTPS or HTTP listener.
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
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The SSL certificates.
   */
  certificates?: CreateListenerRequestCertificates[];
  /**
   * @remarks
   * Specifies whether to enable client affinity for the listener.
   * 
   * *   If this parameter is left empty, client affinity is disabled. After client affinity is disabled, requests from a specific client IP address may be forwarded to different endpoints.
   * *   To enable client affinity, set this parameter to **SOURCE_IP**. In this case, when a client accesses stateful applications, requests from the same client are forwarded to the same endpoint regardless of the source port or protocol.
   * 
   * @example
   * SOURCE_IP
   */
  clientAffinity?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** is different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The endpoint group that is associated with the custom routing listener.
   * 
   * The endpoint groups that are associated with the custom routing listener.
   * 
   * >  You can configure endpoint groups and endpoints for a custom routing listener only if **Type** is set to **CustomRouting**.
   */
  customRoutingEndpointGroupConfigurations?: CreateListenerRequestCustomRoutingEndpointGroupConfigurations[];
  /**
   * @remarks
   * The description of the listener.
   * 
   * The description can be up to 200 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * Listener
   */
  description?: string;
  /**
   * @remarks
   * The endpoint groups that are associated with the intelligent routing listener.
   * 
   * You can configure up to 10 endpoint groups for an intelligent routing listener.
   * 
   * >  You can configure endpoint groups and endpoints only if you set **Type** to **Standard**.
   */
  endpointGroupConfigurations?: CreateListenerRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The maximum version of the HTTP protocol. Valid values:
   * 
   * *   **http3**
   * *   **http2** (default)
   * *   **http1.1**
   * 
   * >  Only HTTPS listeners support this parameter.
   * 
   * @example
   * http2
   */
  httpVersion?: string;
  /**
   * @remarks
   * The timeout period of idle connections. Unit: seconds.
   * 
   * *   TCP: 10-900. Default value: 900. Unit: seconds.
   * *   UDP: 10-20. Default value: 20. Unit: seconds.
   * *   HTTP/HTTPS: 1-60. Default value: 15. Unit: seconds.
   * 
   * @example
   * 900
   */
  idleTimeout?: number;
  /**
   * @remarks
   * The name of the listener.
   * 
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * Listener
   */
  name?: string;
  /**
   * @remarks
   * The listener ports. Valid values: **1** to **65499**. The maximum number of ports that can be configured depends on the routing type and protocol of the listener. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * This parameter is required.
   */
  portRanges?: CreateListenerRequestPortRanges[];
  /**
   * @remarks
   * The network transmission protocol that you want to use for the listener. Valid values:
   * 
   * *   **tcp**: TCP
   * *   **udp**: UDP
   * *   **http**: HTTP
   * *   **https**: HTTPS
   * 
   * @example
   * tcp
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The timeout period for HTTP or HTTPS requests. Unit: seconds.
   * 
   * Valid values: 1 to 180. Default value: 60. Unit: seconds.
   * 
   * >  This parameter takes effect only for HTTP or HTTPS listeners. If the backend server does not respond within the timeout period, GA returns an HTTP 504 error code to the client.
   * 
   * @example
   * 15
   */
  requestTimeout?: number;
  /**
   * @remarks
   * The ID of the security policy. Valid values:
   * 
   * *   **tls_cipher_policy_1_0**
   * 
   *     *   Supported Transport Layer Security (TLS) versions: TLS 1.0, TLS 1.1, and TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_1**
   * 
   *     *   Supported TLS versions: TLS 1.1 and TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2**
   * 
   *     *   Supported TLS version: TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, AES128-GCM-SHA256, AES256-GCM-SHA384, AES128-SHA256, AES256-SHA256, ECDHE-RSA-AES128-SHA, ECDHE-RSA-AES256-SHA, AES128-SHA, AES256-SHA, and DES-CBC3-SHA.
   * 
   * *   **tls_cipher_policy_1_2_strict**
   * 
   *     *   Supported TLS version: TLS 1.2
   *     *   Supported cipher suites: ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * *   **tls_cipher_policy_1_2_strict_with_1_3**
   * 
   *     *   Supported TLS versions: TLS 1.2 and TLS 1.3
   *     *   Supported cipher suites: TLS_AES_128_GCM_SHA256, TLS_AES_256_GCM_SHA384, TLS_CHACHA20_POLY1305_SHA256, TLS_AES_128_CCM_SHA256, TLS_AES_128_CCM_8_SHA256, ECDHE-ECDSA-AES128-GCM-SHA256, ECDHE-ECDSA-AES256-GCM-SHA384, ECDHE-ECDSA-AES128-SHA256, ECDHE-ECDSA-AES256-SHA384, ECDHE-RSA-AES128-GCM-SHA256, ECDHE-RSA-AES256-GCM-SHA384, ECDHE-RSA-AES128-SHA256, ECDHE-RSA-AES256-SHA384, ECDHE-ECDSA-AES128-SHA, ECDHE-ECDSA-AES256-SHA, ECDHE-RSA-AES128-SHA, and ECDHE-RSA-AES256-SHA
   * 
   * > This parameter is available only when you create an HTTPS listener.
   * 
   * @example
   * tls_cipher_policy_1_0
   */
  securityPolicyId?: string;
  /**
   * @remarks
   * The routing type of the listener. Valid values:
   * 
   * *   **Standard** (default): intelligent routing
   * *   **CustomRouting**: custom routing
   * 
   * > *   Custom routing listeners are in invitational preview. To use custom routing listeners, contact your account manager.
   * > *   You can create only listeners of the same routing type for a standard GA instance. You cannot change the routing types of listeners. For more information, see [Listener overview](https://help.aliyun.com/document_detail/153216.html).
   * 
   * @example
   * Standard
   */
  type?: string;
  /**
   * @remarks
   * The `XForward` headers.
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


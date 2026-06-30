// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client IP addresses. Valid values:
   * 
   * - **true**: preserves client IP addresses.
   * 
   * - **false** (default): does not preserve client IP addresses.
   * 
   * > * For endpoint groups of UDP and TCP listeners, the preserve client IP feature is disabled by default. You can enable this feature based on your business requirements.
   * >
   * > * For endpoint groups of HTTP and HTTPS listeners, the preserve client IP feature is enabled by default. Client IP addresses are preserved in the X-Forwarded-For header. You cannot disable this feature.
   * >
   * > * `EnableClientIPPreservation` and `EnableProxyProtocol` cannot be set to `true` at the same time.
   * >
   * > * For more information, see [preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:
   * 
   * - **true**: uses the Proxy Protocol to preserve client IP addresses.
   * 
   * - **false** (default): does not use the Proxy Protocol to preserve client IP addresses.
   * 
   * > * This parameter is available only for endpoint groups that are associated with TCP listeners.
   * >
   * > * `EnableClientIPPreservation` and `EnableProxyProtocol` cannot be set to `true` at the same time.
   * >
   * > * For more information, see [preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address or domain name of the endpoint.
   * 
   * In an endpoint group of an intelligent routing listener, you can enter a maximum of 100 endpoint IP addresses or domain names.
   * 
   * @example
   * 1.1.1.1
   */
  endpoint?: string;
  /**
   * @example
   * BAILIAN
   */
  provider?: string;
  /**
   * @remarks
   * The private IP address of the elastic network interface (ENI).
   * 
   * > This parameter is available only when the endpoint type is **ENI**. If you do not specify this parameter, the system uses the primary private IP address of the ENI.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of endpoint in an intelligent routing listener. Valid values:
   * 
   * - **Domain**: a custom domain name.
   * 
   * - **Ip**: a custom IP address.
   * 
   * - **IpTarget**: a custom private IP address.
   * 
   * - **PublicIp**: an Alibaba Cloud public IP address.
   * 
   * - **ECS**: an ECS instance.
   * 
   * - **SLB**: an SLB instance.
   * 
   * - **ALB**: an ALB instance.
   * 
   * - **OSS**: an OSS bucket.
   * 
   * - **ENI**: an elastic network interface.
   * 
   * - **NLB**: an NLB instance.
   * 
   * In an endpoint group of an intelligent routing listener, you can specify up to 100 endpoints.
   * 
   * > - If the routing type of the listener is **Standard** (intelligent routing), you must configure the endpoint group and endpoint information for the listener. This parameter is required.
   * >
   * > - If you set Type to **ECS**, **ENI**, **SLB**, or **IpTarget** and a service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint.
   * >
   * > - If you set Type to **ALB** and a service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb.
   * >
   * > - If you set Type to **OSS** and a service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss.
   * >
   * > - If you set Type to **NLB** and a service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaNlb.
   * >
   * > > For more information, see [service-linked roles](https://help.aliyun.com/document_detail/178360.html).
   * 
   * @example
   * Domain
   */
  type?: string;
  /**
   * @remarks
   * A list of VSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * In an endpoint group of an intelligent routing listener, you can specify only one VPC ID.
   * 
   * > This parameter is required only when you set Type to **IpTarget**.
   * 
   * @example
   * vpc-2zekzii824szm3hps****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
   * 
   * Valid values: **0** to **255**.
   * 
   * > If you set the weight of an endpoint to 0, Global Accelerator stops distributing traffic to the endpoint. Proceed with caution.
   * 
   * @example
   * 255
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port used for the port override.
   * 
   * @example
   * 443
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port.
   * 
   * Valid values: **1** to **65499**.
   * 
   * > - For TCP listeners, you cannot configure port overrides for a virtual endpoint group. If a virtual endpoint group already exists for the listener, you cannot configure port overrides for the default endpoint group. If port overrides are configured for the default endpoint group, you cannot add a virtual endpoint group.
   * >
   * > - After you configure a port override, you cannot change the listener protocol, except for switching between HTTP and HTTPS.
   * >
   * > - When you modify the listener port range, the new range must include all listener ports that are used in the port overrides. For example, if the listener port range is 80-82 and a port override is configured to map listener ports to endpoint ports 100-102, you cannot change the listener port range to 80-81.
   * 
   * @example
   * 80
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * -
   */
  key?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * -
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is reserved.
   * 
   * @example
   * -
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      scope: 'Scope',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      scope: 'string',
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurationsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can enter up to 20 tag keys.
   * 
   * @example
   * tag-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can enter up to 20 tag values.
   * 
   * @example
   * tag-value
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

export class CreateEndpointGroupsRequestEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * The configurations of the endpoints in the endpoint group.
   */
  endpointConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * EndpointGroup
   */
  endpointGroupDescription?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * The name must be 1 to 128 characters long, start with a letter or a Chinese character, and contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * group1
   */
  endpointGroupName?: string;
  /**
   * @remarks
   * The ID of the region where the endpoint group is deployed.
   * 
   * You can enter up to 10 endpoint group region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hongkong
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group in an intelligent routing listener. Valid values:
   * 
   * - **default** (default): a default endpoint group.
   * 
   * - **virtual**: a virtual endpoint group.
   * 
   * You can enter up to 10 endpoint group types.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The IP version of the backend service. Valid values:
   * 
   * - **IPv4** (default): Global Accelerator uses only IPv4 addresses to communicate with the backend service.
   * 
   * - **IPv6**: Global Accelerator uses only IPv6 addresses to communicate with the backend service.
   * 
   * - **ProtocolAffinity**: Global Accelerator communicates with the backend service using the same IP version as the client request.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * The protocol version of the backend service. Valid values:
   * 
   * - **HTTP1.1** (default): HTTP 1.1.
   * 
   * - **HTTP2**: HTTP 2.
   * 
   * > You can set this parameter only when `EndpointRequestProtocol` is set to **HTTPS**.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol of the backend service. Valid values:
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * > * You can set this parameter only when you create an endpoint group for an HTTP or HTTPS listener.
   * >
   * > * For an HTTP listener, you can set this parameter only to HTTP.
   * 
   * @example
   * HTTPS
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks for the endpoint group. Valid values:
   * 
   * - **true**: enables health checks.
   * 
   * - **false** (default): disables health checks.
   * 
   * You can enable health checks for up to 10 endpoint groups.
   * 
   * @example
   * false
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name to which health check requests are sent.
   * 
   * @example
   * www.taobao.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval between health checks, in seconds.
   * 
   * You can enter up to 10 health check intervals.
   * 
   * @example
   * 5
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path used for health checks.
   * 
   * You can enter up to 10 health check paths.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**.
   * 
   * You can enter up to 10 ports for health checks.
   * 
   * @example
   * 443
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
   * 
   * - **tcp** or **TCP**: TCP protocol.
   * 
   * - **http** or **HTTP**: HTTP protocol.
   * 
   * - **https** or **HTTPS**: HTTPS protocol.
   * 
   * You can enter up to 10 health check protocols.
   * 
   * @example
   * HTTPS
   */
  healthCheckProtocol?: string;
  /**
   * @remarks
   * The port override settings.
   */
  portOverrides?: CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  /**
   * @remarks
   * This parameter is reserved.
   */
  systemTag?: CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag[];
  /**
   * @remarks
   * The tags to add to the endpoint group. You can specify up to 20 tags.
   */
  tag?: CreateEndpointGroupsRequestEndpointGroupConfigurationsTag[];
  /**
   * @remarks
   * The number of consecutive health checks that must succeed for an endpoint to be considered healthy, or fail for it to be considered unhealthy. Valid values: **2** to **10**. Default value: **3**.
   * 
   * You can enter up to 10 values for the number of consecutive health checks required for a health status change.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic distribution percentage for the endpoint group. If an intelligent routing listener is associated with multiple endpoint groups, this parameter specifies the percentage of traffic that is routed to this endpoint group.
   * 
   * Valid values: **1** to **100**. Default value: **100**.
   * 
   * You can enter traffic dial values for up to 10 endpoint groups.
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
      systemTag: 'SystemTag',
      tag: 'Tag',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations },
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
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides },
      systemTag: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsSystemTag },
      tag: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurationsTag },
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
    if(Array.isArray(this.systemTag)) {
      $dara.Model.validateArray(this.systemTag);
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

export class CreateEndpointGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the accelerator.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The client token used to ensure request idempotence.
   * 
   * You can generate the token on your client. Ensure that it is unique across different requests. The value of `ClientToken` can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** is unique for each API request.
   * 
   * @example
   * 1F4B6A4A-C89E-489E-BAF1-52777EE148EF
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run but does not create the resource. The system checks the required parameters, request format, and service limits. If the request fails the dry run, the system returns an error message. If the request passes the dry run, the system returns a 2xx HTTP status code.
   * 
   * - **false** (default): sends a normal request and creates the resource if the request passes.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the endpoint groups.
   * 
   * You can configure up to 10 endpoint groups.
   * 
   * This parameter is required.
   */
  endpointGroupConfigurations?: CreateEndpointGroupsRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The ID of the listener.
   * 
   * > If the listener protocol is **HTTP** or **HTTPS**, you can create only one endpoint group in each **CreateEndpointGroups** call.
   * 
   * This parameter is required.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The ID of the region where the accelerator is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      endpointGroupConfigurations: 'EndpointGroupConfigurations',
      listenerId: 'ListenerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      endpointGroupConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupsRequestEndpointGroupConfigurations },
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


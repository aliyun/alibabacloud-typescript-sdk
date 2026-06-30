// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointGroupRequestEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The API keys for the AI service.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client source IP addresses. Valid values:
   * 
   * - **true**: preserves client source IP addresses.
   * 
   * - **false** (default): does not preserve client source IP addresses.
   * 
   * > * By default, this feature is disabled for endpoint groups that are associated with TCP or UDP listeners. You can enable this feature based on your business requirements.
   * >
   * > * By default, this feature is enabled for endpoint groups that are associated with HTTP or HTTPS listeners. The source IP address is retrieved from the X-Forwarded-For header field. This feature cannot be disabled.
   * >
   * > * `EnableClientIPPreservation` and `EnableProxyProtocol` cannot both be set to `true`.
   * >
   * > * For more information, see [Preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the PROXY protocol to preserve client source IP addresses. Valid values:
   * 
   * - **true**: uses the PROXY protocol.
   * 
   * - **false** (default): does not use the PROXY protocol.
   * 
   * > * This parameter can be configured only for endpoint groups that are associated with TCP listeners.
   * >
   * > * `EnableClientIPPreservation` and `EnableProxyProtocol` cannot both be set to `true`.
   * >
   * > * For more information, see [Preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or resource ID of the endpoint. The value of this parameter depends on the value of the `Type` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 120.1.XX.XX
   */
  endpoint?: string;
  /**
   * @remarks
   * The AI service provider. Set this to `BAILIAN` to use Alibaba Cloud Model Studio.
   * 
   * @example
   * BAILIAN
   */
  provider?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * > This parameter applies only when the endpoint type is set to **ENI**. If you omit this parameter, the primary private IP address of the ENI is used.
   * 
   * @example
   * 172.168.X.X
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
   * - **IpTarget**: a custom private IP address.
   * 
   * - **PublicIp**: an Alibaba Cloud public IP address.
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
   * > * If you set the endpoint type to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget**, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint if the role does not exist.
   * >
   * > * If you set the endpoint type to **ALB**, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb if the role does not exist.
   * >
   * > * If you set the endpoint type to **OSS**, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss if the role does not exist.
   * >
   * > * If you set the endpoint type to **NLB**, the system automatically creates a service-linked role named AliyunServiceRoleForGaNlb if the role does not exist.
   * >
   * > > For more information, see [Service-linked roles](https://help.aliyun.com/document_detail/178360.html).
   * 
   * This parameter is required.
   * 
   * @example
   * Ip
   */
  type?: string;
  /**
   * @remarks
   * A list of vSwitches in the VPC.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC).
   * 
   * You can specify at most one VPC ID for an endpoint group of an intelligent routing listener.
   * 
   * > This parameter is required only when the endpoint type is set to **IpTarget**.
   * 
   * @example
   * vpc-bp1quce3451z5b2hv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
   * 
   * Valid values: **0** to **255**.
   * 
   * > If you set the weight of an endpoint to 0, GA stops distributing traffic to it. Proceed with caution.
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

export class CreateEndpointGroupRequestPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port for the port mapping.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port for the port mapping.
   * 
   * > - For TCP listeners, you cannot configure port mappings for virtual endpoint groups. If a listener is associated with a virtual endpoint group, you cannot configure port mappings for the default endpoint group. If a default endpoint group has port mappings configured, you cannot add a virtual endpoint group.
   * >
   * > - After you configure port mappings, you cannot change the listener protocol, except for switching between HTTP and HTTPS.
   * >
   * > - When you modify the listener port range, the new range must include all listener ports used in port mappings. For example, if the listener port range is 80-82 and the listener ports are mapped to endpoint ports 100-102, you cannot change the listener port range to 80-81.
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

export class CreateEndpointGroupRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters long and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters long and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * test-value
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

export class CreateEndpointGroupRequest extends $dara.Model {
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
   * The client token used to ensure request idempotence.
   * 
   * You can generate this token, but you must ensure it is unique for each request. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. Each request has a unique **RequestId**.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters long and cannot start with `http://` or `https://`.
   * 
   * @example
   * EndpointGroup
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, the system returns an error message. If the request passes the dry run, the system returns an HTTP 2xx status code.
   * 
   * - **false** (default): sends a normal request. If the request passes the check, the system returns an HTTP 2xx status code and creates the endpoint group.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The endpoint configurations.
   */
  endpointConfigurations?: CreateEndpointGroupRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the region where the endpoint group is deployed.
   * 
   * This parameter is required.
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
   * > Before you create a virtual endpoint group for a Layer 4 listener, make sure that you have created a default endpoint group.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The IP version used to communicate with the backend service. Valid values:
   * 
   * - **IPv4** (default): GA uses only IPv4 to communicate with the backend service.
   * 
   * - **IPv6**: GA uses only IPv6 to communicate with the backend service.
   * 
   * - **ProtocolAffinity**: GA uses the same IP version as the client request to communicate with the backend service.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * The version of the backend service protocol. Valid values:
   * 
   * - **HTTP1.1** (default): HTTP/1.1.
   * 
   * - **HTTP2**: HTTP/2.
   * 
   * > This parameter is available only when `EndpointRequestProtocol` is set to HTTPS.
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
   * > * This parameter is available only for endpoint groups of **HTTP** or **HTTPS** listeners.
   * >
   * > * For an **HTTP** listener, the backend service protocol must be **HTTP**.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **true**: enables health checks.
   * 
   * - **false**: disables health checks.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name used for health checks.
   * 
   * @example
   * www.taobao.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The health check interval, in seconds.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path used for health checks.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port used for health checks.
   * 
   * @example
   * 20
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol used for health checks. Valid values:
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
   * The name of the endpoint group.
   * 
   * The name must be 1 to 128 characters long, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The listener-to-endpoint port mappings.
   */
  portOverrides?: CreateEndpointGroupRequestPortOverrides[];
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags of the endpoint group.
   */
  tag?: CreateEndpointGroupRequestTag[];
  /**
   * @remarks
   * The number of consecutive health checks that must succeed or fail before an endpoint\\"s status changes between healthy and unhealthy. Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The percentage of traffic distributed to the endpoint group when the listener is associated with multiple endpoint groups. Valid values: **1** to **100**.
   * 
   * @example
   * 20
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      endpointConfigurations: 'EndpointConfigurations',
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
      listenerId: 'ListenerId',
      name: 'Name',
      portOverrides: 'PortOverrides',
      regionId: 'RegionId',
      tag: 'Tag',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': CreateEndpointGroupRequestEndpointConfigurations },
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
      listenerId: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': CreateEndpointGroupRequestPortOverrides },
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateEndpointGroupRequestTag },
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
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


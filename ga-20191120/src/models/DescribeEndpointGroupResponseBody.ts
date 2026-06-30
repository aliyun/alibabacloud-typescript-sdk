// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointGroupResponseBodyEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The API keys for the endpoint configuration.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * Indicates whether client IP preservation is enabled by using the automatic method.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Indicates whether client IP preservation is enabled using the Proxy Protocol.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or instance ID of the endpoint.
   * 
   * @example
   * 120.XX.XX.21
   */
  endpoint?: string;
  /**
   * @remarks
   * The port used for latency probing.
   * 
   * @example
   * 80
   */
  probePort?: number;
  /**
   * @remarks
   * The protocol for latency probing. Valid values:
   * 
   * - **tcp**: TCP
   * 
   * - **icmp**: ICMP
   * 
   * @example
   * tcp
   */
  probeProtocol?: string;
  /**
   * @remarks
   * The provider of the endpoint configuration.
   * 
   * @example
   * BAILIAN
   */
  provider?: string;
  /**
   * @remarks
   * The private IP address of the elastic network interface.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Domain**: A custom domain name.
   * 
   * - **Ip**: A custom IP address.
   * 
   * - **IpTarget**: A custom private IP address.
   * 
   * - **PublicIp**: An Alibaba Cloud public IP address.
   * 
   * - **ECS**: An ECS instance.
   * 
   * - **SLB**: An SLB instance.
   * 
   * - **ALB**: An ALB instance.
   * 
   * - **OSS**: An OSS instance.
   * 
   * - **ENI**: An elastic network interface.
   * 
   * - **NLB**: An NLB instance.
   * 
   * @example
   * Ip
   */
  type?: string;
  /**
   * @remarks
   * A list of VSwitch IDs.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-hp30gtnxkfxj1l2xt****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
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
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
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
      probePort: 'number',
      probeProtocol: 'string',
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

export class DescribeEndpointGroupResponseBodyEndpointPrivateIpList extends $dara.Model {
  CIDR?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.16.49.***
   */
  privateIp?: string;
  /**
   * @remarks
   * The VSwitch ID in the VPC.
   * 
   * @example
   * gsw-bp1rsfd2frym**
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      CIDR: 'CIDR',
      privateIp: 'PrivateIp',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CIDR: 'string',
      privateIp: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port.
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

export class DescribeEndpointGroupResponseBodyServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
   * 
   * - **Create**: Create an instance.
   * 
   * - **Update**: Update the instance.
   * 
   * - **Delete**: Delete the instance.
   * 
   * - **Associate**: Associate the instance.
   * 
   * - **UserUnmanaged**: Releases the instance from service management.
   * 
   * - **CreateChild**: Create a child resource.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * - **Listener**: A listener.
   * 
   * - **IpSet**: An acceleration region.
   * 
   * - **EndpointGroup**: An endpoint group.
   * 
   * - **ForwardingRule**: A forwarding rule.
   * 
   * - **Endpoint**: An endpoint.
   * 
   * - **EndpointGroupDestination**: A protocol mapping for an endpoint group of a custom routing listener.
   * 
   * - **EndpointPolicy**: A traffic policy for an endpoint of a custom routing listener.
   * 
   * > This parameter is valid only when **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the action is managed. Valid values:
   * 
   * - **true**: The action is managed. You cannot perform this action on the instance.
   * 
   * - **false**: The action is not managed. You can perform this action on the instance.
   * 
   * @example
   * false
   */
  isManaged?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      childType: 'ChildType',
      isManaged: 'IsManaged',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      childType: 'string',
      isManaged: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEndpointGroupResponseBodyTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class DescribeEndpointGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Global Accelerator instance ID.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * The custom header fields to record in access logs.
   */
  accessLogRecordCustomizedHeaderList?: string[];
  /**
   * @remarks
   * Specifies whether to record custom header fields in access logs. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false** (default): No.
   * 
   * > You can set this parameter to **true** only when **EnableAccessLog** is set to **true**.
   */
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * The status of the access log configuration. Valid values:
   * 
   * - **on**: The access log is configured.
   * 
   * - **off**: The access log is not configured.
   * 
   * - **binding**: The access log is being configured.
   * 
   * - **unbinding**: The access log configuration is being removed.
   * 
   * @example
   * on
   */
  accessLogSwitch?: string;
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * @example
   * group1
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether access logging is enabled.
   * 
   * - **true**: Access logging is enabled.
   * 
   * - **false**: Access logging is disabled.
   * 
   * @example
   * true
   */
  enableAccessLog?: boolean;
  /**
   * @remarks
   * The endpoint configurations.
   */
  endpointConfigurations?: DescribeEndpointGroupResponseBodyEndpointConfigurations[];
  /**
   * @remarks
   * The endpoint group ID.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The list of active IP addresses of the endpoints in the endpoint group.
   * >Notice: For an endpoint group configured for back-to-source from a private network, the console displays only the private back-to-source IP addresses and not the public IP addresses. If the network connection type for the backend service of the endpoint group changes (for example, from a private network to a public network, or to a mix of private and public networks), you must monitor the changes in the back-to-source IP addresses and update the access control list (ACL) of the backend service accordingly.
   */
  endpointGroupIpList?: string[];
  /**
   * @remarks
   * The region ID where the endpoint group is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * - **default**: A default endpoint group.
   * 
   * - **virtual**: A virtual endpoint group.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * A list of endpoint IP addresses pending confirmation after a Global Accelerator instance upgrade.
   */
  endpointGroupUnconfirmedIpList?: string[];
  /**
   * @remarks
   * The IP version used to connect to the backend service. Valid values:
   * 
   * - **IPv4** (default): Global Accelerator connects to the backend service using IPv4.
   * 
   * - **IPv6**: Global Accelerator connects to the backend service using IPv6.
   * 
   * - **ProtocolAffinity**: Global Accelerator connects to the backend service using the same IP version as the client request.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * The private IP addresses of the endpoints.
   */
  endpointPrivateIpList?: DescribeEndpointGroupResponseBodyEndpointPrivateIpList[];
  /**
   * @remarks
   * The version of the backend service protocol. Valid values:
   * 
   * - **HTTP1.1**
   * 
   * - **HTTP2**
   * 
   * @example
   * HTTP2
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol used by the backend service. Valid values:
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * The IDs of the associated forwarding rules.
   */
  forwardingRuleIds?: string[];
  /**
   * @remarks
   * Indicates whether health checks are enabled.
   * 
   * - **true**: Health checks are enabled.
   * 
   * - **false**: Health checks are disabled.
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
   * The path for health check probes.
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
   * The protocol used for health checks.
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
   * The listener ID.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The name of the endpoint group.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The port mapping configuration.
   */
  portOverrides?: DescribeEndpointGroupResponseBodyPortOverrides[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * > This parameter is returned only if **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is a managed instance. Valid values:
   * 
   * - **true**: The instance is a managed instance.
   * 
   * - **false**: The instance is not a managed instance.
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * A list of management states for actions that can be performed on the instance.
   * 
   * > - This parameter is returned only if **ServiceManaged** is set to **True**.
   * >
   * > - When an instance is managed, some operations may be restricted.
   */
  serviceManagedInfos?: DescribeEndpointGroupResponseBodyServiceManagedInfos[];
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * lsn-01
   */
  slsLogStoreName?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * pn-01
   */
  slsProjectName?: string;
  /**
   * @remarks
   * The region of the Log Service project.
   * 
   * @example
   * cn-hangzhou
   */
  slsRegion?: string;
  /**
   * @remarks
   * The status of the endpoint group.
   * 
   * - **init**: The endpoint group is being initialized.
   * 
   * - **active**: The endpoint group is active.
   * 
   * - **updating**: The endpoint group is being updated.
   * 
   * - **deleting**: The endpoint group is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * A list of tags attached to the endpoint group.
   */
  tags?: DescribeEndpointGroupResponseBodyTags[];
  /**
   * @remarks
   * The number of consecutive failed health checks before an endpoint is marked as unhealthy.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The percentage of traffic that is distributed to the endpoint group. This parameter is returned only when a listener is associated with multiple endpoint groups.
   * 
   * @example
   * 100
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogRecordCustomizedHeaderList: 'AccessLogRecordCustomizedHeaderList',
      accessLogRecordCustomizedHeadersEnabled: 'AccessLogRecordCustomizedHeadersEnabled',
      accessLogSwitch: 'AccessLogSwitch',
      description: 'Description',
      enableAccessLog: 'EnableAccessLog',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupIpList: 'EndpointGroupIpList',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointGroupType: 'EndpointGroupType',
      endpointGroupUnconfirmedIpList: 'EndpointGroupUnconfirmedIpList',
      endpointIpVersion: 'EndpointIpVersion',
      endpointPrivateIpList: 'EndpointPrivateIpList',
      endpointProtocolVersion: 'EndpointProtocolVersion',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      forwardingRuleIds: 'ForwardingRuleIds',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      listenerId: 'ListenerId',
      name: 'Name',
      portOverrides: 'PortOverrides',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      slsLogStoreName: 'SlsLogStoreName',
      slsProjectName: 'SlsProjectName',
      slsRegion: 'SlsRegion',
      state: 'State',
      tags: 'Tags',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogRecordCustomizedHeaderList: { 'type': 'array', 'itemType': 'string' },
      accessLogRecordCustomizedHeadersEnabled: 'boolean',
      accessLogSwitch: 'string',
      description: 'string',
      enableAccessLog: 'boolean',
      endpointConfigurations: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      endpointIpVersion: 'string',
      endpointPrivateIpList: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyEndpointPrivateIpList },
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      forwardingRuleIds: { 'type': 'array', 'itemType': 'string' },
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      listenerId: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyPortOverrides },
      requestId: 'string',
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyServiceManagedInfos },
      slsLogStoreName: 'string',
      slsProjectName: 'string',
      slsRegion: 'string',
      state: 'string',
      tags: { 'type': 'array', 'itemType': DescribeEndpointGroupResponseBodyTags },
      thresholdCount: 'number',
      trafficPercentage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.accessLogRecordCustomizedHeaderList)) {
      $dara.Model.validateArray(this.accessLogRecordCustomizedHeaderList);
    }
    if(Array.isArray(this.endpointConfigurations)) {
      $dara.Model.validateArray(this.endpointConfigurations);
    }
    if(Array.isArray(this.endpointGroupIpList)) {
      $dara.Model.validateArray(this.endpointGroupIpList);
    }
    if(Array.isArray(this.endpointGroupUnconfirmedIpList)) {
      $dara.Model.validateArray(this.endpointGroupUnconfirmedIpList);
    }
    if(Array.isArray(this.endpointPrivateIpList)) {
      $dara.Model.validateArray(this.endpointPrivateIpList);
    }
    if(Array.isArray(this.forwardingRuleIds)) {
      $dara.Model.validateArray(this.forwardingRuleIds);
    }
    if(Array.isArray(this.portOverrides)) {
      $dara.Model.validateArray(this.portOverrides);
    }
    if(Array.isArray(this.serviceManagedInfos)) {
      $dara.Model.validateArray(this.serviceManagedInfos);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


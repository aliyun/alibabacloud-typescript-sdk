// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * The API keys in the endpoint configuration.
   */
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client IP addresses.
   * 
   * - **true**: Client IP preservation is enabled.
   * 
   * - **false**: Client IP preservation is disabled.
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use Proxy Protocol to preserve client IP addresses.
   * 
   * - **true**: Proxy Protocol is enabled.
   * 
   * - **false**: Proxy Protocol is disabled.
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The endpoint\\"s IP address, domain name, or instance ID.
   * 
   * @example
   * 47.1.XX.XX
   */
  endpoint?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * ep-bp1d2utp8qqe2a44t****
   */
  endpointId?: string;
  /**
   * @remarks
   * The port used for latency monitoring probes.
   * 
   * @example
   * 80
   */
  probePort?: number;
  /**
   * @remarks
   * The protocol that is used for latency monitoring probes.
   * 
   * - **icmp**: ICMP
   * 
   * - **tcp**: TCP
   * 
   * @example
   * tcp
   */
  probeProtocol?: string;
  /**
   * @remarks
   * The service provider.
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
   * The type of endpoint. Valid values:
   * 
   * - **Domain**: a custom domain name.
   * 
   * - **Ip**: a custom IP address.
   * 
   * - **IpTarget**: a custom private IP address.
   * 
   * - **PublicIp**: an Alibaba Cloud public IP address.
   * 
   * - **ECS**: an Alibaba Cloud ECS instance.
   * 
   * - **SLB**: an Alibaba Cloud SLB instance.
   * 
   * - **ALB**: an Alibaba Cloud ALB instance.
   * 
   * - **OSS**: an Alibaba Cloud OSS bucket.
   * 
   * - **ENI**: an Alibaba Cloud elastic network interface.
   * 
   * - **NLB**: an Alibaba Cloud NLB instance.
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
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbhucmd5b2q2fpqqu****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
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
      endpointId: 'EndpointId',
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
      endpointId: 'string',
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

export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointPrivateIpList extends $dara.Model {
  CIDR?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 172.19.115.37
   */
  privateIp?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * gsw-0jl6tmriqep1ga***
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

export class ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides extends $dara.Model {
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

export class ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos extends $dara.Model {
  /**
   * @remarks
   * The name of the action on the managed instance. Valid values:
   * 
   * - **Create**: creates an instance.
   * 
   * - **Update**: updates the instance.
   * 
   * - **Delete**: deletes the instance.
   * 
   * - **Associate**: associates the instance with other resources.
   * 
   * - **UserUnmanaged**: Reverts the instance to an unmanaged state.
   * 
   * - **CreateChild**: creates a child resource for the instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * - **Listener**: a listener.
   * 
   * - **IpSet**: an acceleration region.
   * 
   * - **EndpointGroup**: an endpoint group.
   * 
   * - **ForwardingRule**: a forwarding rule.
   * 
   * - **Endpoint**: an endpoint.
   * 
   * - **EndpointGroupDestination**: a protocol mapping for an endpoint group of a custom routing listener.
   * 
   * - **EndpointPolicy**: a traffic policy for an endpoint of a custom routing listener.
   * 
   * > This parameter is returned only if **Action** is set to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Specifies whether the action is managed. Valid values:
   * 
   * - **true**: The action is managed. You cannot perform the specified action on the managed instance.
   * 
   * - **false**: The action is not managed. You can perform the specified action on the managed instance.
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

export class ListEndpointGroupsResponseBodyEndpointGroupsTags extends $dara.Model {
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

export class ListEndpointGroupsResponseBodyEndpointGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the Global Accelerator instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
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
   * A list of endpoint configurations.
   */
  endpointConfigurations?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp16jdc00bhe97sr5****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * A list of public egress IP addresses of the endpoint group.
   * 
   * >Notice: 
   * 
   * For endpoint groups connected to private backend services, the console shows only the private source IP addresses, not the public ones. If the network connection type of a backend service changes (for example, from private to public), monitor the source IP addresses and update the backend service\\"s access control list (ACL).
   */
  endpointGroupIpList?: string[];
  /**
   * @remarks
   * The ID of the region where the endpoint group is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * - **default**: a default endpoint group.
   * 
   * - **virtual**: a virtual endpoint group.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The list of new IP addresses in the endpoint group that require confirmation after a Global Accelerator instance is upgraded.
   */
  endpointGroupUnconfirmedIpList?: string[];
  /**
   * @remarks
   * The IP protocol of the backend service. Valid values:
   * 
   * - **IPv4** (default): Connections to the backend service use IPv4.
   * 
   * - **IPv6**: Connections to the backend service use IPv6.
   * 
   * - **ProtocolAffinity**: The connection to the backend service uses the same IP protocol as the client request.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * A list of private IP addresses of the endpoints.
   */
  endpointPrivateIpList?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointPrivateIpList[];
  /**
   * @remarks
   * The version of the backend service protocol. Valid values:
   * 
   * - **HTTP1.1**: HTTP/1.1
   * 
   * - **HTTP2**: HTTP/2
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
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * The IDs of forwarding rules associated with the endpoint group.
   */
  forwardingRuleIds?: string[];
  /**
   * @remarks
   * Specifies whether to enable health checks.
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
   * The health check path.
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
   * 10
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
   * The ID of the listener.
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
   * The port mappings.
   */
  portOverrides?: ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides[];
  /**
   * @remarks
   * The ID of the service that manages the instance.
   * 
   * > This parameter is returned only if **ServiceManaged** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Specifies whether the instance is managed. Valid values:
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
   * The actions that you can perform on the managed instance.
   * 
   * > - This parameter is returned only if **ServiceManaged** is **true**.
   * >
   * > - Your permissions to operate on a managed instance are restricted.
   */
  serviceManagedInfos?: ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos[];
  /**
   * @remarks
   * The state of the endpoint group.
   * 
   * - **init**: The endpoint group is initializing.
   * 
   * - **active**: The endpoint group is stable.
   * 
   * - **updating**: The endpoint group is updating.
   * 
   * - **deleting**: The endpoint group is deleting.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tags attached to the endpoint group.
   */
  tags?: ListEndpointGroupsResponseBodyEndpointGroupsTags[];
  /**
   * @remarks
   * The number of consecutive failed health checks required to mark an endpoint as unhealthy.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The percentage of traffic routed to the endpoint group. This parameter applies only if a listener is associated with multiple endpoint groups.
   * 
   * @example
   * 100
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      description: 'Description',
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
      serviceId: 'ServiceId',
      serviceManaged: 'ServiceManaged',
      serviceManagedInfos: 'ServiceManagedInfos',
      state: 'State',
      tags: 'Tags',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      description: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupIpList: { 'type': 'array', 'itemType': 'string' },
      endpointGroupRegion: 'string',
      endpointGroupType: 'string',
      endpointGroupUnconfirmedIpList: { 'type': 'array', 'itemType': 'string' },
      endpointIpVersion: 'string',
      endpointPrivateIpList: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsEndpointPrivateIpList },
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
      portOverrides: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides },
      serviceId: 'string',
      serviceManaged: 'boolean',
      serviceManagedInfos: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos },
      state: 'string',
      tags: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroupsTags },
      thresholdCount: 'number',
      trafficPercentage: 'number',
    };
  }

  validate() {
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

export class ListEndpointGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of endpoint groups.
   */
  endpointGroups?: ListEndpointGroupsResponseBodyEndpointGroups[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A052D49E-CCC2-41DB-816C-DC3381503194
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
      endpointGroups: 'EndpointGroups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointGroups: { 'type': 'array', 'itemType': ListEndpointGroupsResponseBodyEndpointGroups },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endpointGroups)) {
      $dara.Model.validateArray(this.endpointGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


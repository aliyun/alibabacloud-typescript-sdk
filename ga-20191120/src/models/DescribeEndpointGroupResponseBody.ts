// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndpointGroupResponseBodyEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the client IP address preservation feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Indicates whether the proxy protocol is used to preserve client IP addresses.
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or ID of the endpoint.
   * 
   * @example
   * 120.XX.XX.21
   */
  endpoint?: string;
  /**
   * @remarks
   * The port that is used to monitor latency.
   * 
   * @example
   * 80
   */
  probePort?: number;
  /**
   * @remarks
   * The protocol that is used to monitor latency. Valid values:
   * 
   * *   **tcp**
   * *   **icmp**
   * 
   * @example
   * tcp
   */
  probeProtocol?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * @example
   * 172.168.XX.XX
   */
  subAddress?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Domain**: a custom domain name.
   * *   **Ip**: a custom IP address.
   * *   **IpTarget**: a custom private IP address.
   * *   **PublicIp**: a public IP address provided by Alibaba Cloud.
   * *   **ECS**: an Elastic Compute Service (ECS) instance.
   * *   **SLB**: a Server Load Balancer (SLB) instance.
   * *   **ALB** an Application Load Balancer (ALB) instance.
   * *   **OSS**: an Object Storage Service (OSS) bucket.
   * *   **ENI**: an elastic network interface (ENI).
   * *   **NLB**: a Network Load Balancer (NLB) instance.
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
   * 20
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      probePort: 'ProbePort',
      probeProtocol: 'ProbeProtocol',
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
      probePort: 'number',
      probeProtocol: 'string',
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

export class DescribeEndpointGroupResponseBodyEndpointPrivateIpList extends $dara.Model {
  CIDR?: string;
  privateIp?: string;
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
   * The name of the action on the managed instance.
   * 
   * *   **Create**
   * *   **Update**
   * *   **Delete**
   * *   **Associate**
   * *   **UserUnmanaged**
   * *   **CreateChild**
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource.
   * 
   * *   **Listener:** listener.
   * *   **IpSet:** acceleration region.
   * *   **EndpointGroup:** endpoint group.
   * *   **ForwardingRule:** forwarding rule.
   * *   **Endpoint:** endpoint.
   * *   **EndpointGroupDestination:** protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy:** traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if the value of **Action** is **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed.
   * 
   * *   **true:** The specified actions are managed. Users cannot perform the specified actions on the managed instance.****
   * *   **false:** The specified actions are not managed. Users can perform the specified actions on the managed instance.
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
   * The tag key of the endpoint group.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the endpoint group.
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
   * The ID of the GA instance.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  accessLogRecordCustomizedHeaderList?: string[];
  accessLogRecordCustomizedHeadersEnabled?: boolean;
  /**
   * @remarks
   * Indicates the binding status between the Simple Log Service project and the endpoint group. Valid values:
   * 
   * *   **on:** The endpoint group is bound to the Simple Log Service project.
   * *   **off:** The endpoint group is not bound to the Simple Log Service project.
   * *   **binding:** The endpoint group is being bound to the Simple Log Service project.
   * *   **unbinding:** The endpoint group is being unbound from the Simple Log Service project.
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
   * Indicates whether the access log feature is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableAccessLog?: boolean;
  /**
   * @remarks
   * The configurations of endpoints in the endpoint group.
   */
  endpointConfigurations?: DescribeEndpointGroupResponseBodyEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp14sz7ftcwwjgrdm****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The active endpoint IP addresses of the endpoint group.
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
   * The type of endpoint group. Valid values:
   * 
   * *   **default**: a default endpoint group
   * *   **virtual**: a virtual endpoint group
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The endpoint group IP addresses to be confirmed. After the GA instance is upgraded, the IP addresses that are added to the endpoint group need to be confirmed.
   */
  endpointGroupUnconfirmedIpList?: string[];
  endpointIpVersion?: string;
  endpointPrivateIpList?: DescribeEndpointGroupResponseBodyEndpointPrivateIpList[];
  /**
   * @remarks
   * The version of the protocol that is used by the backend service.
   * 
   * *   **HTTP1.1**
   * *   **HTTP2**
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol that is used by the backend service.
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * The ID of the forwarding rule that is associated with the endpoint group.
   */
  forwardingRuleIds?: string[];
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
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval between two consecutive health checks. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path to which health check probes are sent.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port that is used for health checks.
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
   * The mappings between ports.
   */
  portOverrides?: DescribeEndpointGroupResponseBodyPortOverrides[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6FEA0CF3-D3B9-43E5-A304-D217037876A8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the service that manages the GA instance.
   * 
   * >  This parameter takes effect only if **ServiceManaged** is set to **True**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  serviceManaged?: boolean;
  /**
   * @remarks
   * The actions that users can perform on the managed instance.
   * >*   This parameter takes effect only if the value of **ServiceManaged** is **true**.
   * >*   Users can perform only specific actions on a managed instance.
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
   * The status of the endpoint group. Valid values:
   * 
   * *   **init**: The endpoint group is being initialized.
   * *   **active**: The endpoint group is running as expected.
   * *   **updating**: The endpoint group is being updated.
   * *   **deleting**: The endpoint group is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tag of the endpoint group.
   */
  tags?: DescribeEndpointGroupResponseBodyTags[];
  /**
   * @remarks
   * The number of consecutive failed health checks that must occur before an endpoint is considered unhealthy.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic ratio of the endpoint group when the specified listener is associated with multiple endpoint groups.
   * 
   * @example
   * 20
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


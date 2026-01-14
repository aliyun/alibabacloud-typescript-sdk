// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointConfigurations extends $dara.Model {
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
   * Indicates whether the proxy protocol is used to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false**
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address or domain name of the endpoint.
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
   * The port that is used to monitor latency.
   * 
   * @example
   * 80
   */
  probePort?: number;
  /**
   * @remarks
   * The protocol that is used to monitor latency.
   * 
   * *   **icmp**
   * *   **tcp**
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
   * *   **ALB**: an Application Load Balancer (ALB) instance.
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
      enableClientIPPreservation: 'EnableClientIPPreservation',
      enableProxyProtocol: 'EnableProxyProtocol',
      endpoint: 'Endpoint',
      endpointId: 'EndpointId',
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
      endpointId: 'string',
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

export class ListEndpointGroupsResponseBodyEndpointGroupsEndpointPrivateIpList extends $dara.Model {
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
   * The name of the action that was performed on the managed instance. Valid values:
   * 
   * *   **Create:** Create an instance.
   * *   **Update:** Update the current instance.
   * *   **Delete:** Delete the current instance.
   * *   **Associate:** Reference the current instance.
   * *   **UserUnmanaged:** Unmanage the instance.
   * *   **CreateChild:** Create a child resource in the current instance.
   * 
   * @example
   * Update
   */
  action?: string;
  /**
   * @remarks
   * The type of the child resource. Valid values:
   * 
   * *   **Listener:** listener.
   * *   **IpSet:** acceleration region.
   * *   **EndpointGroup:** endpoint group.
   * *   **ForwardingRule:** forwarding rule.
   * *   **Endpoint:** endpoint.
   * *   **EndpointGroupDestination:** the protocol mapping of an endpoint group associated with a custom routing listener.
   * *   **EndpointPolicy:** the traffic policy of an endpoint associated with a custom routing listener.
   * 
   * >  This parameter takes effect only if you set **Action** to **CreateChild**.
   * 
   * @example
   * Listener
   */
  childType?: string;
  /**
   * @remarks
   * Indicates whether the specified actions are managed. Valid values:
   * 
   * *   **true**: The specified actions are managed, and users cannot perform the specified actions on the managed instance.
   * *   **false**: The specified actions are not managed, and users can perform the specified actions on the managed instance.
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

export class ListEndpointGroupsResponseBodyEndpointGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
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
   * The configurations of the endpoints in the endpoint group.
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
   * The endpoint group IP addresses.
   */
  endpointGroupIpList?: string[];
  /**
   * @remarks
   * The ID of the region where the endpoint group is created.
   * 
   * @example
   * cn-hangzhou
   */
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * *   **default**: a default endpoint group
   * *   **virtual:** a virtual endpoint group.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The endpoint group IP addresses to be confirmed after the GA instance is upgraded.
   */
  endpointGroupUnconfirmedIpList?: string[];
  endpointIpVersion?: string;
  endpointPrivateIpList?: ListEndpointGroupsResponseBodyEndpointGroupsEndpointPrivateIpList[];
  /**
   * @remarks
   * The protocol version that is used by the backend service. Valid values:
   * 
   * *   **HTTP1.1**
   * *   **HTTP2**
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol that is used by the backend server.
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
   * The IDs of the forwarding rules that are associated with the endpoint group.
   */
  forwardingRuleIds?: string[];
  /**
   * @remarks
   * Indicates whether the health check feature is enabled.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval at which you want to perform health checks. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path that is used for health checks.
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
   * 10
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
   * The port mapping.
   */
  portOverrides?: ListEndpointGroupsResponseBodyEndpointGroupsPortOverrides[];
  /**
   * @remarks
   * The service that manages the instance.
   * 
   * >  This parameter takes effect only if the value of **Service managed** is **true**.
   * 
   * @example
   * ALB
   */
  serviceId?: string;
  /**
   * @remarks
   * Indicates whether the GA instance is managed. Valid values:
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
   * 
   * > -  This parameter takes effect only if the value of **ServiceManaged** is **true**.
   * > -   Users can perform only specific actions on a managed instance.
   */
  serviceManagedInfos?: ListEndpointGroupsResponseBodyEndpointGroupsServiceManagedInfos[];
  /**
   * @remarks
   * The status of the endpoint group. Valid values:
   * 
   * *   **init:** The endpoint group is being initialized.
   * *   **active:** The endpoint group is running normally.
   * *   **updating:**The endpoint group is being updated.
   * *   **deleteing:** The endpoint group is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The tag of the endpoint group.
   */
  tags?: ListEndpointGroupsResponseBodyEndpointGroupsTags[];
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
   * The value of the traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can set this parameter to distribute different percentages of traffic to the endpoint groups.
   * 
   * @example
   * 20
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
   * The configurations of the endpoint groups.
   */
  endpointGroups?: ListEndpointGroupsResponseBodyEndpointGroups[];
  /**
   * @remarks
   * The page number of the returned page.
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
   * The ID of the request.
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


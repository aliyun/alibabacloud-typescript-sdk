// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointGroupRequestEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   By default, client IP address preservation is disabled for an endpoint group of a UDP or TCP listener. You can configure this parameter based on your business requirements.
   * > *   By default, client IP address preservation is enabled for an endpoint group of an HTTP or HTTP listener. You can obtain client IP addresses by using the X-Forwarded-For header. You cannot disable the feature.
   * > *   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * > > For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   This parameter is available only to endpoint groups of TCP listeners.
   * > *   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * > >  For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or instance ID based on the value of Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 120.1.XX.XX
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
   * > *   If you set this parameter to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget** and the AliyunServiceRoleForGaVpcEndpoint service-linked role does not exist, the system automatically creates the role.
   * > *   If you set this parameter to **ALB** and the AliyunServiceRoleForGaAlb service-linked role does not exist, the system automatically creates the role.
   * > *   If you set this parameter to **OSS** and the AliyunServiceRoleForGaOss service-linked role does not exist, the system automatically creates the role.
   * > *   If you set this parameter to **NLB** and the AliyunServiceRoleForGaNlb service-linked role does not exist, the system automatically creates the role.
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
   * vpc-bp1quce3451z5b2hv****
   */
  vpcId?: string;
  /**
   * @remarks
   * The weight of the endpoint.
   * 
   * Valid values: **0** to **255**.
   * 
   * >  If you set the weight of an endpoint to 0, GA stops distributing traffic to the endpoint. Proceed with caution.
   * 
   * This parameter is required.
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

export class CreateEndpointGroupRequestPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port that is mapped to the listener port.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port that is mapped to the endpoint port.
   * 
   * > *   You cannot configure port mappings for virtual endpoint groups of TCP listeners. If a virtual endpoint group already exists on the listener, you cannot configure port mappings for the default endpoint group. If port mappings are configured for the default endpoint group, you cannot add a virtual endpoint group.
   * > *   If you configure port mappings for a listener, you cannot modify the listener protocol. You can only switch between HTTP and HTTPS.
   * > *   Listener port: When you modify the listener port range, make sure that the port range includes the ports configured in port mappings. For example, if you set the listener port range to 80 to 82 and map the listener ports to endpoint ports 100 to 102, you cannot change the listener port range to 80 to 81.
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
   * The tag key of the GA instance. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the GA instance. The tag value cannot be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
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
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description can be up to 200 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * EndpointGroup
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, without sending the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error code is returned. If the request passes the dry run, a 2xx HTTP status code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the endpoints in the endpoint group.
   */
  endpointConfigurations?: CreateEndpointGroupRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the region in which to create the endpoint group.
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
   * *   **default** (default): a default endpoint group.
   * *   **virtual**: a virtual endpoint group.
   * 
   * >  When you call this operation to create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
   * 
   * @example
   * default
   */
  endpointGroupType?: string;
  endpointIpVersion?: string;
  /**
   * @remarks
   * The backend service protocol. Valid values:
   * 
   * *   **HTTP1.1** (default)
   * *   **HTTP2**
   * 
   * >  This parameter is required only when you set the EndpointRequestProtocol parameter to HTTPS.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The protocol that is used by the backend service. Default value: HTTP. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * > *   You can set this parameter only when the listener that is associated with the endpoint group uses **HTTP** or **HTTPS**.
   * >*   For an **HTTP** listener, the backend service protocol must be **HTTP**.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
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
   * The interval at which health checks are performed. Unit: seconds.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path to which to send health check requests.
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
   * The protocol over which to send health check requests. Valid values:
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
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * group1
   */
  name?: string;
  /**
   * @remarks
   * The port mappings.
   */
  portOverrides?: CreateEndpointGroupRequestPortOverrides[];
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
   * Tags of GA instances.
   */
  tag?: CreateEndpointGroupRequestTag[];
  /**
   * @remarks
   * The number of consecutive health check failures that must occur before a healthy endpoint group is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint group is considered healthy.
   * 
   * Valid values: **2** to **10**. Default value: **3**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic ratio for the endpoint group when the specified listener is associated with multiple endpoint groups.
   * 
   * Valid values: **1** to **100**.
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


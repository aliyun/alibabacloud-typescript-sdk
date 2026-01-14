// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * > *   By default, client IP address preservation is disabled for an endpoint group of a UDP or TCP listener. You can configure this parameter based on your business requirements.
   * >*   By default, client IP address preservation is enabled for an endpoint group of an HTTP or HTTP listener. You can obtain client IP addresses by using the X-Forwarded-For header. You cannot disable the feature.
   * >*   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >>  For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
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
   * >*   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
   * >>For more information, see [Preserve client IP addresses](https://help.aliyun.com/document_detail/158080.html).
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * The IP address, domain name, or instance ID based on the value of Type.
   * 
   * This parameter is required.
   * 
   * @example
   * 47.0.XX.XX
   */
  endpoint?: string;
  /**
   * @remarks
   * The private IP address of the ENI.
   * 
   * >  If you set the endpoint type to ENI, you can specify this parameter. 
   * >If you leave this parameter empty, the primary private IP address of the ENI is used.
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
   * vpc-uf66oesmrqge1t2gs****
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
   * > *   You cannot configure port mappings for virtual endpoint groups of TCP listeners. If a virtual endpoint group already exists on the listener, you cannot configure port mappings for the default endpoint group. If port mappings are configured for the default endpoint group, you cannot add a virtual endpoint group.
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

export class UpdateEndpointGroupsRequestEndpointGroupConfigurations extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableClientIPPreservationProxyProtocol?: boolean;
  /**
   * @remarks
   * Specifies whether to use the TCP Option Address (TOA) module to preserve client IP addresses. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  enableClientIPPreservationToa?: boolean;
  /**
   * @remarks
   * The configurations of the endpoints in the endpoint group.
   */
  endpointConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsEndpointConfigurations[];
  /**
   * @remarks
   * The description of the endpoint group.
   * 
   * The description cannot exceed 200 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * group1
   */
  endpointGroupDescription?: string;
  /**
   * @remarks
   * The endpoint ID.
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
   * The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * group1
   */
  endpointGroupName?: string;
  endpointIpVersion?: string;
  /**
   * @remarks
   * The backend service protocol of the endpoint that is associated with the intelligent routing listener. Valid values:
   * 
   * *   **HTTP1.1** (default)
   * *   **HTTP2**
   * 
   * >  You can specify this parameter only if EndpointRequestProtocol is set to HTTPS.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The backend service protocol. Valid values:
   * 
   * *   **HTTP**
   * *   **HTTPS**
   * 
   * > *   You can specify this parameter only if the listener that is associated with the endpoint group uses HTTP or HTTPS.
   * > *   The backend service protocol of an HTTP listener must be HTTP.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable the health check feature. Valid values:
   * 
   * *   **true**: enables the health check feature.
   * *   **false** (default): disables the health check feature.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval at which health checks are performed. Unit: seconds. Valid values: **1** to **50**.
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
   * The port that you want to use for health checks.
   * 
   * Valid values: **1** to **65535**.
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
   * The port mappings.
   */
  portOverrides?: UpdateEndpointGroupsRequestEndpointGroupConfigurationsPortOverrides[];
  /**
   * @remarks
   * The number of failed consecutive health checks that must occur before a healthy endpoint group is considered unhealthy or the number of successful consecutive health checks that must occur before an unhealthy endpoint group is considered healthy.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The traffic ratio of the endpoint group when the specified listener is associated with multiple endpoint groups.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true:** performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The configurations of the endpoint groups.
   * 
   * This parameter is required.
   */
  endpointGroupConfigurations?: UpdateEndpointGroupsRequestEndpointGroupConfigurations[];
  /**
   * @remarks
   * The listener ID.
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


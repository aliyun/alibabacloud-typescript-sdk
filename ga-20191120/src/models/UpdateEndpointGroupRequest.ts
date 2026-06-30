// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEndpointGroupRequestEndpointConfigurations extends $dara.Model {
  apiKeys?: string[];
  /**
   * @remarks
   * Specifies whether to preserve client source IP addresses. Valid values:
   * 
   * - **true**: Preserves client source IP addresses.
   * 
   * - **false** (default): Does not preserve client source IP addresses.
   * 
   * > * For endpoint groups of TCP or UDP listeners, this feature is disabled by default but can be enabled if needed.
   * >
   * > * For endpoint groups of HTTP or HTTPS listeners, client source IP addresses are preserved by default. The client IP addresses are retrieved from the X-Forwarded-For header. You cannot disable this feature.
   * >
   * > * You cannot set both `EnableClientIPPreservation` and `EnableProxyProtocol` to `true`.
   * >
   * > * For more information, see [preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableClientIPPreservation?: boolean;
  /**
   * @remarks
   * Specifies whether to use the Proxy Protocol to preserve client source IP addresses. Valid values:
   * 
   * - **true**: Preserves client source IP addresses.
   * 
   * - **false** (default): Does not preserve client source IP addresses.
   * 
   * > * You can configure this parameter only for endpoint groups of TCP listeners.
   * >
   * > * You cannot set both `EnableClientIPPreservation` and `EnableProxyProtocol` to `true`.
   * >
   * > * For more information, see [preserve client source IP addresses](https://help.aliyun.com/document_detail/158080.html).
   * 
   * @example
   * false
   */
  enableProxyProtocol?: boolean;
  /**
   * @remarks
   * Enter an IP address, a domain name, or an instance ID based on the value of the `Type` parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 120.XX.XX.21
   */
  endpoint?: string;
  /**
   * @example
   * BAILIAN
   */
  provider?: string;
  /**
   * @remarks
   * The private IP address of the elastic network interface.
   * 
   * > If the endpoint type is **ENI**, you can specify this parameter. If you omit this parameter, the primary private IP address of the ENI is used.
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
   * - **ECS**: an ECS instance.
   * 
   * - **SLB**: an SLB instance.
   * 
   * - **ALB**: an ALB instance.
   * 
   * - **OSS**: an OSS instance.
   * 
   * - **ENI**: an elastic network interface.
   * 
   * - **NLB**: an NLB instance.
   * 
   * > * If the endpoint type is **ECS**, **ENI**, **SLB**, or **IpTarget**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint.
   * >
   * > * If the endpoint type is **ALB**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb.
   * >
   * > * If the endpoint type is **OSS**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss.
   * >
   * > * If the endpoint type is **NLB**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaNlb.
   * >
   * > > For more information, see [service-linked roles](https://help.aliyun.com/document_detail/178360.html).
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
   * The ID of the VPC.
   * 
   * You can specify at most one VPC ID for an endpoint group that is associated with an intelligent routing listener.
   * 
   * > This parameter is required only when the endpoint type is **IpTarget**.
   * 
   * @example
   * vpc-2zen6t0u7xhm0k5iz****
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

export class UpdateEndpointGroupRequestPortOverrides extends $dara.Model {
  /**
   * @remarks
   * The endpoint port in the port override settings.
   * 
   * @example
   * 80
   */
  endpointPort?: number;
  /**
   * @remarks
   * The listener port in the port override settings.
   * 
   * > - For TCP listeners, virtual endpoint groups do not support port overrides. If a listener is already associated with a virtual endpoint group, you cannot configure port overrides for the default endpoint group. If the default endpoint group has port overrides configured, you cannot add a virtual endpoint group.
   * >
   * > - After you configure port overrides, you can change the listener protocol only between HTTP and HTTPS.
   * >
   * > - The updated listener port range must include all listener ports in the configured port overrides. For example, if the listener port range is 80-82 and port overrides are configured to map the ports to endpoint ports 100-102, you cannot update the listener port range to 80-81.
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

export class UpdateEndpointGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token to ensure the idempotence of the request.
   * 
   * The token must be unique across requests and can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** is unique for each API request.
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
   * The configurations of the endpoints.
   */
  endpointConfigurations?: UpdateEndpointGroupRequestEndpointConfigurations[];
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-bp1dmlohjjz4kqaun****
   */
  endpointGroupId?: string;
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
   * Specifies the IP protocol that GA uses to communicate with endpoints. Valid values: ● **IPv4** (default): Use IPv4. ● **IPv6**: Use IPv6. ● **ProtocolAffinity**: Use the same IP protocol as the client request.
   * 
   * @example
   * IPv4
   */
  endpointIpVersion?: string;
  /**
   * @remarks
   * The version of the backend service protocol. Valid values:
   * 
   * - **HTTP1.1**
   * 
   * - **HTTP2**
   * 
   * > You can configure this parameter only when `EndpointRequestProtocol` is set to HTTPS.
   * 
   * @example
   * HTTP1.1
   */
  endpointProtocolVersion?: string;
  /**
   * @remarks
   * The backend service protocol. Valid values:
   * 
   * - **HTTP**
   * 
   * - **HTTPS**
   * 
   * > * You can configure this parameter only for endpoint groups of HTTP or HTTPS listeners.
   * >
   * > * For an HTTP listener, the backend service protocol must be HTTP.
   * 
   * @example
   * HTTP
   */
  endpointRequestProtocol?: string;
  /**
   * @remarks
   * Specifies whether to enable health checks. Valid values:
   * 
   * - **true**: Enables health checks.
   * 
   * - **false** (default): Disables health checks.
   * 
   * @example
   * true
   */
  healthCheckEnabled?: boolean;
  /**
   * @remarks
   * The domain name for the health check.
   * 
   * @example
   * www.taobao.com
   */
  healthCheckHost?: string;
  /**
   * @remarks
   * The interval between health checks, in seconds. Valid values: **1** to **50**.
   * 
   * @example
   * 3
   */
  healthCheckIntervalSeconds?: number;
  /**
   * @remarks
   * The path for health checks.
   * 
   * @example
   * /healthcheck
   */
  healthCheckPath?: string;
  /**
   * @remarks
   * The port used for health checks. Valid values: **1** to **65535**.
   * 
   * @example
   * 20
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The protocol for health checks. Valid values:
   * 
   * - **tcp** or **TCP**
   * 
   * - **http** or **HTTP**
   * 
   * - **https** or **HTTPS**
   * 
   * @example
   * HTTPS
   */
  healthCheckProtocol?: string;
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
   * The port override settings.
   */
  portOverrides?: UpdateEndpointGroupRequestPortOverrides[];
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
   * The number of consecutive successful or failed health checks required to change an endpoint\\"s health status.
   * 
   * Valid values: **2** to **10**.
   * 
   * @example
   * 3
   */
  thresholdCount?: number;
  /**
   * @remarks
   * The weight of the endpoint group when the listener is associated with multiple endpoint groups.
   * 
   * @example
   * 20
   */
  trafficPercentage?: number;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      description: 'Description',
      endpointConfigurations: 'EndpointConfigurations',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupRegion: 'EndpointGroupRegion',
      endpointIpVersion: 'EndpointIpVersion',
      endpointProtocolVersion: 'EndpointProtocolVersion',
      endpointRequestProtocol: 'EndpointRequestProtocol',
      healthCheckEnabled: 'HealthCheckEnabled',
      healthCheckHost: 'HealthCheckHost',
      healthCheckIntervalSeconds: 'HealthCheckIntervalSeconds',
      healthCheckPath: 'HealthCheckPath',
      healthCheckPort: 'HealthCheckPort',
      healthCheckProtocol: 'HealthCheckProtocol',
      name: 'Name',
      portOverrides: 'PortOverrides',
      regionId: 'RegionId',
      thresholdCount: 'ThresholdCount',
      trafficPercentage: 'TrafficPercentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      endpointConfigurations: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestEndpointConfigurations },
      endpointGroupId: 'string',
      endpointGroupRegion: 'string',
      endpointIpVersion: 'string',
      endpointProtocolVersion: 'string',
      endpointRequestProtocol: 'string',
      healthCheckEnabled: 'boolean',
      healthCheckHost: 'string',
      healthCheckIntervalSeconds: 'number',
      healthCheckPath: 'string',
      healthCheckPort: 'number',
      healthCheckProtocol: 'string',
      name: 'string',
      portOverrides: { 'type': 'array', 'itemType': UpdateEndpointGroupRequestPortOverrides },
      regionId: 'string',
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


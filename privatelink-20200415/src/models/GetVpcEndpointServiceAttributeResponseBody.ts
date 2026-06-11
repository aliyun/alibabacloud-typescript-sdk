// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet extends $dara.Model {
  /**
   * @remarks
   * The business status of the endpoint service in the supported region. Valid values:
   * 
   * - **Normal**: The service is operating normally in the supported region.
   * 
   * - **FinancialLocked**: The endpoint service is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  regionBusinessStatus?: string;
  /**
   * @remarks
   * The status of the endpoint service in the supported region. Valid values:
   * 
   * - **Pending**: The supported region is being modified.
   * 
   * - **Available**: The service is available in the supported region.
   * 
   * - **Deleting**: The supported region is being deleted.
   * 
   * - **Failed**: The service failed to be deployed in the supported region.
   * 
   * - **Closed**: The endpoint service is not available in the supported region.
   * 
   * @example
   * Available
   */
  regionServiceStatus?: string;
  /**
   * @deprecated
   */
  serviceRegionId?: string;
  /**
   * @remarks
   * The ID of the supported region.
   * 
   * @example
   * cn-hangzhou
   */
  supportedRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionBusinessStatus: 'RegionBusinessStatus',
      regionServiceStatus: 'RegionServiceStatus',
      serviceRegionId: 'ServiceRegionId',
      supportedRegionId: 'SupportedRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionBusinessStatus: 'string',
      regionServiceStatus: 'string',
      serviceRegionId: 'string',
      supportedRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcEndpointServiceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **IPv4**: The IPv4 address family.
   * 
   * - **DualStack**: The dual stack IP address family.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connections. Valid values:
   * 
   * - **true**: Endpoint connections are automatically accepted.
   * 
   * - **false**: Endpoint connections are not automatically accepted.
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth of an endpoint connection, in Mbps. Valid values are **100 to 10,240**.
   * 
   * @example
   * 3072
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time the service was created.
   * 
   * @example
   * 2020-01-02T19:11:12Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection, in Mbps.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection, in Mbps.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The party that pays for the service. Valid values:
   * 
   * - **Endpoint**: The service consumer.
   * 
   * - **EndpointService**: The service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region where the service is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D8992C1-6712-423C-BAC5-E5E817484C6B
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The business status of the service. Valid values:
   * 
   * - **Normal**: The service is operating normally.
   * 
   * - **FinancialLocked**: The endpoint service is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The domain name of the service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * - **slb**: The service resource is a Classic Load Balancer (CLB).
   * 
   * - **alb**: The service resource is an Application Load Balancer (ALB).
   * 
   * - **nlb**: The service resource is a Network Load Balancer (NLB).
   * 
   * - **gwlb**: The service resource is a Gateway Load Balancer (GWLB).
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The status of the service. Valid values:
   * 
   * - **Creating**: The service is being created.
   * 
   * - **Pending**: The service is being updated.
   * 
   * - **Active**: The service is available.
   * 
   * - **Deleting**: The service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Specifies whether the service supports IPv6. Valid values:
   * 
   * - **true**: The service supports IPv6.
   * 
   * - **false** (default): The service does not support IPv6.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The endpoint type.
   * 
   * - **Interface**: An interface endpoint. You can add Classic Load Balancer (CLB), Application Load Balancer (ALB), and Network Load Balancer (NLB) instances as service resources.
   * 
   * - **GatewayLoadBalancer**: A gateway endpoint. You can add Gateway Load Balancer (GWLB) instances as service resources.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The regions where the service is supported. Service consumers can create endpoint connections to the service from these regions.
   */
  supportedRegionSet?: GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet[];
  /**
   * @remarks
   * Specifies whether zone affinity is enabled. Valid values:
   * 
   * - **true** (default): Zone affinity is enabled.
   * 
   * - **false**: Zone affinity is disabled.
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The zones where the service is available.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      connectBandwidth: 'ConnectBandwidth',
      createTime: 'CreateTime',
      maxBandwidth: 'MaxBandwidth',
      minBandwidth: 'MinBandwidth',
      payer: 'Payer',
      regionId: 'RegionId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      serviceBusinessStatus: 'ServiceBusinessStatus',
      serviceDescription: 'ServiceDescription',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceStatus: 'ServiceStatus',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      supportedRegionSet: 'SupportedRegionSet',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      connectBandwidth: 'number',
      createTime: 'string',
      maxBandwidth: 'number',
      minBandwidth: 'number',
      payer: 'string',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      serviceBusinessStatus: 'string',
      serviceDescription: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceStatus: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      supportedRegionSet: { 'type': 'array', 'itemType': GetVpcEndpointServiceAttributeResponseBodySupportedRegionSet },
      zoneAffinityEnabled: 'boolean',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegionSet)) {
      $dara.Model.validateArray(this.supportedRegionSet);
    }
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


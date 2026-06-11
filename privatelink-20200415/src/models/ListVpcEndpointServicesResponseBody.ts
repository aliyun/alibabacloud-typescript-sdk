// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesResponseBodyServicesSupportedRegionSet extends $dara.Model {
  /**
   * @remarks
   * The business status of the region supported by the endpoint service. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: Locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  regionBusinessStatus?: string;
  /**
   * @remarks
   * The status of the region supported by the endpoint service. Valid values:
   * 
   * - **Pending**: The status is being updated.
   * 
   * - **Available**: The region is available.
   * 
   * - **Deleting**: The region is being deleted.
   * 
   * - **Failed**: The operation failed.
   * 
   * - **Closed**: The region is closed.
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
   * The ID of the region supported by the endpoint service.
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

export class ListVpcEndpointServicesResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key of the instance.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the instance.
   * 
   * @example
   * FinanceJoshua
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

export class ListVpcEndpointServicesResponseBodyServices extends $dara.Model {
  /**
   * @remarks
   * The IP address version. Valid values:
   * 
   * - **IPv4**: IPv4 type.
   * 
   * - **DualStack**: Dual-stack type.
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether to automatically accept endpoint connections. Valid values:
   * 
   * - **true**: Automatically accept endpoint connections.
   * 
   * - **false**: Do not automatically accept endpoint connections.
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth. Unit: Mbps.
   * 
   * @example
   * 1024
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time when the endpoint service was created.
   * 
   * @example
   * 2021-09-24T17:15:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection. Unit: Mbps.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection. Unit: Mbps.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * - **Endpoint**: the service consumer.
   * 
   * - **EndpointService**: the service provider.
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region where the endpoint service is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
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
   * The business status of the endpoint service. Valid values:
   * 
   * - **Normal**: The endpoint service is running as expected.
   * 
   * - **FinancialLocked**: The endpoint service is locked due to an overdue payment.
   * 
   * @example
   * Normal
   */
  serviceBusinessStatus?: string;
  /**
   * @remarks
   * The description of the endpoint service.
   * 
   * @example
   * This is my EndpointService.
   */
  serviceDescription?: string;
  /**
   * @remarks
   * The domain name of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service.
   * 
   * @example
   * com.aliyuncs.privatelink.cn-huhehaote.epsrv-hp3vpx8yqxblby3i****
   */
  serviceName?: string;
  /**
   * @remarks
   * The type of the service resource. Valid values:
   * 
   * - **slb**: The service resource is a CLB instance.
   * 
   * - **alb**: The service resource is an ALB instance.
   * 
   * - **nlb**: The service resource is an NLB instance.
   * 
   * - **gwlb**: The service resource is a GWLB instance.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The status of the endpoint service. Valid values:
   * 
   * - **Creating**: The endpoint service is being created.
   * 
   * - **Pending**: The endpoint service is being modified.
   * 
   * - **Active**: The endpoint service is available.
   * 
   * - **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service. Valid values:
   * 
   * - **Interface**: an interface endpoint. You can add CLB, ALB, and NLB instances as service resources.
   * 
   * - **GatewayLoadBalancer**: a Gateway Load Balancer endpoint. You can add GWLB instances as service resources.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of regions supported by the endpoint service. Service consumers can initiate endpoint connections from these regions.
   */
  supportedRegionSet?: ListVpcEndpointServicesResponseBodyServicesSupportedRegionSet[];
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVpcEndpointServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * Specifies whether zonal affinity is enabled. Valid values:
   * 
   * - **true**: Yes.
   * 
   * - **false**: No.
   * 
   * @example
   * true
   */
  zoneAffinityEnabled?: boolean;
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
      tags: 'Tags',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
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
      supportedRegionSet: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServicesSupportedRegionSet },
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServicesTags },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.supportedRegionSet)) {
      $dara.Model.validateArray(this.supportedRegionSet);
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

export class ListVpcEndpointServicesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token for the next query. Valid values:
   * 
   * - If **NextToken** is empty, no further results exist.
   * 
   * - If **NextToken** has a value, use it as the starting token for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of endpoint services.
   */
  services?: ListVpcEndpointServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServices },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


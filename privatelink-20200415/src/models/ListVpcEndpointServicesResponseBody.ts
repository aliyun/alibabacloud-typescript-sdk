// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag added to the resource.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag added to the resource.
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
   * The protocol. Valid values:
   * 
   * *   **IPv4**
   * *   **DualStack**
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Indicates whether endpoint connection requests are automatically accepted. Valid values:
   * 
   * *   **true**: Endpoint connection requests are automatically accepted.
   * *   **false**: Endpoint connection requests are not automatically accepted.
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
  /**
   * @remarks
   * The default maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  connectBandwidth?: number;
  /**
   * @remarks
   * The time when the endpoint service was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2021-09-24T17:15:10Z
   */
  createTime?: string;
  /**
   * @remarks
   * The maximum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 1024
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The minimum bandwidth of the endpoint connection. Unit: Mbit/s.
   * 
   * @example
   * 100
   */
  minBandwidth?: number;
  /**
   * @remarks
   * The payer. Valid values:
   * 
   * *   **Endpoint**: service consumer
   * *   **EndpointService**: service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The region ID of the endpoint service.
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
   * The service state of the endpoint service. Valid values:
   * 
   * *   **Normal**: The endpoint service runs as expected.
   * *   **FinancialLocked**: The endpoint service is locked due to overdue payments.
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
   * *   **slb**: Classic Load Balancer (CLB) instance
   * *   **alb**: Application Load Balancer (ALB) instance
   * *   **nlb**: Network Load Balancer (NLB) instance
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * The state of the endpoint service. Valid values:
   * 
   * *   **Creating**: The endpoint service is being created.
   * *   **Pending**: The endpoint service is being modified.
   * *   **Active**: The endpoint service is available.
   * *   **Deleting**: The endpoint service is being deleted.
   * 
   * @example
   * Active
   */
  serviceStatus?: string;
  /**
   * @remarks
   * Indicates whether the endpoint service supports IPv6. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   * 
   * @deprecated
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * *   Only **Interface** may be returned. You can specify CLB, ALB, and NLB instances as the service resources of the endpoint service.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The tags added to the resource.
   */
  tags?: ListVpcEndpointServicesResponseBodyServicesTags[];
  /**
   * @remarks
   * Indicates whether zone affinity is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
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
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesResponseBodyServicesTags },
      zoneAffinityEnabled: 'boolean',
    };
  }

  validate() {
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
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next requests are performed.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
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
   * The endpoint services.
   */
  services?: ListVpcEndpointServicesResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
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


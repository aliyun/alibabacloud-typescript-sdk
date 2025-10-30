// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesByEndUserResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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

export class ListVpcEndpointServicesByEndUserResponseBodyServices extends $dara.Model {
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
   * The payer. Valid values:
   * 
   * *   **Endpoint**: the service consumer
   * *   **EndpointService**: the service provider
   * 
   * @example
   * Endpoint
   */
  payer?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The domain name of the endpoint service that can be associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****.cn-huhehaote.privatelink.aliyuncs.com
   */
  serviceDomain?: string;
  /**
   * @remarks
   * The ID of the endpoint service that can be associated with the endpoint.
   * 
   * @example
   * epsrv-hp3vpx8yqxblby3i****
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the endpoint service that can be associated with the endpoint.
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
   * Indicates whether IPv6 is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * Only **Interface** is returned, which indicates an interface endpoint. You can specify **CLB** and **ALB** instances as service resources.
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListVpcEndpointServicesByEndUserResponseBodyServicesTags[];
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The zones of the endpoint service that can be associated with the endpoint.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      payer: 'Payer',
      resourceGroupId: 'ResourceGroupId',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      tags: 'Tags',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      payer: 'string',
      resourceGroupId: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServicesTags },
      zoneAffinityEnabled: 'boolean',
      zones: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
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

export class ListVpcEndpointServicesByEndUserResponseBody extends $dara.Model {
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
   * The information about endpoint services.
   */
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: string;
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
      services: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServices },
      totalCount: 'string',
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


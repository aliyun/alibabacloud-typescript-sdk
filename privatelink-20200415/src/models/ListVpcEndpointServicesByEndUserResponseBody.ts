// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcEndpointServicesByEndUserResponseBodyServicesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * The IP version. Valid values:
   * 
   * - **IPv4**: The service supports IPv4.
   * 
   * - **DualStack**: The service supports both IPv4 and IPv6 (dual stack).
   * 
   * @example
   * IPv4
   */
  addressIpVersion?: string;
  /**
   * @remarks
   * Specifies whether connection requests are automatically accepted. Valid values:
   * 
   * - **true**: Connection requests are automatically accepted.
   * 
   * - **false**: Connection requests must be manually accepted.
   * 
   * @example
   * true
   */
  autoAcceptEnabled?: boolean;
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
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmy*****
   */
  resourceGroupId?: string;
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
   * The service resource type.
   * 
   * - **slb**: A Classic Load Balancer (CLB) instance.
   * 
   * - **alb**: An Application Load Balancer (ALB) instance.
   * 
   * - **nlb**: A Network Load Balancer (NLB) instance.
   * 
   * @example
   * slb
   */
  serviceResourceType?: string;
  /**
   * @remarks
   * Specifies whether the endpoint service supports IPv6. Valid values:
   * 
   * - **true**: The endpoint service supports IPv6.
   * 
   * - **false**: The endpoint service does not support IPv6.
   * 
   * @example
   * false
   */
  serviceSupportIPv6?: boolean;
  /**
   * @remarks
   * The type of the endpoint service.
   * 
   * The value is always **Interface**. This indicates an interface endpoint where you can add service resources such as Application Load Balancer (ALB), Classic Load Balancer (CLB), and Network Load Balancer (NLB).
   * 
   * @example
   * Interface
   */
  serviceType?: string;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListVpcEndpointServicesByEndUserResponseBodyServicesTags[];
  vpcEndpointPolicySupported?: boolean;
  /**
   * @remarks
   * Specifies whether zone affinity is enabled. Valid values:
   * 
   * - **true**: Zone affinity is enabled.
   * 
   * - **false**: Zone affinity is disabled.
   * 
   * @example
   * false
   */
  zoneAffinityEnabled?: boolean;
  /**
   * @remarks
   * The zones where the endpoint service is available.
   */
  zones?: string[];
  static names(): { [key: string]: string } {
    return {
      addressIpVersion: 'AddressIpVersion',
      autoAcceptEnabled: 'AutoAcceptEnabled',
      payer: 'Payer',
      resourceGroupId: 'ResourceGroupId',
      serviceDomain: 'ServiceDomain',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceResourceType: 'ServiceResourceType',
      serviceSupportIPv6: 'ServiceSupportIPv6',
      serviceType: 'ServiceType',
      tags: 'Tags',
      vpcEndpointPolicySupported: 'VpcEndpointPolicySupported',
      zoneAffinityEnabled: 'ZoneAffinityEnabled',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressIpVersion: 'string',
      autoAcceptEnabled: 'boolean',
      payer: 'string',
      resourceGroupId: 'string',
      serviceDomain: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceResourceType: 'string',
      serviceSupportIPv6: 'boolean',
      serviceType: 'string',
      tags: { 'type': 'array', 'itemType': ListVpcEndpointServicesByEndUserResponseBodyServicesTags },
      vpcEndpointPolicySupported: 'boolean',
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
   * The token that is used to retrieve the next page of results. Valid values:
   * 
   * - If this parameter is empty, all results have been returned.
   * 
   * - If a value is returned, use it in a subsequent request to retrieve the next page of results.
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
  services?: ListVpcEndpointServicesByEndUserResponseBodyServices[];
  /**
   * @remarks
   * The total number of entries.
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


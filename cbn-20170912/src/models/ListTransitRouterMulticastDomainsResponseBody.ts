// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether IGMPv2 is enabled for the multicast domain.
   * 
   * @example
   * enable
   */
  igmpv2Support?: string;
  /**
   * @example
   * enable
   */
  strictSourceControl?: string;
  static names(): { [key: string]: string } {
    return {
      igmpv2Support: 'Igmpv2Support',
      strictSourceControl: 'StrictSourceControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      igmpv2Support: 'string',
      strictSourceControl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue
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

export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-h19xdb0qy2b3ir****
   */
  cenId?: string;
  /**
   * @remarks
   * The options of the multicast domain.
   */
  options?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions;
  /**
   * @remarks
   * The ID of the region where the transit router is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the multicast domain.
   * 
   * The value is **Active**, which indicates that the multicast domain is available.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags[];
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-bp1c23ijrl6d6c226h***
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the multicast domain.
   * 
   * @example
   * desctest
   */
  transitRouterMulticastDomainDescription?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * @example
   * tr-mcast-domain-3r3bvbypxqheej****
   */
  transitRouterMulticastDomainId?: string;
  /**
   * @remarks
   * The name of the multicast domain.
   * 
   * @example
   * nametest
   */
  transitRouterMulticastDomainName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      options: 'Options',
      regionId: 'RegionId',
      status: 'Status',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterMulticastDomainDescription: 'TransitRouterMulticastDomainDescription',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
      transitRouterMulticastDomainName: 'TransitRouterMulticastDomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      options: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions,
      regionId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags },
      transitRouterId: 'string',
      transitRouterMulticastDomainDescription: 'string',
      transitRouterMulticastDomainId: 'string',
      transitRouterMulticastDomainName: 'string',
    };
  }

  validate() {
    if(this.options && typeof (this.options as any).validate === 'function') {
      (this.options as any).validate();
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

export class ListTransitRouterMulticastDomainsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * - If the value of **NextToken** is empty, it indicates that no next query is to be sent.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
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
   * 8A0F93D1-FD6C-56FC-B6D2-668FC92D12D2
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of multicast domains.
   */
  transitRouterMulticastDomains?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouterMulticastDomains: 'TransitRouterMulticastDomains',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      transitRouterMulticastDomains: { 'type': 'array', 'itemType': ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouterMulticastDomains)) {
      $dara.Model.validateArray(this.transitRouterMulticastDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


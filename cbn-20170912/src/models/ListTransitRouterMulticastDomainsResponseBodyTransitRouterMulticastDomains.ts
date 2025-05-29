// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions } from "./ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions";
import { ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags } from "./ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags";


export class ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomains extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-a7syd349kne38g****
   */
  cenId?: string;
  /**
   * @remarks
   * Multicast domain feature.
   */
  options?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsOptions;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the multicast domain.
   * 
   * The valid value is **Active**, which indicates that the multicast domain is available.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListTransitRouterMulticastDomainsResponseBodyTransitRouterMulticastDomainsTags[];
  /**
   * @remarks
   * The transit router ID.
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


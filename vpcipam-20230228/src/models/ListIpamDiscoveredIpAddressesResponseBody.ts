// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredIpAddressesResponseBodyIpamDiscoveredIpAddresses extends $dara.Model {
  /**
   * @remarks
   * The IP address in use.
   * 
   * @example
   * 192.168.10.40/32
   */
  ipAddress?: string;
  /**
   * @remarks
   * The IP version. Valid value:
   * 
   * - **IPv4**: Indicates the IPv4 protocol.
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * eni-bp1001jpjhzmgc5m****
   */
  resourceId?: string;
  /**
   * @remarks
   * The ID of the region in which the resource resides.
   * 
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  /**
   * @remarks
   * The cloud service to which the resource belongs.
   * 
   * @example
   * ENI
   */
  resourceServiceType?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1bmwg5u07e1l3q0is4w
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1fjfnrg3av6zb9e****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ipAddress: 'IpAddress',
      ipVersion: 'IpVersion',
      resourceId: 'ResourceId',
      resourceRegionId: 'ResourceRegionId',
      resourceServiceType: 'ResourceServiceType',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAddress: 'string',
      ipVersion: 'string',
      resourceId: 'string',
      resourceRegionId: 'string',
      resourceServiceType: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpamDiscoveredIpAddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Details of the used IP addresses.
   */
  ipamDiscoveredIpAddresses?: ListIpamDiscoveredIpAddressesResponseBodyIpamDiscoveredIpAddresses[];
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 200. Default value: 100.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Use this token in a subsequent request to retrieve the next page of results. Valid values:
   * 
   * - Empty: All results have been returned.
   * 
   * - If **NextToken** has a value, it is the token for the next page of results.
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
   * 9F8315CB-560E-5F1E-B069-6E44B440CAF8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the query.
   * 
   * @example
   * 1000
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ipamDiscoveredIpAddresses: 'IpamDiscoveredIpAddresses',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ipamDiscoveredIpAddresses: { 'type': 'array', 'itemType': ListIpamDiscoveredIpAddressesResponseBodyIpamDiscoveredIpAddresses },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipamDiscoveredIpAddresses)) {
      $dara.Model.validateArray(this.ipamDiscoveredIpAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


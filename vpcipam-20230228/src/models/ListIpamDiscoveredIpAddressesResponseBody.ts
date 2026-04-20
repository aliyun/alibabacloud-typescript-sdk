// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredIpAddressesResponseBodyIpamDiscoveredIpAddresses extends $dara.Model {
  /**
   * @example
   * 192.168.10.40/32
   */
  ipAddress?: string;
  /**
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @example
   * eni-bp1001jpjhzmgc5m****
   */
  resourceId?: string;
  /**
   * @example
   * cn-shenzhen
   */
  resourceRegionId?: string;
  /**
   * @example
   * ENI
   */
  resourceServiceType?: string;
  /**
   * @example
   * vsw-bp1bmwg5u07e1l3q0is4w
   */
  vSwitchId?: string;
  /**
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
   * @example
   * 10
   */
  count?: number;
  ipamDiscoveredIpAddresses?: ListIpamDiscoveredIpAddressesResponseBodyIpamDiscoveredIpAddresses[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @example
   * 9F8315CB-560E-5F1E-B069-6E44B440CAF8
   */
  requestId?: string;
  /**
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredIpAddressesRequest extends $dara.Model {
  /**
   * @remarks
   * The CIDR block to search for used IP addresses in a VPC or vSwitch. To query a specific IP address, use a /32 prefix length.
   * 
   * > Only IPv4 CIDR blocks are supported.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The IP protocol version. Valid value:
   * 
   * - **IPv4**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The ID of the resource discovery instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
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
   * The token used to retrieve the next page of results. Valid values:
   * 
   * - Do not specify this parameter for your first request.
   * 
   * - If a next page exists, set this parameter to the value of **NextToken** returned in the previous response.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the region where the resource discovery instance is hosted.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of a discovered VSwitch.
   * 
   * > You must specify at least one of VpcId and VSwitchId.
   * 
   * @example
   * vsw-bp1bmwg5u07e1l3q0is4w
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of a discovered VPC.
   * 
   * > You must specify at least one of VpcId and VSwitchId.
   * 
   * @example
   * vpc-bp1fjfnrg3av6zb9e****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      ipVersion: 'IpVersion',
      ipamResourceDiscoveryId: 'IpamResourceDiscoveryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      ipVersion: 'string',
      ipamResourceDiscoveryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
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


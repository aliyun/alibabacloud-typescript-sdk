// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamDiscoveredIpAddressesRequest extends $dara.Model {
  /**
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ipam-res-disco-jt5f2af2u6nk2z321****
   */
  ipamResourceDiscoveryId?: string;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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


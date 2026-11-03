// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventPayloadRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, the query returns intrusion prevention events that involve this destination IP address.
   * 
   * @example
   * 203.0.113.2
   */
  dstIP?: string;
  /**
   * @remarks
   * The destination VPC ID to query. If you specify this parameter, the query returns intrusion prevention events that involve this destination VPC ID.
   * 
   * @example
   * vpc-uf6jr1klwqb60dyn2****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * Specifies the end time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1681288980
   */
  endTime?: string;
  /**
   * @remarks
   * The type of Cloud Firewall. Valid values:
   * - **VpcFirewall**: virtual private cloud (VPC) firewalls.
   * - **InternetFirewall** (default): the Internet Border firewall.
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The IP address of the public asset to query. If you specify this parameter, the query returns compromise detection events that involve this asset IP address.
   * 
   * @example
   * 203.0.113.3
   */
  publicIP?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, the query returns intrusion prevention events that involve this source IP address.
   * 
   * @example
   * 203.0.113.1
   */
  srcIP?: string;
  /**
   * @remarks
   * The source VPC ID to query. If you specify this parameter, the query returns intrusion prevention events that involve this source VPC ID.
   * 
   * @example
   * vpc-wz9j2lqyo15udw5nt****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * Specifies the start time of the query. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669533617
   */
  startTime?: string;
  /**
   * @remarks
   * The UUID of the intrusion prevention event.
   * 
   * This parameter is required.
   * 
   * @example
   * e62c25e0-1073-46bd-9567-b8f12b3d****
   */
  UUID?: string;
  static names(): { [key: string]: string } {
    return {
      dstIP: 'DstIP',
      dstVpcId: 'DstVpcId',
      endTime: 'EndTime',
      firewallType: 'FirewallType',
      publicIP: 'PublicIP',
      srcIP: 'SrcIP',
      srcVpcId: 'SrcVpcId',
      startTime: 'StartTime',
      UUID: 'UUID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstIP: 'string',
      dstVpcId: 'string',
      endTime: 'string',
      firewallType: 'string',
      publicIP: 'string',
      srcIP: 'string',
      srcVpcId: 'string',
      startTime: 'string',
      UUID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


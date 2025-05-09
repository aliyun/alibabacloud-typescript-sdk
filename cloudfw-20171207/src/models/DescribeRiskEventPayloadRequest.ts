// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRiskEventPayloadRequest extends $dara.Model {
  /**
   * @remarks
   * The destination IP address to query. If you specify this parameter, all intrusion events with the specified destination IP address are queried.
   * 
   * @example
   * 203.0.113.2
   */
  dstIP?: string;
  /**
   * @remarks
   * The ID of the destination VPC to query. If you specify this parameter, all intrusion events that contain the specified ID of the destination VPC are queried.
   * 
   * @example
   * vpc-uf6jr1klwqb60dyn2****
   */
  dstVpcId?: string;
  /**
   * @remarks
   * The end of the time range to query. The value is a timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1681288980
   */
  endTime?: string;
  /**
   * @remarks
   * The type of the firewall. Valid values:
   * 
   * *   **VpcFirewall**: virtual private cloud (VPC) firewall
   * *   **InternetFirewall** (default): Internet firewall
   * 
   * @example
   * InternetFirewall
   */
  firewallType?: string;
  /**
   * @remarks
   * The public IP address. If you specify this parameter, all intrusion events that contain the specified public IP address are queried.
   * 
   * @example
   * 203.0.113.3
   */
  publicIP?: string;
  /**
   * @remarks
   * The source IP address to query. If you specify this parameter, all intrusion events from the specified source IP address are queried.
   * 
   * @example
   * 203.0.113.1
   */
  srcIP?: string;
  /**
   * @remarks
   * The ID of the source VPC to query. If you specify this parameter, all intrusion events that contain the specified ID of the source VPC are queried.
   * 
   * @example
   * vpc-wz9j2lqyo15udw5nt****
   */
  srcVpcId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1669533617
   */
  startTime?: string;
  /**
   * @remarks
   * The UUID of the intrusion event.
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


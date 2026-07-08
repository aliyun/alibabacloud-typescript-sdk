// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallTrafficTrendRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1767493189
   */
  endTime?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The instance ID of the peer VPC instance.
   * 
   * @example
   * vpc-j6c7mscdg4hfqanfi****
   */
  peerVpcId?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.21.186.XXX
   */
  privateIP?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp. Unit: seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1780626107
   */
  startTime?: string;
  /**
   * @remarks
   * The instance ID of the VPC-connected instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-j6cnofg4lg1ujx3xj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      lang: 'Lang',
      peerVpcId: 'PeerVpcId',
      privateIP: 'PrivateIP',
      startTime: 'StartTime',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      lang: 'string',
      peerVpcId: 'string',
      privateIP: 'string',
      startTime: 'string',
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


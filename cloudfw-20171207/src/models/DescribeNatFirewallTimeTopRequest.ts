// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTimeTopRequest extends $dara.Model {
  /**
   * @remarks
   * The time interval.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @remarks
   * The language type.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of top entries to return. Default value: 200. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The NAT gateway ID.
   * 
   * @example
   * ngw-uf62zzi7000bca7zn****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * total_max_bps
   */
  sort?: string;
  /**
   * @remarks
   * The private IP address of the NAT gateway.
   * 
   * @example
   * 10.100.134.XXX
   */
  srcPrivateIP?: string;
  /**
   * @remarks
   * The public IP address of the NAT gateway.
   * 
   * @example
   * 47.93.47.XXX
   */
  srcPublicIP?: string;
  /**
   * @remarks
   * The point in time for the traffic. The value is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1749693960
   */
  trafficTime?: string;
  static names(): { [key: string]: string } {
    return {
      interval: 'Interval',
      lang: 'Lang',
      limit: 'Limit',
      natGatewayId: 'NatGatewayId',
      sort: 'Sort',
      srcPrivateIP: 'SrcPrivateIP',
      srcPublicIP: 'SrcPublicIP',
      trafficTime: 'TrafficTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      interval: 'number',
      lang: 'string',
      limit: 'number',
      natGatewayId: 'string',
      sort: 'string',
      srcPrivateIP: 'string',
      srcPublicIP: 'string',
      trafficTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


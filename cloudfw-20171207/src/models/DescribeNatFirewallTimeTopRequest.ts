// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatFirewallTimeTopRequest extends $dara.Model {
  /**
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 20
   */
  limit?: number;
  /**
   * @example
   * ngw-uf62zzi7000bca7zn****
   */
  natGatewayId?: string;
  /**
   * @example
   * total_max_bps
   */
  sort?: string;
  /**
   * @example
   * 10.100.134.XXX
   */
  srcPrivateIP?: string;
  /**
   * @example
   * 47.93.47.XXX
   */
  srcPublicIP?: string;
  /**
   * @remarks
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewaysResponseBodyNatGatewaysNatGatewayNatGatewayPrivateInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-m5eg4ozy5st8q3q4****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The mode in which the ENI is associated with the NAT gateway.
   * 
   * *   **indirect**: non-cut-through mode
   * *   If an empty value is returned, it indicates that the cut-through mode is used.
   * 
   * @example
   * indirect
   */
  eniType?: string;
  /**
   * @remarks
   * The zone to which the NAT gateway belongs.
   * 
   * @example
   * cn-hangzhou-b
   */
  izNo?: string;
  /**
   * @remarks
   * The maximum bandwidth. Unit: Mbit/s.
   * 
   * @example
   * 5120
   */
  maxBandwidth?: number;
  /**
   * @remarks
   * The number of new connections to the NAT gateway. Unit: connections per second.
   * 
   * @example
   * 100000
   */
  maxSessionEstablishRate?: number;
  /**
   * @remarks
   * The number of concurrent connections to the NAT gateway. Unit: connections.
   * 
   * @example
   * 2000000
   */
  maxSessionQuota?: number;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the NAT gateway belongs.
   * 
   * @example
   * vsw-bp1s2laxhdf9ayjbo****
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
      eniType: 'EniType',
      izNo: 'IzNo',
      maxBandwidth: 'MaxBandwidth',
      maxSessionEstablishRate: 'MaxSessionEstablishRate',
      maxSessionQuota: 'MaxSessionQuota',
      privateIpAddress: 'PrivateIpAddress',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      eniType: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
      maxSessionEstablishRate: 'number',
      maxSessionQuota: 'number',
      privateIpAddress: 'string',
      vswitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


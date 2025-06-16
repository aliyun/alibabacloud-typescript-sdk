// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyPrivateInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic network interface (ENI).
   * 
   * @example
   * eni-bp1cmgtoaka8vfyg****
   */
  eniInstanceId?: string;
  /**
   * @remarks
   * The zone where the NAT gateway is deployed.
   * 
   * @example
   * cn-qingdao-b
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
   * vsw-bp1s2laxhdf9ayjbo***
   */
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      eniInstanceId: 'EniInstanceId',
      izNo: 'IzNo',
      maxBandwidth: 'MaxBandwidth',
      privateIpAddress: 'PrivateIpAddress',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniInstanceId: 'string',
      izNo: 'string',
      maxBandwidth: 'number',
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


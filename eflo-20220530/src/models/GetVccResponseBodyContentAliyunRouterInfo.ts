// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVccResponseBodyContentAliyunRouterInfo extends $dara.Model {
  /**
   * @remarks
   * IPv4 address of Alibaba Cloud-side interconnection
   * 
   * @example
   * 169.254.248.30
   */
  localGatewayIp?: string;
  /**
   * @remarks
   * Masking
   * 
   * @example
   * 255.255.255.248
   */
  mask?: string;
  /**
   * @remarks
   * Express Connect circuit ID
   * 
   * @example
   * pc-0jlof4bphlsnxbdztkvad
   */
  pcId?: string;
  /**
   * @remarks
   * Lingjun Side Interconnection IPv4 Address
   * 
   * @example
   * 169.254.248.28
   */
  peerGatewayIp?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vbr-2ze4i85p6vb9nwcan5xt0
   */
  vbrId?: string;
  /**
   * @remarks
   * VLAN ID of the VBR
   * 
   * @example
   * 1042
   */
  vlanId?: string;
  static names(): { [key: string]: string } {
    return {
      localGatewayIp: 'LocalGatewayIp',
      mask: 'Mask',
      pcId: 'PcId',
      peerGatewayIp: 'PeerGatewayIp',
      vbrId: 'VbrId',
      vlanId: 'VlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localGatewayIp: 'string',
      mask: 'string',
      pcId: 'string',
      peerGatewayIp: 'string',
      vbrId: 'string',
      vlanId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


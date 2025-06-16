// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpnGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the VPN gateway.
   * 
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * If automatic payment is disabled, you must manually complete the payment for the VPN gateway in the [Alibaba Cloud Management console](https://usercenter2-intl.aliyun.com/billing/#/account/overview).
   * 
   * @example
   * 208240895400460
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EB2C156A-41F8-49CC-A756-D55AFC8BFD69
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-uf68lxhgr7ftbqr3p****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      orderId: 'OrderId',
      requestId: 'RequestId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      orderId: 'number',
      requestId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


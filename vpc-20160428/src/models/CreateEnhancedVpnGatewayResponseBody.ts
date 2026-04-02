// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnhancedVpnGatewayResponseBody extends $dara.Model {
  /**
   * @example
   * MYVPN
   */
  name?: string;
  /**
   * @example
   * EB2C156A-41F8-49CC-A756-D55AFC8BFD69
   */
  requestId?: string;
  /**
   * @example
   * vpn-uf68lxhgr7ftbqr3p****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
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


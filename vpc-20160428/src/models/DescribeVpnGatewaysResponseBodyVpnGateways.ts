// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway } from "./DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway";


export class DescribeVpnGatewaysResponseBodyVpnGateways extends $dara.Model {
  vpnGateway?: DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway[];
  static names(): { [key: string]: string } {
    return {
      vpnGateway: 'VpnGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnGateway: { 'type': 'array', 'itemType': DescribeVpnGatewaysResponseBodyVpnGatewaysVpnGateway },
    };
  }

  validate() {
    if(Array.isArray(this.vpnGateway)) {
      $dara.Model.validateArray(this.vpnGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


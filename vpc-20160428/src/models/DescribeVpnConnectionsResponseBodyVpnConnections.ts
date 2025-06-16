// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection } from "./DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection";


export class DescribeVpnConnectionsResponseBodyVpnConnections extends $dara.Model {
  vpnConnection?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection[];
  static names(): { [key: string]: string } {
    return {
      vpnConnection: 'VpnConnection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpnConnection: { 'type': 'array', 'itemType': DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection },
    };
  }

  validate() {
    if(Array.isArray(this.vpnConnection)) {
      $dara.Model.validateArray(this.vpnConnection);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


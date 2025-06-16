// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig";


export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfig extends $dara.Model {
  tunnelConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig[];
  static names(): { [key: string]: string } {
    return {
      tunnelConfig: 'TunnelConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelConfig: { 'type': 'array', 'itemType': DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig },
    };
  }

  validate() {
    if(Array.isArray(this.tunnelConfig)) {
      $dara.Model.validateArray(this.tunnelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


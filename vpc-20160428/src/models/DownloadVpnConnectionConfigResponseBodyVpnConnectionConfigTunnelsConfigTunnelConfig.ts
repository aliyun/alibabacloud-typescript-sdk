// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig";
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig";


export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig extends $dara.Model {
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  ikeConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  ipsecConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig;
  /**
   * @remarks
   * The identifier of the tunnel on the data center side.
   * 
   * @example
   * 47.21.XX.XX
   */
  local?: string;
  /**
   * @remarks
   * The identifier of the tunnel on the Alibaba Cloud side.
   * 
   * @example
   * 47.24.XX.XX
   */
  remote?: string;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  static names(): { [key: string]: string } {
    return {
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      local: 'Local',
      remote: 'Remote',
      tunnelId: 'TunnelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ikeConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig,
      ipsecConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig,
      local: 'string',
      remote: 'string',
      tunnelId: 'string',
    };
  }

  validate() {
    if(this.ikeConfig && typeof (this.ikeConfig as any).validate === 'function') {
      (this.ikeConfig as any).validate();
    }
    if(this.ipsecConfig && typeof (this.ipsecConfig as any).validate === 'function') {
      (this.ipsecConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


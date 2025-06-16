// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs";
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig";
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig";
import { DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfig } from "./DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfig";


export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig extends $dara.Model {
  bgpConfigs?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  ikeConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  ipsecConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig;
  /**
   * @remarks
   * The identifier of the customer gateway.
   * 
   * @example
   * 139.196.XX.XX
   */
  local?: string;
  /**
   * @remarks
   * The CIDR block on the data center side.
   * 
   * @example
   * 10.0.0.0/8
   */
  localSubnet?: string;
  /**
   * @remarks
   * The identifier of the VPN gateway.
   * 
   * @example
   * 116.62.XX.XX
   */
  remote?: string;
  /**
   * @remarks
   * The CIDR block on the virtual private cloud (VPC) side.
   * 
   * @example
   * 192.168.0.0/16
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The tunnel configurations of the peer gateway device.
   * 
   * The parameters in **TunnelsConfig** are returned only when the IPsec-VPN connection supports the dual-tunnel mode.
   */
  tunnelsConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfig;
  static names(): { [key: string]: string } {
    return {
      bgpConfigs: 'BgpConfigs',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      local: 'Local',
      localSubnet: 'LocalSubnet',
      remote: 'Remote',
      remoteSubnet: 'RemoteSubnet',
      tunnelsConfig: 'TunnelsConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpConfigs: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs,
      ikeConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig,
      ipsecConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig,
      local: 'string',
      localSubnet: 'string',
      remote: 'string',
      remoteSubnet: 'string',
      tunnelsConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfig,
    };
  }

  validate() {
    if(this.bgpConfigs && typeof (this.bgpConfigs as any).validate === 'function') {
      (this.bgpConfigs as any).validate();
    }
    if(this.ikeConfig && typeof (this.ikeConfig as any).validate === 'function') {
      (this.ikeConfig as any).validate();
    }
    if(this.ipsecConfig && typeof (this.ipsecConfig as any).validate === 'function') {
      (this.ipsecConfig as any).validate();
    }
    if(this.tunnelsConfig && typeof (this.tunnelsConfig as any).validate === 'function') {
      (this.tunnelsConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


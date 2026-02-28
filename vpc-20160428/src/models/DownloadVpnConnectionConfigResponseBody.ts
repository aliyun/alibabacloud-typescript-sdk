// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig extends $dara.Model {
  localAsn?: string;
  localBgpIp?: string;
  peerAsn?: string;
  peerBgpIp?: string;
  tunnelCidr?: string;
  tunnelId?: string;
  static names(): { [key: string]: string } {
    return {
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
      tunnelId: 'TunnelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localAsn: 'string',
      localBgpIp: 'string',
      peerAsn: 'string',
      peerBgpIp: 'string',
      tunnelCidr: 'string',
      tunnelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigs extends $dara.Model {
  bgpConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig[];
  static names(): { [key: string]: string } {
    return {
      bgpConfig: 'BgpConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpConfig: { 'type': 'array', 'itemType': DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigBgpConfigsBgpConfig },
    };
  }

  validate() {
    if(Array.isArray(this.bgpConfig)) {
      $dara.Model.validateArray(this.bgpConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm in the IKE phase.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm in the IKE phase.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime in the IKE phase. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode. Valid values:
   * 
   * *   **main**: This mode offers higher security during negotiations.
   * *   **aggressive**: This mode is faster and has a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH group in the IKE phase.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The IKE version.
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the customer gateway. FQDN and IP formats are supported. The default value is the IP address of the customer gateway.
   * 
   * @example
   * 116.62.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * @example
   * pgw6dy7d1i8i****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the VPN gateway. FQDN and IP formats are supported. The default value is the IP address of the VPN gateway.
   * 
   * @example
   * 139.196.XX.XX
   */
  remoteId?: string;
  static names(): { [key: string]: string } {
    return {
      ikeAuthAlg: 'IkeAuthAlg',
      ikeEncAlg: 'IkeEncAlg',
      ikeLifetime: 'IkeLifetime',
      ikeMode: 'IkeMode',
      ikePfs: 'IkePfs',
      ikeVersion: 'IkeVersion',
      localId: 'LocalId',
      psk: 'Psk',
      remoteId: 'RemoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ikeAuthAlg: 'string',
      ikeEncAlg: 'string',
      ikeLifetime: 'number',
      ikeMode: 'string',
      ikePfs: 'string',
      ikeVersion: 'string',
      localId: 'string',
      psk: 'string',
      remoteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm in the IPsec phase.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm in the IPsec phase.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The lifetime in the IPsec phase. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The DH group in the IPsec phase.
   * 
   * @example
   * group2
   */
  ipsecPfs?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecAuthAlg: 'IpsecAuthAlg',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecLifetime: 'IpsecLifetime',
      ipsecPfs: 'IpsecPfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecAuthAlg: 'string',
      ipsecEncAlg: 'string',
      ipsecLifetime: 'number',
      ipsecPfs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig extends $dara.Model {
  /**
   * @remarks
   * IKE阶段认证算法。
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * IKE阶段加密算法。
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * IKE阶段生存时间。单位：秒。
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * IKE协商模式。
   * 
   * - **main**：主模式，协商过程安全性高。
   * - **aggressive**：野蛮模式，协商快速且协商成功率高。
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * IKE阶段DH分组。
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * IKE协议的版本。
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * 本地IDC侧隧道的标识。
   * 
   * @example
   * 47.21.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * 预共享密钥。
   * 
   * @example
   * pgw6dy7d1i8i****
   */
  psk?: string;
  /**
   * @remarks
   * 阿里云侧隧道的标识。
   * 
   * @example
   * 47.24.XX.XX
   */
  remoteId?: string;
  static names(): { [key: string]: string } {
    return {
      ikeAuthAlg: 'IkeAuthAlg',
      ikeEncAlg: 'IkeEncAlg',
      ikeLifetime: 'IkeLifetime',
      ikeMode: 'IkeMode',
      ikePfs: 'IkePfs',
      ikeVersion: 'IkeVersion',
      localId: 'LocalId',
      psk: 'Psk',
      remoteId: 'RemoteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ikeAuthAlg: 'string',
      ikeEncAlg: 'string',
      ikeLifetime: 'number',
      ikeMode: 'string',
      ikePfs: 'string',
      ikeVersion: 'string',
      localId: 'string',
      psk: 'string',
      remoteId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * IPsec阶段认证算法。
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * IPsec阶段加密算法。
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * IPsec阶段生存时间。单位：秒。
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * IPsec阶段DH分组。
   * 
   * @example
   * group2
   */
  ipsecPfs?: string;
  static names(): { [key: string]: string } {
    return {
      ipsecAuthAlg: 'IpsecAuthAlg',
      ipsecEncAlg: 'IpsecEncAlg',
      ipsecLifetime: 'IpsecLifetime',
      ipsecPfs: 'IpsecPfs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecAuthAlg: 'string',
      ipsecEncAlg: 'string',
      ipsecLifetime: 'number',
      ipsecPfs: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfig extends $dara.Model {
  /**
   * @remarks
   * 第一阶段协商的配置信息。
   */
  ikeConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIkeConfig;
  /**
   * @remarks
   * 第二阶段协商的配置信息。
   */
  ipsecConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfigTunnelsConfigTunnelConfigIpsecConfig;
  /**
   * @remarks
   * 本地IDC侧隧道的标识。
   * 
   * @example
   * 47.21.XX.XX
   */
  local?: string;
  /**
   * @remarks
   * 阿里云侧隧道的标识。
   * 
   * @example
   * 47.24.XX.XX
   */
  remote?: string;
  /**
   * @remarks
   * 隧道ID。
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

export class DownloadVpnConnectionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C68048B-0F70-40DA-B8AE-1B79B5CF62E3
   */
  requestId?: string;
  /**
   * @remarks
   * The configurations of the peer gateway device.
   */
  vpnConnectionConfig?: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpnConnectionConfig: 'VpnConnectionConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpnConnectionConfig: DownloadVpnConnectionConfigResponseBodyVpnConnectionConfig,
    };
  }

  validate() {
    if(this.vpnConnectionConfig && typeof (this.vpnConnectionConfig as any).validate === 'function') {
      (this.vpnConnectionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


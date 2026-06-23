// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTunnelAttributeResponseBodyTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The enabling status of BGP.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableBgp?: boolean;
  /**
   * @remarks
   * The autonomous system number (ASN) of the local end of the tunnel.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the local end of the tunnel.
   * 
   * @example
   * 169.254.11.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The autonomous system number (ASN) of the peer end of the tunnel.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the peer end of the tunnel.
   * 
   * @example
   * 169.254.11.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The CIDR block of the tunnel BGP IP address.
   * 
   * @example
   * 169.254.11.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      enableBgp: 'EnableBgp',
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBgp: 'boolean',
      localAsn: 'number',
      localBgpIp: 'string',
      peerAsn: 'number',
      peerBgpIp: 'string',
      tunnelCidr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyTunnelAttributeResponseBodyTunnelIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The IKE authentication algorithm.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The IKE encryption algorithm.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The IKE lifetime. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode.
   * 
   * - **main**: main mode. This mode offers high security during negotiations.
   * - **aggressive**: aggressive mode. This mode supports fast negotiations and a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH group.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The IKE protocol version.
   * 
   * - **ikev1**
   * - **ikev2**
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for multi-CIDR-block scenarios.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the local end of the tunnel. It supports FQDN and IP formats. Default value: the IP address of the current tunnel.
   * 
   * @example
   * 47.XX.XX.87
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * @example
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the peer end of the tunnel. It supports FQDN and IP formats. Default value: the IP address of the customer gateway instance associated with the tunnel.
   * 
   * @example
   * 47.XX.XX.207
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

export class ModifyTunnelAttributeResponseBodyTunnelIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The IPsec authentication algorithm.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The IPsec encryption algorithm.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The IPsec lifetime. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The DH group.
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

export class ModifyTunnelAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the customer gateway associated with the tunnel.
   * 
   * @example
   * cgw-p0wx48ayhrygitm80****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Indicates whether the Dead Peer Detection (DPD) feature is enabled.
   * 
   * - **false**: disabled.
   * 
   * - **true**: enabled.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled. Valid values:
   * 
   * - **false**: disabled.
   * 
   * - **true**: enabled.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The IP address of the tunnel.
   * 
   * @example
   * 47.XX.XX.87
   */
  internetIp?: string;
  /**
   * @remarks
   * The CA certificate of the peer when an IPsec-VPN connection is created with a Chinese SM VPN gateway.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6F36FF0-9544-3AEE-8673-A4647D50064C
   */
  requestId?: string;
  /**
   * @remarks
   * The role of the tunnel.
   * 
   * - **master**: the active tunnel.
   * - **slave**: the standby tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The status of the tunnel.
   * 
   * - **active**: available.
   * - **updating**: being updated.
   * - **deleting**: being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * The BGP configuration of the tunnel.
   */
  tunnelBgpConfig?: ModifyTunnelAttributeResponseBodyTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-gbyz2e070xzo93****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The IKE phase (Phase 1) configuration of the tunnel.
   */
  tunnelIkeConfig?: ModifyTunnelAttributeResponseBodyTunnelIkeConfig;
  /**
   * @remarks
   * The IPsec phase (Phase 2) configuration of the tunnel.
   */
  tunnelIpsecConfig?: ModifyTunnelAttributeResponseBodyTunnelIpsecConfig;
  /**
   * @remarks
   * The zone of the tunnel.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      remoteCaCertificate: 'RemoteCaCertificate',
      requestId: 'RequestId',
      role: 'Role',
      state: 'State',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      internetIp: 'string',
      remoteCaCertificate: 'string',
      requestId: 'string',
      role: 'string',
      state: 'string',
      tunnelBgpConfig: ModifyTunnelAttributeResponseBodyTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyTunnelAttributeResponseBodyTunnelIkeConfig,
      tunnelIpsecConfig: ModifyTunnelAttributeResponseBodyTunnelIpsecConfig,
      zoneNo: 'string',
    };
  }

  validate() {
    if(this.tunnelBgpConfig && typeof (this.tunnelBgpConfig as any).validate === 'function') {
      (this.tunnelBgpConfig as any).validate();
    }
    if(this.tunnelIkeConfig && typeof (this.tunnelIkeConfig as any).validate === 'function') {
      (this.tunnelIkeConfig as any).validate();
    }
    if(this.tunnelIpsecConfig && typeof (this.tunnelIpsecConfig as any).validate === 'function') {
      (this.tunnelIpsecConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


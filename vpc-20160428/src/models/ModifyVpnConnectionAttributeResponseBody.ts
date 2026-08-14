// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnConnectionAttributeResponseBodyIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm of the IKE phase.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm of the IKE phase.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the IKE phase. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode.
   * 
   * - **main**: Main mode. The negotiation process is highly secure.
   * - **aggressive**: Aggressive mode. Negotiation is fast and has a high success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH group of the IKE phase.
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
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the VPC side. FQDN and IP formats are supported. The default value is the IP address of the selected VPN gateway.
   * 
   * @example
   * 116.64.XX.XX
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
   * The identifier on the on-premises data center side. FQDN and IP formats are supported. The default value is the IP address of the selected customer gateway.
   * 
   * @example
   * 139.18.XX.XX
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

export class ModifyVpnConnectionAttributeResponseBodyIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm of the IPsec phase.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm of the IPsec phase.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the IPsec phase. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The DH group of the IPsec phase.
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

export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig extends $dara.Model {
  localAsn?: number;
  localBgpIp?: string;
  peerAsn?: number;
  peerBgpIp?: string;
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig extends $dara.Model {
  ikeAuthAlg?: string;
  ikeEncAlg?: string;
  ikeLifetime?: number;
  ikeMode?: string;
  ikePfs?: string;
  ikeVersion?: string;
  localId?: string;
  psk?: string;
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

export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig extends $dara.Model {
  ipsecAuthAlg?: string;
  ipsecEncAlg?: string;
  ipsecLifetime?: number;
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

export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions extends $dara.Model {
  customerGatewayId?: string;
  enableDpd?: boolean;
  enableNatTraversal?: boolean;
  internetIp?: string;
  remoteCaCertificate?: string;
  role?: string;
  state?: string;
  tunnelBgpConfig?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig;
  tunnelId?: string;
  tunnelIkeConfig?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig;
  tunnelIpsecConfig?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig;
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      remoteCaCertificate: 'RemoteCaCertificate',
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
      role: 'string',
      state: 'string',
      tunnelBgpConfig: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig,
      tunnelIpsecConfig: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig,
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

export class ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification extends $dara.Model {
  tunnelOptions?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions[];
  static names(): { [key: string]: string } {
    return {
      tunnelOptions: 'TunnelOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelOptions: { 'type': 'array', 'itemType': ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecificationTunnelOptions },
    };
  }

  validate() {
    if(Array.isArray(this.tunnelOptions)) {
      $dara.Model.validateArray(this.tunnelOptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 192.168.1.1
   */
  dip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled for the IPsec-VPN connection.
   * 
   * - **true**: Enabled.
   * 
   * - **false**: Not enabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The retry interval of the health check. Unit: seconds.
   * 
   * @example
   * 3
   */
  interval?: number;
  /**
   * @remarks
   * The number of retry packets sent for the health check.
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 10.1.1.1
   */
  sip?: string;
  static names(): { [key: string]: string } {
    return {
      dip: 'Dip',
      enable: 'Enable',
      interval: 'Interval',
      retry: 'Retry',
      sip: 'Sip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dip: 'string',
      enable: 'string',
      interval: 'number',
      retry: 'number',
      sip: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The enabling status of BGP.
   * 
   * @example
   * true
   */
  enableBgp?: string;
  /**
   * @remarks
   * The autonomous system number on the Alibaba Cloud side.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP address on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.11.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The autonomous system number on the on-premises data center side.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP address on the on-premises data center side.
   * 
   * @example
   * 169.254.11.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The BGP negotiation status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The BGP CIDR block of the IPsec-VPN connection.
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
      status: 'Status',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableBgp: 'string',
      localAsn: 'number',
      localBgpIp: 'string',
      peerAsn: 'number',
      peerBgpIp: 'string',
      status: 'string',
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

export class ModifyVpnConnectionAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the IPsec-VPN connection was created. Unit: milliseconds.
   * 
   * @example
   * 1492753817000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the customer gateway associated with the IPsec-VPN connection.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the IPsec-VPN connection.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection configuration takes effect immediately.
   * 
   * - **true**: The system immediately initiates IPsec protocol negotiation after the configuration is complete.
   * 
   * - **false**: The system initiates IPsec protocol negotiation only when traffic enters.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether Dead Peer Detection (DPD) is enabled for the IPsec-VPN connection.
   * 
   * - **false**: Not enabled.
   * 
   * - **true**: Enabled.
   * 
   * This parameter is returned only for IPsec-VPN connections in single-tunnel mode.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the IPsec-VPN connection. Valid values:
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The BGP status of the tunnel.
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * This parameter is returned only for IPsec-VPN connections in dual-tunnel mode.
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiation.
   */
  ikeConfig?: ModifyVpnConnectionAttributeResponseBodyIkeConfig;
  /**
   * @remarks
   * The configuration of Phase 2 negotiation.
   */
  ipsecConfig?: ModifyVpnConnectionAttributeResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the VPC side.
   * 
   * @example
   * 10.1.1.0/24,10.1.2.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The CIDR block on the on-premises data center side.
   * 
   * @example
   * 10.2.1.0/24,10.2.2.0/24
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7DB79D0C-5F27-4AB5-995B-79BE55102F90
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  tunnelOptionsSpecification?: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification;
  /**
   * @remarks
   * The health check configuration.
   * 
   * Parameters in the **VcoHealthCheck** array are returned only for IPsec-VPN connections in single-tunnel mode.
   */
  vcoHealthCheck?: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck;
  /**
   * @remarks
   * The BGP configuration.
   */
  vpnBgpConfig?: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-bp1bbi27hojx80nck****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway instance.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      effectImmediately: 'EffectImmediately',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      enableTunnelsBgp: 'EnableTunnelsBgp',
      ikeConfig: 'IkeConfig',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      remoteSubnet: 'RemoteSubnet',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnBgpConfig: 'VpnBgpConfig',
      vpnConnectionId: 'VpnConnectionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: ModifyVpnConnectionAttributeResponseBodyIkeConfig,
      ipsecConfig: ModifyVpnConnectionAttributeResponseBodyIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      remoteSubnet: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      tunnelOptionsSpecification: ModifyVpnConnectionAttributeResponseBodyTunnelOptionsSpecification,
      vcoHealthCheck: ModifyVpnConnectionAttributeResponseBodyVcoHealthCheck,
      vpnBgpConfig: ModifyVpnConnectionAttributeResponseBodyVpnBgpConfig,
      vpnConnectionId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    if(this.ikeConfig && typeof (this.ikeConfig as any).validate === 'function') {
      (this.ikeConfig as any).validate();
    }
    if(this.ipsecConfig && typeof (this.ipsecConfig as any).validate === 'function') {
      (this.ipsecConfig as any).validate();
    }
    if(this.tunnelOptionsSpecification && typeof (this.tunnelOptionsSpecification as any).validate === 'function') {
      (this.tunnelOptionsSpecification as any).validate();
    }
    if(this.vcoHealthCheck && typeof (this.vcoHealthCheck as any).validate === 'function') {
      (this.vcoHealthCheck as any).validate();
    }
    if(this.vpnBgpConfig && typeof (this.vpnBgpConfig as any).validate === 'function') {
      (this.vpnBgpConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


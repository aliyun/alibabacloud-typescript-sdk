// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpnAttachmentAttributeResponseBodyIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime that is determined by Phase 1 negotiations. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode.
   * 
   * *   **main:** This mode offers higher security during negotiations.
   * *   **aggressive**: This mode is faster with a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The DH key exchange algorithm that is used in Phase 1 negotiations.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol.
   * 
   * *   **ikev1**
   * *   **ikev2**
   * 
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios with multiple CIDR blocks.
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the IPsec-VPN connection on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.1
   */
  localId?: string;
  /**
   * @remarks
   * Enter a pre-shared key that is used for identity authentication between Alibaba Cloud and the data center.
   * 
   * >  The pre-shared key of the IPsec-VPN connection must be the same as the authentication key of the on-premises data center. Otherwise, connections between the on-premises data center and Alibaba Cloud cannot be established.
   * 
   * @example
   * 1234***
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the IPsec-VPN connection on the data center side.
   * 
   * @example
   * 47.XX.XX.2
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

export class ModifyVpnAttachmentAttributeResponseBodyIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm that is used in Phase 2 negotiations.
   * 
   * @example
   * md5
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm that is used in Phase 2 negotiations.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The SA lifetime that is determined by Phase 2 negotiations. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The DH key exchange algorithm that is used in Phase 2 negotiations.
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

export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The ASN on the Alibaba Cloud side.
   * 
   * @example
   * 65530
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the tunnel on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The ASN of the tunnel peer.
   * 
   * @example
   * 65531
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the tunnel peer.
   * 
   * @example
   * 169.254.10.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The BGP CIDR block of the tunnel.
   * 
   * @example
   * 169.254.10.0/30
   */
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

export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig extends $dara.Model {
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
   * The negotiation mode of IKE. Valid values:
   * 
   * *   **main:** This mode offers higher security during negotiations.
   * *   **aggressive**: This mode is faster with a higher success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman (DH) group in the IKE phase.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The version of the IKE protocol.
   * 
   * @example
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the tunnel on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.1
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
   * The peer identifier.
   * 
   * @example
   * 47.XX.XX.2
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

export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig extends $dara.Model {
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

export class ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification extends $dara.Model {
  /**
   * @remarks
   * The ID of the customer gateway that is associated with the tunnel.
   * 
   * @example
   * cgw-p0w2jemrcj5u61un8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Whether the DPD feature is enabled for the tunnel.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether traversal feature is enabled for the tunnel. Valid values:
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The IP address on the Alibaba Cloud side.
   * 
   * @example
   * 47.XX.XX.66
   */
  internetIp?: string;
  /**
   * @remarks
   * The tunnel role. Valid values:
   * 
   * *   **master**: The tunnel is an active tunnel.
   * *   **slave**: The tunnel is a standby tunnel.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The status of the tunnel. Valid values:
   * 
   * *   **active**: The tunnel is active.
   * *   **updating**: The tunnel is being updated.
   * *   **deleting:** The tunnel is being deleted.
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * BGP configuration.
   */
  tunnelBgpConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig;
  /**
   * @remarks
   * The tunnel ID.
   * 
   * @example
   * tun-0jod7plwf2a0o9lvu****
   */
  tunnelId?: string;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  tunnelIkeConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig;
  /**
   * @remarks
   * The order in which the tunnel was created.
   * 
   * *   **1**: Tunnel 1.
   * *   **2**: Tunnel 2.
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  tunnelIpsecConfig?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig;
  static names(): { [key: string]: string } {
    return {
      customerGatewayId: 'CustomerGatewayId',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      internetIp: 'InternetIp',
      role: 'Role',
      state: 'State',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIndex: 'TunnelIndex',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      internetIp: 'string',
      role: 'string',
      state: 'string',
      tunnelBgpConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecificationTunnelIpsecConfig,
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

export class ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The destination IP address that is used for health checks.
   * 
   * @example
   * 192.168.1.1
   */
  dip?: string;
  /**
   * @remarks
   * Indicates whether the health check feature is enabled for the IPsec-VPN connection. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The interval between two consecutive health check retries. Unit: seconds.
   * 
   * @example
   * 3
   */
  interval?: number;
  /**
   * @remarks
   * Indicates whether advertised routes are withdrawn when the health check fails. Valid values:
   * 
   * *   **revoke_route**: Advertised routes are withdrawn.
   * *   **reserve_route**: Advertised routes are not withdrawn.
   * 
   * @example
   * revoke_route
   */
  policy?: string;
  /**
   * @remarks
   * The maximum number of health check retries.
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * The source IP address that is used for health checks.
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
      policy: 'Policy',
      retry: 'Retry',
      sip: 'Sip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dip: 'string',
      enable: 'string',
      interval: 'number',
      policy: 'string',
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

export class ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether BGP is enabled for the IPsec-VPN connection. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enableBgp?: string;
  /**
   * @remarks
   * The ASN on the Alibaba Cloud side.
   * 
   * @example
   * 45104
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.11.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The ASN on the data center side.
   * 
   * @example
   * 65535
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the data center side.
   * 
   * @example
   * 169.254.11.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The negotiation state of BGP. Valid values:
   * 
   * *   **success**: normal
   * *   **false**: abnormal
   * 
   * @example
   * false
   */
  status?: string;
  /**
   * @remarks
   * The CIDR block of the IPsec tunnel.
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

export class ModifyVpnAttachmentAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the transit router associated with the IPsec-VPN connection belongs.
   * 
   * @example
   * cen-c2r3m3zxkumoqz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * The type of the resource that is associated with the IPsec-VPN connection. Valid values:
   * 
   * *   **CEN**: The IPsec-VPN connection is associated with a transit router.
   * *   **VPNGW**: The IPsec-VPN connection is associated with a VPN gateway.
   * *   **NO_ASSOCIATED**: The IPsec-VPN connection is not associated with any resource.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * The timestamp generated when the IPsec-VPN connection was established. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1658201810000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the customer gateway associated with the IPsec-VPN connection.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
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
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether IPsec negotiations immediately start after the configuration takes effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether the DPD feature is enabled for the IPsec-VPN connection.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Specifies whether to enable NAT traversal for the IPsec-VPN connection.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only for single-tunnel IPsec-VPN connections.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Border Gateway Protocol (BGP) for tunnels.
   * 
   * *   **true**: The feature is enabled.
   * *   **false**: The feature is disabled.
   * 
   * This parameter is returned only by dual-tunnel IPsec-VPN connections.
   * 
   * @example
   * false
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiations.
   * 
   * **IkeConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ikeConfig?: ModifyVpnAttachmentAttributeResponseBodyIkeConfig;
  /**
   * @remarks
   * The configuration of Phase 2 negotiations.
   * 
   * **IpsecConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  ipsecConfig?: ModifyVpnAttachmentAttributeResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the Alibaba Cloud side that communicates with the on-premises data center is required, such as CIDR blocks of VPCs.
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
   * The network type of the IPsec-VPN connection. Valid values:
   * 
   * *   **public**: an encrypted connection over the Internet
   * *   **private**: an encrypted connection over private networks
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The CIDR block of the on-premises data center that communicates with Alibaba Cloud is required.
   * 
   * @example
   * 10.1.3.0/24,10.1.4.0/24
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35822A84-867F-3936-A2E6-A4C4E3ED11C0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth specification of the IPsec-VPN connection.
   * 
   * A value of **M** in the response indicates **Mbit/s**.
   * 
   * @example
   * 1000M
   */
  spec?: string;
  /**
   * @remarks
   * The state of the IPsec-VPN connection. Valid values:
   * 
   * *   **ike_sa_not_established**: Phase 1 negotiations failed.
   * *   **ike_sa_established**: Phase 1 negotiations succeeded.
   * *   **ipsec_sa_not_established**: Phase 2 negotiations failed.
   * *   **ipsec_sa_established**: Phase 2 negotiations succeeded.
   * 
   * @example
   * ike_sa_not_established
   */
  status?: string;
  /**
   * @remarks
   * The tunnel configurations of the IPsec-VPN connection.
   * 
   * **TunnelOptionsSpecification** parameters are returned only for dual-tunnel IPsec-VPN connections.
   */
  tunnelOptionsSpecification?: ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification[];
  /**
   * @remarks
   * The health check configurations of the IPsec-VPN connection.
   * 
   * **VcoHealthCheck** parameters are returned only for single-tunnel IPsec-VPC connections.
   */
  vcoHealthCheck?: ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck;
  /**
   * @remarks
   * The BGP configurations of the IPsec-VPN connection.
   * 
   * **VpnBgpConfig** parameters are returned only for single-tunnel IPsec-VPN connections.
   */
  vpnBgpConfig?: ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig;
  /**
   * @remarks
   * The ID of the IPsec-VPN connection.
   * 
   * @example
   * vco-p0w5112fgnl2ihlmf****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway that is associated with the IPsec-VPN connection.
   * 
   * **vpn-not-exist**: The IPsec-VPN connection is not associated with a VPN Gateway.
   * 
   * @example
   * vpn-p0wa1c1018pmeb6cu****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      attachInstanceId: 'AttachInstanceId',
      attachType: 'AttachType',
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
      networkType: 'NetworkType',
      remoteSubnet: 'RemoteSubnet',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      status: 'Status',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnBgpConfig: 'VpnBgpConfig',
      vpnConnectionId: 'VpnConnectionId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceId: 'string',
      attachType: 'string',
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: ModifyVpnAttachmentAttributeResponseBodyIkeConfig,
      ipsecConfig: ModifyVpnAttachmentAttributeResponseBodyIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      networkType: 'string',
      remoteSubnet: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      status: 'string',
      tunnelOptionsSpecification: { 'type': 'array', 'itemType': ModifyVpnAttachmentAttributeResponseBodyTunnelOptionsSpecification },
      vcoHealthCheck: ModifyVpnAttachmentAttributeResponseBodyVcoHealthCheck,
      vpnBgpConfig: ModifyVpnAttachmentAttributeResponseBodyVpnBgpConfig,
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
    if(Array.isArray(this.tunnelOptionsSpecification)) {
      $dara.Model.validateArray(this.tunnelOptionsSpecification);
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


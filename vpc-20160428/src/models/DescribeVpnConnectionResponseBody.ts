// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionResponseBodyIkeConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm at the IKE stage.
   * 
   * @example
   * sha1
   */
  ikeAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm at the IKE stage.
   * 
   * @example
   * aes
   */
  ikeEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the IKE SA. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode. Valid values:
   * - **main**: Main mode. The negotiation process is highly secure.
   * - **aggressive**: Aggressive mode. The negotiation process is fast and has a high success rate.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman (DH) group at the IKE stage.
   * 
   * @example
   * group2
   */
  ikePfs?: string;
  /**
   * @remarks
   * The IKE version. Valid values:
   * - **ikev1**
   * - **ikev2**
   * Compared with IKEv1, IKEv2 simplifies the SA negotiation process and provides better support for scenarios where multiple CIDR blocks are used.
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier on the Alibaba Cloud side of the IPsec-VPN connection.
   * 
   * @example
   * 116.28.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * @example
   * pgw6dy****
   */
  psk?: string;
  /**
   * @remarks
   * The identifier of the peer on the data center side of the IPsec-VPN connection.
   * 
   * @example
   * 139.34.XX.XX
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

export class DescribeVpnConnectionResponseBodyIpsecConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication algorithm at the IPsec stage.
   * 
   * @example
   * sha1
   */
  ipsecAuthAlg?: string;
  /**
   * @remarks
   * The encryption algorithm at the IPsec stage.
   * 
   * @example
   * aes
   */
  ipsecEncAlg?: string;
  /**
   * @remarks
   * The lifetime of the IPsec SA. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ipsecLifetime?: number;
  /**
   * @remarks
   * The DH group at the IPsec stage.
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

export class DescribeVpnConnectionResponseBodyTagsTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyTags extends $dara.Model {
  tag?: DescribeVpnConnectionResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnConnectionResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig extends $dara.Model {
  bgpStatus?: string;
  localAsn?: string;
  localBgpIp?: string;
  peerAsn?: string;
  peerBgpIp?: string;
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      bgpStatus: 'BgpStatus',
      localAsn: 'LocalAsn',
      localBgpIp: 'LocalBgpIp',
      peerAsn: 'PeerAsn',
      peerBgpIp: 'PeerBgpIp',
      tunnelCidr: 'TunnelCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpStatus: 'string',
      localAsn: 'string',
      localBgpIp: 'string',
      peerAsn: 'string',
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

export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig extends $dara.Model {
  ikeAuthAlg?: string;
  ikeEncAlg?: string;
  ikeLifetime?: string;
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
      ikeLifetime: 'string',
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

export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig extends $dara.Model {
  ipsecAuthAlg?: string;
  ipsecEncAlg?: string;
  ipsecLifetime?: string;
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
      ipsecLifetime: 'string',
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

export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions extends $dara.Model {
  customerGatewayId?: string;
  enableDpd?: string;
  enableNatTraversal?: string;
  internetIp?: string;
  remoteCaCertificate?: string;
  role?: string;
  state?: string;
  status?: string;
  tunnelBgpConfig?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig;
  tunnelId?: string;
  tunnelIkeConfig?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig;
  tunnelIndex?: number;
  tunnelIpsecConfig?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig;
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
      status: 'Status',
      tunnelBgpConfig: 'TunnelBgpConfig',
      tunnelId: 'TunnelId',
      tunnelIkeConfig: 'TunnelIkeConfig',
      tunnelIndex: 'TunnelIndex',
      tunnelIpsecConfig: 'TunnelIpsecConfig',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGatewayId: 'string',
      enableDpd: 'string',
      enableNatTraversal: 'string',
      internetIp: 'string',
      remoteCaCertificate: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tunnelBgpConfig: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig,
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

export class DescribeVpnConnectionResponseBodyTunnelOptionsSpecification extends $dara.Model {
  tunnelOptions?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions[];
  static names(): { [key: string]: string } {
    return {
      tunnelOptions: 'TunnelOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelOptions: { 'type': 'array', 'itemType': DescribeVpnConnectionResponseBodyTunnelOptionsSpecificationTunnelOptions },
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

export class DescribeVpnConnectionResponseBodyVcoHealthCheck extends $dara.Model {
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 10.0.0.1
   */
  dip?: string;
  /**
   * @remarks
   * Indicates whether health checks are enabled for the IPsec-VPN connection. Valid values:
   * - **false**: Health checks are disabled.
   * - **true**: Health checks are enabled.
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * The retry interval for health checks. Unit: seconds.
   * 
   * @example
   * 3
   */
  interval?: number;
  /**
   * @remarks
   * Indicates whether to revoke published routes when a health check fails. Valid values:
   * - **revoke_route**: Revoke routes.
   * - **reserve_route**: Do not revoke routes.
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
   * The source IP address.
   * 
   * @example
   * 192.168.1.1
   */
  sip?: string;
  /**
   * @remarks
   * The health check status. Valid values:
   * - **failed**: Abnormal.
   * - **success**: Normal.
   * 
   * @example
   * failed
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      dip: 'Dip',
      enable: 'Enable',
      interval: 'Interval',
      policy: 'Policy',
      retry: 'Retry',
      sip: 'Sip',
      status: 'Status',
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
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpnConnectionResponseBodyVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * The authentication key of the BGP routing protocol.
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The enabling status of the BGP routing protocol. Valid values:
   * - **true**: Enabled.
   * - **false**: Disabled.
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
   * 65531
   */
  localAsn?: number;
  /**
   * @remarks
   * The BGP IP address on the Alibaba Cloud side.
   * 
   * @example
   * 169.254.11.2
   */
  localBgpIp?: string;
  /**
   * @remarks
   * The autonomous system number (ASN) of the peer.
   * 
   * @example
   * 65530
   */
  peerAsn?: number;
  /**
   * @remarks
   * The BGP IP address of the peer.
   * 
   * @example
   * 169.254.11.1
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * The negotiation status of the BGP routing protocol. Valid values:
   * - **success**: Normal.
   * - **failed**: Abnormal.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The BGP CIDR block of the IPsec-VPN connection. The CIDR block must be a subnet of 169.254.0.0/16 with a subnet mask length of 30 bits.
   * 
   * @example
   * 169.254.11.0/30
   */
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
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
      authKey: 'string',
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

export class DescribeVpnConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance to which the transit router instance belongs.
   * 
   * @example
   * cen-lxxpbpalc776qz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * The type of resource associated with the IPsec-VPN connection. Valid values:
   * - **CEN**: The IPsec-VPN connection is associated with a transit router of a Cloud Enterprise Network (CEN) instance.
   * - **NO_ASSOCIATED**: The IPsec-VPN connection is not associated with any resource.
   * - **VPNGW**: The IPsec-VPN connection is associated with a VPN gateway.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * The timestamp when the IPsec-VPN connection was created. Unit: milliseconds.
   * The timestamp is in UNIX timestamp format, which indicates the total number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
   * 
   * @example
   * 1492753817000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection is associated with a cross-account transit router. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  crossAccountAuthorized?: boolean;
  /**
   * @remarks
   * The ID of the customer gateway associated with the IPsec-VPN connection.
   * 
   * @example
   * cgw-bp1mvj4g9kogwwcxk****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * Indicates whether the configuration of the IPsec-VPN connection takes effect immediately. Valid values:
   * - **true**: Yes. A reconnection is triggered after the configuration is changed.
   * - **false**: No. A reconnection is triggered when traffic is detected.
   * 
   * @example
   * true
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether dead peer detection (DPD) is enabled for the IPsec-VPN connection. Valid values:
   * - **false**: DPD is disabled.
   * - **true**: DPD is enabled.
   * After DPD is enabled, the initiator of the IPsec-VPN connection sends DPD packets to check whether the peer device is alive. If no valid response is received within the specified time, the peer device is considered disconnected. The IPsec-VPN connection deletes the ISAKMP SA and the corresponding IPsec SA, and the secure tunnel is also deleted.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the IPsec-VPN connection. Valid values:
   * - **true**: NAT traversal is enabled.
   * - **false**: NAT traversal is disabled.
   * After NAT traversal is enabled, the verification of the UDP port number is skipped during the IKE negotiation process, and NAT gateway devices in the VPN tunnel can be discovered.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The enabling status of BGP for the tunnel.
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiations.
   */
  ikeConfig?: DescribeVpnConnectionResponseBodyIkeConfig;
  /**
   * @remarks
   * The gateway IP address of the IPsec-VPN connection.
   * 
   * @example
   * 47.XX.XX.162
   */
  internetIp?: string;
  /**
   * @remarks
   * The configuration of Phase 2 negotiations.
   */
  ipsecConfig?: DescribeVpnConnectionResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the Alibaba Cloud side of the IPsec-VPN connection.
   * If multiple CIDR blocks are specified, they are separated by commas (,).
   * 
   * @example
   * 10.0.0.0/8
   */
  localSubnet?: string;
  /**
   * @remarks
   * The name of the IPsec-VPN connection.
   * 
   * @example
   * ipsec1
   */
  name?: string;
  /**
   * @remarks
   * The network type of the IPsec-VPN connection. Valid values:
   * - **public**: Internet. The IPsec-VPN connection establishes an encrypted communication channel over the Internet.
   * - **private**: Private network. The IPsec-VPN connection establishes an encrypted communication channel over a private network.
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * The CA certificate of the peer.
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW****
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * The CIDR block on the data center side of the IPsec-VPN connection.
   * If multiple CIDR blocks are specified, they are separated by commas (,).
   * 
   * @example
   * 192.168.0.0/16
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2310D45-BCF6-4E2E-9082-B4503844BA4C
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec-VPN connection belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group information.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The bandwidth specification of the IPsec-VPN connection. Unit: **Mbit/s**.
   * 
   * @example
   * 1000M
   */
  spec?: string;
  /**
   * @remarks
   * The association status between the IPsec-VPN connection and the transit router instance. Valid values:
   * - **active**: The IPsec-VPN connection is associated with a VPN gateway instance and is in a normal state.
   * - **init**: The IPsec-VPN connection is not associated with any resource, and the IPsec-VPN connection is being initialized.
   * - **attaching**: The IPsec-VPN connection is being associated with the transit router instance.
   * - **attached**: The IPsec-VPN connection is associated with the transit router instance.
   * - **detaching**: The IPsec-VPN connection is being disassociated from the transit router instance.
   * - **financialLocked**: The instance is locked due to overdue payments.
   * - **provisioning**: The resource is being prepared.
   * - **updating**: The IPsec-VPN connection is being updated.
   * - **upgrading**: The IPsec-VPN connection is being upgraded.
   * - **deleted**: The IPsec-VPN connection is deleted.
   * 
   * @example
   * attached
   */
  state?: string;
  /**
   * @remarks
   * The status of the IPsec-VPN connection. Valid values:
   * - **ike_sa_not_established**: Phase 1 negotiation failed.
   * - **ike_sa_established**: Phase 1 negotiation succeeded.
   * - **ipsec_sa_not_established**: Phase 2 negotiation failed.
   * - **ipsec_sa_established**: Phase 2 negotiation succeeded.
   * 
   * @example
   * ike_sa_not_established
   */
  status?: string;
  tags?: DescribeVpnConnectionResponseBodyTags;
  /**
   * @remarks
   * The ID of the transit router instance associated with the IPsec-VPN connection.
   * 
   * @example
   * tr-p0we2edef9qr44a85****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * nametest
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
   * - Standard (default): The standard type. The default bandwidth is 1 Gbps.
   * - Large: The large type. The default bandwidth is 3 Gbps.
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
  tunnelOptionsSpecification?: DescribeVpnConnectionResponseBodyTunnelOptionsSpecification;
  /**
   * @remarks
   * The health check information of the IPsec-VPN connection.
   */
  vcoHealthCheck?: DescribeVpnConnectionResponseBodyVcoHealthCheck;
  /**
   * @remarks
   * The BGP routing protocol configuration of the IPsec-VPN connection.
   */
  vpnBgpConfig?: DescribeVpnConnectionResponseBodyVpnBgpConfig;
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
  /**
   * @remarks
   * The ID of the zone where the IPsec-VPN connection is deployed.
   * You can call the [DescribeZones](https://help.aliyun.com/document_detail/36064.html) operation to query the mapping between zone IDs and zones.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneNo?: string;
  static names(): { [key: string]: string } {
    return {
      attachInstanceId: 'AttachInstanceId',
      attachType: 'AttachType',
      createTime: 'CreateTime',
      crossAccountAuthorized: 'CrossAccountAuthorized',
      customerGatewayId: 'CustomerGatewayId',
      effectImmediately: 'EffectImmediately',
      enableDpd: 'EnableDpd',
      enableNatTraversal: 'EnableNatTraversal',
      enableTunnelsBgp: 'EnableTunnelsBgp',
      ikeConfig: 'IkeConfig',
      internetIp: 'InternetIp',
      ipsecConfig: 'IpsecConfig',
      localSubnet: 'LocalSubnet',
      name: 'Name',
      networkType: 'NetworkType',
      remoteCaCertificate: 'RemoteCaCertificate',
      remoteSubnet: 'RemoteSubnet',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      state: 'State',
      status: 'Status',
      tags: 'Tags',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      tunnelBandwidth: 'TunnelBandwidth',
      tunnelOptionsSpecification: 'TunnelOptionsSpecification',
      vcoHealthCheck: 'VcoHealthCheck',
      vpnBgpConfig: 'VpnBgpConfig',
      vpnConnectionId: 'VpnConnectionId',
      vpnGatewayId: 'VpnGatewayId',
      zoneNo: 'ZoneNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachInstanceId: 'string',
      attachType: 'string',
      createTime: 'number',
      crossAccountAuthorized: 'boolean',
      customerGatewayId: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: DescribeVpnConnectionResponseBodyIkeConfig,
      internetIp: 'string',
      ipsecConfig: DescribeVpnConnectionResponseBodyIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      networkType: 'string',
      remoteCaCertificate: 'string',
      remoteSubnet: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      state: 'string',
      status: 'string',
      tags: DescribeVpnConnectionResponseBodyTags,
      transitRouterId: 'string',
      transitRouterName: 'string',
      tunnelBandwidth: 'string',
      tunnelOptionsSpecification: DescribeVpnConnectionResponseBodyTunnelOptionsSpecification,
      vcoHealthCheck: DescribeVpnConnectionResponseBodyVcoHealthCheck,
      vpnBgpConfig: DescribeVpnConnectionResponseBodyVpnBgpConfig,
      vpnConnectionId: 'string',
      vpnGatewayId: 'string',
      zoneNo: 'string',
    };
  }

  validate() {
    if(this.ikeConfig && typeof (this.ikeConfig as any).validate === 'function') {
      (this.ikeConfig as any).validate();
    }
    if(this.ipsecConfig && typeof (this.ipsecConfig as any).validate === 'function') {
      (this.ipsecConfig as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionResponseBodyIkeConfig extends $dara.Model {
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
   * The IKE phase lifetime. Unit: seconds.
   * 
   * @example
   * 86400
   */
  ikeLifetime?: number;
  /**
   * @remarks
   * The IKE negotiation mode.
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
   * The identifier on the on-premises data center side of the IPsec-VPN connection.
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
   * The IPsec phase lifetime. Unit: seconds.
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
   * Indicates whether health check is enabled for the IPsec-VPN connection.
   * 
   * - **false**: Not enabled.
   * 
   * - **true**: Enabled.
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
   * Indicates whether published routes are withdrawn when the health check fails.
   * 
   * @example
   * revoke_route
   */
  policy?: string;
  /**
   * @remarks
   * The number of health check retries.
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
   * The health check status.
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
   * The enabling status of the BGP routing protocol.
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
   * The autonomous system number of the peer.
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
   * The negotiation status of the BGP routing protocol.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The BGP CIDR block of the IPsec-VPN connection. The CIDR block is a subnet with a subnet mask of 30 bits in mask length within 169.254.0.0/16.
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
   * The instance ID of the Cloud Enterprise Network (CEN) instance to which the transit router instance belongs.
   * 
   * @example
   * cen-lxxpbpalc776qz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * The type of resource attached to the IPsec-VPN connection.
   * 
   * - **CEN**: The IPsec-VPN connection is attached to a transit router of a Cloud Enterprise Network (CEN) instance.
   * - **NO_ASSOCIATED**: The IPsec-VPN connection is not attached to any resource.
   * - **VPNGW**: The IPsec-VPN connection is attached to a VPN gateway instance.
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * The timestamp when the IPsec-VPN connection was created. Unit: milliseconds.
   * 
   * The timestamp is in the UNIX timestamp format, which represents the total number of milliseconds that have elapsed since January 1, 1970, 00:00:00 (UTC) to the time when the IPsec-VPN connection was created.
   * 
   * @example
   * 1492753817000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether the IPsec-VPN connection is bound to a transit router instance under a different account.
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
   * Indicates whether the IPsec-VPN connection configurations take effect immediately.
   * 
   * - **true**: The configurations take effect immediately. A reconnection is triggered after the configuration change is complete.
   * 
   * - **false**: The configurations do not take effect immediately. A reconnection is triggered when traffic is detected.
   * 
   * @example
   * true
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * Indicates whether Dead Peer Detection (DPD) is enabled for the IPsec-VPN connection.
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * Indicates whether NAT traversal is enabled for the IPsec-VPN connection.
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * The enabling status of tunnel BGP.
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * The configuration of Phase 1 negotiation.
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
   * The configuration of Phase 2 negotiation.
   */
  ipsecConfig?: DescribeVpnConnectionResponseBodyIpsecConfig;
  /**
   * @remarks
   * The CIDR block on the Alibaba Cloud side of the IPsec-VPN connection.
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
   * The network type of the IPsec-VPN connection.
   * 
   * - **public**: public network. The IPsec-VPN connection establishes an encrypted communication channel over the Internet.
   * - **private**: private network. The IPsec-VPN connection establishes an encrypted communication channel over a private network.
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
   * The CIDR block on the on-premises data center side.
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
   * The bandwidth specification of the IPsec-VPN connection. Unit: **Mbps**.
   * 
   * @example
   * 1000M
   */
  spec?: string;
  /**
   * @remarks
   * The binding status between the IPsec-VPN connection and the transit router instance.
   * 
   * @example
   * attached
   */
  state?: string;
  /**
   * @remarks
   * The status of the IPsec-VPN connection.
   * 
   * - **ike_sa_not_established**: Phase 1 negotiation failed.
   * 
   * - **ike_sa_established**: Phase 1 negotiation succeeded.
   * 
   * - **ipsec_sa_not_established**: Phase 2 negotiation failed.
   * 
   * - **ipsec_sa_established**: Phase 2 negotiation succeeded.
   * 
   * @example
   * ike_sa_not_established
   */
  status?: string;
  tags?: DescribeVpnConnectionResponseBodyTags;
  /**
   * @remarks
   * The instance ID of the transit router instance attached to the IPsec-VPN connection.
   * 
   * @example
   * tr-p0we2edef9qr44a85****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router instance.
   * 
   * @example
   * nametest
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The bandwidth specification of a single VPN tunnel. Valid values:
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
   * The instance ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  /**
   * @remarks
   * The zone ID where the IPsec-VPN connection is deployed.
   * 
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTagTag extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag extends $dara.Model {
  tag?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTagTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTagTag },
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptions extends $dara.Model {
  customerGatewayId?: string;
  enableDpd?: string;
  enableNatTraversal?: string;
  internetIp?: string;
  remoteCaCertificate?: string;
  role?: string;
  state?: string;
  status?: string;
  tunnelBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig;
  tunnelId?: string;
  tunnelIkeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig;
  tunnelIndex?: number;
  tunnelIpsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig;
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
      tunnelBgpConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig,
      tunnelId: 'string',
      tunnelIkeConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig,
      tunnelIndex: 'number',
      tunnelIpsecConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig,
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification extends $dara.Model {
  tunnelOptions?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptions[];
  static names(): { [key: string]: string } {
    return {
      tunnelOptions: 'TunnelOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tunnelOptions: { 'type': 'array', 'itemType': DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptions },
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck extends $dara.Model {
  dip?: string;
  enable?: string;
  interval?: number;
  policy?: string;
  retry?: number;
  sip?: string;
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig extends $dara.Model {
  authKey?: string;
  localAsn?: number;
  localBgpIp?: string;
  peerAsn?: number;
  peerBgpIp?: string;
  status?: string;
  tunnelCidr?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnection extends $dara.Model {
  attachInstanceId?: string;
  attachType?: string;
  createTime?: number;
  crossAccountAuthorized?: boolean;
  customerGatewayId?: string;
  effectImmediately?: boolean;
  enableDpd?: boolean;
  enableNatTraversal?: boolean;
  enableTunnelsBgp?: boolean;
  ikeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig;
  internetIp?: string;
  ipsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig;
  localSubnet?: string;
  name?: string;
  networkType?: string;
  remoteCaCertificate?: string;
  remoteSubnet?: string;
  resourceGroupId?: string;
  spec?: string;
  state?: string;
  status?: string;
  tag?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag;
  transitRouterId?: string;
  transitRouterName?: string;
  tunnelBandwidth?: string;
  tunnelOptionsSpecification?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification;
  vcoHealthCheck?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck;
  vpnBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig;
  vpnConnectionId?: string;
  vpnGatewayId?: string;
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
      resourceGroupId: 'ResourceGroupId',
      spec: 'Spec',
      state: 'State',
      status: 'Status',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      tunnelBandwidth: 'TunnelBandwidth',
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
      crossAccountAuthorized: 'boolean',
      customerGatewayId: 'string',
      effectImmediately: 'boolean',
      enableDpd: 'boolean',
      enableNatTraversal: 'boolean',
      enableTunnelsBgp: 'boolean',
      ikeConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig,
      internetIp: 'string',
      ipsecConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig,
      localSubnet: 'string',
      name: 'string',
      networkType: 'string',
      remoteCaCertificate: 'string',
      remoteSubnet: 'string',
      resourceGroupId: 'string',
      spec: 'string',
      state: 'string',
      status: 'string',
      tag: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag,
      transitRouterId: 'string',
      transitRouterName: 'string',
      tunnelBandwidth: 'string',
      tunnelOptionsSpecification: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification,
      vcoHealthCheck: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck,
      vpnBgpConfig: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig,
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
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
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

export class DescribeVpnConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for paging queries.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 238752DC-0693-49BE-9C85-711D5691D3E5
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  vpnConnections?: DescribeVpnConnectionsResponseBodyVpnConnections;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpnConnections: 'VpnConnections',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpnConnections: DescribeVpnConnectionsResponseBodyVpnConnections,
    };
  }

  validate() {
    if(this.vpnConnections && typeof (this.vpnConnections as any).validate === 'function') {
      (this.vpnConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


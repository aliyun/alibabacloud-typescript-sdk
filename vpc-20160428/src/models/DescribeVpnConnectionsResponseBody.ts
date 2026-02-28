// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig extends $dara.Model {
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
   * IKE阶段协商模式。
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
   * IKE协议版本。
   * 
   * - **ikev1**
   * - **ikev2**
   * 
   * 相对于IKEv1版本，IKEv2版本简化了SA的协商过程并且对于多网段的场景提供了更好的支持。
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * IPsec连接对端本地数据中心侧的标识。
   * 
   * @example
   * 116.64.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * 预共享密钥。
   * 
   * @example
   * pgw6dy7****
   */
  psk?: string;
  /**
   * @remarks
   * IPsec连接阿里云侧的标识。
   * 
   * @example
   * 139.17.XX.XX
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig extends $dara.Model {
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTagTag extends $dara.Model {
  /**
   * @remarks
   * 标签键。
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * 标签值。
   * 
   * @example
   * TagValue
   */
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
  /**
   * @remarks
   * BGP的协商状态。
   * 
   * - **success**：正常。
   * - **failed**：异常。
   * 
   * @example
   * success
   */
  bgpStatus?: string;
  /**
   * @remarks
   * 隧道本端（阿里云侧）的自治系统号。
   * 
   * @example
   * 65530
   */
  localAsn?: string;
  /**
   * @remarks
   * 隧道本端（阿里云侧）的BGP地址。
   * 
   * @example
   * 169.254.10.1
   */
  localBgpIp?: string;
  /**
   * @remarks
   * 隧道对端的自治系统号。
   * 
   * @example
   * 65531
   */
  peerAsn?: string;
  /**
   * @remarks
   * 隧道对端的BGP地址。
   * 
   * @example
   * 169.254.10.2
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * 隧道的BGP网段。
   * 
   * @example
   * 169.254.10.0/30
   */
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
  ikeLifetime?: string;
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
   * IKE协议版本。
   * 
   * @example
   * ikev1
   */
  ikeVersion?: string;
  /**
   * @remarks
   * 隧道本端（阿里云侧）的标识。
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
   * 123456****
   */
  psk?: string;
  /**
   * @remarks
   * 隧道对端的标识。
   * 
   * @example
   * 47.42.XX.XX
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
  ipsecLifetime?: string;
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
  /**
   * @remarks
   * 隧道关联的用户网关ID。
   * 
   * @example
   * cgw-p0wy363lucf1uyae8****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * 隧道是否已开启DPD（对等体存活检测）功能。
   * - **false**：未开启。
   * - **true**：已开启。
   * 
   * @example
   * true
   */
  enableDpd?: string;
  /**
   * @remarks
   * 隧道是否已开启NAT穿越功能。
   * 
   * - **false**：未开启。
   * - **true**：已开启。
   * 
   * @example
   * true
   */
  enableNatTraversal?: string;
  /**
   * @remarks
   * 隧道的IP地址。
   * 
   * @example
   * 47.21.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * 隧道对端的CA证书。
   * 
   * 仅VPN网关实例的类型为国密型时才会返回当前参数。
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * 隧道的角色。
   * 
   * - **master**：表示当前隧道为主隧道。
   * - **slave**：表示当前隧道为备隧道。
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * 隧道的状态。
   * 
   * - **active**：状态正常。
   * - **updating**：更新中。
   * - **deleting**：删除中。
   * 
   * @example
   * active
   */
  state?: string;
  /**
   * @remarks
   * IPsec连接的状态。
   * 
   * - **ike_sa_not_established**：第一阶段协商失败。
   * 
   * - **ike_sa_established**：第一阶段协商成功。
   * 
   * - **ipsec_sa_not_established**：第二阶段协商失败。
   * 
   * - **ipsec_sa_established**：第二阶段协商成功。
   * 
   * @example
   * ipsec_sa_established
   */
  status?: string;
  /**
   * @remarks
   * 隧道的BGP配置信息。
   */
  tunnelBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelBgpConfig;
  /**
   * @remarks
   * 隧道ID。
   * 
   * @example
   * tun-opsqc4d97wni27****
   */
  tunnelId?: string;
  /**
   * @remarks
   * 第一阶段协商的配置。
   */
  tunnelIkeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIkeConfig;
  /**
   * @remarks
   * 隧道的创建顺序。
   * - **1**：第一条隧道。
   * - **2**：第二条隧道。
   * 
   * > 仅IPsec连接绑定转发路由器时会返回该参数。
   * 
   * @example
   * 1
   */
  tunnelIndex?: number;
  /**
   * @remarks
   * 第二阶段协商的配置。
   */
  tunnelIpsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecificationTunnelOptionsTunnelIpsecConfig;
  /**
   * @remarks
   * 隧道部署的可用区。
   * 
   * @example
   * ap-southeast-5a
   */
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
  /**
   * @remarks
   * 目的IP地址。
   * 
   * @example
   * 192.168.0.1
   */
  dip?: string;
  /**
   * @remarks
   * 健康检查的开启状态。
   * 
   * - **true**：已开启。
   * 
   * - **false**：未开启。
   * 
   * @example
   * true
   */
  enable?: string;
  /**
   * @remarks
   * 健康检查的时间间隔。单位：秒。
   * 
   * @example
   * 2
   */
  interval?: number;
  /**
   * @remarks
   * 健康检查失败时是否撤销已发布的路由。
   * 
   * - **revoke_route**：撤销路由。
   * - **reserve_route**：不撤销路由。
   * 
   * @example
   * revoke_route
   */
  policy?: string;
  /**
   * @remarks
   * 健康检查的重试发包次数。
   * 
   * @example
   * 3
   */
  retry?: number;
  /**
   * @remarks
   * 源IP地址。
   * 
   * @example
   * 192.168.0.50
   */
  sip?: string;
  /**
   * @remarks
   * 健康检查状态。
   * 
   * - **success**：正常。
   * - **failed**：异常。
   * 
   * @example
   * success
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

export class DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig extends $dara.Model {
  /**
   * @remarks
   * BGP路由协议的认证密钥。
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * 阿里云侧自治系统号。
   * 
   * @example
   * 65531
   */
  localAsn?: number;
  /**
   * @remarks
   * 阿里云侧BGP地址。
   * 
   * @example
   * 169.254.10.2
   */
  localBgpIp?: string;
  /**
   * @remarks
   * 对端自治系统号。
   * 
   * @example
   * 65530
   */
  peerAsn?: number;
  /**
   * @remarks
   * 对端BGP地址。
   * 
   * @example
   * 169.254.10.1
   */
  peerBgpIp?: string;
  /**
   * @remarks
   * BGP路由协议的协商状态。
   * 
   * - **success**：正常。
   * 
   * - **false**：异常。
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * IPsec连接BGP网段。该网段是一个在169.254.0.0/16内的子网掩码长度为30的网段。
   * 
   * @example
   * 169.254.10.0/30
   */
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
  /**
   * @remarks
   * 转发路由器实例所属的云企业网实例ID。
   * 
   * @example
   * cen-lxxpbpalc776qz****
   */
  attachInstanceId?: string;
  /**
   * @remarks
   * IPsec连接绑定的资源类型。
   * 
   * - **CEN**：表示IPsec连接已绑定云企业网实例下的转发路由器实例。
   * - **NO_ASSOCIATED**：表示IPsec连接未绑定任何资源。
   * - **VPNGW**：表示IPsec连接绑定了VPN网关实例。
   * 
   * @example
   * CEN
   */
  attachType?: string;
  /**
   * @remarks
   * 创建IPsec连接的时间戳。单位：毫秒。
   * 
   * 时间戳的格式采用Unix时间戳，表示从格林威治时间1970年01月01日00时00分00秒至创建IPsec连接时的总时长。
   * 
   * @example
   * 1492753817000
   */
  createTime?: number;
  /**
   * @remarks
   * IPsec连接是否绑定了跨账号的转发路由器实例。
   * 
   * - **true**：是。
   * - **false**：否。
   * 
   * @example
   * false
   */
  crossAccountAuthorized?: boolean;
  /**
   * @remarks
   * IPsec连接关联的用户网关的实例ID。
   * 
   * @example
   * cgw-bp1mvj4g9kogw****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * IPsec连接的配置是否立即生效。
   * 
   * - **true**：是，配置变更完成后触发重连。
   * - **false**：否，有流量时触发重连。
   * 
   * @example
   * true
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * IPsec连接是否已开启DPD（对等体存活检测）功能。
   * 
   * - **true**：开启DPD功能。
   * 
   *     IPsec发起端会发送DPD报文用来检测对端的设备是否存活，如果在设定时间内未收到正确回应则认为对端已经断线，IPsec将删除ISAKMP SA和相应的IPsec SA，安全隧道同样也会被删除。
   * 
   * - **false**：不开启DPD功能，IPsec发起端不会发送DPD探测报文。
   * 
   * @example
   * true
   */
  enableDpd?: boolean;
  /**
   * @remarks
   * IPsec连接是否已开启NAT穿越功能。
   * 
   * - **true**：开启NAT穿越功能。
   * 
   *    开启后，IKE协商过程会删除对UDP端口号的验证过程，同时实现对VPN隧道中NAT网关设备的发现功能。
   * 
   * - **false**：不开启NAT穿越功能。
   * 
   * @example
   * true
   */
  enableNatTraversal?: boolean;
  /**
   * @remarks
   * 隧道BGP的开启状态。
   * 
   * - **true**：已开启。
   * - **false**：未开启。
   * 
   * @example
   * true
   */
  enableTunnelsBgp?: boolean;
  /**
   * @remarks
   * 第一阶段协商的配置。
   */
  ikeConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIkeConfig;
  /**
   * @remarks
   * IPsec连接的网关IP地址。
   * 
   * > 仅IPsec连接绑定转发路由器实例时会返回当前参数。
   * 
   * @example
   * 10.XX.XX.10
   */
  internetIp?: string;
  /**
   * @remarks
   * 第二阶段协商的配置。
   */
  ipsecConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionIpsecConfig;
  /**
   * @remarks
   * IPsec连接阿里云侧的网段。
   * 
   * 在多个网段的情况下，网段之间使用半角逗号（,）分隔。
   * 
   * @example
   * 192.168.0.0/16,172.17.0.0/16
   */
  localSubnet?: string;
  /**
   * @remarks
   * IPsec连接的名称。
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * IPsec连接的网络类型。
   * 
   * - **public**：公网，表示IPsec连接通过公网建立加密通信通道。
   * - **private**：私网，表示IPsec连接通过私网建立加密通信通道。
   * 
   * @example
   * public
   */
  networkType?: string;
  /**
   * @remarks
   * 对端的CA证书。
   * 
   * @example
   * -----BEGIN CERTIFICATE----- MIIB7zCCAZW**** -----END CERTIFICATE-----
   */
  remoteCaCertificate?: string;
  /**
   * @remarks
   * 本地数据中心侧的网段。
   * 
   * 在多个网段的情况下，网段之间使用半角逗号（,）分隔。
   * 
   * @example
   * 10.0.0.0/8,172.16.0.0/16
   */
  remoteSubnet?: string;
  /**
   * @remarks
   * IPsec连接所属的资源组ID。
   * 
   * 您可以调用[ListResourceGroups](https://help.aliyun.com/document_detail/158855.html)接口查询资源组信息。
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * IPsec连接的带宽规格。单位：**Mbps**。
   * 
   * @example
   * 1000M
   */
  spec?: string;
  /**
   * @remarks
   * IPsec连接与转发路由器实例的绑定状态。
   * 
   * - **active**：IPsec连接已与VPN网关实例绑定，状态正常。
   * - **init**：IPsec连接未绑定任何资源，IPsec连接初始化。
   * - **attaching**：IPsec连接与转发路由器实例绑定中。
   * - **attached**：IPsec连接已与转发路由器实例绑定。
   * - **detaching**：IPsec连接与转发路由器实例解绑中。
   * - **financialLocked**：欠费锁定。
   * - **provisioning**：资源准备中。
   * - **updating**：更新中。
   * - **upgrading**：升级中。
   * - **deleted**：已删除。
   * 
   * @example
   * attached
   */
  state?: string;
  /**
   * @remarks
   * IPsec连接的状态。
   * 
   * - **ike_sa_not_established**：第一阶段协商失败。
   * 
   * - **ike_sa_established**：第一阶段协商成功。
   * 
   * - **ipsec_sa_not_established**：第二阶段协商失败。
   * 
   * - **ipsec_sa_established**：第二阶段协商成功。
   * 
   * @example
   * ipsec_sa_established
   */
  status?: string;
  /**
   * @remarks
   * IPsec连接绑定的标签列表。
   */
  tag?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTag;
  /**
   * @remarks
   * IPsec连接绑定的转发路由器实例ID。
   * 
   * @example
   * tr-p0we2edef9qr44a85****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * 转发路由器实例的名称。
   * 
   * @example
   * nametest
   */
  transitRouterName?: string;
  /**
   * @remarks
   * 用于说明VPN单条隧道的带宽规格，取值：
   * Standard（默认值）：标准型，默认带宽1Gbps
   * Large（大型）：大型，默认带宽3Gbps
   * 
   * @example
   * Standard
   */
  tunnelBandwidth?: string;
  /**
   * @remarks
   * IPsec连接的隧道配置信息。
   * 
   * 仅查询双隧道模式的IPsec连接会返回**TunnelOptionsSpecification**数组下的参数。
   */
  tunnelOptionsSpecification?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionTunnelOptionsSpecification;
  /**
   * @remarks
   * IPsec连接的健康检查配置。
   */
  vcoHealthCheck?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVcoHealthCheck;
  /**
   * @remarks
   * IPsec连接BGP路由协议的配置。
   */
  vpnBgpConfig?: DescribeVpnConnectionsResponseBodyVpnConnectionsVpnConnectionVpnBgpConfig;
  /**
   * @remarks
   * IPsec连接的ID。
   * 
   * @example
   * vco-bp10lz7aejumd****
   */
  vpnConnectionId?: string;
  /**
   * @remarks
   * VPN网关的实例ID。
   * 
   * @example
   * vpn-bp1q8bgx4xnkm****
   */
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
   * The number of entries returned per page.
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


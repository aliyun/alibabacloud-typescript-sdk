// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpsecServersResponseBodyIpsecServersIkeConfig extends $dara.Model {
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
   * The IKE negotiation mode. Valid values:
   * 
   * **main**: main mode. Negotiations are highly secure.
   * 
   * @example
   * main
   */
  ikeMode?: string;
  /**
   * @remarks
   * The Diffie-Hellman key exchange algorithm.
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
   * ikev2
   */
  ikeVersion?: string;
  /**
   * @remarks
   * The identifier of the IPsec server. FQDN and IP address formats are supported. The default value is the public IP address of the selected VPN gateway.
   * 
   * @example
   * 116.64.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The identifier of the peer. FQDN and IP address formats are supported. The default value is empty.
   * 
   * @example
   * 139.67.XX.XX
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

export class ListIpsecServersResponseBodyIpsecServersIpsecConfig extends $dara.Model {
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
   * The Diffie-Hellman key exchange algorithm.
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

export class ListIpsecServersResponseBodyIpsecServers extends $dara.Model {
  /**
   * @remarks
   * The client CIDR block, which is the CIDR block from which IP addresses are assigned to the virtual network interface controllers (NICs) of clients.
   * 
   * @example
   * 10.0.0.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * The time when the IPsec server was created.
   * 
   * T is the delimiter. Z indicates UTC.
   * 
   * @example
   * 2018-12-03T10:11:55Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the current IPsec tunnel is deleted and negotiations are reinitiated.
   * 
   * - **true**: Negotiations are reinitiated after the configuration is complete.
   * 
   * - **false**: Negotiations are reinitiated when traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * The instance ID of IDaaS.
   * 
   * @example
   * idaas-cn-hangzhou-****
   */
  IDaaSInstanceId?: string;
  /**
   * @remarks
   * The configurations of Phase 1 negotiations.
   */
  ikeConfig?: ListIpsecServersResponseBodyIpsecServersIkeConfig;
  /**
   * @remarks
   * The public IP address of the VPN gateway.
   * 
   * @example
   * 47.22.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The configurations of Phase 2 negotiations.
   */
  ipsecConfig?: ListIpsecServersResponseBodyIpsecServersIpsecConfig;
  /**
   * @remarks
   * The ID of the IPsec server.
   * 
   * @example
   * iss-bp1bo3xuvcxo7ixll****
   */
  ipsecServerId?: string;
  /**
   * @remarks
   * The name of the IPsec server.
   * 
   * @example
   * test
   */
  ipsecServerName?: string;
  /**
   * @remarks
   * The local CIDR block, which is the VPC-side CIDR block that needs to communicate with the client CIDR block.
   * 
   * @example
   * 192.168.0.0/16,172.17.0.0/16
   */
  localSubnet?: string;
  /**
   * @remarks
   * The maximum number of SSL-VPN connections supported by the VPN gateway.
   * > SSL-VPN and the IPsec server share SSL-VPN connections. For example, if the maximum number of SSL-VPN connections is 5 and three SSL clients are already connected to SSL-VPN, only two more clients can connect to the IPsec server.
   * 
   * @example
   * 5
   */
  maxConnections?: number;
  /**
   * @remarks
   * Indicates whether two-factor authentication is enabled.
   * 
   * - **true**: Two-factor authentication is enabled.
   * 
   * - **false**: Two-factor authentication is disabled.
   * 
   * @example
   * true
   */
  multiFactorAuthEnabled?: boolean;
  /**
   * @remarks
   * The number of clients that are connected to the IPsec server.
   * 
   * @example
   * 1
   */
  onlineClientCount?: number;
  /**
   * @remarks
   * The pre-shared key.
   * 
   * @example
   * pgw6dy7d****
   */
  psk?: string;
  /**
   * @remarks
   * Indicates whether pre-shared key authentication is enabled. The value is **true**, which indicates that pre-shared key authentication is enabled.
   * 
   * @example
   * true
   */
  pskEnabled?: boolean;
  /**
   * @remarks
   * The region ID of the IPsec server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec server belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource group information.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1q8bgx4xnkm2ogj****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      clientIpPool: 'ClientIpPool',
      creationTime: 'CreationTime',
      effectImmediately: 'EffectImmediately',
      IDaaSInstanceId: 'IDaaSInstanceId',
      ikeConfig: 'IkeConfig',
      internetIp: 'InternetIp',
      ipsecConfig: 'IpsecConfig',
      ipsecServerId: 'IpsecServerId',
      ipsecServerName: 'IpsecServerName',
      localSubnet: 'LocalSubnet',
      maxConnections: 'MaxConnections',
      multiFactorAuthEnabled: 'MultiFactorAuthEnabled',
      onlineClientCount: 'OnlineClientCount',
      psk: 'Psk',
      pskEnabled: 'PskEnabled',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIpPool: 'string',
      creationTime: 'string',
      effectImmediately: 'boolean',
      IDaaSInstanceId: 'string',
      ikeConfig: ListIpsecServersResponseBodyIpsecServersIkeConfig,
      internetIp: 'string',
      ipsecConfig: ListIpsecServersResponseBodyIpsecServersIpsecConfig,
      ipsecServerId: 'string',
      ipsecServerName: 'string',
      localSubnet: 'string',
      maxConnections: 'number',
      multiFactorAuthEnabled: 'boolean',
      onlineClientCount: 'number',
      psk: 'string',
      pskEnabled: 'boolean',
      regionId: 'string',
      resourceGroupId: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListIpsecServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IPsec servers.
   */
  ipsecServers?: ListIpsecServersResponseBodyIpsecServers[];
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If **NextToken** is empty, no subsequent query is to be sent.
   * 
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipsecServers: 'IpsecServers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecServers: { 'type': 'array', 'itemType': ListIpsecServersResponseBodyIpsecServers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipsecServers)) {
      $dara.Model.validateArray(this.ipsecServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


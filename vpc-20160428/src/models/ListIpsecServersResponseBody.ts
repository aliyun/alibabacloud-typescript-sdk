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
   * **main**: This mode offers higher security during negotiations.
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
   * The ID of the IPsec server. The default value is the public IP address of the VPN gateway. Both FQDNs and IP addresses are supported.
   * 
   * @example
   * 116.64.XX.XX
   */
  localId?: string;
  /**
   * @remarks
   * The identifier of the customer gateway. Both fully qualified domain names (FQDNs) and IP addresses are supported. By default, this parameter is empty.
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
   * The client CIDR block. It refers to the CIDR block that is allocated to the virtual interface of the client.
   * 
   * @example
   * 10.0.0.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * The time when the IPsec server was created.
   * 
   * T is used as a delimiter. Z indicates that the time is in UTC.
   * 
   * @example
   * 2018-12-03T10:11:55Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the current IPsec tunnel is deleted and negotiations are reinitiated. Valid values:
   * 
   * *   **true**: immediately initiates negotiations after the configuration is completed.
   * *   **false**: initiates negotiations when inbound traffic is detected.
   * 
   * @example
   * false
   */
  effectImmediately?: boolean;
  /**
   * @remarks
   * The ID of the IDaaS instance.
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
   * The IPsec server ID.
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
   * The local CIDR blocks, which refer to the CIDR blocks on the virtual private cloud (VPC) side.
   * 
   * @example
   * 192.168.0.0/16,172.17.0.0/16
   */
  localSubnet?: string;
  /**
   * @remarks
   * The number of SSL-VPN connections supported by the VPN gateway.
   * 
   * >  The number of SSL-VPN connections specified in this parameter includes both SSL-VPN and IPsec-VPN connections. For example, you have five SSL-VPN connections and three SSL clients occupy three SSL-VPN connections. In this case, two clients can connect to the IPsec server.
   * 
   * @example
   * 5
   */
  maxConnections?: number;
  /**
   * @remarks
   * Indicates whether two-factor authentication is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**: The feature is disabled.
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
   * Indicates whether pre-shared key authentication is enabled. Only **true** may be returned, which indicates that pre-shared key authentication is enabled.
   * 
   * @example
   * true
   */
  pskEnabled?: boolean;
  /**
   * @remarks
   * The ID of the region where the IPsec server is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPsec server belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the resource group information.
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
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
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


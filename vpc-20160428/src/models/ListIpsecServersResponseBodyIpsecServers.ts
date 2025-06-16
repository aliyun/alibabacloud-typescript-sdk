// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpsecServersResponseBodyIpsecServersIkeConfig } from "./ListIpsecServersResponseBodyIpsecServersIkeConfig";
import { ListIpsecServersResponseBodyIpsecServersIpsecConfig } from "./ListIpsecServersResponseBodyIpsecServersIpsecConfig";


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


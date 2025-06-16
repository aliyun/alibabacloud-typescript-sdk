// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer extends $dara.Model {
  /**
   * @remarks
   * The encryption algorithm.
   * 
   * @example
   * AES-128-CBC
   */
  cipher?: string;
  /**
   * @remarks
   * The client CIDR block.
   * 
   * @example
   * 10.10.1.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * Indicates whether data compression is enabled. Valid values:
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * false
   */
  compress?: boolean;
  /**
   * @remarks
   * The total number of current connections.
   * 
   * @example
   * 0
   */
  connections?: number;
  /**
   * @remarks
   * The timestamp generated when the SSL-VPN server was created.
   * 
   * @example
   * 1613800884000
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether two-factor authentication is enabled.
   * 
   * *   **true**
   * *   **false** (default)
   * 
   * @example
   * true
   */
  enableMultiFactorAuth?: boolean;
  /**
   * @remarks
   * The ID of the IDaaS application.
   * 
   * @example
   * app_my6g4qmvnwxzj2f****
   */
  IDaaSApplicationId?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * @example
   * idaas-cn-hangzhou-****
   */
  IDaaSInstanceId?: string;
  /**
   * @remarks
   * The version of the IDaaS EIAM instance.
   * 
   * *   This parameter is returned only if the SSL server is associated with an IDaaS EIAM 2.0 instance. Only **EIAM 2.0** is returned.
   * *   If the SSL server is associated with an IDaaS EIAM 1.0 instance, no value is returned.
   * 
   * @example
   * EIAM 2.0
   */
  IDaaSInstanceVersion?: string;
  /**
   * @remarks
   * The region ID of the IDaaS EIAM instance.
   * 
   * @example
   * cn-hangzhou
   */
  IDaaSRegionId?: string;
  /**
   * @remarks
   * The public IP address of the VPN gateway.
   * 
   * @example
   * 47.5.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The local CIDR block.
   * 
   * @example
   * 192.168.0.0/24
   */
  localSubnet?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 5
   */
  maxConnections?: number;
  /**
   * @remarks
   * The name of the SSL server.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The port that is used by the SSL-VPN server.
   * 
   * @example
   * 1194
   */
  port?: number;
  /**
   * @remarks
   * The protocol that is used by the SSL server.
   * 
   * @example
   * UDP
   */
  proto?: string;
  /**
   * @remarks
   * The region ID of the SSL server.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID of the SSL server.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the SSL server.
   * 
   * @example
   * vss-bp15j3du13gq1dgey****
   */
  sslVpnServerId?: string;
  /**
   * @remarks
   * The ID of the VPN gateway.
   * 
   * @example
   * vpn-bp1on0xae9d771ggi****
   */
  vpnGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      cipher: 'Cipher',
      clientIpPool: 'ClientIpPool',
      compress: 'Compress',
      connections: 'Connections',
      createTime: 'CreateTime',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      IDaaSApplicationId: 'IDaaSApplicationId',
      IDaaSInstanceId: 'IDaaSInstanceId',
      IDaaSInstanceVersion: 'IDaaSInstanceVersion',
      IDaaSRegionId: 'IDaaSRegionId',
      internetIp: 'InternetIp',
      localSubnet: 'LocalSubnet',
      maxConnections: 'MaxConnections',
      name: 'Name',
      port: 'Port',
      proto: 'Proto',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      sslVpnServerId: 'SslVpnServerId',
      vpnGatewayId: 'VpnGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipher: 'string',
      clientIpPool: 'string',
      compress: 'boolean',
      connections: 'number',
      createTime: 'number',
      enableMultiFactorAuth: 'boolean',
      IDaaSApplicationId: 'string',
      IDaaSInstanceId: 'string',
      IDaaSInstanceVersion: 'string',
      IDaaSRegionId: 'string',
      internetIp: 'string',
      localSubnet: 'string',
      maxConnections: 'number',
      name: 'string',
      port: 'number',
      proto: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      sslVpnServerId: 'string',
      vpnGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


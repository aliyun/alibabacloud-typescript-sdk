// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySslVpnServerResponseBody extends $dara.Model {
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
   * 10.30.30.0/24
   */
  clientIpPool?: string;
  /**
   * @remarks
   * Indicates whether data compression is enabled.
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
   * The time when the SSL server was created.
   * 
   * @example
   * 1492753580000
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
   * false
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
   * The public IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The local CIDR block.
   * 
   * @example
   * 10.20.20.0/24
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
   * The port that is used by the SSL server.
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
   * The ID of the region where the SSL server is created.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF11D6F6-E35A-41C3-9B20-6FC8A901FE65
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the SSL server belongs.
   * 
   * The SSL server and the VPN gateway associated with the SSL server belong to the same resource group. You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
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
   * vss-bp18q7hzj6largv4v****
   */
  sslVpnServerId?: string;
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
      cipher: 'Cipher',
      clientIpPool: 'ClientIpPool',
      compress: 'Compress',
      connections: 'Connections',
      createTime: 'CreateTime',
      enableMultiFactorAuth: 'EnableMultiFactorAuth',
      IDaaSApplicationId: 'IDaaSApplicationId',
      IDaaSInstanceId: 'IDaaSInstanceId',
      IDaaSInstanceVersion: 'IDaaSInstanceVersion',
      internetIp: 'InternetIp',
      localSubnet: 'LocalSubnet',
      maxConnections: 'MaxConnections',
      name: 'Name',
      port: 'Port',
      proto: 'Proto',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      internetIp: 'string',
      localSubnet: 'string',
      maxConnections: 'number',
      name: 'string',
      port: 'number',
      proto: 'string',
      regionId: 'string',
      requestId: 'string',
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


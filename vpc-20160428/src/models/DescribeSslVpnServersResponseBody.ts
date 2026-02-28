// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer extends $dara.Model {
  cipher?: string;
  clientIpPool?: string;
  compress?: boolean;
  connections?: number;
  createTime?: number;
  enableMultiFactorAuth?: boolean;
  IDaaSApplicationId?: string;
  IDaaSInstanceId?: string;
  IDaaSInstanceVersion?: string;
  IDaaSRegionId?: string;
  internetIp?: string;
  localSubnet?: string;
  maxConnections?: number;
  name?: string;
  port?: number;
  proto?: string;
  regionId?: string;
  resourceGroupId?: string;
  sslVpnServerId?: string;
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

export class DescribeSslVpnServersResponseBodySslVpnServers extends $dara.Model {
  sslVpnServer?: DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer[];
  static names(): { [key: string]: string } {
    return {
      sslVpnServer: 'SslVpnServer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sslVpnServer: { 'type': 'array', 'itemType': DescribeSslVpnServersResponseBodySslVpnServersSslVpnServer },
    };
  }

  validate() {
    if(Array.isArray(this.sslVpnServer)) {
      $dara.Model.validateArray(this.sslVpnServer);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSslVpnServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * D350187B-EA41-4577-950B-95434C8302E1
   */
  requestId?: string;
  sslVpnServers?: DescribeSslVpnServersResponseBodySslVpnServers;
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      sslVpnServers: 'SslVpnServers',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      sslVpnServers: DescribeSslVpnServersResponseBodySslVpnServers,
      totalCount: 'number',
    };
  }

  validate() {
    if(this.sslVpnServers && typeof (this.sslVpnServers as any).validate === 'function') {
      (this.sslVpnServers as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


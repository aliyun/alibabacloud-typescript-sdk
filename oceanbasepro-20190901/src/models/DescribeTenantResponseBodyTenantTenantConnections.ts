// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTenantResponseBodyTenantTenantConnections extends $dara.Model {
  /**
   * @remarks
   * The type of the address.
   * 
   * - MASTER: the primary address, which supports both data read and write.
   * - READONLY: a read-only address.
   * - READWRITE: a read/write splitting address.
   * - CLOGSERVICE: a clog service address.
   * 
   * @example
   * READONLY
   */
  addressType?: string;
  /**
   * @remarks
   * The logical zones of the endpoints.
   */
  connectionLogicalZones?: string[];
  /**
   * @remarks
   * The type of the replica corresponding to the tenant connection.
   * 
   * @example
   * FULL
   */
  connectionReplicaType?: string;
  /**
   * @remarks
   * The list of zones corresponding to the tenant connection.
   * 
   * @example
   * ["cn-hangzhou-i", "cn-hangzhou-j"]
   */
  connectionZones?: string[];
  /**
   * @remarks
   * Specifies whether to enable transaction splitting.
   * 
   * @example
   * false
   */
  enableTransactionSplit?: boolean;
  /**
   * @remarks
   * The Internet address for accessing the tenant.
   * 
   * @example
   * t32a7ru5u****mo.oceanbase.aliyuncs.com
   */
  internetAddress?: string;
  /**
   * @remarks
   * The status of the Internet address for accessing the tenant. Valid values:   
   * - CLOSED: The address is disabled.   
   * - ALLOCATING_INTERNET_ADDRESS: An address is being applied for.   
   * - PENDING_OFFLINE_INTERNET_ADDRESS: The address is being disabled.   
   * - ONLINE: The address is in service.
   * 
   * @example
   * CLOSED
   */
  internetAddressStatus?: string;
  /**
   * @remarks
   * The upper limit of the maximum number of public connections.
   * 
   * @example
   * 4000
   */
  internetMaxConnectionLimit?: number;
  /**
   * @remarks
   * The current value set for the maximum number of public connections.
   * 
   * @example
   * 2500
   */
  internetMaxConnectionNum?: number;
  /**
   * @remarks
   * The Internet port for accessing the tenant.
   * 
   * @example
   * 3306
   */
  internetPort?: number;
  /**
   * @remarks
   * The port for direct loads of public connections.
   * 
   * @example
   * 3307
   */
  internetRpcPort?: number;
  internetSqlPort?: number;
  /**
   * @remarks
   * The intranet address for accessing the tenant.
   * 
   * @example
   * t4nunwxr0****.oceanbase.aliyuncs.com
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The primary zone corresponding to the address for accessing the tenant.
   * 
   * @example
   * cn-hangzhou-b
   */
  intranetAddressMasterZoneId?: string;
  /**
   * @remarks
   * The standby zone corresponding to the address for accessing the tenant.
   * 
   * @example
   * cn-hangzhou-g
   */
  intranetAddressSlaveZoneId?: string;
  /**
   * @remarks
   * The status of the intranet address for accessing the tenant.  
   * The value ONLINE indicates that the address is in service.
   * 
   * @example
   * ONLINE
   */
  intranetAddressStatus?: string;
  /**
   * @remarks
   * The intranet port for accessing the tenant.
   * 
   * @example
   * 2983
   */
  intranetPort?: number;
  /**
   * @remarks
   * The port for direct loads of private connections.
   * 
   * @example
   * 3307
   */
  intranetRpcPort?: number;
  /**
   * @remarks
   * The port of private SQL connections.
   * 
   * @example
   * 3306
   */
  intranetSqlPort?: number;
  /**
   * @remarks
   * The current value set for the maximum number of private connections.
   * 
   * @example
   * 1000
   */
  maxConnectionLimit?: number;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 5000
   */
  maxConnectionNum?: number;
  /**
   * @remarks
   * The ODP version.
   * 
   * @example
   * 4.3.1-xxxxxxxxx
   */
  odpVersion?: string;
  /**
   * @remarks
   * The degree of parallelism (DOP).
   * 
   * @example
   * 1
   */
  parallelQueryDegree?: number;
  /**
   * @remarks
   * The ID of the OceanBase Database Proxy (ODP) cluster.
   * 
   * @example
   * proxy-xxxxxxx
   */
  proxyClusterId?: string;
  /**
   * @remarks
   * The ID of the tenant endpoint.
   * 
   * @example
   * obe-4tw51gp7****
   */
  tenantEndpointId?: string;
  /**
   * @remarks
   * Specifies whether to enable transaction splitting.
   * 
   * @example
   * false
   */
  transactionSplit?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1i7b94u2et716yl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-bp1qiail1asmfe23t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      connectionLogicalZones: 'ConnectionLogicalZones',
      connectionReplicaType: 'ConnectionReplicaType',
      connectionZones: 'ConnectionZones',
      enableTransactionSplit: 'EnableTransactionSplit',
      internetAddress: 'InternetAddress',
      internetAddressStatus: 'InternetAddressStatus',
      internetMaxConnectionLimit: 'InternetMaxConnectionLimit',
      internetMaxConnectionNum: 'InternetMaxConnectionNum',
      internetPort: 'InternetPort',
      internetRpcPort: 'InternetRpcPort',
      internetSqlPort: 'InternetSqlPort',
      intranetAddress: 'IntranetAddress',
      intranetAddressMasterZoneId: 'IntranetAddressMasterZoneId',
      intranetAddressSlaveZoneId: 'IntranetAddressSlaveZoneId',
      intranetAddressStatus: 'IntranetAddressStatus',
      intranetPort: 'IntranetPort',
      intranetRpcPort: 'IntranetRpcPort',
      intranetSqlPort: 'IntranetSqlPort',
      maxConnectionLimit: 'MaxConnectionLimit',
      maxConnectionNum: 'MaxConnectionNum',
      odpVersion: 'OdpVersion',
      parallelQueryDegree: 'ParallelQueryDegree',
      proxyClusterId: 'ProxyClusterId',
      tenantEndpointId: 'TenantEndpointId',
      transactionSplit: 'TransactionSplit',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      connectionLogicalZones: { 'type': 'array', 'itemType': 'string' },
      connectionReplicaType: 'string',
      connectionZones: { 'type': 'array', 'itemType': 'string' },
      enableTransactionSplit: 'boolean',
      internetAddress: 'string',
      internetAddressStatus: 'string',
      internetMaxConnectionLimit: 'number',
      internetMaxConnectionNum: 'number',
      internetPort: 'number',
      internetRpcPort: 'number',
      internetSqlPort: 'number',
      intranetAddress: 'string',
      intranetAddressMasterZoneId: 'string',
      intranetAddressSlaveZoneId: 'string',
      intranetAddressStatus: 'string',
      intranetPort: 'number',
      intranetRpcPort: 'number',
      intranetSqlPort: 'number',
      maxConnectionLimit: 'number',
      maxConnectionNum: 'number',
      odpVersion: 'string',
      parallelQueryDegree: 'number',
      proxyClusterId: 'string',
      tenantEndpointId: 'string',
      transactionSplit: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.connectionLogicalZones)) {
      $dara.Model.validateArray(this.connectionLogicalZones);
    }
    if(Array.isArray(this.connectionZones)) {
      $dara.Model.validateArray(this.connectionZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


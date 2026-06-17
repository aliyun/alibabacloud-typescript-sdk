// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * pc-**************.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.***.***.10
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * - **Public**: An endpoint for the Internet.
   * 
   * - **Private**: A private endpoint.
   * 
   * - **Inner**: A private endpoint in a classic network.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Indicates whether Secure Sockets Layer (SSL) encryption is enabled. Valid values:
   * 
   * - **Enabled**: SSL encryption is enabled.
   * 
   * - **Disabled**: SSL encryption is disabled.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the virtual switch.
   * 
   * @example
   * vsw-**********
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      SSLEnabled: 'SSLEnabled',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      SSLEnabled: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointList extends $dara.Model {
  /**
   * @remarks
   * The details of the connection strings.
   */
  addressItems?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems[];
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * pe-***********
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Cluster**: The default cluster endpoint.
   * 
   * - **Primary**: The primary endpoint.
   * 
   * - **Custom**: A custom cluster endpoint.
   * 
   * @example
   * Cluster
   */
  endpointType?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * - ReadWrite: Read and write (automatic read/write splitting).
   * 
   * - ReadOnly (Default): Read-only.
   * 
   * @example
   * ReadOnly
   */
  readWriteMode?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
      readWriteMode: 'ReadWriteMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems },
      DBEndpointId: 'string',
      endpointType: 'string',
      readWriteMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems extends $dara.Model {
  /**
   * @remarks
   * The connection string.
   * 
   * @example
   * rm-***********.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 172.***.***.173
   */
  IPAddress?: string;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * - **Public**: An endpoint for the Internet.
   * 
   * - **Private**: A private endpoint.
   * 
   * - **Inner**: A private endpoint in a classic network.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **Enabled**: SSL encryption is enabled.
   * 
   * - **Disabled**: SSL encryption is disabled.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-************
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-**************
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      IPAddress: 'IPAddress',
      netType: 'NetType',
      port: 'Port',
      SSLEnabled: 'SSLEnabled',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      IPAddress: 'string',
      netType: 'string',
      port: 'string',
      SSLEnabled: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBodyRdsEndpointList extends $dara.Model {
  /**
   * @remarks
   * The details of the connection strings.
   */
  addressItems?: DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems[];
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ReadOnly
   * Maxscale
   * Primary
   */
  custinsType?: string;
  /**
   * @remarks
   * The endpoint ID.
   * 
   * @example
   * rm-************-normal
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Normal**: A regular endpoint.
   * 
   * - **ReadWriteSplitting**: A read/write splitting endpoint.
   * 
   * @example
   * Normal
   */
  endpointType?: string;
  static names(): { [key: string]: string } {
    return {
      addressItems: 'AddressItems',
      custinsType: 'CustinsType',
      DBEndpointId: 'DBEndpointId',
      endpointType: 'EndpointType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressItems: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointListAddressItems },
      custinsType: 'string',
      DBEndpointId: 'string',
      endpointType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addressItems)) {
      $dara.Model.validateArray(this.addressItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterMigrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The comments on the migration exception. If no exception occurs during the migration, an empty value is returned.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The details of the PolarDB endpoints.
   */
  DBClusterEndpointList?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointList[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The read/write mode of the cluster. Valid values:
   * 
   * - **rw**: Read and write.
   * 
   * - **ro**: Read-only.
   * 
   * @example
   * ro
   */
  DBClusterReadWriteMode?: string;
  /**
   * @remarks
   * The replication delay between the ApsaraDB RDS instance and the PolarDB cluster, in seconds.
   * 
   * @example
   * 0
   */
  delayedSeconds?: number;
  /**
   * @remarks
   * The ID of the sync task.
   * 
   * @example
   * dts**********618bs
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The time when the replication relationship between the ApsaraDB RDS instance and the PolarDB cluster expires. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is displayed in UTC.
   * 
   * @example
   * 2020-06-17T01:56:36Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The migration status of the PolarDB cluster. Valid values:
   * 
   * - **NO_MIGRATION**: No migration task is created.
   * 
   * - **RDS2POLARDB_CLONING**: Data is being cloned.
   * 
   * - **RDS2POLARDB_SYNCING**: Data is being synchronized. In this state, the PolarDB cluster is read-only, and the ApsaraDB RDS instance is read-write.
   * 
   * - **SWITCHING**: The database is being switched.
   * 
   * - **POLARDB2RDS_SYNCING**: The database switch is complete. In this state, the PolarDB cluster is read-write, and the ApsaraDB RDS instance is read-only. Change the endpoints in your application.
   * 
   * - **ROLLBACK**: The migration is being rolled back. After the rollback is complete, the migration status changes to **RDS2POLARDB_SYNCING**.
   * 
   * - **CLOSING_MIGRATION**: The migration task is being shut down.
   * 
   * @example
   * RDS2POLARDB_SYNCING
   */
  migrationStatus?: string;
  /**
   * @remarks
   * The details of the ApsaraDB RDS endpoints.
   */
  rdsEndpointList?: DescribeDBClusterMigrationResponseBodyRdsEndpointList[];
  /**
   * @remarks
   * The read/write mode of the source ApsaraDB RDS instance. Valid values:
   * 
   * - **rw**: Read and write.
   * 
   * - **ro**: Read-only.
   * 
   * @example
   * rw
   */
  rdsReadWriteMode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2A9EFA7-915F-4572-8299-85A307******
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance.
   * 
   * @example
   * rm-************
   */
  sourceRDSDBInstanceId?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * - **PolarDBMySQL**: The source database for a major version upgrade of a PolarDB cluster.
   * 
   * - **RDS**: The source database for migrating data from an ApsaraDB RDS instance to a PolarDB for MySQL cluster.
   * 
   * @example
   * PolarDBMySQL
   */
  srcDbType?: string;
  /**
   * @remarks
   * The data synchronization relationship. Valid values:
   * 
   * - **RDS2POLARDB**: Data is synchronized from the ApsaraDB RDS instance to the PolarDB cluster.
   * 
   * - **POLARDB2RDS**: Data is synchronized from the PolarDB cluster to the ApsaraDB RDS instance.
   * 
   * @example
   * RDS2POLARDB
   */
  topologies?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      DBClusterEndpointList: 'DBClusterEndpointList',
      DBClusterId: 'DBClusterId',
      DBClusterReadWriteMode: 'DBClusterReadWriteMode',
      delayedSeconds: 'DelayedSeconds',
      dtsInstanceId: 'DtsInstanceId',
      expiredTime: 'ExpiredTime',
      migrationStatus: 'MigrationStatus',
      rdsEndpointList: 'RdsEndpointList',
      rdsReadWriteMode: 'RdsReadWriteMode',
      requestId: 'RequestId',
      sourceRDSDBInstanceId: 'SourceRDSDBInstanceId',
      srcDbType: 'SrcDbType',
      topologies: 'Topologies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      DBClusterEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyDBClusterEndpointList },
      DBClusterId: 'string',
      DBClusterReadWriteMode: 'string',
      delayedSeconds: 'number',
      dtsInstanceId: 'string',
      expiredTime: 'string',
      migrationStatus: 'string',
      rdsEndpointList: { 'type': 'array', 'itemType': DescribeDBClusterMigrationResponseBodyRdsEndpointList },
      rdsReadWriteMode: 'string',
      requestId: 'string',
      sourceRDSDBInstanceId: 'string',
      srcDbType: 'string',
      topologies: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBClusterEndpointList)) {
      $dara.Model.validateArray(this.DBClusterEndpointList);
    }
    if(Array.isArray(this.rdsEndpointList)) {
      $dara.Model.validateArray(this.rdsEndpointList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


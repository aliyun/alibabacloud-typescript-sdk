// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * pc-**************.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The description of a migration exception. If no exception occurs during the migration, an empty string is returned.
   * 
   * @example
   * 192.***.***.10
   */
  IPAddress?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Cluster**: the default cluster endpoint
   * *   **Primary**: the primary endpoint
   * *   **Custom**: the custom endpoint
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The read/write mode. Valid values:
   * 
   * *   ReadWrite: receives and forwards read and write requests (automatic read-write splitting).
   * *   ReadOnly (default): receives and forwards read requests only.
   * 
   * @example
   * vpc-**********
   */
  VPCId?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
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
   * The VPC ID.
   */
  addressItems?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointListAddressItems[];
  /**
   * @remarks
   * The expiration time of the replication between ApsaraDB RDS and PolarDB. The time is in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * @example
   * pe-***********
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * Cluster
   */
  endpointType?: string;
  /**
   * @remarks
   * The synchronization direction. Valid values:
   * 
   * *   **RDS2POLARDB**: Data is replicated from an ApsaraDB RDS instance to a PolarDB cluster.
   * *   **POLARDB2RDS**: Data is replicated from a PolarDB cluster to an ApsaraDB RDS instance.
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
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * rm-***********.mysql.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * *   **PolarDBMySQL**: The source database is a PolarDB for MySQL database when the major version of your PolarDB cluster is upgraded.
   * *   **RDS**: The source database is an ApsaraDB RDS database when data is migrated from ApsaraDB RDS to PolarDB for MySQL.
   * 
   * @example
   * 172.***.***.173
   */
  IPAddress?: string;
  /**
   * @remarks
   * The ID of the endpoint.
   * 
   * @example
   * Private
   */
  netType?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * *   **Normal**: the standard endpoint
   * *   **ReadWriteSplitting**: the read/write splitting endpoint
   * 
   * @example
   * 3306
   */
  port?: string;
  /**
   * @remarks
   * Indicates whether SSL encryption is enabled. Valid values:
   * 
   * - **Enabled**
   * - **Disabled**
   * 
   * @example
   * Enabled
   */
  SSLEnabled?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * vpc-************
   */
  VPCId?: string;
  /**
   * @remarks
   * The IP address of the endpoint.
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
   * The VPC ID.
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
   * The ID of the endpoint.
   * 
   * @example
   * rm-************-normal
   */
  DBEndpointId?: string;
  /**
   * @remarks
   * The type of the endpoint. Valid values:
   * 
   * - **Normal**: the standard endpoint
   * - **ReadWriteSplitting**: the read/write splitting endpoint
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
   * The mode of the source ApsaraDB RDS instance. Valid values:
   * 
   * *   **rw**: read and write mode
   * *   **ro**: read-only mode
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The port number.
   */
  DBClusterEndpointList?: DescribeDBClusterMigrationResponseBodyDBClusterEndpointList[];
  /**
   * @remarks
   * The replication latency between the ApsaraDB RDS instance and the PolarDB cluster. Unit: seconds.
   * 
   * @example
   * pc-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Details about the endpoints.
   * 
   * @example
   * ro
   */
  DBClusterReadWriteMode?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * 0
   */
  delayedSeconds?: number;
  /**
   * @remarks
   * The network type of the endpoint. Valid values:
   * 
   * *   **Public**: the public endpoint
   * *   **Private**: the internal endpoint (VPC)
   * *   **Inner**: the internal endpoint (classic network)
   * 
   * @example
   * dts**********618bs
   */
  dtsInstanceId?: string;
  /**
   * @remarks
   * The mode of the PolarDB cluster. Valid values:
   * 
   * *   **rw**: read and write mode
   * *   **ro**: read-only mode
   * 
   * @example
   * 2020-06-17T01:56:36Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The endpoint.
   * 
   * @example
   * RDS2POLARDB_SYNCING
   */
  migrationStatus?: string;
  /**
   * @remarks
   * The endpoints of the ApsaraDB RDS instance.
   */
  rdsEndpointList?: DescribeDBClusterMigrationResponseBodyRdsEndpointList[];
  /**
   * @remarks
   * The ID of the synchronous task.
   * 
   * @example
   * rw
   */
  rdsReadWriteMode?: string;
  /**
   * @remarks
   * The ID of the source ApsaraDB RDS instance.
   * 
   * @example
   * F2A9EFA7-915F-4572-8299-85A307******
   */
  requestId?: string;
  /**
   * @remarks
   * The endpoints of the ApsaraDB RDS instance.
   * 
   * @example
   * rm-************
   */
  sourceRDSDBInstanceId?: string;
  /**
   * @remarks
   * The type of the source database. Valid values:
   * 
   * - **PolarDBMySQL**: The source database is a PolarDB for MySQL database when the major version of your PolarDB cluster is upgraded.
   * - **RDS**: The source database is an ApsaraDB RDS database when data is migrated from ApsaraDB RDS to PolarDB for MySQL.
   * 
   * @example
   * PolarDBMySQL
   */
  srcDbType?: string;
  /**
   * @remarks
   * The migration state of the PolarDB cluster. Valid values:
   * 
   * *   **NO_MIGRATION**: No migration task is running.
   * *   **RDS2POLARDB_CLONING**: Data is being replicated.
   * *   **RDS2POLARDB_SYNCING**: Data is being replicated. During the replication, the PolarDB cluster is running in read-only mode and the source ApsaraDB RDS instance is running in read and write mode.
   * *   **SWITCHING**: Databases are being switched.
   * *   **POLARDB2RDS_SYNCING**: Databases are switched. The PolarDB cluster is running in read and write mode and the source ApsaraDB RDS instance is running in read-only mode. In this state, you can modify the endpoints for your applications.
   * *   **ROLLBACK**: The migration is being rolled back. After the rollback is complete, the value **RDS2POLARDB_SYNCING** is returned.
   * *   **CLOSING_MIGRATION**: The migration task is being terminated.
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


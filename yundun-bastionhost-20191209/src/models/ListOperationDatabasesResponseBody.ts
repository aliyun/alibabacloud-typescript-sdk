// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * - **Public**: The public network address is valid.
   * - **Private**: The private network address is valid.
   * 
   * @example
   * Private
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the database instance.
   * 
   * @example
   * cpp
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the database.
   * 
   * @example
   * 26
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * zDatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The port of the database.
   * 
   * @example
   * 3306
   */
  databasePort?: number;
  /**
   * @remarks
   * The private network address of the database.
   * 
   * @example
   * rm-b******9b.mysql.rds.aliyuncs.com
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public IP address of the database.
   * 
   * @example
   * rm-uf******p45.mysql.rds.aliyuncs.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * - **MySQL**
   * - **PostgreSQL**
   * - **Oracle**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * - **Local**: on-premises host
   * - **Rds**: ApsaraDB RDS database
   * - **PolarDB**: PolarDB database
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS instance.
   * 
   * @example
   * i-wz9225bhipya******
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the source ApsaraDB RDS instance.
   * 
   * @example
   * cn-shanghai
   */
  sourceInstanceRegionId?: string;
  /**
   * @remarks
   * The status of the database instance. Valid values:
   *  - **Normal**: normal
   * - **Release**: released
   * 
   * @example
   * Normal
   */
  sourceInstanceState?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseId: 'DatabaseId',
      databaseName: 'DatabaseName',
      databasePort: 'DatabasePort',
      databasePrivateAddress: 'DatabasePrivateAddress',
      databasePublicAddress: 'DatabasePublicAddress',
      databaseType: 'DatabaseType',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
      sourceInstanceRegionId: 'SourceInstanceRegionId',
      sourceInstanceState: 'SourceInstanceState',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeAddressType: 'string',
      comment: 'string',
      databaseId: 'string',
      databaseName: 'string',
      databasePort: 'number',
      databasePrivateAddress: 'string',
      databasePublicAddress: 'string',
      databaseType: 'string',
      source: 'string',
      sourceInstanceId: 'string',
      sourceInstanceRegionId: 'string',
      sourceInstanceState: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of database instances.
   */
  databases?: ListOperationDatabasesResponseBodyDatabases[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of databases.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      databases: 'Databases',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databases: { 'type': 'array', 'itemType': ListOperationDatabasesResponseBodyDatabases },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.databases)) {
      $dara.Model.validateArray(this.databases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


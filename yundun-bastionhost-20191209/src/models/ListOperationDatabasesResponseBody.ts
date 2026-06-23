// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The endpoint type of the database. Valid values:
   * 
   * - **Public**: a public endpoint
   * 
   * - **Private**: a private endpoint
   * 
   * @example
   * Private
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The comment on the database.
   * 
   * @example
   * cpp
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the database.
   * 
   * @example
   * 26
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * zDatabase
   */
  databaseName?: string;
  /**
   * @remarks
   * The database port.
   * 
   * @example
   * 3306
   */
  databasePort?: number;
  /**
   * @remarks
   * The private endpoint of the database.
   * 
   * @example
   * rm-b******9b.mysql.rds.aliyuncs.com
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public endpoint of the database.
   * 
   * @example
   * rm-uf******p45.mysql.rds.aliyuncs.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The source of the database.
   * 
   * - **Local**: a local database
   * 
   * - **Rds**: an ApsaraDB RDS database
   * 
   * - **PolarDB**: a PolarDB database
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the source instance.
   * 
   * @example
   * i-wz9225bhipya******
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the source instance.
   * 
   * @example
   * cn-shanghai
   */
  sourceInstanceRegionId?: string;
  /**
   * @remarks
   * The status of the source instance:
   * 
   * - **Normal**: The instance is running.
   * 
   * - **Release**: The instance is released.
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
   * The databases.
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


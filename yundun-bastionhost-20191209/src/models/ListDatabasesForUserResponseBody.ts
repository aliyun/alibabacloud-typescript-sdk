// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * - **Public**: public endpoint
   * - **Private**: private endpoint in the private network
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
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The instance ID of the database.
   * 
   * @example
   * 36
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * MySQL56
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
   * The private endpoint of the database in the private network, which can be a domain name or an IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database, which can be a domain name or an IP address.
   * 
   * @example
   * www.example.com
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * - **MySQL**
   * - **Oracle**
   * - **PostgreSQL**
   * - **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the network domain to which the database belongs.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The ID of the project to which the database belongs.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The source of the database. Valid values:
   * 
   * - **Local**: local database instance
   * - **Rds**: ApsaraDB RDS instance
   * - **PolarDB**: PolarDB instance
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS or PolarDB instance that corresponds to the database.
   * > If **Source** is set to **Local**, this parameter is empty.
   * 
   * @example
   * i-wz9fv2hwux78x9******
   */
  sourceInstanceId?: string;
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
      networkDomainId: 'NetworkDomainId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      source: 'Source',
      sourceInstanceId: 'SourceInstanceId',
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
      networkDomainId: 'string',
      projectId: 'string',
      projectName: 'string',
      source: 'string',
      sourceInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  databases?: ListDatabasesForUserResponseBodyDatabases[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8A665B9-8550-4942-9DEE-73198051856B
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
      databases: { 'type': 'array', 'itemType': ListDatabasesForUserResponseBodyDatabases },
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


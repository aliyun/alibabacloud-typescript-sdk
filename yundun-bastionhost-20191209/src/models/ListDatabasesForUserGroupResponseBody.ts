// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserGroupResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * - **Public**: public network address
   * - **Private**: private network address
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
   * The total number of queried database accounts.
   * 
   * @example
   * 2
   */
  databaseAccountCount?: number;
  /**
   * @remarks
   * The instance ID of the database to which the database account belongs.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * MySQL0
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
   * The private network address of the database, which can be a domain name or an IP address.
   * 
   * @example
   * rm-bp1******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database, which can be a domain name or an IP address.
   * 
   * @example
   * rm-uf65******
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
   * 5
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * The source of the database. Valid values:
   * 
   * - **Local**: self-managed database instance
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
   * i-wz9c7mjxywmdmqk7q6e4
   */
  sourceInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      activeAddressType: 'ActiveAddressType',
      comment: 'Comment',
      databaseAccountCount: 'DatabaseAccountCount',
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
      databaseAccountCount: 'number',
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

export class ListDatabasesForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried databases.
   */
  databases?: ListDatabasesForUserGroupResponseBodyDatabases[];
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
   * The total number of queried databases.
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
      databases: { 'type': 'array', 'itemType': ListDatabasesForUserGroupResponseBodyDatabases },
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


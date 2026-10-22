// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * - **Public**: public address
   * - **Private**: private endpoint on the private network
   * 
   * @example
   * Public
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The description of the database.
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
   * 9
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * MySQL0
   */
  databaseName?: string;
  /**
   * @remarks
   * The port number of the database.
   * 
   * @example
   * 3306
   */
  databasePort?: number;
  /**
   * @remarks
   * The private endpoint of the database on the private network, which can be a domain name or an IP address.
   * 
   * @example
   * rm-wz973w7******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database, which can be a domain name or an IP address.
   * 
   * @example
   * rm-uf65n2******
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
   * 8
   */
  networkDomainId?: string;
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
   * The instance ID of the ApsaraDB RDS instance or PolarDB instance that corresponds to the database.
   * > If **Source** is set to **Local**, this parameter is empty.
   * 
   * @example
   * i-wz9ejupczf41******
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the ApsaraDB RDS instance or PolarDB instance that corresponds to the database.
   * 
   * @example
   * cn-hangzhou
   */
  sourceInstanceRegionId?: string;
  /**
   * @remarks
   * The instance status of the database. Valid values:
   * - **Normal**: Normal
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
      networkDomainId: 'NetworkDomainId',
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
      networkDomainId: 'string',
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

export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  databases?: ListDatabasesResponseBodyDatabases[];
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
   * The total number of databases returned.
   * 
   * @example
   * 4
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
      databases: { 'type': 'array', 'itemType': ListDatabasesResponseBodyDatabases },
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


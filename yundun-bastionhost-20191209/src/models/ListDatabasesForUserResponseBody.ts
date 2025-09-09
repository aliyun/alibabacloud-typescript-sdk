// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * 
   * *   **Public**
   * *   **Private**
   * 
   * @example
   * Private
   */
  activeAddressType?: string;
  /**
   * @remarks
   * The remarks of the database.
   * 
   * @example
   * comment
   */
  comment?: string;
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 36
   */
  databaseId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * MySQL56
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
   * The internal endpoint of the database. The value is a domain name or an IP address.
   * 
   * @example
   * rm-wz97******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public endpoint of the database. The value is a domain name or an IP address.
   * 
   * @example
   * rm-uf65******
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **Oracle**
   * *   **PostgreSQL**
   * *   **SQLServer**
   * 
   * @example
   * MySQL
   */
  databaseType?: string;
  /**
   * @remarks
   * The ID of the network domain where the database resides.
   * 
   * @example
   * 2
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The database type. Valid values:
   * 
   * *   **Local**: on-premises database.
   * *   **Rds**: ApsaraDB RDS instance.
   * *   **PolarDB**: PolarDB cluster.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance or PolarDB cluster.
   * 
   * >  No value is returned for this parameter if **Source** is set to **Local**.
   * 
   * @example
   * i-wz9fv2hwux78x9h1pmje
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
   * The databases returned.
   */
  databases?: ListDatabasesForUserResponseBodyDatabases[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A8A665B9-8550-4942-9DEE-73198051856B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of databases returned.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBodyDatabases extends $dara.Model {
  /**
   * @remarks
   * The address type of the database. Valid values:
   * 
   * * **Public**
   * * **Private**
   * 
   * @example
   * Public
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
   * The port of the database.
   * 
   * @example
   * 3306
   */
  databasePort?: number;
  /**
   * @remarks
   * The internal address of the database. The value is a domain name or an IP address.
   * 
   * @example
   * rm-wz973w7******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database. The value is a domain name or an IP address.
   * 
   * @example
   * rm-uf65n2******
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The database engine. Valid values:
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
   * 8
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * 
   * * **Local**: on-premises database.
   * * **Rds**: ApsaraDB for RDS instance.
   * * **PolarDB**: PolarDB cluster
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The ID of the ApsaraDB for RDS instance or PolarDB cluster.
   * > No value is returned for this parameter if **Source** is set to **Local**.
   * 
   * @example
   * i-wz9ejupczf41******
   */
  sourceInstanceId?: string;
  /**
   * @remarks
   * The region ID of the ApsaraDB for RDS instance or PolarDB cluster.
   * 
   * @example
   * cn-hangzhou
   */
  sourceInstanceRegionId?: string;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * * **Normal**
   * * **Release**
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
   * The databases returned.
   */
  databases?: ListDatabasesResponseBodyDatabases[];
  /**
   * @remarks
   * The request ID.
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


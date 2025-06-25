// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesForUserGroupResponseBodyDatabases extends $dara.Model {
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
   * The total number of database accounts returned.
   * 
   * @example
   * 2
   */
  databaseAccountCount?: number;
  /**
   * @remarks
   * The ID of the database to which the database account belongs.
   * 
   * @example
   * 2
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
   * rm-bp1******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database. The value is a domain name or an IP address.
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
   * 5
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
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
   * > No value is returned for this parameter if **Source** is set to **Local**.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatabaseResponseBodyDatabase extends $dara.Model {
  /**
   * @remarks
   * The address type of the database instance. Valid values:
   * 
   * - Public: public address.
   * - Private: private endpoint. The database is accessed over a private network.
   * 
   * @example
   * Public
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
   * 22
   */
  databaseId?: string;
  /**
   * @remarks
   * The name of the database instance.
   * 
   * @example
   * test
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
   * The private endpoint of the database instance. The database is accessed over a private network.
   * 
   * @example
   * rm-bp1zq******
   */
  databasePrivateAddress?: string;
  /**
   * @remarks
   * The public address of the database instance.
   * 
   * @example
   * rm-uf65******
   */
  databasePublicAddress?: string;
  /**
   * @remarks
   * The type of the database. Valid values:
   * - **mysql**
   * - **sqlserver**
   * - **postgresql**
   * - **oracle**
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
   * 45
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The source of the database instance. Valid values:
   * 
   * - **Local**: a local database instance.
   * - **Rds**: an ApsaraDB RDS database instance.
   * - **PolarDB**: a PolarDB database instance.
   * 
   * @example
   * Local
   */
  source?: string;
  /**
   * @remarks
   * The instance ID of the ApsaraDB RDS or PolarDB instance that corresponds to the database.
   * > If **Source** is set to **Local**, this parameter returns an empty value.
   * 
   * @example
   * i-wz9527ob0e0nftcsffke
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
   * - **Normal**: normal.
   * - **Release**: released.
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

export class GetDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the database instance.
   */
  database?: GetDatabaseResponseBodyDatabase;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D72B883-9D15-5B05-B987-DFD10EB1FFB4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: GetDatabaseResponseBodyDatabase,
      requestId: 'string',
    };
  }

  validate() {
    if(this.database && typeof (this.database as any).validate === 'function') {
      (this.database as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


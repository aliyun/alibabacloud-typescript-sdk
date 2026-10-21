// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticDatabaseEngineMeta } from "./AgenticDatabaseEngineMeta";


export class AgenticDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * prod_mysql_order
   */
  catalogName?: string;
  /**
   * @remarks
   * The type of the catalog. Valid values:
   * 
   * - **JDBC**: relational database catalog
   * - **DataLake**: data lake catalog
   * - **Dataset**: knowledge base catalog
   * 
   * @example
   * JDBC
   */
  catalogType?: string;
  /**
   * @remarks
   * The UUID of the catalog.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The business attributes of the database, returned as key-value pairs. Currently, this may include **ENV_TYPE**, which indicates the environment type of the database.
   */
  databaseBizAttrs?: { [key: string]: any };
  /**
   * @remarks
   * The unique identifier of the database.
   * 
   * @example
   * md-HZ-fp9K7r***
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The database type inherited from the catalog. The value is the uppercase name of the database type, such as MYSQL.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * Order database
   */
  description?: string;
  /**
   * @remarks
   * The metadata of the database engine. This field is returned only for databases under a JDBC catalog.
   */
  engineMeta?: AgenticDatabaseEngineMeta;
  /**
   * @remarks
   * The name of the database. For databases that distinguish schemas, such as PostgreSQL, this is the schema name.
   * 
   * @example
   * order_db
   */
  name?: string;
  /**
   * @remarks
   * The extended properties of the database, returned as key-value pairs. This field is returned only for databases under a DataLake catalog.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The fully qualified name of the database. For databases that distinguish schemas, such as PostgreSQL, the format is database name.schema name.
   * 
   * @example
   * order_db
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The region ID of the database.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The search name of the database. SearchAgenticDatabase matches search keywords against this name.
   * 
   * @example
   * order_db
   */
  searchName?: string;
  /**
   * @remarks
   * The status of the database. Valid values:
   * 
   * - **0**: normal
   * - **-1**: deleted
   * 
   * @example
   * 0
   */
  state?: number;
  /**
   * @remarks
   * The storage location. This field is returned only for databases under a DataLake catalog.
   * 
   * @example
   * oss://examplebucket/datalake/order_db/
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      catalogType: 'CatalogType',
      catalogUuid: 'CatalogUuid',
      databaseBizAttrs: 'DatabaseBizAttrs',
      databaseUuid: 'DatabaseUuid',
      dbType: 'DbType',
      description: 'Description',
      engineMeta: 'EngineMeta',
      name: 'Name',
      properties: 'Properties',
      qualifiedName: 'QualifiedName',
      regionId: 'RegionId',
      searchName: 'SearchName',
      state: 'State',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      catalogType: 'string',
      catalogUuid: 'string',
      databaseBizAttrs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      databaseUuid: 'string',
      dbType: 'string',
      description: 'string',
      engineMeta: AgenticDatabaseEngineMeta,
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      qualifiedName: 'string',
      regionId: 'string',
      searchName: 'string',
      state: 'number',
      storageLocation: 'string',
    };
  }

  validate() {
    if(this.databaseBizAttrs) {
      $dara.Model.validateMap(this.databaseBizAttrs);
    }
    if(this.engineMeta && typeof (this.engineMeta as any).validate === 'function') {
      (this.engineMeta as any).validate();
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


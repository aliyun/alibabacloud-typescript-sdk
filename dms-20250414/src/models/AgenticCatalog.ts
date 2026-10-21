// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticCatalog extends $dara.Model {
  /**
   * @remarks
   * The business attributes of the catalog, returned as key-value pairs. The following keys may be included:
   * 
   * - **ALIAS**: the alias of the data source
   * - **HOST**: the endpoint of the data source
   * - **PORT**: the connection port of the data source
   * - **ENV_TYPE**: the environment type of the data source
   * - **VERSION**: the database version of the data source
   * - **SYNC_ALIAS**: whether automatic synchronization of instance aliases is enabled
   */
  catalogBizAttrs?: { [key: string]: any };
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
   * The unique identifier of the catalog.
   * 
   * @example
   * mc-HZ-OfjcNc2z***
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The unique identifier of the data source associated with the catalog.
   * 
   * @example
   * ds-HZ-Xk2Pq9Lm***
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * The database type of the data source associated with the catalog. The value is the uppercase name of the database type, such as MYSQL.
   * 
   * @example
   * MYSQL
   */
  dbType?: string;
  /**
   * @remarks
   * The description of the catalog.
   * 
   * @example
   * Order production database
   */
  description?: string;
  /**
   * @remarks
   * The name of the catalog.
   * 
   * @example
   * prod_mysql_order
   */
  name?: string;
  /**
   * @remarks
   * The extended properties of the catalog, returned as key-value pairs.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The region ID of the data source associated with the catalog.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the catalog. Valid values:
   * 
   * - **0**: Normal. This value is set when the data source is created.
   * - **-1**: Deleted. This value is set when the data source is deleted.
   * 
   * Disabling a data source does not change the status of the catalog.
   * 
   * @example
   * 0
   */
  state?: number;
  /**
   * @remarks
   * The storage location. This property is returned only for catalogs of the DataLake type.
   * 
   * @example
   * oss://examplebucket/datalake/
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      catalogBizAttrs: 'CatalogBizAttrs',
      catalogType: 'CatalogType',
      catalogUuid: 'CatalogUuid',
      dataSourceUuid: 'DataSourceUuid',
      dbType: 'DbType',
      description: 'Description',
      name: 'Name',
      properties: 'Properties',
      regionId: 'RegionId',
      state: 'State',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogBizAttrs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      catalogType: 'string',
      catalogUuid: 'string',
      dataSourceUuid: 'string',
      dbType: 'string',
      description: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      regionId: 'string',
      state: 'number',
      storageLocation: 'string',
    };
  }

  validate() {
    if(this.catalogBizAttrs) {
      $dara.Model.validateMap(this.catalogBizAttrs);
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


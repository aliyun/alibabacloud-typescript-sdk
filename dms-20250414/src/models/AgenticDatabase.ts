// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AgenticDatabaseEngineMeta } from "./AgenticDatabaseEngineMeta";


export class AgenticDatabase extends $dara.Model {
  /**
   * @remarks
   * The name of the catalog.
   */
  catalogName?: string;
  /**
   * @remarks
   * The type of the catalog.
   */
  catalogType?: string;
  /**
   * @remarks
   * The unique identifier of the catalog.
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The data source type, such as `MySQL` or `PostgreSQL`.
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The database\\"s business attributes.
   */
  databaseBizAttrs?: { [key: string]: any };
  /**
   * @remarks
   * The unique identifier of the database.
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The database description.
   */
  description?: string;
  /**
   * @remarks
   * The metadata for the database engine.
   */
  engineMeta?: AgenticDatabaseEngineMeta;
  /**
   * @remarks
   * The name of the database.
   */
  name?: string;
  /**
   * @remarks
   * The database\\"s extended properties.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The fully qualified name of the database.
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The region ID of the database.
   */
  regionId?: string;
  /**
   * @remarks
   * The name used to search the database.
   */
  searchName?: string;
  /**
   * @remarks
   * The database state.
   */
  state?: number;
  /**
   * @remarks
   * The database storage location.
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      catalogType: 'CatalogType',
      catalogUuid: 'CatalogUuid',
      dataSourceType: 'DataSourceType',
      databaseBizAttrs: 'DatabaseBizAttrs',
      databaseUuid: 'DatabaseUuid',
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
      dataSourceType: 'string',
      databaseBizAttrs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      databaseUuid: 'string',
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


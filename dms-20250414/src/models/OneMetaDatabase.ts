// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaDatabaseEngineMeta } from "./OneMetaDatabaseEngineMeta";


export class OneMetaDatabase extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   */
  catalogName?: string;
  /**
   * @remarks
   * The catalog type.
   */
  catalogType?: string;
  /**
   * @remarks
   * The catalog UUID.
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The data source type.
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The business attributes of the database.
   */
  databaseBizAttrs?: { [key: string]: any };
  /**
   * @remarks
   * The database UUID.
   */
  databaseUuid?: string;
  /**
   * @remarks
   * The database description.
   */
  description?: string;
  engineMeta?: OneMetaDatabaseEngineMeta;
  /**
   * @remarks
   * The database name.
   */
  name?: string;
  /**
   * @remarks
   * The extended properties of the database.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The qualified name of the database.
   */
  qualifiedName?: string;
  /**
   * @remarks
   * The region ID.
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
      engineMeta: OneMetaDatabaseEngineMeta,
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


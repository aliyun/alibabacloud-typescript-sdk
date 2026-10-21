// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaDatabaseEngineMeta } from "./OneMetaDatabaseEngineMeta";


export class OneMetaDatabase extends $dara.Model {
  catalogName?: string;
  catalogType?: string;
  catalogUuid?: string;
  dataSourceType?: string;
  databaseBizAttrs?: { [key: string]: any };
  databaseUuid?: string;
  description?: string;
  engineMeta?: OneMetaDatabaseEngineMeta;
  name?: string;
  properties?: { [key: string]: any };
  qualifiedName?: string;
  regionId?: string;
  searchName?: string;
  state?: number;
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


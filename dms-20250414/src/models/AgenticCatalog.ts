// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticCatalog extends $dara.Model {
  catalogBizAttrs?: { [key: string]: any };
  catalogType?: string;
  catalogUuid?: string;
  dataSourceType?: string;
  dataSourceUuid?: string;
  description?: string;
  name?: string;
  properties?: { [key: string]: any };
  regionId?: string;
  state?: number;
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      catalogBizAttrs: 'CatalogBizAttrs',
      catalogType: 'CatalogType',
      catalogUuid: 'CatalogUuid',
      dataSourceType: 'DataSourceType',
      dataSourceUuid: 'DataSourceUuid',
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
      dataSourceType: 'string',
      dataSourceUuid: 'string',
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


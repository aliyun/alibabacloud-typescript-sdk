// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AgenticCatalog extends $dara.Model {
  /**
   * @remarks
   * A collection of key-value pairs that represents business attributes for the catalog, such as the data owner or department.
   */
  catalogBizAttrs?: { [key: string]: any };
  /**
   * @remarks
   * The type of the catalog. For example, `INTERNAL_METADATA` or `THIRD_PARTY`.
   */
  catalogType?: string;
  /**
   * @remarks
   * The unique identifier (UUID) of the catalog. This parameter is system-generated and output-only.
   */
  catalogUuid?: string;
  /**
   * @remarks
   * The type of the data source associated with the catalog. For example, `MySQL`, `PostgreSQL`, or `OSS`.
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The unique identifier (UUID) of the associated data source.
   */
  dataSourceUuid?: string;
  /**
   * @remarks
   * The description of the catalog. It can be up to 2,048 characters long.
   */
  description?: string;
  /**
   * @remarks
   * The display name of the catalog. The name can be up to 256 characters long.
   */
  name?: string;
  /**
   * @remarks
   * A collection of key-value pairs that represents additional technical properties for the catalog.
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the region where the catalog is located. For example, `cn-hangzhou`.
   */
  regionId?: string;
  /**
   * @remarks
   * The current state of the catalog. Valid values are: `0` (Creating), `1` (Active), `2` (Deleting), and `3` (Error).
   */
  state?: number;
  /**
   * @remarks
   * The storage location for the catalog\\"s metadata, such as a database name or a file path.
   */
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


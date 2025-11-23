// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataLakeDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The catalog name.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The region where the data lake resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  dataRegion?: string;
  /**
   * @remarks
   * The name of the database that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The storage path of the database. Supports the OSS, S3, and S3A protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://path/to/database
   */
  location?: string;
  /**
   * @remarks
   * The key-value pairs of the database attributes.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > To view the ID of the tenant, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
   * 
   * @example
   * 3***
   */
  tid?: number;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dataRegion: 'DataRegion',
      dbName: 'DbName',
      description: 'Description',
      location: 'Location',
      parameters: 'Parameters',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      dbName: 'string',
      description: 'string',
      location: 'string',
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


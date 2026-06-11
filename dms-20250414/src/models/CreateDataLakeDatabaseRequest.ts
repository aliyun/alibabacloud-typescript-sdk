// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataLakeDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the data catalog.
   * 
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * The name of the database.
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
   * The storage path of the database. The path supports the oss, s3, and s3a protocols.
   * 
   * This parameter is required.
   * 
   * @example
   * oss://path/to/database
   */
  location?: string;
  /**
   * @remarks
   * The key-value pairs of the database properties.
   */
  parameters?: { [key: string]: string };
  /**
   * @remarks
   * The tenant ID.
   * 
   * > Hover over your profile picture in the upper-right corner of the DMS console to obtain the tenant ID. For details, see [View tenant information](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * 3****
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


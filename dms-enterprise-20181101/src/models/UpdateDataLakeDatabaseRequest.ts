// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataLakeDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * hive
   */
  catalogName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  dataRegion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://path/to/database
   */
  location?: string;
  parameters?: { [key: string]: string };
  /**
   * @example
   * 3***
   */
  tid?: number;
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


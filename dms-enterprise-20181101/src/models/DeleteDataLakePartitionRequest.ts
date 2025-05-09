// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataLakePartitionRequest extends $dara.Model {
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
   * true
   */
  ifExists?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  partitionValues?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
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
      ifExists: 'IfExists',
      partitionValues: 'PartitionValues',
      tableName: 'TableName',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dataRegion: 'string',
      dbName: 'string',
      ifExists: 'boolean',
      partitionValues: { 'type': 'array', 'itemType': 'string' },
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.partitionValues)) {
      $dara.Model.validateArray(this.partitionValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


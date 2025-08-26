// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDataLakePartitionsRequest extends $dara.Model {
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
  partitionValuesList?: string[][];
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
   * 3****
   */
  tid?: number;
  /**
   * @example
   * 12****
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      catalogName: 'CatalogName',
      dbName: 'DbName',
      ifExists: 'IfExists',
      partitionValuesList: 'PartitionValuesList',
      tableName: 'TableName',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      ifExists: 'boolean',
      partitionValuesList: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.partitionValuesList)) {
      $dara.Model.validateArray(this.partitionValuesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


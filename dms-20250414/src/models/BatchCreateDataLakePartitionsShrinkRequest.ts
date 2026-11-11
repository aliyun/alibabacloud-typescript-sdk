// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateDataLakePartitionsShrinkRequest extends $dara.Model {
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
   * Specifies whether to ignore the exception if the name of a new partition duplicates an existing partition name. Valid values:
   * 
   * - **true**: The exception is ignored.
   * 
   * - **false**: The exception is not ignored.
   * 
   * @example
   * true
   */
  ifNotExists?: boolean;
  /**
   * @remarks
   * Specifies whether to return partition information. If this parameter is set to **true**, the Partitions field is returned.
   * 
   * @example
   * true
   */
  needResult?: boolean;
  /**
   * @remarks
   * The information about the partitions to be added.
   * 
   * This parameter is required.
   */
  partitionInputsShrink?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The tenant ID.
   * > Move the pointer over the profile picture in the upper-right corner of the console to view the tenant ID. For more information, see [View tenant information](https://help.aliyun.com/document_detail/181330.html).
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
      ifNotExists: 'IfNotExists',
      needResult: 'NeedResult',
      partitionInputsShrink: 'PartitionInputs',
      tableName: 'TableName',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      ifNotExists: 'boolean',
      needResult: 'boolean',
      partitionInputsShrink: 'string',
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


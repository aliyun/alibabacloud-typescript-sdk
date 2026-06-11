// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteDataLakePartitionsRequest extends $dara.Model {
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
   * Specifies whether to ignore the exception if the partition to be deleted does not exist.
   * 
   * @example
   * true
   */
  ifExists?: boolean;
  /**
   * @remarks
   * A list of partition values.
   * 
   * This parameter is required.
   */
  partitionValuesList?: string[][];
  /**
   * @remarks
   * The name of the table.
   * 
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
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
   * The ID of the workspace.
   * 
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


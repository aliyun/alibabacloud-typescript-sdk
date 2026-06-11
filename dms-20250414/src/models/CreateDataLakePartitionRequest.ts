// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartitionInput } from "./DlpartitionInput";


export class CreateDataLakePartitionRequest extends $dara.Model {
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
   * Specifies whether to ignore an exception if a partition with the same name already exists.
   * 
   * @example
   * true
   */
  ifNotExists?: boolean;
  /**
   * @remarks
   * Specifies whether to return information about the new partition. If you set this parameter to **true**, the Partition parameter is returned. Valid values:
   * 
   * - **true**: Returns information about the new partition.
   * 
   * - **false**: Does not return information about the new partition.
   * 
   * @example
   * true
   */
  needResult?: boolean;
  /**
   * @remarks
   * The information about the new partition.
   * 
   * This parameter is required.
   */
  partitionInput?: DLPartitionInput;
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
      ifNotExists: 'IfNotExists',
      needResult: 'NeedResult',
      partitionInput: 'PartitionInput',
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
      partitionInput: DLPartitionInput,
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(this.partitionInput && typeof (this.partitionInput as any).validate === 'function') {
      (this.partitionInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


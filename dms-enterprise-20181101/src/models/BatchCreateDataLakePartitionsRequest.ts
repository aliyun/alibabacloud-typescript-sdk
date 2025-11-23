// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartitionInput } from "./DlpartitionInput";


export class BatchCreateDataLakePartitionsRequest extends $dara.Model {
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
   * Specifies whether to ignore this exception if the name of the new partition is the same as that of an existing partition. Valid values:
   * 
   * *   true: Ignore the exception.
   * *   false: Do not ignore the exception.
   * 
   * @example
   * true
   */
  ifNotExists?: boolean;
  /**
   * @remarks
   * Specifies whether to return partition information. If the value is true, Partitions is returned.
   * 
   * @example
   * true
   */
  needResult?: boolean;
  /**
   * @remarks
   * The information about the new partitions.
   * 
   * This parameter is required.
   */
  partitionInputs?: DLPartitionInput[];
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
   * The ID of the tenant.
   * 
   * > To view the tenant ID, go to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see the [View information about the current tenant](https://help.aliyun.com/document_detail/181330.html) section of the "Manage DMS tenants" topic.
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
      ifNotExists: 'IfNotExists',
      needResult: 'NeedResult',
      partitionInputs: 'PartitionInputs',
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
      ifNotExists: 'boolean',
      needResult: 'boolean',
      partitionInputs: { 'type': 'array', 'itemType': DLPartitionInput },
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.partitionInputs)) {
      $dara.Model.validateArray(this.partitionInputs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


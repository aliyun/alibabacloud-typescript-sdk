// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataLakePartitionShrinkRequest extends $dara.Model {
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
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * default
   */
  dbName?: string;
  /**
   * @remarks
   * Specifies whether to ignore the exception if the name of the created partition is the same as the name of an existing partition.
   * 
   * @example
   * true
   */
  ifNotExists?: boolean;
  /**
   * @remarks
   * Specifies whether to return information about the created partition. If the value is true, the Partition parameter is returned. Valid values:
   * 
   * *   true: returns information about the created partition.
   * *   false: does not return information about the created partition.
   * 
   * @example
   * true
   */
  needResult?: boolean;
  /**
   * @remarks
   * The information about the created partition.
   * 
   * This parameter is required.
   */
  partitionInputShrink?: string;
  /**
   * @remarks
   * The name of the table
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
      partitionInputShrink: 'PartitionInput',
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
      partitionInputShrink: 'string',
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


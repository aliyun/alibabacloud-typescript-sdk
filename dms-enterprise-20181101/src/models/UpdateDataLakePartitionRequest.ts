// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartitionInput } from "./DlpartitionInput";


export class UpdateDataLakePartitionRequest extends $dara.Model {
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
   * The information about the created partition.
   * 
   * This parameter is required.
   */
  partitionInput?: DLPartitionInput;
  /**
   * @remarks
   * The name of the table
   * 
   * This parameter is required.
   * 
   * @example
   * table_name
   */
  tableName?: string;
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
      partitionInput: 'PartitionInput',
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


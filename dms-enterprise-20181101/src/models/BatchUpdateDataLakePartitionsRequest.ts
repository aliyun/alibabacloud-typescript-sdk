// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartitionInput } from "./DlpartitionInput";


export class BatchUpdateDataLakePartitionsRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   */
  partitionInputs?: DLPartitionInput[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_table
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLPartitionInput } from "./DlpartitionInput";


export class CreateDataLakePartitionRequest extends $dara.Model {
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
  ifNotExists?: boolean;
  /**
   * @example
   * true
   */
  needResult?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  partitionInput?: DLPartitionInput;
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


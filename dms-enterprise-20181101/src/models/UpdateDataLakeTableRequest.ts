// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OpenStructDLTableInput } from "./OpenStructDltableInput";


export class UpdateDataLakeTableRequest extends $dara.Model {
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
  tableInput?: OpenStructDLTableInput;
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
      tableInput: 'TableInput',
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
      tableInput: OpenStructDLTableInput,
      tableName: 'string',
      tid: 'number',
      workspaceId: 'number',
    };
  }

  validate() {
    if(this.tableInput && typeof (this.tableInput as any).validate === 'function') {
      (this.tableInput as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


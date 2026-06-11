// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DLTableInput } from "./DltableInput";


export class CreateDataLakeTableRequest extends $dara.Model {
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
   * The information about the table.
   * 
   * This parameter is required.
   */
  tableInput?: DLTableInput;
  /**
   * @remarks
   * The ID of the tenant.
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
      tableInput: 'TableInput',
      tid: 'Tid',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogName: 'string',
      dbName: 'string',
      tableInput: DLTableInput,
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


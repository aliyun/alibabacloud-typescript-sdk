// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateStructSyncOrderRequestParamSource } from "./CreateStructSyncOrderRequestParamSource";
import { CreateStructSyncOrderRequestParamTableInfoList } from "./CreateStructSyncOrderRequestParamTableInfoList";
import { CreateStructSyncOrderRequestParamTarget } from "./CreateStructSyncOrderRequestParamTarget";


export class CreateStructSyncOrderRequestParam extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to skip an error that occurs in executing an SQL statement. Valid values:
   * 
   * *   **true**: continues to execute subsequent SQL statements if an error occurs in executing an SQL statement.
   * *   **false**: stops executing subsequent SQL statements if an error occurs in executing an SQL statement.
   * 
   * @example
   * false
   */
  ignoreError?: boolean;
  /**
   * @remarks
   * The information about the base database.
   * 
   * This parameter is required.
   */
  source?: CreateStructSyncOrderRequestParamSource;
  /**
   * @remarks
   * The information about the table of which you want to synchronize the schema.
   */
  tableInfoList?: CreateStructSyncOrderRequestParamTableInfoList[];
  /**
   * @remarks
   * The information about the database to which you want to synchronize the schema of a table.
   * 
   * This parameter is required.
   */
  target?: CreateStructSyncOrderRequestParamTarget;
  static names(): { [key: string]: string } {
    return {
      ignoreError: 'IgnoreError',
      source: 'Source',
      tableInfoList: 'TableInfoList',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoreError: 'boolean',
      source: CreateStructSyncOrderRequestParamSource,
      tableInfoList: { 'type': 'array', 'itemType': CreateStructSyncOrderRequestParamTableInfoList },
      target: CreateStructSyncOrderRequestParamTarget,
    };
  }

  validate() {
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(Array.isArray(this.tableInfoList)) {
      $dara.Model.validateArray(this.tableInfoList);
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


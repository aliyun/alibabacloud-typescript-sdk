// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPatternQueryEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polar4ai_nl2sql_pattern
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      id: 'Id',
      instanceName: 'InstanceName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      id: 'number',
      instanceName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


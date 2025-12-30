// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIUpdateTableValidationColumnsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * db_test
   */
  dbName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pc-2ze454l20me07****
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * polar4ai_nl2sql_pattern
   */
  tableName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pattern/config
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceName: 'InstanceName',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceName: 'string',
      tableName: 'string',
      tableType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


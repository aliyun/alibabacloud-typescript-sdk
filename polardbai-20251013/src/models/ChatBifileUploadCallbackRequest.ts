// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIFileUploadCallbackRequest extends $dara.Model {
  /**
   * @example
   * gbk, utf-8
   */
  characterSetName?: string;
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
   * 1778851887351348/record_1746670038342.xlsx
   */
  fileName?: string;
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
   * MANAGED_TABLE
   */
  tableType?: string;
  static names(): { [key: string]: string } {
    return {
      characterSetName: 'CharacterSetName',
      dbName: 'DbName',
      fileName: 'FileName',
      instanceName: 'InstanceName',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterSetName: 'string',
      dbName: 'string',
      fileName: 'string',
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


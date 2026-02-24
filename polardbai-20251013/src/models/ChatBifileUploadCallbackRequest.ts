// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIFileUploadCallbackRequest extends $dara.Model {
  authMessage?: string;
  authType?: string;
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
   * @example
   * cn-beijing
   */
  sourceRegionId?: string;
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
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      characterSetName: 'CharacterSetName',
      dbName: 'DbName',
      fileName: 'FileName',
      instanceName: 'InstanceName',
      sourceRegionId: 'SourceRegionId',
      tableName: 'TableName',
      tableType: 'TableType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      characterSetName: 'string',
      dbName: 'string',
      fileName: 'string',
      instanceName: 'string',
      sourceRegionId: 'string',
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


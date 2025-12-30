// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPatternIndexCreateRequest extends $dara.Model {
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
   * @example
   * polar4ai_nl2sql_pattern, polar4ai_nl2sql_pattern_1
   */
  patternTableName?: string;
  /**
   * @example
   * 空字符串
   */
  tableNameSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceName: 'InstanceName',
      patternTableName: 'PatternTableName',
      tableNameSuffix: 'TableNameSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceName: 'string',
      patternTableName: 'string',
      tableNameSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


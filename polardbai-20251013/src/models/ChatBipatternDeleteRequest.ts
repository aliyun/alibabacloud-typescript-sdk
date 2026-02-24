// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBIPatternDeleteRequest extends $dara.Model {
  authMessage?: string;
  authType?: string;
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
  static names(): { [key: string]: string } {
    return {
      authMessage: 'AuthMessage',
      authType: 'AuthType',
      dbName: 'DbName',
      instanceName: 'InstanceName',
      sourceRegionId: 'SourceRegionId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authMessage: 'string',
      authType: 'string',
      dbName: 'string',
      instanceName: 'string',
      sourceRegionId: 'string',
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


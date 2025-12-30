// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChatBISchemaIndexDeleteRequest extends $dara.Model {
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
   * pc-2ze2ak7avn731y760
   */
  instanceName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * schema_index, schema_index_1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      instanceName: 'InstanceName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      instanceName: 'string',
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


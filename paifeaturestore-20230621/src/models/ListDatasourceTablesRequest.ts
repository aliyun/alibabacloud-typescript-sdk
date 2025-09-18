// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasourceTablesRequest extends $dara.Model {
  /**
   * @example
   * default
   */
  schemaName?: string;
  /**
   * @example
   * table1
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      schemaName: 'SchemaName',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schemaName: 'string',
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


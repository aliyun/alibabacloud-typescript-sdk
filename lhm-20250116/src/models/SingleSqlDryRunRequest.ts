// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SingleSqlDryRunRequest extends $dara.Model {
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * ds_demo
   */
  datasourceName?: string;
  /**
   * @remarks
   * The SQL statement.
   * 
   * @example
   * SELECT id, name FROM src_table WHERE ds = \\"20260116\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      datasourceName: 'datasourceName',
      sql: 'sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasourceName: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


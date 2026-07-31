// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateSqlBySemanticSqlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ADB cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-uf6wjk5xxxxxxxxxx
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The SQL statement that queries the semantic view.
   * 
   * This parameter is required.
   * 
   * @example
   * select sum(amount) from sv_sales
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      schemaName: 'SchemaName',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      schemaName: 'string',
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


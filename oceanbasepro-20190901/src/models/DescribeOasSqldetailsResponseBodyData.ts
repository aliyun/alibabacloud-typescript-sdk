// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasSQLDetailsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_db
   */
  dbName?: string;
  /**
   * @remarks
   * SQL text.
   * 
   * @example
   * select a from b
   */
  fulltext?: string;
  /**
   * @remarks
   * Parameterized text.
   * 
   * @example
   * select a from b
   */
  statement?: string;
  /**
   * @remarks
   * The table name related to the SQL.
   */
  tables?: string[];
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test_user
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      dbName: 'DbName',
      fulltext: 'Fulltext',
      statement: 'Statement',
      tables: 'Tables',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbName: 'string',
      fulltext: 'string',
      statement: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


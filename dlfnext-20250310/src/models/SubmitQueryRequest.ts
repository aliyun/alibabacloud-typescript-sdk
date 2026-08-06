// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQueryRequest extends $dara.Model {
  /**
   * @remarks
   * The default catalog.
   * 
   * @example
   * test_catalog
   */
  defaultCatalog?: string;
  /**
   * @remarks
   * The default database.
   * 
   * @example
   * test_db
   */
  defaultDatabase?: string;
  /**
   * @remarks
   * The limit on the number of returned results.
   * 
   * @example
   * 1000
   */
  limit?: number;
  /**
   * @remarks
   * The SQL text. Multiple statements separated by semicolons are supported and executed sequentially within the same session.
   * 
   * @example
   * select * from table_name;
   */
  sql?: string;
  /**
   * @remarks
   * The execution specifications. Default value: standard.
   * 
   * @example
   * standard
   */
  tier?: string;
  static names(): { [key: string]: string } {
    return {
      defaultCatalog: 'defaultCatalog',
      defaultDatabase: 'defaultDatabase',
      limit: 'limit',
      sql: 'sql',
      tier: 'tier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultCatalog: 'string',
      defaultDatabase: 'string',
      limit: 'number',
      sql: 'string',
      tier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


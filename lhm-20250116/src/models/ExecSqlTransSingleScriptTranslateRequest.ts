// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecSqlTransSingleScriptTranslateRequest extends $dara.Model {
  /**
   * @remarks
   * The source SQL dialect type.
   * 
   * @example
   * hive
   */
  sourceDialect?: string;
  /**
   * @remarks
   * The source script content. It must be Base64-encoded before being passed in. The server decodes the content before performing the conversion.
   * 
   * @example
   * SELECT * FROM t;
   */
  sourceSqlScript?: string;
  /**
   * @remarks
   * The table name mapping. In string format, the source table and target table are separated by a comma (,).
   */
  tableMapping?: string[];
  /**
   * @remarks
   * The target SQL dialect type.
   * 
   * @example
   * hive
   */
  targetDialect?: string;
  static names(): { [key: string]: string } {
    return {
      sourceDialect: 'sourceDialect',
      sourceSqlScript: 'sourceSqlScript',
      tableMapping: 'tableMapping',
      targetDialect: 'targetDialect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDialect: 'string',
      sourceSqlScript: 'string',
      tableMapping: { 'type': 'array', 'itemType': 'string' },
      targetDialect: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableMapping)) {
      $dara.Model.validateArray(this.tableMapping);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


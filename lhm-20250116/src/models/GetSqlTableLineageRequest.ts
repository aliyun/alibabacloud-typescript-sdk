// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlTableLineageRequest extends $dara.Model {
  /**
   * @remarks
   * The default schema (database) name, which is used to complete table references in the SQL script that do not explicitly specify a database name.
   * 
   * @example
   * db_demo
   */
  defaultSchema?: string;
  /**
   * @remarks
   * The SQL dialect.
   * 
   * @example
   * hive
   */
  dialect?: string;
  /**
   * @remarks
   * The source script content, Base64-encoded.
   * 
   * @example
   * U0VMRUNUICogRlJPTSB0Ow==
   */
  sourceSqlScriptBase64?: string;
  static names(): { [key: string]: string } {
    return {
      defaultSchema: 'defaultSchema',
      dialect: 'dialect',
      sourceSqlScriptBase64: 'sourceSqlScriptBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultSchema: 'string',
      dialect: 'string',
      sourceSqlScriptBase64: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


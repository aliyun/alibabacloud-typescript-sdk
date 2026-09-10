// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSqlTransTableMetaInfoRequest extends $dara.Model {
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
   * The source script content. You must Base64-encode the script before passing it in. The server decodes the content before parsing.
   * 
   * @example
   * SELECT * FROM t;
   */
  sourceSqlScript?: string;
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
      targetDialect: 'targetDialect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDialect: 'string',
      sourceSqlScript: 'string',
      targetDialect: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


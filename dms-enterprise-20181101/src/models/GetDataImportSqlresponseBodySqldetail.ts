// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataImportSQLResponseBodySQLDetail extends $dara.Model {
  /**
   * @remarks
   * The SQL script.
   * 
   * @example
   * insert into t1 values (1);
   */
  execSql?: string;
  static names(): { [key: string]: string } {
    return {
      execSql: 'ExecSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execSql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


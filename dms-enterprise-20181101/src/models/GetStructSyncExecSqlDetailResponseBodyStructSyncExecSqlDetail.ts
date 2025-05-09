// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStructSyncExecSqlDetailResponseBodyStructSyncExecSqlDetail extends $dara.Model {
  /**
   * @remarks
   * The SQL statements that are executed.
   */
  execSql?: string;
  /**
   * @remarks
   * The total number of SQL statements.
   * 
   * @example
   * 1
   */
  totalSqlCount?: number;
  static names(): { [key: string]: string } {
    return {
      execSql: 'ExecSql',
      totalSqlCount: 'TotalSqlCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execSql: 'string',
      totalSqlCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


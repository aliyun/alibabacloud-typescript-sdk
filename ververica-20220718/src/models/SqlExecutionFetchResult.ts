// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DqlResult } from "./DqlResult";
import { SqlExecution } from "./SqlExecution";


export class SqlExecutionFetchResult extends $dara.Model {
  dqlResult?: DqlResult;
  sqlExecution?: SqlExecution;
  static names(): { [key: string]: string } {
    return {
      dqlResult: 'dqlResult',
      sqlExecution: 'sqlExecution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dqlResult: DqlResult,
      sqlExecution: SqlExecution,
    };
  }

  validate() {
    if(this.dqlResult && typeof (this.dqlResult as any).validate === 'function') {
      (this.dqlResult as any).validate();
    }
    if(this.sqlExecution && typeof (this.sqlExecution as any).validate === 'function') {
      (this.sqlExecution as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


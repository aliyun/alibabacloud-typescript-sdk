// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkBatchSQL } from "./SparkBatchSql";


export class ExecuteSparkWarehouseBatchSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * true
   */
  data?: SparkBatchSQL;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBE843D8-964D-5EA3-9D31-822125611B6E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: SparkBatchSQL,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


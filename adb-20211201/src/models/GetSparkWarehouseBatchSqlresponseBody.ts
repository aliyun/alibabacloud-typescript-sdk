// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkBatchSQL } from "./SparkBatchSql";


export class GetSparkWarehouseBatchSQLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   * 
   * @example
   * {\\"DBClusterId\\": \\"amv-uf6485635fz852mn\\", \\"Statements\\": [{\\"Code\\": \\"show databases\\", \\"State\\": \\"FINISHED\\", \\"StatementId\\": \\"sq202501141001sh8e12e080006846-0000\\", \\"Result\\": \\"+--------------------+n
   */
  data?: SparkBatchSQL;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D44EDA0-A9DC-580D-9B5A-019370C075F4
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


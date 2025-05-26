// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSparkSQLEngineStateResponseBodyData } from "./GetSparkSqlengineStateResponseBodyData";


export class GetSparkSQLEngineStateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The state information about the Spark SQL engine.
   */
  data?: GetSparkSQLEngineStateResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxxx-xxx-xx
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
      data: GetSparkSQLEngineStateResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartSparkSQLEngineResponseBodyData } from "./StartSparkSqlengineResponseBodyData";


export class StartSparkSQLEngineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: StartSparkSQLEngineResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D65A809F-34CE-4550-9BC1-0ED21ETG380
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
      data: StartSparkSQLEngineResponseBodyData,
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


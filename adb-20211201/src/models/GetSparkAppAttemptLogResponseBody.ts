// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSparkAppAttemptLogResponseBodyData } from "./GetSparkAppAttemptLogResponseBodyData";


export class GetSparkAppAttemptLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried log.
   */
  data?: GetSparkAppAttemptLogResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C3A9594F-1D40-4472-A96C-8FB8AA20D38C
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
      data: GetSparkAppAttemptLogResponseBodyData,
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


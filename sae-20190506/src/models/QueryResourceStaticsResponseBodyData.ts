// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryResourceStaticsResponseBodyDataRealTimeRes } from "./QueryResourceStaticsResponseBodyDataRealTimeRes";
import { QueryResourceStaticsResponseBodyDataSummary } from "./QueryResourceStaticsResponseBodyDataSummary";


export class QueryResourceStaticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The real-time resource usage.
   */
  realTimeRes?: QueryResourceStaticsResponseBodyDataRealTimeRes;
  /**
   * @remarks
   * The resource usage of the current month.
   */
  summary?: QueryResourceStaticsResponseBodyDataSummary;
  static names(): { [key: string]: string } {
    return {
      realTimeRes: 'RealTimeRes',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      realTimeRes: QueryResourceStaticsResponseBodyDataRealTimeRes,
      summary: QueryResourceStaticsResponseBodyDataSummary,
    };
  }

  validate() {
    if(this.realTimeRes && typeof (this.realTimeRes as any).validate === 'function') {
      (this.realTimeRes as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


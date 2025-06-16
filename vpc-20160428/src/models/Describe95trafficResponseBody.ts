// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Describe95TrafficResponseBodyTraffic95Summary } from "./Describe95trafficResponseBodyTraffic95summary";


export class Describe95TrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The information returned.
   */
  traffic95Summary?: Describe95TrafficResponseBodyTraffic95Summary;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      traffic95Summary: 'Traffic95Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      traffic95Summary: Describe95TrafficResponseBodyTraffic95Summary,
    };
  }

  validate() {
    if(this.traffic95Summary && typeof (this.traffic95Summary as any).validate === 'function') {
      (this.traffic95Summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


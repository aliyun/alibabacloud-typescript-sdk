// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupTrafficResponseBodyTrafficPerSecond } from "./DescribeGroupTrafficResponseBodyTrafficPerSecond";


export class DescribeGroupTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF924FE4-2EDD-4CD3-89EC-34E4708574E7
   */
  requestId?: string;
  /**
   * @remarks
   * The traffic information per second.
   */
  trafficPerSecond?: DescribeGroupTrafficResponseBodyTrafficPerSecond;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficPerSecond: 'TrafficPerSecond',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficPerSecond: DescribeGroupTrafficResponseBodyTrafficPerSecond,
    };
  }

  validate() {
    if(this.trafficPerSecond && typeof (this.trafficPerSecond as any).validate === 'function') {
      (this.trafficPerSecond as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


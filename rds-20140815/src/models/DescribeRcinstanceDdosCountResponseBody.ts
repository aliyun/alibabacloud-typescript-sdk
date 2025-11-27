// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRCInstanceDdosCountResponseBodyDdosCount extends $dara.Model {
  /**
   * @remarks
   * The number of instances for which blackhole filtering is triggered.
   * 
   * @example
   * 0
   */
  blackholeCount?: string;
  /**
   * @remarks
   * The number of instances for which traffic scrubbing is triggered.
   * 
   * @example
   * 0
   */
  defenseCount?: string;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 6
   */
  instacenCount?: string;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'string',
      defenseCount: 'string',
      instacenCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRCInstanceDdosCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances that are under DDoS attacks.
   */
  ddosCount?: DescribeRCInstanceDdosCountResponseBodyDdosCount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F77F3176-AAEA-5836-B2B4-A854E3ED****_Zv**
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ddosCount: 'DdosCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ddosCount: DescribeRCInstanceDdosCountResponseBodyDdosCount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ddosCount && typeof (this.ddosCount as any).validate === 'function') {
      (this.ddosCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


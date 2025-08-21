// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDdosCountResponseBodyDdosCount extends $dara.Model {
  /**
   * @remarks
   * The number of assets for which blackhole filtering is triggered.
   * 
   * @example
   * 0
   */
  blackholeCount?: number;
  /**
   * @remarks
   * The number of assets for which traffic scrubbing is triggered.
   * 
   * @example
   * 4
   */
  defenseCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 0
   */
  instacenCount?: number;
  static names(): { [key: string]: string } {
    return {
      blackholeCount: 'BlackholeCount',
      defenseCount: 'DefenseCount',
      instacenCount: 'InstacenCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackholeCount: 'number',
      defenseCount: 'number',
      instacenCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDdosCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of assets that are under DDoS attacks.
   */
  ddosCount?: DescribeDdosCountResponseBodyDdosCount;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7D66C762-324E-51CE-B461-2007996087B2
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
      ddosCount: DescribeDdosCountResponseBodyDdosCount,
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


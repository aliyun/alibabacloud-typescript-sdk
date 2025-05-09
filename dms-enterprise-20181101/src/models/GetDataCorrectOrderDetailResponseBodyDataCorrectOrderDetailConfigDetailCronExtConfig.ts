// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCorrectOrderDetailResponseBodyDataCorrectOrderDetailConfigDetailCronExtConfig extends $dara.Model {
  /**
   * @remarks
   * The number of times defragmentation is performed. This parameter is valid only if the value of OptimizeTableAfterEveryClearTimes is greater than 0.
   * 
   * @example
   * 0
   */
  currentClearTaskCount?: number;
  /**
   * @remarks
   * Indicates whether the Periodically Optimize Table feature is enabled. Valid values:
   * 
   * *   **0** (default): The feature is disabled.
   * *   **A value greater than 0**: The feature is enabled. The value indicates the number of cleanups after which the system performs defragmentation.
   * 
   * @example
   * 0
   */
  optimizeTableAfterEveryClearTimes?: number;
  static names(): { [key: string]: string } {
    return {
      currentClearTaskCount: 'CurrentClearTaskCount',
      optimizeTableAfterEveryClearTimes: 'OptimizeTableAfterEveryClearTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentClearTaskCount: 'number',
      optimizeTableAfterEveryClearTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


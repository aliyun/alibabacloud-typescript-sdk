// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressProcessed } from "./RlprogressProcessed";


export class RLProgressRollout extends $dara.Model {
  /**
   * @remarks
   * The total number of completed items within the window.
   * 
   * @example
   * 500
   */
  finished?: number;
  /**
   * @remarks
   * The rollout processed count.
   * 
   * **if can be null:**
   * true
   */
  processed?: RLProgressProcessed;
  /**
   * @remarks
   * The completion rate (items per minute), estimated from the last 120 completion events.
   * 
   * @example
   * 31.2
   */
  ratePerMin?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      processed: 'Processed',
      ratePerMin: 'RatePerMin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'number',
      processed: RLProgressProcessed,
      ratePerMin: 'number',
    };
  }

  validate() {
    if(this.processed && typeof (this.processed as any).validate === 'function') {
      (this.processed as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


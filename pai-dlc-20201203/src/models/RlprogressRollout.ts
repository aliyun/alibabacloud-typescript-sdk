// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressProcessed } from "./RlprogressProcessed";


export class RLProgressRollout extends $dara.Model {
  /**
   * @remarks
   * 窗口内完成总数
   * 
   * @example
   * 500
   */
  finished?: number;
  /**
   * @remarks
   * rollout 已处理计数
   * 
   * **if can be null:**
   * true
   */
  processed?: RLProgressProcessed;
  /**
   * @remarks
   * 完成速率（条/分钟），由最近 120 条完成事件估算
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


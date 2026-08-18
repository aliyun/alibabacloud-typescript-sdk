// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BackfillStrategy } from "./BackfillStrategy";
import { ContinuousStrategy } from "./ContinuousStrategy";


export class RunStrategies extends $dara.Model {
  /**
   * @remarks
   * The historical batch backfill policy. Backfill is enabled when the object exists and enabled is not explicitly set to false.
   * 
   * @example
   * {"enabled":true,"startTime":1782816000000,"endTime":1782902400000,"immediate":false}
   */
  backfill?: BackfillStrategy;
  /**
   * @remarks
   * The continuous evaluation policy. Continuous evaluation is enabled when the object exists and enabled is not explicitly set to false.
   * 
   * @example
   * {"enabled":true,"intervalUnit":"HOUR","intervalValue":1,"dataDelayMinutes":5}
   */
  continuous?: ContinuousStrategy;
  static names(): { [key: string]: string } {
    return {
      backfill: 'backfill',
      continuous: 'continuous',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backfill: BackfillStrategy,
      continuous: ContinuousStrategy,
    };
  }

  validate() {
    if(this.backfill && typeof (this.backfill as any).validate === 'function') {
      (this.backfill as any).validate();
    }
    if(this.continuous && typeof (this.continuous as any).validate === 'function') {
      (this.continuous as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


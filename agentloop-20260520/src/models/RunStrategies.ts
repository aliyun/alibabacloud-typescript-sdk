// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BackfillStrategy } from "./BackfillStrategy";
import { ContinuousStrategy } from "./ContinuousStrategy";
import { SelectedDataStrategy } from "./SelectedDataStrategy";


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
  /**
   * @remarks
   * The selection of specified objects for evaluation.
   * 
   * @example
   * {"startTime":1794542191,"endTime":1795146991,"evalIds":["2646a9380bba3c86371f55a0226322941794983634"]}
   */
  selectedData?: SelectedDataStrategy;
  static names(): { [key: string]: string } {
    return {
      backfill: 'backfill',
      continuous: 'continuous',
      selectedData: 'selectedData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backfill: BackfillStrategy,
      continuous: ContinuousStrategy,
      selectedData: SelectedDataStrategy,
    };
  }

  validate() {
    if(this.backfill && typeof (this.backfill as any).validate === 'function') {
      (this.backfill as any).validate();
    }
    if(this.continuous && typeof (this.continuous as any).validate === 'function') {
      (this.continuous as any).validate();
    }
    if(this.selectedData && typeof (this.selectedData as any).validate === 'function') {
      (this.selectedData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


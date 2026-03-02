// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobSummary extends $dara.Model {
  /**
   * @remarks
   * The number of jobs that are in the cancelled state.
   * 
   * @example
   * 5
   */
  cancelled?: number;
  /**
   * @remarks
   * The number of jobs that are in the cancelling state.
   * 
   * @example
   * 0
   */
  cancelling?: number;
  /**
   * @remarks
   * The number of jobs that are in the failed state.
   * 
   * @example
   * 6
   */
  failed?: number;
  /**
   * @remarks
   * The number of jobs that are in the finished state.
   * 
   * @example
   * 4
   */
  finished?: number;
  /**
   * @remarks
   * The number of jobs that are in the running state.
   * 
   * @example
   * 2
   */
  running?: number;
  /**
   * @remarks
   * The number of jobs that are in the starting state.
   * 
   * @example
   * 1
   */
  starting?: number;
  static names(): { [key: string]: string } {
    return {
      cancelled: 'cancelled',
      cancelling: 'cancelling',
      failed: 'failed',
      finished: 'finished',
      running: 'running',
      starting: 'starting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelled: 'number',
      cancelling: 'number',
      failed: 'number',
      finished: 'number',
      running: 'number',
      starting: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


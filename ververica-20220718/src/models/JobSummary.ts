// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JobSummary extends $dara.Model {
  /**
   * @example
   * 1
   */
  cancelled?: number;
  /**
   * @example
   * 1
   */
  cancelling?: number;
  /**
   * @example
   * 1
   */
  failed?: number;
  /**
   * @example
   * 1
   */
  finished?: number;
  /**
   * @example
   * 1
   */
  running?: number;
  /**
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


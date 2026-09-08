// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressEval extends $dara.Model {
  /**
   * @remarks
   * Indicates whether Total is greater than 0 and Finished is not less than Total.
   * 
   * @example
   * true
   */
  done?: boolean;
  /**
   * @remarks
   * The number of finished samples.
   * 
   * @example
   * 500
   */
  finished?: number;
  /**
   * @remarks
   * The progress percentage, which is the ratio of Progress to Total.
   * 
   * @example
   * 100
   */
  pct?: number;
  /**
   * @remarks
   * The progress count, which is the greater value of Ready and Finished.
   * 
   * @example
   * 500
   */
  progress?: number;
  /**
   * @remarks
   * The number of ready samples.
   * 
   * @example
   * 500
   */
  ready?: number;
  /**
   * @remarks
   * The target number of samples.
   * 
   * @example
   * 3
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      done: 'Done',
      finished: 'Finished',
      pct: 'Pct',
      progress: 'Progress',
      ready: 'Ready',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      done: 'boolean',
      finished: 'number',
      pct: 'number',
      progress: 'number',
      ready: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


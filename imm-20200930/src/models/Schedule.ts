// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schedule extends $dara.Model {
  /**
   * @example
   * 0.97
   */
  gamma?: number;
  /**
   * @example
   * StepLR
   */
  LRScheduler?: string;
  /**
   * @example
   * 1
   */
  stepSize?: number;
  static names(): { [key: string]: string } {
    return {
      gamma: 'Gamma',
      LRScheduler: 'LRScheduler',
      stepSize: 'StepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gamma: 'number',
      LRScheduler: 'string',
      stepSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


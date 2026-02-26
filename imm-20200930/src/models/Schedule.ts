// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Schedule extends $dara.Model {
  /**
   * @remarks
   * The learning rate decay. This parameter takes effect only when LRScheduler is set to StepLR.
   * 
   * @example
   * 0.97
   */
  gamma?: number;
  /**
   * @remarks
   * The learning rate scheduler.
   * 
   * @example
   * StepLR
   */
  LRScheduler?: string;
  /**
   * @remarks
   * The number of epochs the learning rate is changed after. This parameter takes effect only when LRScheduler is set to StepLR.
   * 
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


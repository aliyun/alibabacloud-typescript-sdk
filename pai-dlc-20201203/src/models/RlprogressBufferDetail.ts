// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RLProgressBufferDetail extends $dara.Model {
  /**
   * @remarks
   * The number of samples consumed by the trainer.
   * 
   * @example
   * 0
   */
  consumed?: number;
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
   * The number of ready samples.
   * 
   * @example
   * 500
   */
  ready?: number;
  /**
   * @remarks
   * The buffer tag, which is the global batch ordinal number.
   * 
   * @example
   * 1
   */
  tag?: number;
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
      consumed: 'Consumed',
      finished: 'Finished',
      ready: 'Ready',
      tag: 'Tag',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      finished: 'number',
      ready: 'number',
      tag: 'number',
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


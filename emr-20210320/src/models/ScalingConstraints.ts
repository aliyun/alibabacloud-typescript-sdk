// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingConstraints extends $dara.Model {
  /**
   * @remarks
   * 最大值。
   * 
   * @example
   * 2000
   */
  maxCapacity?: number;
  /**
   * @remarks
   * 最小值。
   * 
   * @example
   * 0
   */
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      maxCapacity: 'MaxCapacity',
      minCapacity: 'MinCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


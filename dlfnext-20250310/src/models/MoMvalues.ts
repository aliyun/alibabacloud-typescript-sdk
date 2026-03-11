// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoMValues extends $dara.Model {
  /**
   * @remarks
   * total
   * 
   * @example
   * 1000
   */
  currentValue?: number;
  /**
   * @remarks
   * daily addition
   * 
   * @example
   * 800
   */
  lastDayValue?: number;
  /**
   * @remarks
   * monthly addition
   * 
   * @example
   * 100
   */
  lastMonthValue?: number;
  static names(): { [key: string]: string } {
    return {
      currentValue: 'currentValue',
      lastDayValue: 'lastDayValue',
      lastMonthValue: 'lastMonthValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValue: 'number',
      lastDayValue: 'number',
      lastMonthValue: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


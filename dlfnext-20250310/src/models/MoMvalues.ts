// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoMValues extends $dara.Model {
  /**
   * @remarks
   * total
   */
  currentValue?: number;
  /**
   * @remarks
   * daily addition
   */
  lastDayValue?: number;
  /**
   * @remarks
   * monthly addition
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


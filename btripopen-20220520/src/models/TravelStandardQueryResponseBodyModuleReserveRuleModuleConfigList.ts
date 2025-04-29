// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList extends $dara.Model {
  /**
   * @example
   * FLIGHT_ADVANCE_BUY_DAY
   */
  code?: string;
  /**
   * @example
   * 3
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightRefundPreCalResponseBodyModuleReturnReason extends $dara.Model {
  extendDesc?: string;
  /**
   * @example
   * 0
   */
  person?: number;
  /**
   * @example
   * 0
   */
  reasonCode?: number;
  reasonShow?: string;
  /**
   * @example
   * 1
   */
  reasonType?: number;
  /**
   * @example
   * 0
   */
  volunteer?: number;
  static names(): { [key: string]: string } {
    return {
      extendDesc: 'extend_desc',
      person: 'person',
      reasonCode: 'reason_code',
      reasonShow: 'reason_show',
      reasonType: 'reason_type',
      volunteer: 'volunteer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendDesc: 'string',
      person: 'number',
      reasonCode: 'number',
      reasonShow: 'string',
      reasonType: 'number',
      volunteer: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply extends $dara.Model {
  exceedReason?: string;
  /**
   * @example
   * 16
   */
  exceedType?: number;
  /**
   * @example
   * 3321
   */
  flowNo?: number;
  /**
   * @example
   * 60853
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      exceedReason: 'exceed_reason',
      exceedType: 'exceed_type',
      flowNo: 'flow_no',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceedReason: 'string',
      exceedType: 'number',
      flowNo: 'number',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


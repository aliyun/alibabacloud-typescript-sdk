// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchAssignSeatsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of target member IDs.
   */
  accountIds?: string[];
  /**
   * @remarks
   * The locale. Valid values: zh-CN and en-US.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The seat type. Valid values:
   * - standard: Standard seat.
   * - pro: Pro seat.
   * - max: Max seat.
   * 
   * This parameter is required.
   * 
   * @example
   * standard
   */
  seatType?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      locale: 'Locale',
      seatType: 'SeatType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: { 'type': 'array', 'itemType': 'string' },
      locale: 'string',
      seatType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountIds)) {
      $dara.Model.validateArray(this.accountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyModuleFlightModifyOrderListPassengerFee extends $dara.Model {
  modifyHandFee?: number;
  modifyUpgradeFee?: number;
  taxGap?: number;
  /**
   * @example
   * 01332
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyHandFee: 'modify_hand_fee',
      modifyUpgradeFee: 'modify_upgrade_fee',
      taxGap: 'tax_gap',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyHandFee: 'number',
      modifyUpgradeFee: 'number',
      taxGap: 'number',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


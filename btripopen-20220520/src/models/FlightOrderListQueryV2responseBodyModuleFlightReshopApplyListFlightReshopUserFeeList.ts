// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleFlightReshopApplyListFlightReshopUserFeeList extends $dara.Model {
  changeFee?: number;
  reshopCorpAmount?: number;
  reshopPersonAmount?: number;
  upgradeFee?: number;
  /**
   * @example
   * alitrip123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      changeFee: 'change_fee',
      reshopCorpAmount: 'reshop_corp_amount',
      reshopPersonAmount: 'reshop_person_amount',
      upgradeFee: 'upgrade_fee',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeFee: 'number',
      reshopCorpAmount: 'number',
      reshopPersonAmount: 'number',
      upgradeFee: 'number',
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


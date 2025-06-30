// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightReShopConsultResponseBodyModulePassengerJourneyGroupInfoListPassengerSegmentStatusInfoList extends $dara.Model {
  canReShop?: boolean;
  passengerId?: number;
  segmentKey?: string;
  unReShopReason?: string;
  unReShopReasonCode?: string;
  static names(): { [key: string]: string } {
    return {
      canReShop: 'can_re_shop',
      passengerId: 'passenger_id',
      segmentKey: 'segment_key',
      unReShopReason: 'un_re_shop_reason',
      unReShopReasonCode: 'un_re_shop_reason_code',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canReShop: 'boolean',
      passengerId: 'number',
      segmentKey: 'string',
      unReShopReason: 'string',
      unReShopReasonCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply } from "./HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply";


export class HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfo extends $dara.Model {
  /**
   * @example
   * 1001
   */
  applyBusinessId?: string;
  applyBusinessName?: string;
  /**
   * @example
   * 1424031910085891196
   */
  applyId?: string;
  exceedApply?: HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply[];
  /**
   * @example
   * ef5e74dc1f1640b08858fb043f64e477-8
   */
  itineraryNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyBusinessId: 'apply_business_id',
      applyBusinessName: 'apply_business_name',
      applyId: 'apply_id',
      exceedApply: 'exceed_apply',
      itineraryNo: 'itinerary_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyBusinessId: 'string',
      applyBusinessName: 'string',
      applyId: 'string',
      exceedApply: { 'type': 'array', 'itemType': HotelOrderInfoQueryResponseBodyModuleRoomTraverInfoTraverInfosApplyInfoExceedApply },
      itineraryNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceedApply)) {
      $dara.Model.validateArray(this.exceedApply);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


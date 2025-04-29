// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HotelOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 12345678
   */
  applyId?: string;
  btripTitle?: string;
  category?: number;
  /**
   * @example
   * iscorpId
   */
  corpId?: string;
  corpName?: string;
  /**
   * @example
   * 12345678
   */
  departId?: string;
  departName?: string;
  exceedApplyNos?: string[];
  extendField?: string;
  /**
   * @example
   * 1669344020
   */
  gmtCreate?: number;
  /**
   * @example
   * 1669344020
   */
  gmtModified?: number;
  /**
   * @example
   * 1002145190081005400
   */
  id?: number;
  /**
   * @example
   * 12345678
   */
  itineraryId?: string;
  /**
   * @example
   * 1
   */
  orderStatus?: number;
  /**
   * @example
   * 1
   */
  orderType?: number;
  supplier?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartApplyId?: string;
  thirdpartBusinessId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * 12345678
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 12345678
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      category: 'category',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyNos: 'exceed_apply_nos',
      extendField: 'extend_field',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      itineraryId: 'itinerary_id',
      orderStatus: 'order_status',
      orderType: 'order_type',
      supplier: 'supplier',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      category: 'number',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyNos: { 'type': 'array', 'itemType': 'string' },
      extendField: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      itineraryId: 'string',
      orderStatus: 'number',
      orderType: 'number',
      supplier: 'string',
      thirdpartApplyId: 'string',
      thirdpartBusinessId: 'string',
      thirdpartDepartId: 'string',
      thirdpartItineraryId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exceedApplyNos)) {
      $dara.Model.validateArray(this.exceedApplyNos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderQueryResponseBodyModuleOrderBaseInfo extends $dara.Model {
  /**
   * @example
   * 11657
   */
  applyId?: string;
  btripTitle?: string;
  contactName?: string;
  corpId?: string;
  corpName?: string;
  departId?: string;
  departName?: string;
  /**
   * @remarks
   * 火车票超标审批id
   * 
   * @example
   * 1422113021033961000
   */
  exceedApplyId?: string;
  /**
   * @remarks
   * 火车票超标审批三方id
   * 
   * @example
   * 2022113021030003600001715
   */
  exceedThirdPartApplyId?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2022-05-15T22:27Z
   */
  gmtModify?: string;
  /**
   * @example
   * kaxasevesguikxn123kixnghid
   */
  itineraryId?: string;
  /**
   * @example
   * 2627694109810885616
   */
  orderId?: number;
  /**
   * @example
   * 4
   */
  orderStatus?: number;
  /**
   * @example
   * CS-EDES9898
   */
  thirdpartApplyId?: string;
  thirdpartCorpId?: string;
  /**
   * @example
   * kaxasevesguikxn123kixnghid
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  tripType?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyId: 'apply_id',
      btripTitle: 'btrip_title',
      contactName: 'contact_name',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      exceedApplyId: 'exceed_apply_id',
      exceedThirdPartApplyId: 'exceed_third_part_apply_id',
      gmtCreate: 'gmt_create',
      gmtModify: 'gmt_modify',
      itineraryId: 'itinerary_id',
      orderId: 'order_id',
      orderStatus: 'order_status',
      thirdpartApplyId: 'thirdpart_apply_id',
      thirdpartCorpId: 'thirdpart_corp_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      tripType: 'trip_type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyId: 'string',
      btripTitle: 'string',
      contactName: 'string',
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      exceedApplyId: 'string',
      exceedThirdPartApplyId: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      itineraryId: 'string',
      orderId: 'number',
      orderStatus: 'number',
      thirdpartApplyId: 'string',
      thirdpartCorpId: 'string',
      thirdpartItineraryId: 'string',
      tripType: 'number',
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


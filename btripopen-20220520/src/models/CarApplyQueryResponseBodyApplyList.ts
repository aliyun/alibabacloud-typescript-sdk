// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CarApplyQueryResponseBodyApplyListApproverList } from "./CarApplyQueryResponseBodyApplyListApproverList";
import { CarApplyQueryResponseBodyApplyListItineraryList } from "./CarApplyQueryResponseBodyApplyListItineraryList";
import { CarApplyQueryResponseBodyApplyListTravelerStandard } from "./CarApplyQueryResponseBodyApplyListTravelerStandard";


export class CarApplyQueryResponseBodyApplyList extends $dara.Model {
  approverList?: CarApplyQueryResponseBodyApplyListApproverList[];
  businessType?: string;
  /**
   * @example
   * depart1
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2021-03-18T20:26Z
   */
  gmtModified?: string;
  itineraryList?: CarApplyQueryResponseBodyApplyListItineraryList[];
  orderId?: number;
  relatedThirdApplyId?: string;
  /**
   * @example
   * 2
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * 1
   */
  thirdpartId?: string;
  travelerStandard?: CarApplyQueryResponseBodyApplyListTravelerStandard[];
  tripCause?: string;
  tripTitle?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      approverList: 'approver_list',
      businessType: 'business_type',
      departId: 'depart_id',
      departName: 'depart_name',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      itineraryList: 'itinerary_list',
      orderId: 'order_id',
      relatedThirdApplyId: 'related_third_apply_id',
      status: 'status',
      statusDesc: 'status_desc',
      thirdpartId: 'thirdpart_id',
      travelerStandard: 'traveler_standard',
      tripCause: 'trip_cause',
      tripTitle: 'trip_title',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approverList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListApproverList },
      businessType: 'string',
      departId: 'string',
      departName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      itineraryList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListItineraryList },
      orderId: 'number',
      relatedThirdApplyId: 'string',
      status: 'number',
      statusDesc: 'string',
      thirdpartId: 'string',
      travelerStandard: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListTravelerStandard },
      tripCause: 'string',
      tripTitle: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approverList)) {
      $dara.Model.validateArray(this.approverList);
    }
    if(Array.isArray(this.itineraryList)) {
      $dara.Model.validateArray(this.itineraryList);
    }
    if(Array.isArray(this.travelerStandard)) {
      $dara.Model.validateArray(this.travelerStandard);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


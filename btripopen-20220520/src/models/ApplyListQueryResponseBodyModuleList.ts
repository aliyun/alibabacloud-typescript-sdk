// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyListQueryResponseBodyModuleListApproverList } from "./ApplyListQueryResponseBodyModuleListApproverList";
import { ApplyListQueryResponseBodyModuleListCarRule } from "./ApplyListQueryResponseBodyModuleListCarRule";
import { ApplyListQueryResponseBodyModuleListExternalTravelerList } from "./ApplyListQueryResponseBodyModuleListExternalTravelerList";
import { ApplyListQueryResponseBodyModuleListItineraryList } from "./ApplyListQueryResponseBodyModuleListItineraryList";
import { ApplyListQueryResponseBodyModuleListItinerarySetList } from "./ApplyListQueryResponseBodyModuleListItinerarySetList";
import { ApplyListQueryResponseBodyModuleListTravelerList } from "./ApplyListQueryResponseBodyModuleListTravelerList";


export class ApplyListQueryResponseBodyModuleList extends $dara.Model {
  /**
   * @example
   * 201710111505000464651
   */
  applyShowId?: string;
  approverList?: ApplyListQueryResponseBodyModuleListApproverList[];
  carRule?: ApplyListQueryResponseBodyModuleListCarRule;
  /**
   * @example
   * corp1
   */
  corpId?: string;
  /**
   * @example
   * abc
   */
  corpName?: string;
  /**
   * @example
   * depart1
   */
  departId?: string;
  departName?: string;
  externalTravelerList?: ApplyListQueryResponseBodyModuleListExternalTravelerList[];
  /**
   * @example
   * abc1234
   */
  flowCode?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1476
   */
  id?: number;
  itineraryList?: ApplyListQueryResponseBodyModuleListItineraryList[];
  /**
   * @example
   * 0
   */
  itineraryRule?: number;
  itinerarySetList?: ApplyListQueryResponseBodyModuleListItinerarySetList[];
  jobNo?: string;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  statusDesc?: string;
  /**
   * @example
   * abc
   */
  thirdpartBusinessId?: string;
  /**
   * @example
   * abc
   */
  thirdpartId?: string;
  travelerList?: ApplyListQueryResponseBodyModuleListTravelerList[];
  tripCause?: string;
  /**
   * @example
   * 1
   */
  tripDay?: number;
  tripTitle?: string;
  /**
   * @example
   * 2
   */
  type?: number;
  /**
   * @example
   * abc
   */
  unionNo?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      applyShowId: 'apply_show_id',
      approverList: 'approver_list',
      carRule: 'car_rule',
      corpId: 'corp_id',
      corpName: 'corp_name',
      departId: 'depart_id',
      departName: 'depart_name',
      externalTravelerList: 'external_traveler_list',
      flowCode: 'flow_code',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      id: 'id',
      itineraryList: 'itinerary_list',
      itineraryRule: 'itinerary_rule',
      itinerarySetList: 'itinerary_set_list',
      jobNo: 'job_no',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      status: 'status',
      statusDesc: 'status_desc',
      thirdpartBusinessId: 'thirdpart_business_id',
      thirdpartId: 'thirdpart_id',
      travelerList: 'traveler_list',
      tripCause: 'trip_cause',
      tripDay: 'trip_day',
      tripTitle: 'trip_title',
      type: 'type',
      unionNo: 'union_no',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyShowId: 'string',
      approverList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListApproverList },
      carRule: ApplyListQueryResponseBodyModuleListCarRule,
      corpId: 'string',
      corpName: 'string',
      departId: 'string',
      departName: 'string',
      externalTravelerList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListExternalTravelerList },
      flowCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      itineraryList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListItineraryList },
      itineraryRule: 'number',
      itinerarySetList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListItinerarySetList },
      jobNo: 'string',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      status: 'number',
      statusDesc: 'string',
      thirdpartBusinessId: 'string',
      thirdpartId: 'string',
      travelerList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListTravelerList },
      tripCause: 'string',
      tripDay: 'number',
      tripTitle: 'string',
      type: 'number',
      unionNo: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.approverList)) {
      $dara.Model.validateArray(this.approverList);
    }
    if(this.carRule && typeof (this.carRule as any).validate === 'function') {
      (this.carRule as any).validate();
    }
    if(Array.isArray(this.externalTravelerList)) {
      $dara.Model.validateArray(this.externalTravelerList);
    }
    if(Array.isArray(this.itineraryList)) {
      $dara.Model.validateArray(this.itineraryList);
    }
    if(Array.isArray(this.itinerarySetList)) {
      $dara.Model.validateArray(this.itinerarySetList);
    }
    if(Array.isArray(this.travelerList)) {
      $dara.Model.validateArray(this.travelerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


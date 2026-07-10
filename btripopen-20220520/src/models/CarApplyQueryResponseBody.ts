// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CarApplyQueryResponseBodyApplyListApproverList extends $dara.Model {
  note?: string;
  operateTime?: string;
  order?: number;
  status?: number;
  statusDesc?: string;
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      note: 'note',
      operateTime: 'operate_time',
      order: 'order',
      status: 'status',
      statusDesc: 'status_desc',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      note: 'string',
      operateTime: 'string',
      order: 'number',
      status: 'number',
      statusDesc: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyListItineraryList extends $dara.Model {
  arrCity?: string;
  arrCityCode?: string;
  arrDate?: string;
  costCenterId?: number;
  costCenterName?: string;
  depCity?: string;
  depCityCode?: string;
  depDate?: string;
  invoiceId?: number;
  invoiceName?: string;
  itineraryId?: string;
  projectCode?: string;
  projectTitle?: string;
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrCityCode: 'arr_city_code',
      arrDate: 'arr_date',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depCityCode: 'dep_city_code',
      depDate: 'dep_date',
      invoiceId: 'invoice_id',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrCityCode: 'string',
      arrDate: 'string',
      costCenterId: 'number',
      costCenterName: 'string',
      depCity: 'string',
      depCityCode: 'string',
      depDate: 'string',
      invoiceId: 'number',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      trafficType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet extends $dara.Model {
  cityCode?: string;
  cityName?: string;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'city_code',
      cityName: 'city_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyListTravelerStandard extends $dara.Model {
  carCitySet?: CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      carCitySet: 'car_city_set',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      carCitySet: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyListTravelerStandardCarCitySet },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.carCitySet)) {
      $dara.Model.validateArray(this.carCitySet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CarApplyQueryResponseBodyApplyList extends $dara.Model {
  approverList?: CarApplyQueryResponseBodyApplyListApproverList[];
  businessType?: string;
  departId?: string;
  departName?: string;
  gmtCreate?: string;
  gmtModified?: string;
  itineraryList?: CarApplyQueryResponseBodyApplyListItineraryList[];
  orderId?: number;
  relatedThirdApplyId?: string;
  status?: number;
  statusDesc?: string;
  thirdpartId?: string;
  travelerStandard?: CarApplyQueryResponseBodyApplyListTravelerStandard[];
  tripCause?: string;
  tripTitle?: string;
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

export class CarApplyQueryResponseBody extends $dara.Model {
  applyList?: CarApplyQueryResponseBodyApplyList[];
  code?: string;
  message?: string;
  requestId?: string;
  success?: boolean;
  total?: number;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyList: 'apply_list',
      code: 'code',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
      total: 'total',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyList: { 'type': 'array', 'itemType': CarApplyQueryResponseBodyApplyList },
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      total: 'number',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyList)) {
      $dara.Model.validateArray(this.applyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


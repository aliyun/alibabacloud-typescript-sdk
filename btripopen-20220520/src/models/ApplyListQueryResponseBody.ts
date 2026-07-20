// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryResponseBodyModuleListApproverList extends $dara.Model {
  /**
   * @example
   * 同意
   */
  note?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  operateTime?: string;
  /**
   * @example
   * 1
   */
  order?: number;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 同意
   */
  statusDesc?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
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

export class ApplyListQueryResponseBodyModuleListCarRule extends $dara.Model {
  /**
   * @example
   * 12345
   */
  scenarioTemplateId?: string;
  /**
   * @example
   * 测试场景模板
   */
  scenarioTemplateName?: string;
  static names(): { [key: string]: string } {
    return {
      scenarioTemplateId: 'scenario_template_id',
      scenarioTemplateName: 'scenario_template_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scenarioTemplateId: 'string',
      scenarioTemplateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListExternalTravelerList extends $dara.Model {
  /**
   * @example
   * “{"name":"张三"}”
   */
  attribute?: string;
  /**
   * @example
   * 商旅成本中心
   */
  costCenterName?: string;
  /**
   * @example
   * 010000009
   */
  departId?: string;
  /**
   * @example
   * 371164
   */
  externalUserId?: string;
  /**
   * @example
   * HD10002411
   */
  invoiceName?: string;
  /**
   * @example
   * 一级事业部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  /**
   * @example
   * 项目xxx
   */
  projectTitle?: string;
  /**
   * @example
   * DHDI2212201N1DGZDD
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      costCenterName: 'cost_center_name',
      departId: 'depart_id',
      externalUserId: 'external_user_id',
      invoiceName: 'invoice_name',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartDepartId: 'thirdpart_depart_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      costCenterName: 'string',
      departId: 'string',
      externalUserId: 'string',
      invoiceName: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartDepartId: 'string',
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

export class ApplyListQueryResponseBodyModuleListItineraryList extends $dara.Model {
  /**
   * @example
   * 北京
   */
  arrCity?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  /**
   * @example
   * 阿里巴巴
   */
  costCenterName?: string;
  /**
   * @example
   * 杭州
   */
  depCity?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  /**
   * @example
   * 阿里巴巴
   */
  invoiceName?: string;
  /**
   * @example
   * abcd
   */
  itineraryId?: string;
  /**
   * @example
   * xm1
   */
  projectCode?: string;
  /**
   * @example
   * 项目1
   */
  projectTitle?: string;
  /**
   * @example
   * 12345
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * 12345
   */
  thirdpartInvoiceId?: string;
  /**
   * @example
   * thirdpart1234
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  trafficType?: number;
  /**
   * @example
   * 1
   */
  tripWay?: number;
  static names(): { [key: string]: string } {
    return {
      arrCity: 'arr_city',
      arrDate: 'arr_date',
      costCenterName: 'cost_center_name',
      depCity: 'dep_city',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      trafficType: 'traffic_type',
      tripWay: 'trip_way',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrCity: 'string',
      arrDate: 'string',
      costCenterName: 'string',
      depCity: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
      trafficType: 'number',
      tripWay: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyListQueryResponseBodyModuleListItinerarySetList extends $dara.Model {
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  arrDate?: string;
  /**
   * @example
   * BJS，HGH
   */
  cityCodeSet?: string;
  /**
   * @example
   * 北京，杭州
   */
  citySet?: string;
  /**
   * @example
   * 测试成本中心
   */
  costCenterName?: string;
  /**
   * @example
   * 2018-09-19T14:03Z
   */
  depDate?: string;
  /**
   * @example
   * 测试发票抬头
   */
  invoiceName?: string;
  /**
   * @example
   * abcd
   */
  itineraryId?: string;
  /**
   * @example
   * 12345
   */
  projectCode?: string;
  /**
   * @example
   * 项目名称
   */
  projectTitle?: string;
  /**
   * @example
   * 12345
   */
  thirdpartCostCenterId?: string;
  /**
   * @example
   * 12345
   */
  thirdpartInvoiceId?: string;
  /**
   * @example
   * thirdpart1234
   */
  thirdpartItineraryId?: string;
  /**
   * @example
   * 0
   */
  trafficType?: number;
  static names(): { [key: string]: string } {
    return {
      arrDate: 'arr_date',
      cityCodeSet: 'city_code_set',
      citySet: 'city_set',
      costCenterName: 'cost_center_name',
      depDate: 'dep_date',
      invoiceName: 'invoice_name',
      itineraryId: 'itinerary_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartInvoiceId: 'thirdpart_invoice_id',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
      trafficType: 'traffic_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrDate: 'string',
      cityCodeSet: 'string',
      citySet: 'string',
      costCenterName: 'string',
      depDate: 'string',
      invoiceName: 'string',
      itineraryId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartInvoiceId: 'string',
      thirdpartItineraryId: 'string',
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

export class ApplyListQueryResponseBodyModuleListTravelerListCarCitySet extends $dara.Model {
  /**
   * @example
   * 110100,330100
   */
  cityCode?: string;
  /**
   * @example
   * 北京，杭州
   */
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

export class ApplyListQueryResponseBodyModuleListTravelerList extends $dara.Model {
  /**
   * @example
   * “{"name":"张三"}”
   */
  attribute?: string;
  carCitySet?: ApplyListQueryResponseBodyModuleListTravelerListCarCitySet[];
  /**
   * @example
   * “成本中心”
   */
  costCenterName?: string;
  /**
   * @example
   * 330920003106
   */
  departId?: string;
  /**
   * @example
   * HD55226
   */
  invoiceName?: string;
  /**
   * @example
   * 12345
   */
  jobNo?: string;
  /**
   * @example
   * “一级事业部”
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * acs
   */
  projectCode?: string;
  /**
   * @example
   * “成本项目”
   */
  projectTitle?: string;
  /**
   * @example
   * 10225
   */
  thirdpartDepartId?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
  /**
   * @example
   * 张三
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      carCitySet: 'car_city_set',
      costCenterName: 'cost_center_name',
      departId: 'depart_id',
      invoiceName: 'invoice_name',
      jobNo: 'job_no',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdpartDepartId: 'thirdpart_depart_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      carCitySet: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleListTravelerListCarCitySet },
      costCenterName: 'string',
      departId: 'string',
      invoiceName: 'string',
      jobNo: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdpartDepartId: 'string',
      userId: 'string',
      userName: 'string',
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
  /**
   * @example
   * 淘宝
   */
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
  /**
   * @example
   * 1234567
   */
  jobNo?: string;
  /**
   * @example
   * 1142256
   */
  paymentDepartmentId?: string;
  /**
   * @example
   * 一级事业部
   */
  paymentDepartmentName?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * 同意
   */
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
  /**
   * @example
   * 北京出差
   */
  tripCause?: string;
  /**
   * @example
   * 1
   */
  tripDay?: number;
  /**
   * @example
   * 北京出差
   */
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
  /**
   * @example
   * 张三
   */
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

export class ApplyListQueryResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @example
   * 成功
   */
  message?: string;
  moduleList?: ApplyListQueryResponseBodyModuleList[];
  /**
   * @example
   * C61ECFF6-606B-5F66-B81D-D77369043A5F
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 21041ce316577904808056433edbb2
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      moduleList: 'module_list',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      moduleList: { 'type': 'array', 'itemType': ApplyListQueryResponseBodyModuleList },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.moduleList)) {
      $dara.Model.validateArray(this.moduleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


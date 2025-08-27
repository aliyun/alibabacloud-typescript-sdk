// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyQueryResponseBodyModuleApplyUser extends $dara.Model {
  /**
   * @example
   * 2123
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class MealApplyQueryResponseBodyModuleItineraryListCities extends $dara.Model {
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

export class MealApplyQueryResponseBodyModuleItineraryList extends $dara.Model {
  cities?: MealApplyQueryResponseBodyModuleItineraryListCities[];
  endDate?: string;
  startDate?: string;
  thirdpartItineraryId?: string;
  static names(): { [key: string]: string } {
    return {
      cities: 'cities',
      endDate: 'end_date',
      startDate: 'start_date',
      thirdpartItineraryId: 'thirdpart_itinerary_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cities: { 'type': 'array', 'itemType': MealApplyQueryResponseBodyModuleItineraryListCities },
      endDate: 'string',
      startDate: 'string',
      thirdpartItineraryId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cities)) {
      $dara.Model.validateArray(this.cities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyQueryResponseBodyModule extends $dara.Model {
  applyUser?: MealApplyQueryResponseBodyModuleApplyUser;
  /**
   * @example
   * 11376
   */
  costCenterId?: number;
  /**
   * @example
   * 2022-07-04T16:13Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 11876
   */
  invoiceId?: number;
  itineraryList?: MealApplyQueryResponseBodyModuleItineraryList[];
  mealAmount?: number;
  mealCause?: string;
  /**
   * @example
   * 11546
   */
  projectId?: number;
  /**
   * @example
   * 0
   */
  status?: number;
  /**
   * @example
   * 2024073128454753
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * 330000303010292572
   */
  thirdPartCostCenterId?: string;
  /**
   * @example
   * 405009
   */
  thirdPartInvoiceId?: string;
  /**
   * @example
   * CS-PROJECT
   */
  thirdPartProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      applyUser: 'apply_user',
      costCenterId: 'cost_center_id',
      gmtCreate: 'gmt_create',
      invoiceId: 'invoice_id',
      itineraryList: 'itinerary_list',
      mealAmount: 'meal_amount',
      mealCause: 'meal_cause',
      projectId: 'project_id',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdPartProjectId: 'third_part_project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUser: MealApplyQueryResponseBodyModuleApplyUser,
      costCenterId: 'number',
      gmtCreate: 'string',
      invoiceId: 'number',
      itineraryList: { 'type': 'array', 'itemType': MealApplyQueryResponseBodyModuleItineraryList },
      mealAmount: 'number',
      mealCause: 'string',
      projectId: 'number',
      status: 'number',
      thirdPartApplyId: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartInvoiceId: 'string',
      thirdPartProjectId: 'string',
    };
  }

  validate() {
    if(this.applyUser && typeof (this.applyUser as any).validate === 'function') {
      (this.applyUser as any).validate();
    }
    if(Array.isArray(this.itineraryList)) {
      $dara.Model.validateArray(this.itineraryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MealApplyQueryResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: string;
  message?: string;
  module?: MealApplyQueryResponseBodyModule;
  /**
   * @example
   * A5009956-1077-52FB-B520-EA8C7E91D722
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210f07f316603757445272547d959f
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: MealApplyQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyModifyRequestApplyUser extends $dara.Model {
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class MealApplyModifyRequestItineraryListCities extends $dara.Model {
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

export class MealApplyModifyRequestItineraryList extends $dara.Model {
  cities?: MealApplyModifyRequestItineraryListCities[];
  /**
   * @remarks
   * This parameter is required.
   */
  endDate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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
      cities: { 'type': 'array', 'itemType': MealApplyModifyRequestItineraryListCities },
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

export class MealApplyModifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyUser?: MealApplyModifyRequestApplyUser;
  costCenterId?: number;
  extendField?: string;
  invoiceId?: number;
  itineraryList?: MealApplyModifyRequestItineraryList[];
  mealAmount?: number;
  mealCause?: string;
  projectCode?: string;
  projectTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  status?: number;
  thirdPartApplyId?: string;
  thirdPartCostCenterId?: string;
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyUser: 'apply_user',
      costCenterId: 'cost_center_id',
      extendField: 'extend_field',
      invoiceId: 'invoice_id',
      itineraryList: 'itinerary_list',
      mealAmount: 'meal_amount',
      mealCause: 'meal_cause',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      status: 'status',
      thirdPartApplyId: 'third_part_apply_id',
      thirdPartCostCenterId: 'third_part_cost_center_id',
      thirdPartInvoiceId: 'third_part_invoice_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyUser: MealApplyModifyRequestApplyUser,
      costCenterId: 'number',
      extendField: 'string',
      invoiceId: 'number',
      itineraryList: { 'type': 'array', 'itemType': MealApplyModifyRequestItineraryList },
      mealAmount: 'number',
      mealCause: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      status: 'number',
      thirdPartApplyId: 'string',
      thirdPartCostCenterId: 'string',
      thirdPartInvoiceId: 'string',
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


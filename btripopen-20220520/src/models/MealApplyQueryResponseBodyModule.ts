// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MealApplyQueryResponseBodyModuleApplyUser } from "./MealApplyQueryResponseBodyModuleApplyUser";
import { MealApplyQueryResponseBodyModuleItineraryList } from "./MealApplyQueryResponseBodyModuleItineraryList";


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


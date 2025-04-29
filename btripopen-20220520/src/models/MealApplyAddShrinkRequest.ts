// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MealApplyAddShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyUserShrink?: string;
  /**
   * @example
   * 23
   */
  costCenterId?: number;
  /**
   * @example
   * 123
   */
  invoiceId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  itineraryListShrink?: string;
  /**
   * @example
   * 1
   */
  mealAmount?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  mealCause?: string;
  /**
   * @example
   * project123
   */
  projectCode?: string;
  projectTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  thirdPartApplyId?: string;
  /**
   * @example
   * 1200F00010
   */
  thirdPartCostCenterId?: string;
  /**
   * @example
   * GA15131
   */
  thirdPartInvoiceId?: string;
  static names(): { [key: string]: string } {
    return {
      applyUserShrink: 'apply_user',
      costCenterId: 'cost_center_id',
      invoiceId: 'invoice_id',
      itineraryListShrink: 'itinerary_list',
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
      applyUserShrink: 'string',
      costCenterId: 'number',
      invoiceId: 'number',
      itineraryListShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


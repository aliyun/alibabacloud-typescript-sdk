// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApproveProvisionedProductPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The review action. Valid values:
   * 
   * *   Approve
   * *   Reject
   * 
   * This parameter is required.
   * 
   * @example
   * Approve
   */
  approvalAction?: string;
  /**
   * @remarks
   * The review description.
   * 
   * @example
   * Approved. You can create a resource.
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-bp1jvmdk2k****
   */
  planId?: string;
  static names(): { [key: string]: string } {
    return {
      approvalAction: 'ApprovalAction',
      comment: 'Comment',
      planId: 'PlanId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalAction: 'string',
      comment: 'string',
      planId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


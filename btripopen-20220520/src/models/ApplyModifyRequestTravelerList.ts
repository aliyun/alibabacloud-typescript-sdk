// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyRequestTravelerList extends $dara.Model {
  attribute?: string;
  costCenterId?: number;
  invoiceId?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  thirdpartDepartId?: string;
  /**
   * @example
   * GS641312
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      invoiceId: 'invoice_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      costCenterId: 'number',
      invoiceId: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartDepartId: 'string',
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


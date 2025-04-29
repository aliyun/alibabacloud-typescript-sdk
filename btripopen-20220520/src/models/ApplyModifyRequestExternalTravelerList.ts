// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyModifyRequestExternalTravelerList extends $dara.Model {
  attribute?: string;
  costCenterId?: number;
  externalUserId?: string;
  invoiceId?: number;
  paymentDepartmentId?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdPartInvoiceId?: string;
  thirdpartCostCenterId?: string;
  thirdpartDepartId?: string;
  userName?: string;
  userNameEn?: string;
  static names(): { [key: string]: string } {
    return {
      attribute: 'attribute',
      costCenterId: 'cost_center_id',
      externalUserId: 'external_user_id',
      invoiceId: 'invoice_id',
      paymentDepartmentId: 'payment_department_id',
      paymentDepartmentName: 'payment_department_name',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      thirdPartInvoiceId: 'third_part_invoice_id',
      thirdpartCostCenterId: 'thirdpart_cost_center_id',
      thirdpartDepartId: 'thirdpart_depart_id',
      userName: 'user_name',
      userNameEn: 'user_name_en',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attribute: 'string',
      costCenterId: 'number',
      externalUserId: 'string',
      invoiceId: 'number',
      paymentDepartmentId: 'string',
      paymentDepartmentName: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      thirdPartInvoiceId: 'string',
      thirdpartCostCenterId: 'string',
      thirdpartDepartId: 'string',
      userName: 'string',
      userNameEn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


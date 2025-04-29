// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyListQueryResponseBodyModuleListExternalTravelerList extends $dara.Model {
  attribute?: string;
  costCenterName?: string;
  departId?: string;
  externalUserId?: string;
  invoiceName?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdpartDepartId?: string;
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


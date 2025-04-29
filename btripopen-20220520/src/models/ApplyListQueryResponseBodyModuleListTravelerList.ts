// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyListQueryResponseBodyModuleListTravelerListCarCitySet } from "./ApplyListQueryResponseBodyModuleListTravelerListCarCitySet";


export class ApplyListQueryResponseBodyModuleListTravelerList extends $dara.Model {
  attribute?: string;
  carCitySet?: ApplyListQueryResponseBodyModuleListTravelerListCarCitySet[];
  costCenterName?: string;
  departId?: string;
  invoiceName?: string;
  jobNo?: string;
  paymentDepartmentName?: string;
  projectCode?: string;
  projectTitle?: string;
  thirdpartDepartId?: string;
  /**
   * @example
   * user1
   */
  userId?: string;
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


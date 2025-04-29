// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderDetailQueryResponseBodyModulePassengerInfoSCostCenterInfo extends $dara.Model {
  cascadeDeptName?: string;
  /**
   * @example
   * 111111
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 123456
   */
  costCenterNo?: string;
  /**
   * @example
   * 582000002311
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 11111
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * 123456
   */
  passengerId?: string;
  /**
   * @example
   * 1234
   */
  projectCode?: string;
  projectTitle?: string;
  static names(): { [key: string]: string } {
    return {
      cascadeDeptName: 'cascade_dept_name',
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      costCenterNo: 'cost_center_no',
      departId: 'depart_id',
      departName: 'depart_name',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      passengerId: 'passenger_id',
      projectCode: 'project_code',
      projectTitle: 'project_title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cascadeDeptName: 'string',
      costCenterId: 'string',
      costCenterName: 'string',
      costCenterNo: 'string',
      departId: 'string',
      departName: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      passengerId: 'string',
      projectCode: 'string',
      projectTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


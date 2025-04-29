// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrainOrderCreateRequestPassengerOpenInfoSCostCenterInfo extends $dara.Model {
  cascadeDeptName?: string;
  /**
   * @example
   * 123321
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 12332112344
   */
  costCenterNo?: string;
  /**
   * @example
   * 010000009
   */
  departId?: string;
  departName?: string;
  /**
   * @example
   * 111111
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * acs
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


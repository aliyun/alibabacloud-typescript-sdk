// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IFlightOrderListQueryResponseBodyModuleFlightSaleOrderPassengerList extends $dara.Model {
  /**
   * @example
   * 0111
   */
  costCenterId?: string;
  costCenterName?: string;
  /**
   * @example
   * 1002
   */
  departmentId?: string;
  departmentName?: string;
  /**
   * @example
   * 01112
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * 100757
   */
  jobNo?: string;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 1111
   */
  projectCode?: string;
  projectTitle?: string;
  /**
   * @example
   * 01323
   */
  userId?: string;
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      costCenterId: 'cost_center_id',
      costCenterName: 'cost_center_name',
      departmentId: 'department_id',
      departmentName: 'department_name',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      jobNo: 'job_no',
      passengerType: 'passenger_type',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      costCenterId: 'string',
      costCenterName: 'string',
      departmentId: 'string',
      departmentName: 'string',
      invoiceId: 'string',
      invoiceTitle: 'string',
      jobNo: 'string',
      passengerType: 'number',
      projectCode: 'string',
      projectTitle: 'string',
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


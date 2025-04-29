// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightCreateOrderV2RequestTravelers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1991-01-22
   */
  birthday?: string;
  certNation?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  certType?: number;
  certValidDate?: string;
  costCenterName?: string;
  costCenterNumber?: string;
  deptId?: string;
  deptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gender?: number;
  invoiceTitle?: string;
  nationality?: string;
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  passengerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  phone?: string;
  projectCode?: string;
  projectTitle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18155711459129970552412
   */
  userId?: string;
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      certNation: 'cert_nation',
      certNo: 'cert_no',
      certType: 'cert_type',
      certValidDate: 'cert_valid_date',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      deptId: 'dept_id',
      deptName: 'dept_name',
      gender: 'gender',
      invoiceTitle: 'invoice_title',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerName: 'passenger_name',
      passengerType: 'passenger_type',
      phone: 'phone',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certNation: 'string',
      certNo: 'string',
      certType: 'number',
      certValidDate: 'string',
      costCenterName: 'string',
      costCenterNumber: 'string',
      deptId: 'string',
      deptName: 'string',
      gender: 'number',
      invoiceTitle: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerName: 'string',
      passengerType: 'number',
      phone: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


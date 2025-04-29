// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightCreateOrderRequestPassengerListCertInfo } from "./IntlFlightCreateOrderRequestPassengerListCertInfo";
import { IntlFlightCreateOrderRequestPassengerListSubsidiaryCertInfoList } from "./IntlFlightCreateOrderRequestPassengerListSubsidiaryCertInfoList";


export class IntlFlightCreateOrderRequestPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01
   */
  birthday?: string;
  /**
   * @example
   * 100/12131231
   */
  cascadeDeptMask?: string;
  cascadeDeptName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certInfo?: IntlFlightCreateOrderRequestPassengerListCertInfo;
  costCenterName?: string;
  /**
   * @example
   * 312434
   */
  costCenterNumber?: string;
  /**
   * @example
   * 12131231
   */
  deptId?: string;
  deptName?: string;
  /**
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * 10001313
   */
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * ZNW0525
   */
  jobNo?: string;
  /**
   * @example
   * 086
   */
  mobileCountryCode?: string;
  nationality?: string;
  /**
   * @example
   * CN
   */
  nationalityCode?: string;
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
   * 
   * @example
   * 18012341234
   */
  phone?: string;
  /**
   * @example
   * 10123143
   */
  projectCode?: string;
  projectTitle?: string;
  subsidiaryCertInfoList?: IntlFlightCreateOrderRequestPassengerListSubsidiaryCertInfoList[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13123123212
   */
  userId?: string;
  /**
   * @example
   * 0
   */
  userType?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      cascadeDeptMask: 'cascade_dept_mask',
      cascadeDeptName: 'cascade_dept_name',
      certInfo: 'cert_info',
      costCenterName: 'cost_center_name',
      costCenterNumber: 'cost_center_number',
      deptId: 'dept_id',
      deptName: 'dept_name',
      gender: 'gender',
      invoiceId: 'invoice_id',
      invoiceTitle: 'invoice_title',
      jobNo: 'job_no',
      mobileCountryCode: 'mobile_country_code',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerType: 'passenger_type',
      phone: 'phone',
      projectCode: 'project_code',
      projectTitle: 'project_title',
      subsidiaryCertInfoList: 'subsidiary_cert_info_list',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      cascadeDeptMask: 'string',
      cascadeDeptName: 'string',
      certInfo: IntlFlightCreateOrderRequestPassengerListCertInfo,
      costCenterName: 'string',
      costCenterNumber: 'string',
      deptId: 'string',
      deptName: 'string',
      gender: 'number',
      invoiceId: 'string',
      invoiceTitle: 'string',
      jobNo: 'string',
      mobileCountryCode: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerType: 'number',
      phone: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      subsidiaryCertInfoList: { 'type': 'array', 'itemType': IntlFlightCreateOrderRequestPassengerListSubsidiaryCertInfoList },
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(this.certInfo && typeof (this.certInfo as any).validate === 'function') {
      (this.certInfo as any).validate();
    }
    if(Array.isArray(this.subsidiaryCertInfoList)) {
      $dara.Model.validateArray(this.subsidiaryCertInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


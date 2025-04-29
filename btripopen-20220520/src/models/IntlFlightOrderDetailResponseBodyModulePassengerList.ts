// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightOrderDetailResponseBodyModulePassengerListCertInfo } from "./IntlFlightOrderDetailResponseBodyModulePassengerListCertInfo";
import { IntlFlightOrderDetailResponseBodyModulePassengerListSubsidiaryCertInfoList } from "./IntlFlightOrderDetailResponseBodyModulePassengerListSubsidiaryCertInfoList";


export class IntlFlightOrderDetailResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * 1996-09-13
   */
  birthday?: string;
  /**
   * @example
   * 1000
   */
  cascadeDeptMask?: string;
  cascadeDeptName?: string;
  certInfo?: IntlFlightOrderDetailResponseBodyModulePassengerListCertInfo;
  costCenterName?: string;
  /**
   * @example
   * 1009909
   */
  costCenterNumber?: string;
  /**
   * @example
   * 1001
   */
  deptId?: string;
  deptName?: string;
  /**
   * @example
   * 0
   */
  gender?: number;
  invoiceId?: string;
  invoiceTitle?: string;
  /**
   * @example
   * 1001101
   */
  jobNo?: string;
  /**
   * @example
   * 86
   */
  mobileCountryCode?: string;
  nationality?: string;
  /**
   * @example
   * CN
   */
  nationalityCode?: string;
  /**
   * @example
   * 8432002
   */
  passengerId?: number;
  /**
   * @example
   * 0
   */
  passengerType?: number;
  /**
   * @example
   * 185006021321
   */
  phone?: string;
  /**
   * @example
   * testcode
   */
  projectCode?: string;
  projectTitle?: string;
  subsidiaryCertInfoList?: IntlFlightOrderDetailResponseBodyModulePassengerListSubsidiaryCertInfoList[];
  /**
   * @example
   * 12292812036903456
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
      passengerId: 'passenger_id',
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
      certInfo: IntlFlightOrderDetailResponseBodyModulePassengerListCertInfo,
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
      passengerId: 'number',
      passengerType: 'number',
      phone: 'string',
      projectCode: 'string',
      projectTitle: 'string',
      subsidiaryCertInfoList: { 'type': 'array', 'itemType': IntlFlightOrderDetailResponseBodyModulePassengerListSubsidiaryCertInfoList },
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


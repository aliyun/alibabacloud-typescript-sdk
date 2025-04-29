// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment } from "./HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment";


export class HotelOrderInfoQueryResponseBodyModuleBookerInfo extends $dara.Model {
  /**
   * @example
   * UN_APPLY
   */
  bookerRole?: string;
  /**
   * @example
   * 13311112222@qq.com
   */
  contactEmail?: string;
  /**
   * @example
   * 13311112222
   */
  contactPhone?: string;
  /**
   * @example
   * open12gddn2kn1i47v10wRJNkMFx00
   */
  corpId?: string;
  department?: HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment;
  /**
   * @example
   * Tom
   */
  enName?: string;
  /**
   * @example
   * 1001
   */
  jobNo?: string;
  /**
   * @example
   * true
   */
  needApply?: boolean;
  realName?: string;
  /**
   * @example
   * 1430378
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bookerRole: 'booker_role',
      contactEmail: 'contact_email',
      contactPhone: 'contact_phone',
      corpId: 'corp_id',
      department: 'department',
      enName: 'en_name',
      jobNo: 'job_no',
      needApply: 'need_apply',
      realName: 'real_name',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookerRole: 'string',
      contactEmail: 'string',
      contactPhone: 'string',
      corpId: 'string',
      department: HotelOrderInfoQueryResponseBodyModuleBookerInfoDepartment,
      enName: 'string',
      jobNo: 'string',
      needApply: 'boolean',
      realName: 'string',
      userId: 'string',
    };
  }

  validate() {
    if(this.department && typeof (this.department as any).validate === 'function') {
      (this.department as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


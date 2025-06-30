// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightCreateOrderRequestPassengerListCertInfo } from "./IntlFlightCreateOrderRequestPassengerListCertInfo";


export class IntlFlightCreateOrderRequestPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1998-12-28
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certInfo?: IntlFlightCreateOrderRequestPassengerListCertInfo;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * L5000924
   */
  jobNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 中国大陆
   */
  nationality?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13100008888
   */
  phone?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  type?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
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
      certInfo: 'cert_info',
      fullName: 'full_name',
      gender: 'gender',
      jobNo: 'job_no',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      phone: 'phone',
      type: 'type',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      certInfo: IntlFlightCreateOrderRequestPassengerListCertInfo,
      fullName: 'string',
      gender: 'number',
      jobNo: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      phone: 'string',
      type: 'number',
      userId: 'string',
      userType: 'number',
    };
  }

  validate() {
    if(this.certInfo && typeof (this.certInfo as any).validate === 'function') {
      (this.certInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


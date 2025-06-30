// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IntlFlightInventoryPriceCheckRequestPassengerListCertInfo } from "./IntlFlightInventoryPriceCheckRequestPassengerListCertInfo";


export class IntlFlightInventoryPriceCheckRequestPassengerList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 2020-01-01
   */
  birthday?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  certInfo?: IntlFlightInventoryPriceCheckRequestPassengerListCertInfo;
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
   * @example
   * CN
   */
  nationalityCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 18012341234
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
   * 10001
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
      certInfo: IntlFlightInventoryPriceCheckRequestPassengerListCertInfo,
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


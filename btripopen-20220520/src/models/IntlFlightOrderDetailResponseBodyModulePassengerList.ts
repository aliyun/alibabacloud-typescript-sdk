// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntlFlightOrderDetailResponseBodyModulePassengerList extends $dara.Model {
  /**
   * @example
   * ZHANG/SAN
   */
  fullName?: string;
  /**
   * @example
   * 0
   */
  gender?: number;
  /**
   * @example
   * 1001101
   */
  jobNo?: string;
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
  type?: number;
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
      fullName: 'full_name',
      gender: 'gender',
      jobNo: 'job_no',
      nationality: 'nationality',
      nationalityCode: 'nationality_code',
      passengerId: 'passenger_id',
      type: 'type',
      userId: 'user_id',
      userType: 'user_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullName: 'string',
      gender: 'number',
      jobNo: 'string',
      nationality: 'string',
      nationalityCode: 'string',
      passengerId: 'number',
      type: 'number',
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


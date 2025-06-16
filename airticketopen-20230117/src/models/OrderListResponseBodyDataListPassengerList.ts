// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OrderListResponseBodyDataListPassengerListCredential } from "./OrderListResponseBodyDataListPassengerListCredential";


export class OrderListResponseBodyDataListPassengerList extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020301
   */
  birthday?: string;
  /**
   * @remarks
   * credential
   */
  credential?: OrderListResponseBodyDataListPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: MALE; 1: FEMALE
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * mobile country code
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * @example
   * 183******96
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality (two-letter code)
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: infant
   * 
   * @example
   * 0
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      birthday: 'birthday',
      credential: 'credential',
      firstName: 'first_name',
      gender: 'gender',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNumber: 'mobile_phone_number',
      nationality: 'nationality',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      birthday: 'string',
      credential: OrderListResponseBodyDataListPassengerListCredential,
      firstName: 'string',
      gender: 'number',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNumber: 'string',
      nationality: 'string',
      type: 'number',
    };
  }

  validate() {
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


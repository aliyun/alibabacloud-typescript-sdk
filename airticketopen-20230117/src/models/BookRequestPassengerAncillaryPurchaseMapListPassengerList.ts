// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential } from "./BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential";


export class BookRequestPassengerAncillaryPurchaseMapListPassengerList extends $dara.Model {
  /**
   * @remarks
   * date of birth (yyyyMMdd)
   * 
   * @example
   * 20020320
   */
  birthday?: string;
  /**
   * @remarks
   * travel document
   */
  credential?: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential;
  /**
   * @remarks
   * first name
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * gender 0: male; 1: female
   * 
   * @example
   * 1
   */
  gender?: number;
  /**
   * @remarks
   * last name
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * country code for mobile phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * mobile phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 182******92
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * nationality
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * passenger type 0: adult; 1: child; 8: Infant
   * 
   * This parameter is required.
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
      credential: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential,
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


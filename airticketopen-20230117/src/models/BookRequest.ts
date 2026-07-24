// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BookRequestContact extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * gao******@gmail.com
   */
  email?: string;
  /**
   * @remarks
   * The first name.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The last name.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country calling code.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 183******96
   */
  mobilePhoneNum?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      firstName: 'first_name',
      lastName: 'last_name',
      mobileCountryCode: 'mobile_country_code',
      mobilePhoneNum: 'mobile_phone_num',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      firstName: 'string',
      lastName: 'string',
      mobileCountryCode: 'string',
      mobilePhoneNum: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem extends $dara.Model {
  /**
   * @remarks
   * The ancillary product ID.
   * 
   * @example
   * MDY2NTAxLCJleHAiOjE2NxNzM3MDEsIm5ix
   */
  ancillaryId?: string;
  /**
   * @remarks
   * The ancillary product type. Currently supported value: 4 (paid baggage). More types will be supported in the future.
   * 
   * @example
   * 4
   */
  ancillaryType?: number;
  static names(): { [key: string]: string } {
    return {
      ancillaryId: 'ancillary_id',
      ancillaryType: 'ancillary_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ancillaryId: 'string',
      ancillaryType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential extends $dara.Model {
  /**
   * @remarks
   * The place of issue. Use a two-letter country code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5673
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card
   * - 1: passport
   * - 2: student ID
   * - 3: military ID
   * - 4: Home Return Permit
   * - 5: Taiwan Compatriot Permit
   * - 6: Hong Kong and Macau Travel Permit
   * - 7: international seafarer certificate
   * - 8: foreigner permanent residence permit
   * - 10: police officer certificate
   * - 11: soldier certificate
   * - 12: Taiwan Travel Permit
   * - 13: Taiwan Entry Permit
   * - 14: household register
   * - 15: birth certificate
   * - 16: driver license
   * - 17: Hong Kong and Macau resident residence permit
   * - 18: Taiwan resident residence permit.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The expiration date of the credential.
   * 
   * @example
   * 20290102
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerAncillaryPurchaseMapListPassengerList extends $dara.Model {
  /**
   * @remarks
   * The date of birth in yyyyMMdd format.
   * 
   * @example
   * 20020320
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: BookRequestPassengerAncillaryPurchaseMapListPassengerListCredential;
  /**
   * @remarks
   * The first name.
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE
   * - 1: FEMALE.
   * 
   * @example
   * 1
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country calling code for the mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 182******92
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The nationality.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult
   * - 1: child
   * - 8: infant.
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

export class BookRequestPassengerAncillaryPurchaseMapList extends $dara.Model {
  /**
   * @remarks
   * The ancillary product object for the booking request.
   */
  bookAncillaryReqItem?: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem;
  /**
   * @remarks
   * The list of passengers who purchase the same ancillary product.
   */
  passengerList?: BookRequestPassengerAncillaryPurchaseMapListPassengerList[];
  static names(): { [key: string]: string } {
    return {
      bookAncillaryReqItem: 'book_ancillary_req_item',
      passengerList: 'passenger_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bookAncillaryReqItem: BookRequestPassengerAncillaryPurchaseMapListBookAncillaryReqItem,
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapListPassengerList },
    };
  }

  validate() {
    if(this.bookAncillaryReqItem && typeof (this.bookAncillaryReqItem as any).validate === 'function') {
      (this.bookAncillaryReqItem as any).validate();
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerListCredential extends $dara.Model {
  /**
   * @remarks
   * The place of issue. Use a two-letter country code.
   * 
   * @example
   * CN
   */
  certIssuePlace?: string;
  /**
   * @remarks
   * The credential number.
   * 
   * @example
   * E1***5674
   */
  credentialNum?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * - 0: ID card
   * - 1: passport
   * - 4: Home Return Permit
   * - 5: Taiwan Compatriot Permit
   * - 6: Hong Kong and Macau Travel Permit
   * - 12: Taiwan Travel Permit
   * - 19: no credential.
   * 
   * @example
   * 1
   */
  credentialType?: number;
  /**
   * @remarks
   * The expiration date of the credential.
   * 
   * @example
   * 20290101
   */
  expireDate?: string;
  static names(): { [key: string]: string } {
    return {
      certIssuePlace: 'cert_issue_place',
      credentialNum: 'credential_num',
      credentialType: 'credential_type',
      expireDate: 'expire_date',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certIssuePlace: 'string',
      credentialNum: 'string',
      credentialType: 'number',
      expireDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BookRequestPassengerList extends $dara.Model {
  /**
   * @remarks
   * The date of birth in yyyyMMdd format.
   * 
   * @example
   * 20200320
   */
  birthday?: string;
  /**
   * @remarks
   * The credential information.
   */
  credential?: BookRequestPassengerListCredential;
  /**
   * @remarks
   * The first name.
   * 
   * This parameter is required.
   * 
   * @example
   * SAN
   */
  firstName?: string;
  /**
   * @remarks
   * The gender. Valid values:
   * - 0: MALE
   * - 1: FEMALE.
   * 
   * @example
   * 0
   */
  gender?: number;
  /**
   * @remarks
   * The last name.
   * 
   * This parameter is required.
   * 
   * @example
   * ZHANG
   */
  lastName?: string;
  /**
   * @remarks
   * The country calling code for the mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  mobileCountryCode?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 183******95
   */
  mobilePhoneNumber?: string;
  /**
   * @remarks
   * The nationality. Use a two-letter country code.
   * 
   * @example
   * CN
   */
  nationality?: string;
  /**
   * @remarks
   * The passenger type. Valid values:
   * - 0: adult
   * - 1: child
   * - 8: infant.
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
      credential: BookRequestPassengerListCredential,
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

export class BookRequest extends $dara.Model {
  /**
   * @remarks
   * The contact information.
   * 
   * This parameter is required.
   */
  contact?: BookRequestContact;
  /**
   * @remarks
   * The external order number.
   * 
   * This parameter is required.
   * 
   * @example
   * x091-2023-0220-j-0001
   */
  outOrderNum?: string;
  /**
   * @remarks
   * The mapping between passengers and ancillary purchases.
   */
  passengerAncillaryPurchaseMapList?: BookRequestPassengerAncillaryPurchaseMapList[];
  /**
   * @remarks
   * The list of passengers.
   * 
   * This parameter is required.
   */
  passengerList?: BookRequestPassengerList[];
  /**
   * @remarks
   * solution_id.
   * 
   * This parameter is required.
   * 
   * @example
   * eJwz8DeySEo0NjQ01TU3TU7TNTFINNO1SE5O0jVKM0hKNjEwTElLNYwz0A32cNT1dfPVNTIwMjYwNjRQ8/A3NLI01Q0Ic0cRBwBVFxJJ
   */
  solutionId?: string;
  static names(): { [key: string]: string } {
    return {
      contact: 'contact',
      outOrderNum: 'out_order_num',
      passengerAncillaryPurchaseMapList: 'passenger_ancillary_purchase_map_list',
      passengerList: 'passenger_list',
      solutionId: 'solution_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contact: BookRequestContact,
      outOrderNum: 'string',
      passengerAncillaryPurchaseMapList: { 'type': 'array', 'itemType': BookRequestPassengerAncillaryPurchaseMapList },
      passengerList: { 'type': 'array', 'itemType': BookRequestPassengerList },
      solutionId: 'string',
    };
  }

  validate() {
    if(this.contact && typeof (this.contact as any).validate === 'function') {
      (this.contact as any).validate();
    }
    if(Array.isArray(this.passengerAncillaryPurchaseMapList)) {
      $dara.Model.validateArray(this.passengerAncillaryPurchaseMapList);
    }
    if(Array.isArray(this.passengerList)) {
      $dara.Model.validateArray(this.passengerList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


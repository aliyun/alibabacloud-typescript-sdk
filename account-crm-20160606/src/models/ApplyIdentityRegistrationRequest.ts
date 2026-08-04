// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyIdentityRegistrationRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accountType?: number;
  customerId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docBackPic?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  docFrontPic?: string;
  docNum?: string;
  docType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  email?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  fullName?: string;
  registeredAddress?: string;
  registeredCountry?: string;
  registeredNum?: string;
  source?: string;
  tel?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      customerId: 'CustomerId',
      docBackPic: 'DocBackPic',
      docFrontPic: 'DocFrontPic',
      docNum: 'DocNum',
      docType: 'DocType',
      email: 'Email',
      fullName: 'FullName',
      registeredAddress: 'RegisteredAddress',
      registeredCountry: 'RegisteredCountry',
      registeredNum: 'RegisteredNum',
      source: 'Source',
      tel: 'Tel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'number',
      customerId: 'string',
      docBackPic: 'string',
      docFrontPic: 'string',
      docNum: 'string',
      docType: 'string',
      email: 'string',
      fullName: 'string',
      registeredAddress: 'string',
      registeredCountry: 'string',
      registeredNum: 'string',
      source: 'string',
      tel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateChatappMigrationInitiateRequest extends $dara.Model {
  /**
   * @remarks
   * The code of the country or region.
   * 
   * This parameter is required.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * The space ID of the user within the ISV account.
   * 
   * This parameter is required.
   * 
   * @example
   * 293483938849493****
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The mobile number without the country code or region code.
   * 
   * This parameter is required.
   * 
   * @example
   * 13900001234
   */
  mobileNumber?: string;
  static names(): { [key: string]: string } {
    return {
      countryCode: 'CountryCode',
      custSpaceId: 'CustSpaceId',
      mobileNumber: 'MobileNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countryCode: 'string',
      custSpaceId: 'string',
      mobileNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


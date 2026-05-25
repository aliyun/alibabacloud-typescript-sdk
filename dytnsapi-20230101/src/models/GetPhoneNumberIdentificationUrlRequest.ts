// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPhoneNumberIdentificationUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * This parameter is required.
   * 
   * @example
   * K***9i7CIe
   */
  authCode?: string;
  /**
   * @remarks
   * The IP address of the subscriber\\"s phone.
   * 
   * @example
   * 114.124.***.13
   */
  ip?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 149b03d2-a749-4e6e-8f5b-34******5815
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number of the subscriber. The phone number is in the Mobile Station International Subscriber Directory Number (MSISDN) format.
   * 
   * This parameter is required.
   * 
   * @example
   * 628211****113
   */
  phoneNumber?: string;
  /**
   * @remarks
   * Specifies whether to remember the phone number.
   * 
   * @example
   * true
   */
  rememberPhoneNumber?: boolean;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      ip: 'Ip',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      rememberPhoneNumber: 'RememberPhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      ip: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      rememberPhoneNumber: 'boolean',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


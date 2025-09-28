// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSmsVerifyCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The verification policy for uppercase and lowercase letters of the verification code. Valid values:
   * 
   * *   1: The verification policy does not distinguish uppercase and lowercase letters.
   * *   2: The verification policy distinguishes uppercase and lowercase letters.
   * 
   * @example
   * 1
   */
  caseAuthPolicy?: number;
  /**
   * @remarks
   * The country code of the phone number. Default value: 86.
   * 
   * @example
   * 86
   */
  countryCode?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * @example
   * 12123231
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 18653529399
   */
  phoneNumber?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The verification service name. If this parameter is not specified, the default service is used. The name can be up to 20 characters in length.
   * 
   * @example
   * Aliyun
   */
  schemeName?: string;
  /**
   * @remarks
   * The verification code.
   * 
   * This parameter is required.
   * 
   * @example
   * 1231
   */
  verifyCode?: string;
  static names(): { [key: string]: string } {
    return {
      caseAuthPolicy: 'CaseAuthPolicy',
      countryCode: 'CountryCode',
      outId: 'OutId',
      ownerId: 'OwnerId',
      phoneNumber: 'PhoneNumber',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      schemeName: 'SchemeName',
      verifyCode: 'VerifyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caseAuthPolicy: 'number',
      countryCode: 'string',
      outId: 'string',
      ownerId: 'number',
      phoneNumber: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      schemeName: 'string',
      verifyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


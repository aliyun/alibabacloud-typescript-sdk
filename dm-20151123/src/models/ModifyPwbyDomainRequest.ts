// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPWByDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name, length 1-50, can include numbers, uppercase letters, lowercase letters, ., and -.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  /**
   * @remarks
   * - Length should be between 10 to 20 characters, and must contain numbers, uppercase letters, and lowercase letters.
   * 
   * - At least 2 digits, 2 uppercase letters, and 2 lowercase letters are required, and neither digits nor letters can consist of a single character repeated.
   * 
   * - Cannot be the same as the last set password.
   * 
   * This parameter is required.
   * 
   * @example
   * DM1mail1234
   */
  password?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      password: 'Password',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      password: 'string',
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


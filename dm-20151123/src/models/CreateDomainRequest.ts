// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainRequest extends $dara.Model {
  /**
   * @remarks
   * Domain name, length 1-50, can include numbers, uppercase letters, lowercase letters, ., and -.
   * 
   * This parameter is required.
   * 
   * @example
   * sub.example.com
   */
  domainName?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The selector field in the DKIM protocol, used to identify a specific public key. It is recommended to leave it blank, as the system will automatically generate it based on cluster information. If the user specifies it manually, for example, if the sending domain is "sub.example.com" and dkimSelector is set to "default", then the host record will be "default._domainkey.sub"
   * Constraints: 
   * 1. The length must not exceed 60 characters. 
   * 2. It must consist of visible characters only. 
   * 3. It cannot start with a hyphen (-). 
   * 4. It cannot end with a hyphen (-). 
   * 5. It cannot contain any of the following characters: _ :;/!*~.@#$%^&()+=[{]}|?<>,\\""
   * 
   * @example
   * default
   */
  dkimSelector?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      dkimSelector: 'dkimSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      dkimSelector: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


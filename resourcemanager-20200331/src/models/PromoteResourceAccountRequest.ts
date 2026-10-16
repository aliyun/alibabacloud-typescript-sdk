// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PromoteResourceAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource account to upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 12323344****
   */
  accountId?: string;
  /**
   * @remarks
   * The logon email address of the Alibaba Cloud account after the upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      email: 'Email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      email: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccountAliasRequest extends $dara.Model {
  /**
   * @remarks
   * The alias of the Alibaba Cloud account.
   * 
   * The alias must be 3 to 32 characters in length, and can contain lowercase letters, digits, and hyphens (-).
   * 
   * >  It cannot start or end with a hyphen (-), and cannot contain consecutive hyphens (-).
   * 
   * @example
   * myalias
   */
  accountAlias?: string;
  static names(): { [key: string]: string } {
    return {
      accountAlias: 'AccountAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAlias: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


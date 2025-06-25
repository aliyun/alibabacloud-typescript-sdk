// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationHostAccountsResponseBodyHostAccountsSSHConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether SFTP channels are enabled for the account.
   */
  enableSFTPChannel?: boolean;
  /**
   * @remarks
   * Indicates whether SSH channels are enabled for the account.
   */
  enableSSHChannel?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableSFTPChannel: 'EnableSFTPChannel',
      enableSSHChannel: 'EnableSSHChannel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSFTPChannel: 'boolean',
      enableSSHChannel: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


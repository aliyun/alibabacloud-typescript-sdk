// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyLoginSwitchConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the logon security settings that you want to enable or disable. Valid values:
   * 
   * *   **login_common_ip**: unapproved logon IP addresses
   * *   **login_common_time**: unapproved logon time ranges
   * *   **login_common_account**: unapproved logon accounts
   * 
   * This parameter is required.
   * 
   * @example
   * login_common_account
   */
  item?: string;
  /**
   * @remarks
   * Specifies whether to enable the logon security settings. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


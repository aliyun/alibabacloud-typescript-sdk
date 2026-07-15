// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalSettingConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically approve developer registration requests.
   * 
   * @example
   * false
   */
  autoApproveDevelopers?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically approve API subscription requests.
   * 
   * @example
   * false
   */
  autoApproveSubscriptions?: boolean;
  /**
   * @remarks
   * Specifies whether to enable username-password authentication (built-in authentication).
   * 
   * @example
   * true
   */
  builtinAuthEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoApproveDevelopers: 'autoApproveDevelopers',
      autoApproveSubscriptions: 'autoApproveSubscriptions',
      builtinAuthEnabled: 'builtinAuthEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoApproveDevelopers: 'boolean',
      autoApproveSubscriptions: 'boolean',
      builtinAuthEnabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


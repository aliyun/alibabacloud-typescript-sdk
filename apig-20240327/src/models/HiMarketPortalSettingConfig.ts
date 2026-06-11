// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalSettingConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically approve new developer registrations. If set to `false`, you must manually approve each new developer.\\
   * \\
   * **Default**: `false`.\\
   * \\
   */
  autoApproveDevelopers?: boolean;
  /**
   * @remarks
   * Specifies whether to automatically approve new API subscriptions. If set to `false`, you must manually approve each new subscription.\\
   * \\
   * **Default**: `false`.\\
   * \\
   */
  autoApproveSubscriptions?: boolean;
  /**
   * @remarks
   * Specifies whether to enable built-in authentication. If set to `true`, users must sign in to access the portal.\\
   * \\
   * **Default**: `false`.\\
   * \\
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


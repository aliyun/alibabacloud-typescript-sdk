// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBootAndAntiUninstallPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Let end users submit approval requests.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * Content shown in the client-side block dialog.
   */
  blockContentShrink?: string;
  /**
   * @remarks
   * Enable anti-uninstall.
   * 
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @remarks
   * Enable auto-start.
   * 
   * @example
   * true
   */
  isBoot?: boolean;
  /**
   * @remarks
   * List of user group IDs to which this policy applies.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * List of whitelisted users.
   */
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContentShrink: 'BlockContent',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContentShrink: 'string',
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.whitelistUsers)) {
      $dara.Model.validateArray(this.whitelistUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


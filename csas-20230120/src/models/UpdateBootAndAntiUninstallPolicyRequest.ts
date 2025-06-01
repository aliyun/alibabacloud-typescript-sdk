// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateBootAndAntiUninstallPolicyRequestBlockContent } from "./UpdateBootAndAntiUninstallPolicyRequestBlockContent";


export class UpdateBootAndAntiUninstallPolicyRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  allowReport?: boolean;
  blockContent?: UpdateBootAndAntiUninstallPolicyRequestBlockContent;
  /**
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @example
   * true
   */
  isBoot?: boolean;
  userGroupIds?: string[];
  whitelistUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContent: 'BlockContent',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: UpdateBootAndAntiUninstallPolicyRequestBlockContent,
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelistUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.blockContent && typeof (this.blockContent as any).validate === 'function') {
      (this.blockContent as any).validate();
    }
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


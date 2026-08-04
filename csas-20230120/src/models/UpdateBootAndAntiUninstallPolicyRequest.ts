// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn extends $dara.Model {
  /**
   * @remarks
   * Dialog content.
   * 
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @remarks
   * Main button text.
   * 
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @remarks
   * Secondary button text.
   * 
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
   * @remarks
   * Dialog title.
   * 
   * @example
   * Anti-Uninstall Warning
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh extends $dara.Model {
  /**
   * @remarks
   * Dialog content.
   * 
   * @example
   * 卸载后该设备无法再用于公司办公，同时该设备将失去进入公司内网权限！
   */
  content?: string;
  /**
   * @remarks
   * Main button text.
   * 
   * @example
   * 去报备
   */
  mainButtonText?: string;
  /**
   * @remarks
   * Secondary button text.
   * 
   * @example
   * 我知道了
   */
  minorButtonText?: string;
  /**
   * @remarks
   * Dialog title.
   * 
   * @example
   * 防卸载警告
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      mainButtonText: 'MainButtonText',
      minorButtonText: 'MinorButtonText',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      mainButtonText: 'string',
      minorButtonText: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequestBlockContent extends $dara.Model {
  /**
   * @remarks
   * English text.
   */
  blockTextEn?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn;
  /**
   * @remarks
   * Chinese text.
   */
  blockTextZh?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextZh,
    };
  }

  validate() {
    if(this.blockTextEn && typeof (this.blockTextEn as any).validate === 'function') {
      (this.blockTextEn as any).validate();
    }
    if(this.blockTextZh && typeof (this.blockTextZh as any).validate === 'function') {
      (this.blockTextZh as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBootAndAntiUninstallPolicyRequest extends $dara.Model {
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
  blockContent?: UpdateBootAndAntiUninstallPolicyRequestBlockContent;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn extends $dara.Model {
  /**
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
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
  content?: string;
  mainButtonText?: string;
  minorButtonText?: string;
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
  blockTextEn?: UpdateBootAndAntiUninstallPolicyRequestBlockContentBlockTextEn;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn extends $dara.Model {
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

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh extends $dara.Model {
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

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  /**
   * @remarks
   * English text.
   */
  blockTextEn?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
  /**
   * @remarks
   * Chinese text.
   */
  blockTextZh?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn,
      blockTextZh: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh,
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

export class UpdateBootAndAntiUninstallPolicyResponseBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * End users can submit approval requests.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * Content shown in the client-side block dialog.
   */
  blockContent?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent;
  /**
   * @remarks
   * Time when the policy was created.
   * 
   * @example
   * 2023-04-16 10:50:05
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the anti-uninstall feature is enabled.
   * 
   * @example
   * true
   */
  isAntiUninstall?: boolean;
  /**
   * @remarks
   * Indicates whether the auto-start feature is enabled.
   * 
   * @example
   * true
   */
  isBoot?: boolean;
  /**
   * @remarks
   * Policy ID.
   * 
   * @example
   * auto-boot-anti-uninstall-6f6cbf5f6605****
   */
  policyId?: string;
  /**
   * @remarks
   * ID of the approval process associated with this policy.
   * 
   * @example
   * approval-process-65c255598826****
   */
  reportProcessId?: string;
  /**
   * @remarks
   * Time when the policy was last updated.
   * 
   * @example
   * 2024-06-14 10:17:14
   */
  updateTime?: string;
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
      createTime: 'CreateTime',
      isAntiUninstall: 'IsAntiUninstall',
      isBoot: 'IsBoot',
      policyId: 'PolicyId',
      reportProcessId: 'ReportProcessId',
      updateTime: 'UpdateTime',
      userGroupIds: 'UserGroupIds',
      whitelistUsers: 'WhitelistUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: UpdateBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent,
      createTime: 'string',
      isAntiUninstall: 'boolean',
      isBoot: 'boolean',
      policyId: 'string',
      reportProcessId: 'string',
      updateTime: 'string',
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

export class UpdateBootAndAntiUninstallPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
  /**
   * @remarks
   * Auto-start and anti-uninstall policy.
   */
  strategy?: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: UpdateBootAndAntiUninstallPolicyResponseBodyStrategy,
    };
  }

  validate() {
    if(this.strategy && typeof (this.strategy as any).validate === 'function') {
      (this.strategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


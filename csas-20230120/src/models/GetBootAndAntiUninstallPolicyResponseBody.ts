// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn extends $dara.Model {
  /**
   * @remarks
   * The pop-up window content.
   * 
   * @example
   * After uninstalling, the device can no longer be used for company work, and it will lose access to the company\\"s intranet!
   */
  content?: string;
  /**
   * @remarks
   * The text of the primary button in the pop-up window.
   * 
   * @example
   * Report
   */
  mainButtonText?: string;
  /**
   * @remarks
   * The text of the secondary button in the pop-up window.
   * 
   * @example
   * Ignore
   */
  minorButtonText?: string;
  /**
   * @remarks
   * The pop-up window title.
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

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh extends $dara.Model {
  /**
   * @remarks
   * The pop-up window content.
   * 
   * @example
   * 卸载后该设备无法再用于公司办公，同时该设备将失去进入公司内网权限！
   */
  content?: string;
  /**
   * @remarks
   * The text of the primary button in the pop-up window.
   * 
   * @example
   * 去报备
   */
  mainButtonText?: string;
  /**
   * @remarks
   * The text of the secondary button in the pop-up window.
   * 
   * @example
   * 我知道了
   */
  minorButtonText?: string;
  /**
   * @remarks
   * The pop-up window title.
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

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  /**
   * @remarks
   * The English content.
   */
  blockTextEn?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
  /**
   * @remarks
   * The Chinese content.
   */
  blockTextZh?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn,
      blockTextZh: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh,
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

export class GetBootAndAntiUninstallPolicyResponseBodyStrategy extends $dara.Model {
  /**
   * @remarks
   * Indicates whether end users are allowed to submit approval requests.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The content displayed in the client interception pop-up window.
   */
  blockContent?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent;
  /**
   * @remarks
   * The time when the policy was created.
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
   * The policy ID.
   * 
   * @example
   * auto-boot-anti-uninstall-6f6cbf5f6605****
   */
  policyId?: string;
  /**
   * @remarks
   * The ID of the approval process associated with the policy.
   * 
   * @example
   * approval-process-300abfb970cc****
   */
  reportProcessId?: string;
  /**
   * @remarks
   * The time when the policy was updated.
   * 
   * @example
   * 2024-06-14 10:17:14
   */
  updateTime?: string;
  /**
   * @remarks
   * The list of user group IDs to which the policy applies.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelist users.
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
      blockContent: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent,
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

export class GetBootAndAntiUninstallPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
  /**
   * @remarks
   * The auto-start and anti-uninstall policy.
   */
  strategy?: GetBootAndAntiUninstallPolicyResponseBodyStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategy: GetBootAndAntiUninstallPolicyResponseBodyStrategy,
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


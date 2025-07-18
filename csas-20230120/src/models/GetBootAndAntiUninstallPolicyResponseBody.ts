// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn extends $dara.Model {
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

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextZh extends $dara.Model {
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

export class GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent extends $dara.Model {
  blockTextEn?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContentBlockTextEn;
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
   * @example
   * true
   */
  allowReport?: boolean;
  blockContent?: GetBootAndAntiUninstallPolicyResponseBodyStrategyBlockContent;
  /**
   * @example
   * 2023-04-16 10:50:05
   */
  createTime?: string;
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
  /**
   * @example
   * auto-boot-anti-uninstall-6f6cbf5f6605****
   */
  policyId?: string;
  /**
   * @example
   * approval-process-300abfb970cc****
   */
  reportProcessId?: string;
  /**
   * @example
   * 2024-06-14 10:17:14
   */
  updateTime?: string;
  userGroupIds?: string[];
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
   * @example
   * CB67D866-1E54-5106-89DF-6D70C73E5989
   */
  requestId?: string;
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


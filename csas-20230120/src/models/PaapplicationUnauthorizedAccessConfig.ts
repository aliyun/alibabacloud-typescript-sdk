// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAApplicationUnauthorizedAccessConfigBlockContentBlockTextEn extends $dara.Model {
  /**
   * @remarks
   * The prompt content of the English block page.
   * 
   * @example
   * You do not have permission to access this system. If you need to do so, please submit a permission request.
   */
  browserAlertContent?: string;
  /**
   * @remarks
   * The background pattern of the English block page.
   * 
   * @example
   * https://img.alicdn.com/xxx.png
   */
  browserAlertStyle?: string;
  /**
   * @remarks
   * The title of the English block page.
   * 
   * @example
   * No Permission Access
   */
  browserAlertTitle?: string;
  /**
   * @remarks
   * The text of the English report approval button.
   * 
   * @example
   * Report
   */
  reportButtonText?: string;
  static names(): { [key: string]: string } {
    return {
      browserAlertContent: 'BrowserAlertContent',
      browserAlertStyle: 'BrowserAlertStyle',
      browserAlertTitle: 'BrowserAlertTitle',
      reportButtonText: 'ReportButtonText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserAlertContent: 'string',
      browserAlertStyle: 'string',
      browserAlertTitle: 'string',
      reportButtonText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAApplicationUnauthorizedAccessConfigBlockContentBlockTextZh extends $dara.Model {
  /**
   * @remarks
   * The prompt content of the block page.
   * 
   * @example
   * 您暂无权限访问该系统。如有工作需要，请提交权限申请。
   */
  browserAlertContent?: string;
  /**
   * @remarks
   * The background pattern of the block page.
   * 
   * @example
   * https://img.alicdn.com/xxx.png
   */
  browserAlertStyle?: string;
  /**
   * @remarks
   * The title of the block page.
   * 
   * @example
   * 无权限访问
   */
  browserAlertTitle?: string;
  /**
   * @remarks
   * The text of the report approval button.
   * 
   * @example
   * 前往报备
   */
  reportButtonText?: string;
  static names(): { [key: string]: string } {
    return {
      browserAlertContent: 'BrowserAlertContent',
      browserAlertStyle: 'BrowserAlertStyle',
      browserAlertTitle: 'BrowserAlertTitle',
      reportButtonText: 'ReportButtonText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      browserAlertContent: 'string',
      browserAlertStyle: 'string',
      browserAlertTitle: 'string',
      reportButtonText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PAApplicationUnauthorizedAccessConfigBlockContent extends $dara.Model {
  /**
   * @remarks
   * The English content.
   */
  blockTextEn?: PAApplicationUnauthorizedAccessConfigBlockContentBlockTextEn;
  /**
   * @remarks
   * The Chinese content.
   */
  blockTextZh?: PAApplicationUnauthorizedAccessConfigBlockContentBlockTextZh;
  static names(): { [key: string]: string } {
    return {
      blockTextEn: 'BlockTextEn',
      blockTextZh: 'BlockTextZh',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockTextEn: PAApplicationUnauthorizedAccessConfigBlockContentBlockTextEn,
      blockTextZh: PAApplicationUnauthorizedAccessConfigBlockContentBlockTextZh,
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

export class PAApplicationUnauthorizedAccessConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether end users are allowed to submit approval requests.
   * 
   * @example
   * true
   */
  allowReport?: boolean;
  /**
   * @remarks
   * The content displayed in the client interception pop-up window.
   */
  blockContent?: PAApplicationUnauthorizedAccessConfigBlockContent;
  /**
   * @remarks
   * Specifies whether the feature is enabled. Valid values:
   * - **true**: Enabled. Users are redirected to an interception page when they access an unauthorized application.
   * - **false**: Disabled. An error message is returned by default when users access an unauthorized application.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the approval flow associated with the policy.
   * 
   * @example
   * approval-process-0ee84ac4f9c31bc5
   */
  reportProcessId?: string;
  static names(): { [key: string]: string } {
    return {
      allowReport: 'AllowReport',
      blockContent: 'BlockContent',
      enabled: 'Enabled',
      reportProcessId: 'ReportProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowReport: 'boolean',
      blockContent: PAApplicationUnauthorizedAccessConfigBlockContent,
      enabled: 'boolean',
      reportProcessId: 'string',
    };
  }

  validate() {
    if(this.blockContent && typeof (this.blockContent as any).validate === 'function') {
      (this.blockContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


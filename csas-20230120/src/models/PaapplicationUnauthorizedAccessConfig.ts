// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PAApplicationUnauthorizedAccessConfigBlockContentBlockTextEn extends $dara.Model {
  /**
   * @remarks
   * The English prompt message on the block page.
   * 
   * @example
   * You do not have permission to access this system. If you need to do so, please submit a permission request.
   */
  browserAlertContent?: string;
  /**
   * @remarks
   * The English background pattern of the block page.
   * 
   * @example
   * https://img.alicdn.com/xxx.png
   */
  browserAlertStyle?: string;
  /**
   * @remarks
   * The English title of the block page.
   * 
   * @example
   * No Permission Access
   */
  browserAlertTitle?: string;
  /**
   * @remarks
   * The English text on the approval request button.
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
   * The prompt message on the block page.
   * 
   * @example
   * You do not have permission to access this system. If you need access for work purposes, submit an access request
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
   * Access Denied
   */
  browserAlertTitle?: string;
  /**
   * @remarks
   * The text on the approval request button.
   * 
   * @example
   * Request Access
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
   * The content displayed in the client block pop-up window.
   */
  blockContent?: PAApplicationUnauthorizedAccessConfigBlockContent;
  /**
   * @remarks
   * Specifies whether the feature is enabled. Valid values:
   * - **true**: Enabled. If an application is unauthorized, the user is redirected to the block page.
   * - **false**: Disabled. If an application is unauthorized, an error message is returned by default.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the approval process associated with the policy.
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


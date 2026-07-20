// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityCheckResultBaseInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  configCompleted?: string;
  /**
   * @example
   * 1
   */
  pendingSecurityAlertCount?: number;
  /**
   * @example
   * 5
   */
  pendingVulnerabilityCount?: number;
  /**
   * @example
   * 30%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      configCompleted: 'ConfigCompleted',
      pendingSecurityAlertCount: 'PendingSecurityAlertCount',
      pendingVulnerabilityCount: 'PendingVulnerabilityCount',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configCompleted: 'string',
      pendingSecurityAlertCount: 'number',
      pendingVulnerabilityCount: 'number',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityCheckResultBaseInfoResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: GetSecurityCheckResultBaseInfoResponseBodyData;
  /**
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetSecurityCheckResultBaseInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


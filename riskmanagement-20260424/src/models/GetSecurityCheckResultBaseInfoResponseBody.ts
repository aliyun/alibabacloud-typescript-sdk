// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityCheckResultBaseInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The configuration item check result.
   * 
   * @example
   * true
   */
  configCompleted?: string;
  /**
   * @remarks
   * The number of pending security alerts.
   * 
   * @example
   * 1
   */
  pendingSecurityAlertCount?: number;
  /**
   * @remarks
   * The number of pending vulnerabilities.
   * 
   * @example
   * 5
   */
  pendingVulnerabilityCount?: number;
  /**
   * @remarks
   * The percentage of the health check task progress.
   * 
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
   * @remarks
   * The status code.
   * 
   * >  200: The request was successful. Other codes (such as 500 or 400): An error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data list.
   */
  data?: GetSecurityCheckResultBaseInfoResponseBodyData;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * successful‌
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 739705BB-B0EF-554B-B3A8-383F4F93E067
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current API call itself was successful. This does not indicate the success of subsequent business operations.
   * 
   * - **true**: Successful.
   * - **false**: Failed.
   * 
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


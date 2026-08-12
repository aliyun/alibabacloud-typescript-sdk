// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySecurityCheckReportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The subscription status of the cloud security guide. Valid values:
   * 
   * - **0**: not subscribed 
   * - **1**: subscribed
   * 
   * @example
   * 1
   */
  cloudSecurityGuide?: number;
  /**
   * @remarks
   * The number of pending items for configuration audit.
   * 
   * @example
   * 3
   */
  configCheckNumber?: number;
  /**
   * @remarks
   * The number of pending items for security contacts.
   * 
   * @example
   * 3
   */
  contactCheckNumber?: number;
  /**
   * @remarks
   * The number of risk events.
   * 
   * @example
   * 3
   */
  riskEventNumber?: number;
  /**
   * @remarks
   * The number of pending items for Elastic Compute Service.
   * 
   * @example
   * 1
   */
  sasCheckNumber?: number;
  /**
   * @remarks
   * The security check result status. Valid values:
   * 
   * - **0**: no risk
   * - **1**: risks exist 
   * - **2**: items to be optimized exist
   * 
   * @example
   * 1
   */
  securityStatus?: number;
  /**
   * @remarks
   * The suggestion text.
   * 
   * @example
   * exist risk event。
   */
  suggestionText?: string;
  static names(): { [key: string]: string } {
    return {
      cloudSecurityGuide: 'CloudSecurityGuide',
      configCheckNumber: 'ConfigCheckNumber',
      contactCheckNumber: 'ContactCheckNumber',
      riskEventNumber: 'RiskEventNumber',
      sasCheckNumber: 'SasCheckNumber',
      securityStatus: 'SecurityStatus',
      suggestionText: 'SuggestionText',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudSecurityGuide: 'number',
      configCheckNumber: 'number',
      contactCheckNumber: 'number',
      riskEventNumber: 'number',
      sasCheckNumber: 'number',
      securityStatus: 'number',
      suggestionText: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySecurityCheckReportResponseBody extends $dara.Model {
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
   * The query result.
   */
  data?: QuerySecurityCheckReportResponseBodyData;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2FBDD713-00A5-5C98-B661-3FD31A349B6E
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * - true: The call was successful.
   * - false: The call failed.
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
      data: QuerySecurityCheckReportResponseBodyData,
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


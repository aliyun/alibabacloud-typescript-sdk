// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserCdnStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whetherAlibaba Cloud CDN is activated.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether your account has overdue payments.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  inDebt?: boolean;
  /**
   * @remarks
   * Indicates whether the grace period for your overdue payments expired.
   * 
   * @example
   * false
   */
  inDebtOverdue?: boolean;
  /**
   * @remarks
   * Indicates whether the service is available.
   * 
   * @example
   * true
   */
  onService?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39B1DC7F-9D25-5D54-8F02-6EE26A7F48CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      inDebt: 'InDebt',
      inDebtOverdue: 'InDebtOverdue',
      onService: 'OnService',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      inDebt: 'boolean',
      inDebtOverdue: 'boolean',
      onService: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


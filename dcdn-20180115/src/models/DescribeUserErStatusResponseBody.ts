// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserErStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether ER is activated.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Indicates whether ER has an overdue payment.
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
   * Indicates whether an overdue payment of ER has passed the grace period.
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  inDebtOverdue?: boolean;
  /**
   * @remarks
   * Indicates whether ER is available.
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  onService?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4F51E9C3-728F-4E35-952D-0ED87A06A8A1
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


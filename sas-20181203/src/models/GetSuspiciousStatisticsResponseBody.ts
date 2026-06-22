// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspiciousStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of security alerts whose alert level is Reminder.
   * 
   * @example
   * 0
   */
  remindCount?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 84092B42-1A59-4F34-8DF8-1D93520990A5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of security alerts whose alert level is Urgent.
   * 
   * @example
   * 1
   */
  seriousCount?: number;
  /**
   * @remarks
   * The number of security alerts whose alert level is Suspicious.
   * 
   * @example
   * 8
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The total number of security alerts.
   * 
   * @example
   * 9
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      remindCount: 'RemindCount',
      requestId: 'RequestId',
      seriousCount: 'SeriousCount',
      suspiciousCount: 'SuspiciousCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindCount: 'number',
      requestId: 'string',
      seriousCount: 'number',
      suspiciousCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


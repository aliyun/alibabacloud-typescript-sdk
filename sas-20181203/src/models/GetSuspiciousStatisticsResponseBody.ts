// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSuspiciousStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of alerts whose Emergency level is Reminder.
   * 
   * @example
   * 0
   */
  remindCount?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 84092B42-1A59-4F34-8DF8-1D93520990A5
   */
  requestId?: string;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Urgent.
   * 
   * @example
   * 1
   */
  seriousCount?: number;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Suspicious.
   * 
   * @example
   * 8
   */
  suspiciousCount?: number;
  /**
   * @remarks
   * The total number of alerts.
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


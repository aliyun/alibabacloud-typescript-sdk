// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceAlarmStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of reminder-level alerts.
   * 
   * @example
   * 1
   */
  remindCount?: number;
  /**
   * @remarks
   * The number of urgent alerts.
   * 
   * @example
   * 1
   */
  seriousCount?: number;
  /**
   * @remarks
   * The number of suspicious alerts.
   * 
   * @example
   * 3
   */
  suspiciousCount?: number;
  static names(): { [key: string]: string } {
    return {
      remindCount: 'RemindCount',
      seriousCount: 'SeriousCount',
      suspiciousCount: 'SuspiciousCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remindCount: 'number',
      seriousCount: 'number',
      suspiciousCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceAlarmStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  data?: GetInstanceAlarmStatisticsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8B****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetInstanceAlarmStatisticsResponseBodyData,
      requestId: 'string',
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


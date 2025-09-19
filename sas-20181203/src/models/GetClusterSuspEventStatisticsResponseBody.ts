// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterSuspEventStatisticsResponseBodySuspStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of alerts whose Emergency level is Reminder.
   * 
   * @example
   * 1
   */
  remind?: number;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Urgent.
   * 
   * @example
   * 1
   */
  serious?: number;
  /**
   * @remarks
   * The number of alerts whose Emergency level is Suspicious.
   * 
   * @example
   * 2
   */
  suspicious?: number;
  static names(): { [key: string]: string } {
    return {
      remind: 'Remind',
      serious: 'Serious',
      suspicious: 'Suspicious',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remind: 'number',
      serious: 'number',
      suspicious: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterSuspEventStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BR****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of alerts by risk level.
   */
  suspStatistics?: GetClusterSuspEventStatisticsResponseBodySuspStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suspStatistics: 'SuspStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suspStatistics: GetClusterSuspEventStatisticsResponseBodySuspStatistics,
    };
  }

  validate() {
    if(this.suspStatistics && typeof (this.suspStatistics as any).validate === 'function') {
      (this.suspStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


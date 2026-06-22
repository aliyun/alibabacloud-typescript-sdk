// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPublishCronResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the upgrade start time.
   * 
   * @example
   * 0 0 7 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The day of the week for the upgrade. Valid values:
   * - **MON**: Monday
   * - **TUE**: Tuesday
   * - **WED**: Wednesday
   * - **THU**: Thursday
   * - **FRI**: Friday
   * - **SAT**: Saturday
   * - **SUN**: Sunday.
   * 
   * @example
   * MON
   */
  cronDay?: string;
  /**
   * @remarks
   * The publish start timestamp. Unit: milliseconds.
   * 
   * @example
   * 1724522400000
   */
  cronTime?: number;
  /**
   * @remarks
   * The upgrade start cycle type. Valid values:
   * - **day**: every day
   * - **week**: every week.
   * 
   * @example
   * day
   */
  cronType?: string;
  /**
   * @remarks
   * The upgrade duration. Unit: hours.
   * 
   * @example
   * 24
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      cronDay: 'CronDay',
      cronTime: 'CronTime',
      cronType: 'CronType',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      cronDay: 'string',
      cronTime: 'number',
      cronType: 'string',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPublishCronResponseBody extends $dara.Model {
  /**
   * @remarks
   * The publish scheduling configuration.
   */
  data?: GetPublishCronResponseBodyData;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 30CBF632-109F-596F-97F2-451C8B2A****
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
      data: GetPublishCronResponseBodyData,
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


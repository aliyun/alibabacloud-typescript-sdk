// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublishCronRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the upgrade start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 5 10 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The day of the week for the upgrade time. Valid values:
   * - **MON**: Monday.
   * - **TUE**: Tuesday.
   * - **WED**: Wednesday.
   * - **THU**: Thursday.
   * - **FRI**: Friday.
   * - **SAT**: Saturday.
   * - **SUN**: Sunday.
   * 
   * @example
   * SUN
   */
  cronDay?: string;
  /**
   * @remarks
   * The start timestamp of the release, in milliseconds.
   * 
   * @example
   * 1657407600000
   */
  cronTime?: number;
  /**
   * @remarks
   * The cycle type for the upgrade start time. Valid values:
   * - **day**: Daily.
   * - **week**: Weekly.
   * 
   * @example
   * day
   */
  cronType?: string;
  /**
   * @remarks
   * The duration of the upgrade, in hours.
   * 
   * This parameter is required.
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


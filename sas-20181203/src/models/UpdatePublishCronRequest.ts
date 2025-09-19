// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePublishCronRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression that is used to specify the start time of the upgrade.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 5 10 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The day of a week on which you want to perform the upgrade. Valid values:
   * 
   * *   **MON**
   * *   **TUE**
   * *   **WED**
   * *   **THU**
   * *   **FRI**
   * *   **SAT**
   * *   **SUN**
   * 
   * @example
   * SUN
   */
  cronDay?: string;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * @example
   * 1657407600000
   */
  cronTime?: number;
  /**
   * @remarks
   * The type of the upgrade cycle. Valid values:
   * 
   * *   **day**: every day
   * *   **week**: every week
   * 
   * @example
   * day
   */
  cronType?: string;
  /**
   * @remarks
   * The duration of the upgrade. Unit: hours.
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


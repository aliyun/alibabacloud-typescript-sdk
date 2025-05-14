// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaintenanceWindow extends $dara.Model {
  /**
   * @example
   * 3h
   */
  duration?: string;
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @example
   * 2020-10-15T12:31:00.000+08:00
   */
  maintenanceTime?: string;
  /**
   * @example
   * FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU
   */
  recurrence?: string;
  /**
   * @example
   * Monday,Thursday
   */
  weeklyPeriod?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'duration',
      enable: 'enable',
      maintenanceTime: 'maintenance_time',
      recurrence: 'recurrence',
      weeklyPeriod: 'weekly_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      enable: 'boolean',
      maintenanceTime: 'string',
      recurrence: 'string',
      weeklyPeriod: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


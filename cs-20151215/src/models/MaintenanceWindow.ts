// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The duration of the cluster maintenance window. 
   * 
   * Valid values: 1 to 24. 
   * 
   * Unit: hours.
   * 
   * Default value: 3.
   * 
   * @example
   * 3h
   */
  duration?: string;
  /**
   * @remarks
   * Specifies whether to enable the cluster maintenance window. Valid values:
   * 
   * *   `true`: enables the cluster maintenance window.
   * *   `false`: disables the cluster maintenance window.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The start time of the cluster maintenance window. The value follows a standard time format in Golang. Example: 15:04:05Z.
   * 
   * @example
   * 03:00:00Z
   */
  maintenanceTime?: string;
  /**
   * @remarks
   * Defines a maintenance window recurrence rule by using the RFC5545 recurrence rule. Currently, only FREQ=WEEKLY is supported, and you cannot specify COUNT or UNTIL.
   * 
   * @example
   * FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU
   */
  recurrence?: string;
  /**
   * @remarks
   * The day of the week when maintenance is performed. Separate multiple days with commas (,). 
   * 
   * Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
   * 
   * Default value: `Thursday`.
   * 
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


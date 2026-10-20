// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaintenanceWindowExclusions extends $dara.Model {
  /**
   * @remarks
   * The description of the exclusion. The description can be up to 128 characters in length and does not support 4-byte characters such as emojis.
   * 
   * @example
   * No changes are allowed during the change freeze period
   */
  description?: string;
  /**
   * @remarks
   * The end time of the exclusion. The time must be in the RFC 3339 standard format, later than the start_time, and later than the current time. Maximum duration for a single exclusion: 30 days for NoOperations, NoUpgrades, and NoCVEPatch, and 180 days for NoMinorUpgrades.
   * 
   * @example
   * 2026-11-15T00:00:00+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the exclusion. The name must be 1 to 63 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with an uppercase or lowercase letter, a Chinese character, or a digit. The name must be unique within the same maintenance window. If you do not specify this parameter, a default name in the format of exclusion-{random string} is generated.
   * 
   * @example
   * exclusion-holiday
   */
  name?: string;
  /**
   * @remarks
   * The scope of the exclusion, which specifies the proactive O&M types that are prohibited during this time period. Valid values (case-sensitive):
   * - NoOperations: Prohibits all proactive O&M operations, including cluster upgrades, component upgrades, CVE patching, and OS image updates.
   * - NoUpgrades: Prohibits cluster upgrades and component upgrades, but still allows CVE patching and responses to scheduled ECS events.
   * - NoMinorUpgrades: Prohibits only minor version upgrades for clusters, but still allows patch upgrades, component upgrades, and CVE patching.
   * - NoCVEPatch: Prohibits automatic CVE patching.
   * 
   * @example
   * NoOperations
   */
  scope?: string;
  /**
   * @remarks
   * The start time of the exclusion. The time must be in the RFC 3339 standard format and use the same time zone offset as the end_time and maintenance_time.
   * 
   * @example
   * 2026-11-01T00:00:00+08:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      endTime: 'end_time',
      name: 'name',
      scope: 'scope',
      startTime: 'start_time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      endTime: 'string',
      name: 'string',
      scope: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaintenanceWindow extends $dara.Model {
  /**
   * @remarks
   * The maintenance duration. Valid values: 1 to 24. Unit: hours.
   * 
   * Default value: 3h.
   * 
   * @example
   * 3h
   */
  duration?: string;
  /**
   * @remarks
   * Specifies whether to enable the maintenance window. Valid values:
   * - `true`: Enables the maintenance window.
   * - `false`: Does not enable the maintenance window.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The list of exclusions for the maintenance window. A maximum of 10 exclusions are supported. Exclusions take precedence over the maintenance window. If an active exclusion covers an O&M type, the O&M operation is not performed even if the current time is within the maintenance window. If multiple exclusions are active at the same time, the union of the exclusions is applied. The total number of NoOperations and NoUpgrades exclusions cannot exceed 3. Only one-time periods are supported. Periodic configurations are not supported.
   */
  exclusions?: MaintenanceWindowExclusions[];
  /**
   * @remarks
   * The start time of the maintenance window. The time must be in the RFC 3339 standard format.
   * 
   * @example
   * 2020-10-15T12:31:00.000+08:00
   */
  maintenanceTime?: string;
  /**
   * @remarks
   * The recurrence rule for the maintenance window, defined by using the RFC 5545 Recurrence Rule syntax. Only FREQ=WEEKLY is supported. COUNT and UNTIL are not supported.
   * 
   * @example
   * FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU
   */
  recurrence?: string;
  /**
   * @remarks
   * The weekly maintenance period. Separate multiple values with commas (,). Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
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
      exclusions: 'exclusions',
      maintenanceTime: 'maintenance_time',
      recurrence: 'recurrence',
      weeklyPeriod: 'weekly_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      enable: 'boolean',
      exclusions: { 'type': 'array', 'itemType': MaintenanceWindowExclusions },
      maintenanceTime: 'string',
      recurrence: 'string',
      weeklyPeriod: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exclusions)) {
      $dara.Model.validateArray(this.exclusions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeActiveOperationMaintainConfResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * The time when the O\\&M task was created. The time follows the ISO 8601 standard in the *yyyy-mm-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-08T02:23:13Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The days on which the O\\&M task is executed every week.
   * 
   * @example
   * 0
   */
  cycleTime?: string;
  /**
   * @remarks
   * The unit of the O\\&M task cycle. Valid values:
   * 
   * *   Month
   * *   Week
   * 
   * @example
   * Month
   */
  cycleType?: string;
  /**
   * @remarks
   * The end time of the maintenance window.
   * 
   * @example
   * 20:00:00Z
   */
  maintainEndTime?: string;
  /**
   * @remarks
   * The start time of the maintenance window.
   * 
   * @example
   * 18:00:00Z
   */
  maintainStartTime?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 2023-05-12T12:34:40Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the configuration takes effect. Valid values:
   * 
   * *   1: yes.
   * *   2: no.
   * 
   * @example
   * 2
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      cycleTime: 'CycleTime',
      cycleType: 'CycleType',
      maintainEndTime: 'MaintainEndTime',
      maintainStartTime: 'MaintainStartTime',
      modifiedTime: 'ModifiedTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cycleTime: 'string',
      cycleType: 'string',
      maintainEndTime: 'string',
      maintainStartTime: 'string',
      modifiedTime: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


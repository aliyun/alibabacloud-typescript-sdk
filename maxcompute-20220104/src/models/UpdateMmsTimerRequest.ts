// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMmsTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The scheduling type of the scheduled task.
   * 
   * @example
   * Daily
   */
  scheduleType?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is stopped.
   */
  stopped?: boolean;
  /**
   * @remarks
   * The tables to exclude when type is set to Database.
   */
  tableBlackList?: string[];
  /**
   * @remarks
   * The tables to migrate when type is set to Database.
   */
  tableWhiteList?: string[];
  /**
   * @remarks
   * The scheduling time of the scheduled task. If scheduleType is set to Daily, the value is in the HH:MM format. If scheduleType is set to Hourly, the value is in the MM format.
   * 
   * @example
   * 2025-09-20
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      scheduleType: 'scheduleType',
      stopped: 'stopped',
      tableBlackList: 'tableBlackList',
      tableWhiteList: 'tableWhiteList',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleType: 'string',
      stopped: 'boolean',
      tableBlackList: { 'type': 'array', 'itemType': 'string' },
      tableWhiteList: { 'type': 'array', 'itemType': 'string' },
      value: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tableBlackList)) {
      $dara.Model.validateArray(this.tableBlackList);
    }
    if(Array.isArray(this.tableWhiteList)) {
      $dara.Model.validateArray(this.tableWhiteList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


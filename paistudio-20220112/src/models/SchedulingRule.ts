// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SchedulingRule extends $dara.Model {
  /**
   * @remarks
   * The cron tab. Only the minute, hour, day, month, and week fields are currently supported. Second-level configurations are discarded.
   * 
   * @example
   * 0 0 * * 7
   * 
   * **if can be null:**
   * true
   */
  cronTab?: string;
  /**
   * @remarks
   * The stop time of the task.
   * 
   * @example
   * 2025-06-22T00:00:00Z
   * 
   * **if can be null:**
   * true
   */
  endAt?: string;
  /**
   * @remarks
   * Specifies whether the task is executed only once.
   * 
   * **if can be null:**
   * true
   */
  executeOnce?: boolean;
  /**
   * @remarks
   * The start time of the effective period for the node.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   * 
   * **if can be null:**
   * true
   */
  startAt?: string;
  static names(): { [key: string]: string } {
    return {
      cronTab: 'CronTab',
      endAt: 'EndAt',
      executeOnce: 'ExecuteOnce',
      startAt: 'StartAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronTab: 'string',
      endAt: 'string',
      executeOnce: 'boolean',
      startAt: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


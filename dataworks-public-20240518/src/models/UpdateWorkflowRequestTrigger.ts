// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkflowRequestTrigger extends $dara.Model {
  /**
   * @remarks
   * The CRON expression. This parameter takes effect only if the Type parameter is set to Scheduler.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the time range during which the workflow is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler. The value of this parameter is in the `yyyy-mm-dd hh:mm:ss` format.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The start time of the time range during which the workflow is periodically scheduled. This parameter takes effect only if the Type parameter is set to Scheduler. The value of this parameter is in the `yyyy-mm-dd hh:mm:ss` format.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The trigger type. Valid values:
   * 
   * *   Scheduler: scheduling cycle-based trigger
   * *   Manual: manual trigger
   * 
   * This parameter is required.
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      startTime: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


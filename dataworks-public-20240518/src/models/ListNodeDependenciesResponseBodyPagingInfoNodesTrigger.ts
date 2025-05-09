// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesResponseBodyPagingInfoNodesTrigger extends $dara.Model {
  /**
   * @remarks
   * The CRON expression for scheduling.
   * 
   * @example
   * 00 00 00 * * ?
   */
  cron?: string;
  /**
   * @remarks
   * The end time of the validity period of the scheduling. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 9999-01-01 00:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The trigger ID.
   * 
   * @example
   * 543680677872062XXXX
   */
  id?: number;
  /**
   * @remarks
   * The start time of the validity period of the scheduling. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 1970-01-01 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The time zone.
   * 
   * @example
   * Asia/Shanghai
   */
  timezone?: string;
  /**
   * @remarks
   * The type of the trigger.
   * 
   * Valid values:
   * 
   * *   Scheduler
   * *   Manual
   * *   Streaming
   * 
   * @example
   * Scheduler
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cron: 'Cron',
      endTime: 'EndTime',
      id: 'Id',
      startTime: 'StartTime',
      timezone: 'Timezone',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      endTime: 'string',
      id: 'number',
      startTime: 'string',
      timezone: 'string',
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


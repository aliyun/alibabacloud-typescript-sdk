// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11588
   */
  DIJobId?: number;
  /**
   * @remarks
   * The end of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1717971005
   */
  endTime?: number;
  /**
   * @remarks
   * The type of event that you want to query. Valid values: Failover, Alarm, and DDL.
   * 
   * This parameter is required.
   * 
   * @example
   * Alarm
   */
  eventType?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The beginning of the time range to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1716971005
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      endTime: 'EndTime',
      eventType: 'EventType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      endTime: 'number',
      eventType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


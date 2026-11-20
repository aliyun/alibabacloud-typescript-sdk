// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The event name filter.
   * 
   * @example
   * COLD_UPGRADE
   */
  eventName?: string;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order of event name.
   * 
   * @example
   * true
   */
  eventNameDesc?: boolean;
  /**
   * @remarks
   * The event type filter.
   * 
   * @example
   * SYSTEM_MAINTENANCE
   */
  eventType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * hgpost-cn-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 50. Maximum value: 100.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to sort the results in descending order of scheduled time.
   * 
   * @example
   * true
   */
  scheduleTimeDesc?: boolean;
  /**
   * @remarks
   * The state filter.
   * 
   * @example
   * success
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'eventName',
      eventNameDesc: 'eventNameDesc',
      eventType: 'eventType',
      instanceId: 'instanceId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      scheduleTimeDesc: 'scheduleTimeDesc',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventNameDesc: 'boolean',
      eventType: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scheduleTimeDesc: 'boolean',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


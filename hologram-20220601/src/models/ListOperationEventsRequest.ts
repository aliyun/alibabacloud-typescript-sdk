// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationEventsRequest extends $dara.Model {
  /**
   * @example
   * COLD_UPGRADE
   */
  eventName?: string;
  /**
   * @example
   * true
   */
  eventNameDesc?: boolean;
  /**
   * @example
   * SYSTEM_MAINTENANCE
   */
  eventType?: string;
  /**
   * @example
   * hgpost-cn-xxx
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  scheduleTimeDesc?: boolean;
  /**
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


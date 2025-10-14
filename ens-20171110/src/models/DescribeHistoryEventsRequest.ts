// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The levels of the event-triggered alerts.
   */
  eventLevels?: string[];
  /**
   * @remarks
   * Event status list.
   */
  eventStatus?: string[];
  /**
   * @remarks
   * The list of event types.
   * 
   * This parameter is required.
   */
  eventTypes?: string[];
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  resourceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      eventLevels: 'EventLevels',
      eventStatus: 'EventStatus',
      eventTypes: 'EventTypes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceIds: 'ResourceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventLevels: { 'type': 'array', 'itemType': 'string' },
      eventStatus: { 'type': 'array', 'itemType': 'string' },
      eventTypes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.eventLevels)) {
      $dara.Model.validateArray(this.eventLevels);
    }
    if(Array.isArray(this.eventStatus)) {
      $dara.Model.validateArray(this.eventStatus);
    }
    if(Array.isArray(this.eventTypes)) {
      $dara.Model.validateArray(this.eventTypes);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


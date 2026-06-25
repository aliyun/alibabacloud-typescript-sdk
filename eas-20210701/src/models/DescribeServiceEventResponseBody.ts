// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeServiceEventResponseBodyEvents extends $dara.Model {
  /**
   * @remarks
   * The event message, which is a JSON-formatted string.
   * 
   * @example
   * {\\"versionId\\":1,\\"message\\":\\"Stage scale complete\\",\\"availableInstance\\":1,\\"unavailableInstance\\":0}
   */
  message?: string;
  /**
   * @remarks
   * The reason for the event, which indicates a change in the service status.
   * 
   * @example
   * Updating
   */
  reason?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Service: a service.
   * 
   * - Pod: a service instance.
   * 
   * @example
   * Service
   */
  resource?: string;
  /**
   * @remarks
   * The time when the event occurred, in UTC.
   * 
   * @example
   * 2022-04-09 06:30:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * - Normal: a normal event.
   * 
   * - Warning: a warning event.
   * 
   * @example
   * Normal
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      resource: 'Resource',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      resource: 'string',
      time: 'string',
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

export class DescribeServiceEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of events.
   */
  events?: DescribeServiceEventResponseBodyEvents[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D491C94-6239-5318-B4B4-799D859***
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of events.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 12
   */
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeServiceEventResponseBodyEvents },
      pageNum: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStackEventsResponseBodyEvents } from "./ListStackEventsResponseBodyEvents";


export class ListStackEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: ListStackEventsResponseBodyEvents[];
  /**
   * @remarks
   * The page number of the returned page.\\
   * Pages start from page 1.\\
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.\\
   * Maximum value: 50.\\
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B288A0BE-D927-4888-B0F7-B35EF84B6E6
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned events.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': ListStackEventsResponseBodyEvents },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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


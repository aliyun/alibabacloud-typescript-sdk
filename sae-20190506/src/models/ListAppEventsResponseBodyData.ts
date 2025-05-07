// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAppEventsResponseBodyDataAppEventEntity } from "./ListAppEventsResponseBodyDataAppEventEntity";


export class ListAppEventsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  appEventEntity?: ListAppEventsResponseBodyDataAppEventEntity[];
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of events that occurred in an application.
   * 
   * @example
   * 20
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      appEventEntity: 'AppEventEntity',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appEventEntity: { 'type': 'array', 'itemType': ListAppEventsResponseBodyDataAppEventEntity },
      currentPage: 'number',
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appEventEntity)) {
      $dara.Model.validateArray(this.appEventEntity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


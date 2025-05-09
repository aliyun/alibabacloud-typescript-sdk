// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIJobEventsResponseBodyPagingInfoDIJobEvent } from "./ListDijobEventsResponseBodyPagingInfoDijobEvent";


export class ListDIJobEventsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The events returned. The value of this parameter is an array.
   */
  DIJobEvent?: ListDIJobEventsResponseBodyPagingInfoDIJobEvent[];
  /**
   * @remarks
   * The page number.
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
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobEvent: 'DIJobEvent',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobEvent: { 'type': 'array', 'itemType': ListDIJobEventsResponseBodyPagingInfoDIJobEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.DIJobEvent)) {
      $dara.Model.validateArray(this.DIJobEvent);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


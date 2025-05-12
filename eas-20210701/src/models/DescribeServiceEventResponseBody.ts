// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceEventResponseBodyEvents } from "./DescribeServiceEventResponseBodyEvents";


export class DescribeServiceEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The events.
   */
  events?: DescribeServiceEventResponseBodyEvents[];
  /**
   * @remarks
   * The page number.
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
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
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


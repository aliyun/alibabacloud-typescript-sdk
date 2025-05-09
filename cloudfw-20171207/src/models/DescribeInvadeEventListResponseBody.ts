// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInvadeEventListResponseBodyEventList } from "./DescribeInvadeEventListResponseBodyEventList";
import { DescribeInvadeEventListResponseBodyPageInfo } from "./DescribeInvadeEventListResponseBodyPageInfo";


export class DescribeInvadeEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of breach awareness events.
   */
  eventList?: DescribeInvadeEventListResponseBodyEventList[];
  /**
   * @remarks
   * The percentage of high-risk events.
   * 
   * @example
   * 40
   */
  highLevelPercent?: number;
  /**
   * @remarks
   * The percentage of low-risk events.
   * 
   * @example
   * 20
   */
  lowLevelPercent?: number;
  /**
   * @remarks
   * The percentage of medium-risk events.
   * 
   * @example
   * 40
   */
  middleLevelPercent?: number;
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInvadeEventListResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F0F82705-CFC7-5F83-86C8-A063892F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      highLevelPercent: 'HighLevelPercent',
      lowLevelPercent: 'LowLevelPercent',
      middleLevelPercent: 'MiddleLevelPercent',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribeInvadeEventListResponseBodyEventList },
      highLevelPercent: 'number',
      lowLevelPercent: 'number',
      middleLevelPercent: 'number',
      pageInfo: DescribeInvadeEventListResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


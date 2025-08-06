// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayEventListResponseBodyEventList extends $dara.Model {
  description?: string;
  duration?: number;
  eventName?: string;
  time?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      duration: 'Duration',
      eventName: 'EventName',
      time: 'Time',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      duration: 'number',
      eventName: 'string',
      time: 'number',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayEventListResponseBody extends $dara.Model {
  eventList?: DescribePlayEventListResponseBodyEventList[];
  pageNo?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: { 'type': 'array', 'itemType': DescribePlayEventListResponseBodyEventList },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.eventList)) {
      $dara.Model.validateArray(this.eventList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


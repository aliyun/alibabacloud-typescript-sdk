// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSubscriptionInitializeProgressResponseBodyItems extends $dara.Model {
  finishTime?: string;
  progress?: string;
  status?: string;
  subscriptionId?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      progress: 'Progress',
      status: 'Status',
      subscriptionId: 'SubscriptionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'string',
      progress: 'string',
      status: 'string',
      subscriptionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSubscriptionInitializeProgressResponseBody extends $dara.Model {
  items?: DescribeSubscriptionInitializeProgressResponseBodyItems[];
  pageNumber?: number;
  pageRecordCount?: number;
  requestId?: string;
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSubscriptionInitializeProgressResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


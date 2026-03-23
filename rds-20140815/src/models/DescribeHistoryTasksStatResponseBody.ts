// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHistoryTasksStatResponseBodyItems extends $dara.Model {
  status?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHistoryTasksStatResponseBody extends $dara.Model {
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeHistoryTasksStatResponseBodyItems },
      requestId: 'string',
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


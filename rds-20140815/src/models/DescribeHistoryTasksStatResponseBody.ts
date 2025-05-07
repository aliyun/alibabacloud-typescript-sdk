// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryTasksStatResponseBodyItems } from "./DescribeHistoryTasksStatResponseBodyItems";


export class DescribeHistoryTasksStatResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried tasks.
   */
  items?: DescribeHistoryTasksStatResponseBodyItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
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


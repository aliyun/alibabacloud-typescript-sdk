// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTableDetailResponseBodyItems } from "./DescribeTableDetailResponseBodyItems";


export class DescribeTableDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The average number of rows in partitions.
   * 
   * @example
   * 0
   */
  avgSize?: number;
  /**
   * @remarks
   * The list of partitions.
   */
  items?: DescribeTableDetailResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      avgSize: 'AvgSize',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgSize: 'number',
      items: DescribeTableDetailResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceIPArrayListResponseBodyItems } from "./DescribeDbinstanceIparrayListResponseBodyItems";


export class DescribeDBInstanceIPArrayListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details about the IP address whitelists.
   */
  items?: DescribeDBInstanceIPArrayListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2B6AF71-DC32-4055-B477-43B348798D10
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
      items: DescribeDBInstanceIPArrayListResponseBodyItems,
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


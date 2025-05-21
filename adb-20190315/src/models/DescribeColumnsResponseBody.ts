// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeColumnsResponseBodyItems } from "./DescribeColumnsResponseBodyItems";


export class DescribeColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried columns.
   */
  items?: DescribeColumnsResponseBodyItems;
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
      items: DescribeColumnsResponseBodyItems,
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


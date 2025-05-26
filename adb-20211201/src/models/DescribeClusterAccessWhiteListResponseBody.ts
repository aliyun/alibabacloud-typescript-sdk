// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterAccessWhiteListResponseBodyItems } from "./DescribeClusterAccessWhiteListResponseBodyItems";


export class DescribeClusterAccessWhiteListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried IP address whitelists.
   */
  items?: DescribeClusterAccessWhiteListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 370D09FD-442A-5225-AAD3-7362CAE39177
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
      items: DescribeClusterAccessWhiteListResponseBodyItems,
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


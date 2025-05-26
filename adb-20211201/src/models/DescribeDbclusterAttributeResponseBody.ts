// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyItems } from "./DescribeDbclusterAttributeResponseBodyItems";


export class DescribeDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster.
   */
  items?: DescribeDBClusterAttributeResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
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
      items: DescribeDBClusterAttributeResponseBodyItems,
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


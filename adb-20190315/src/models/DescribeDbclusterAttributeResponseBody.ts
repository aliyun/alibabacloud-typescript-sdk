// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterAttributeResponseBodyItems } from "./DescribeDbclusterAttributeResponseBodyItems";


export class DescribeDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried cluster information.
   */
  items?: DescribeDBClusterAttributeResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2895BB82-B2C1-408E-AA73-DB8D59******
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


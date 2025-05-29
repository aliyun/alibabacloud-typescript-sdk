// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceAttributeResponseBodyItems } from "./DescribeDbinstanceAttributeResponseBodyItems";


export class DescribeDBInstanceAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried instance.
   */
  items?: DescribeDBInstanceAttributeResponseBodyItems;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 5E6EDEB8-D73E-5F2D-B948-86C8AEB05A68
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
      items: DescribeDBInstanceAttributeResponseBodyItems,
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


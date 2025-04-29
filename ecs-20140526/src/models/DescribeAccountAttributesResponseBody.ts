// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAttributesResponseBodyAccountAttributeItems } from "./DescribeAccountAttributesResponseBodyAccountAttributeItems";


export class DescribeAccountAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about account privileges in the specified region.
   */
  accountAttributeItems?: DescribeAccountAttributesResponseBodyAccountAttributeItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8CE45CD5-31FB-47C2-959D-CA8144CE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountAttributeItems: 'AccountAttributeItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAttributeItems: DescribeAccountAttributesResponseBodyAccountAttributeItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountAttributeItems && typeof (this.accountAttributeItems as any).validate === 'function') {
      (this.accountAttributeItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTagsResponseBodyItems } from "./DescribeTagsResponseBodyItems";


export class DescribeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tags that are added to the instance.
   */
  items?: DescribeTagsResponseBodyItems;
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
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeTagsResponseBodyItems,
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


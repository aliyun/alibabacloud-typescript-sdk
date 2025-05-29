// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceIPArrayListResponseBodyItems } from "./DescribeDbinstanceIparrayListResponseBodyItems";


export class DescribeDBInstanceIPArrayListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried IP address whitelists.
   */
  items?: DescribeDBInstanceIPArrayListResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CB7AA0BF-BE41-480E-A3DC-C97BF85A391B
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


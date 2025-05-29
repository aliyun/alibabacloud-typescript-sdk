// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWaitingSQLInfoResponseBodyItems } from "./DescribeWaitingSqlinfoResponseBodyItems";


export class DescribeWaitingSQLInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test
   */
  database?: string;
  /**
   * @remarks
   * The queried lock-waiting query.
   */
  items?: DescribeWaitingSQLInfoResponseBodyItems[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      database: 'Database',
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      database: 'string',
      items: { 'type': 'array', 'itemType': DescribeWaitingSQLInfoResponseBodyItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstancesAsCsvResponseBodyItems } from "./DescribeDbinstancesAsCsvResponseBodyItems";


export class DescribeDBInstancesAsCsvResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the fields in **DBInstanceAttribute**.
   */
  items?: DescribeDBInstancesAsCsvResponseBodyItems;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A444291****
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
      items: DescribeDBInstancesAsCsvResponseBodyItems,
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

